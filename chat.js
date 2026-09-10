// ===== SUPABASE & CHAT CONFIGURATION =====
const SUPABASE_URL = 'https://pjomrxskxppgqtfjpwuhg.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_ui-UWIpxQ7Ssx8C6MBub2w_vlfDGLvs';

// اتصال به دیتابیس Supabase
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let chatUserName = '';
let pendingMedia = null;
let pendingMediaType = null;
let pendingMediaFile = null;

function startChat() {
  const nameInput = document.getElementById('chatNameInput');
  const name = nameInput.value.trim();
  if (!name) {
    nameInput.style.borderColor = 'var(--gold)';
    nameInput.focus();
    return;
  }
  chatUserName = name;

  // مخفی کردن فرم نام و نمایش کادر چت
  document.getElementById('chatNamePrompt').style.display = 'none';
  document.getElementById('chatInputArea').style.display = 'block';

  addSystemMsg(`✅ خوش آمدید ${name}! می‌توانید پیام خود را ارسال کنید.`);
  document.getElementById('chatInput').focus();

  // شروع دریافت پیام‌ها به صورت آنی
  listenToMessages();
}

function addSystemMsg(text) {
  const msgs = document.getElementById('chatMessages');
  if (!msgs) return;
  const div = document.createElement('div');
  div.className = 'chat-msg system';
  div.textContent = text;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function addUserMsg(sender, text) {
  const msgs = document.getElementById('chatMessages');
  if (!msgs) return;
  const div = document.createElement('div');
  div.className = sender === 'مدیر' ? 'chat-msg admin' : 'chat-msg user';
  div.textContent = `${sender}: ${text}`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

// ارسال پیام به دیتابیس Supabase (تا هم شما و هم کاربر ببینید)
async function sendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();

  if (!text) return;

  try {
    const { error } = await supabaseClient
      .from('messages')
      .insert([{ sender: chatUserName, message: text }]);

    if (error) throw error;

    input.value = '';
  } catch (e) {
    console.error(e);
    addSystemMsg('⚠ خطا در ارسال پیام. لطفاً دوباره تلاش کنید.');
  }
}

// دریافت آنی پیام‌ها از دیتابیس (Real-time)
function listenToMessages() {
  const msgsBox = document.getElementById('chatMessages');
  
  // بارگذاری پیام‌های قبلی
  supabaseClient
    .from('messages')
    .select('*')
    .order('created_at', { ascending: true })
    .then(({ data, error }) => {
      if (error) return;
      msgsBox.innerHTML = '';
      data.forEach(msg => {
        addUserMsg(msg.sender, msg.message);
      });
    });

    // گوش دادن به پیام‌های جدید به صورت لحظه‌ای
    supabaseClient
      .channel('public:messages')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, payload => {
        const newMsg = payload.new;
        addUserMsg(newMsg.sender, newMsg.message);
      })
      .subscribe();
}

// دکمه اینتر برای ارسال
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('chatInput');
  if (input) {
    input.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  }
});
