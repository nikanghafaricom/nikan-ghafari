// ===== CHAT WITH TELEGRAM BOT =====
// Replace these with your actual values:
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';
const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE';

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

  // Hide name prompt, show input area
  document.getElementById('chatNamePrompt').style.display = 'none';
  document.getElementById('chatInputArea').style.display = 'block';

  // Add welcome message in chat
  const t = translations[currentLang] || translations['en'];
  addSystemMsg(`✅ Hello ${name}! You can now send your message.`);

  // Focus input
  document.getElementById('chatInput').focus();

  // Notify Telegram
  sendToTelegram(`🔔 New visitor started chat\n👤 Name: ${name}\n🌐 Lang: ${currentLang.toUpperCase()}`);
}

function addSystemMsg(text) {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-msg system';
  div.textContent = text;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function addUserMsg(text, mediaEl) {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-msg user';
  if (mediaEl) div.appendChild(mediaEl);
  if (text) div.appendChild(document.createTextNode(text));
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function addSentConfirm() {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-msg sent-confirm';
  div.textContent = '✓ Message sent';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

async function sendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();

  if (!text && !pendingMedia) return;

  // Show in chat
  let mediaEl = null;
  if (pendingMedia && pendingMediaType) {
    if (pendingMediaType.startsWith('image')) {
      mediaEl = document.createElement('img');
      mediaEl.src = pendingMedia;
      mediaEl.className = 'msg-media';
    } else if (pendingMediaType.startsWith('video')) {
      mediaEl = document.createElement('video');
      mediaEl.src = pendingMedia;
      mediaEl.className = 'msg-media';
      mediaEl.controls = true;
    }
  }

  addUserMsg(text, mediaEl);
  input.value = '';

  // Clear media preview
  document.getElementById('mediaPreview').innerHTML = '';

  // Send to Telegram
  try {
    if (pendingMediaFile) {
      await sendMediaToTelegram(pendingMediaFile, text);
    } else if (text) {
      await sendToTelegram(`💬 Message from ${chatUserName}:\n${text}`);
    }
    addSentConfirm();
  } catch (e) {
    addSystemMsg('⚠ Could not deliver message. Please try again.');
  }

  pendingMedia = null;
  pendingMediaType = null;
  pendingMediaFile = null;
}

function previewMedia(event) {
  const file = event.target.files[0];
  if (!file) return;

  pendingMediaFile = file;
  pendingMediaType = file.type;

  const reader = new FileReader();
  reader.onload = (e) => {
    pendingMedia = e.target.result;
    const preview = document.getElementById('mediaPreview');
    preview.innerHTML = '';
    if (file.type.startsWith('image')) {
      const img = document.createElement('img');
      img.src = pendingMedia;
      preview.appendChild(img);
    } else if (file.type.startsWith('video')) {
      const vid = document.createElement('video');
      vid.src = pendingMedia;
      vid.controls = true;
      preview.appendChild(vid);
    }
  };
  reader.readAsDataURL(file);
  event.target.value = '';
}

async function sendToTelegram(message) {
  if (TELEGRAM_BOT_TOKEN === 'YOUR_BOT_TOKEN_HERE') return; // Not configured yet
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'HTML'
    })
  });
}

async function sendMediaToTelegram(file, caption) {
  if (TELEGRAM_BOT_TOKEN === 'YOUR_BOT_TOKEN_HERE') return;
  const formData = new FormData();
  formData.append('chat_id', TELEGRAM_CHAT_ID);
  if (caption) formData.append('caption', `📎 From ${chatUserName}:\n${caption}`);

  let endpoint;
  if (file.type.startsWith('image')) {
    formData.append('photo', file);
    endpoint = 'sendPhoto';
  } else if (file.type.startsWith('video')) {
    formData.append('video', file);
    endpoint = 'sendVideo';
  } else {
    formData.append('document', file);
    endpoint = 'sendDocument';
  }

  await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/${endpoint}`, {
    method: 'POST',
    body: formData
  });
}
