// ===== TRANSLATIONS =====
const translations = {
  en: {
    nav_about: "About Me",
    nav_ventures: "My Ventures",
    nav_chat: "Online Chat",
    nav_contact: "Contact Me",
    hero_eyebrow: "AI Specialist · Financial Systems Developer · Economic Activist",
    hero_tagline: "The intersection of technology, financial markets & trade.",
    hero_cta: "Discover More",
    video_placeholder: "My Story — Coming Soon",
    unmute: "Tap to unmute",
    about_title: "About Me",
    about_body: "I am Nikan Ghafari — an AI specialist, developer of intelligent financial systems, and economic activist in Iran's saffron sector. The main core of my activities is focused on designing AI-powered tools, building modern agents, financial trading, and supplying premium Qain saffron.",
    ventures_title: "My Ventures",
    tag_saffron: "Premium Supply",
    desc_saffron: "Premium saffron supplier delivering the finest quality with exceptionally high coloring strength, accompanied by lab certification.",
    tag_dietai: "AI Tool",
    desc_dietai: "Developer of an AI-powered diet & nutrition planning tool. Smart, personalized, and science-driven dietary guidance.",
    try_tool: "Try Tool — Soon",
    chat_title: "Online Chat",
    chat_welcome: "👋 Welcome! Please enter your name to start chatting.",
    name_placeholder: "Your name...",
    start_chat: "Start Chat",
    msg_placeholder: "Type a message...",
    contact_title: "Contact Me",
    c_phone_wa: "Phone & WhatsApp",
    c_mgmt: "Management",
    c_saffron: "Saffron Section",
    c_dietai: "DietAI Support (Telegram)",
    c_bale: "Bale Support",
    c_eitaa: "Eitaa Support",
    footer_rights: "All rights reserved."
  },
  fa: {
    nav_about: "درباره من",
    nav_ventures: "فعالیت‌های من",
    nav_chat: "چت آنلاین",
    nav_contact: "تماس با من",
    hero_eyebrow: "متخصص هوش مصنوعی · توسعه‌دهنده سیستم‌های هوشمند مالی · فعال اقتصادی",
    hero_tagline: "تلاقی فناوری، بازارهای مالی و تجارت.",
    hero_cta: "بیشتر بدانید",
    video_placeholder: "داستان من — به زودی",
    unmute: "برای صدا لمس کنید",
    about_title: "درباره من",
    about_body: "من متخصص هوش مصنوعی، توسعه‌دهنده سیستم‌های هوشمند مالی و فعال اقتصادی در حوزه طلای سرخ ایران هستم. محور اصلی فعالیت‌هایم بر طراحی ابزارهای مبتنی بر هوش مصنوعی، ساخت ایجنت‌های نوین، معامله‌گری در بازارهای مالی، و همچنین تأمین و عرضه زعفران درجه‌یک قائنات استوار است.",
    ventures_title: "فعالیت‌های من",
    tag_saffron: "عرضه درجه یک",
    desc_saffron: "عرضه‌کننده زعفران درجه یک با بالاترین کیفیت، قدرت رنگدهی بسیار بالا همراه با برگه آزمایشگاه.",
    tag_dietai: "ابزار هوش مصنوعی",
    desc_dietai: "توسعه‌دهنده ابزار هوش مصنوعی برنامه‌ریزی رژیم و تغذیه. راهنمایی هوشمند، شخصی‌سازی شده و مبتنی بر علم.",
    try_tool: "امتحان کنید — به زودی",
    chat_title: "چت آنلاین",
    chat_welcome: "👋 خوش آمدید! لطفاً نام خود را وارد کنید.",
    name_placeholder: "نام شما...",
    start_chat: "شروع چت",
    msg_placeholder: "پیام خود را بنویسید...",
    contact_title: "ارتباط با من",
    c_phone_wa: "تلفن و واتساپ",
    c_mgmt: "مدیریت",
    c_saffron: "بخش زعفران",
    c_dietai: "پشتیبانی ابزار رژیم غذایی تلگرام",
    c_bale: "پشتیبانی بله",
    c_eitaa: "پشتیبانی ایتا",
    footer_rights: "تمامی حقوق محفوظ است."
  },
  ar: {
    nav_about: "عني",
    nav_ventures: "فعالياتي",
    nav_chat: "الدردشة المباشرة",
    nav_contact: "تواصل معي",
    hero_eyebrow: "متخصص ذكاء اصطناعي · مطور أنظمة مالية ذكية · ناشط اقتصادي",
    hero_tagline: "ملتقى التكنولوجيا، الأسواق المالية والتجارة.",
    hero_cta: "اكتشف المزيد",
    video_placeholder: "قصتي — قريباً",
    unmute: "اضغط لتشغيل الصوت",
    about_title: "عني",
    about_body: "أنا نيكان غفاري — متخصص في الذكاء الاصطناعي، ومطور للأنظمة المالية الذكية، وناشط اقتصادي في مجال الذهب الأحمر في إيران. يرتكز المحور الأساسي لأنشطتي على تصميم الأدوات القائمة على الذكاء الاصطناعي، وبناء الوكلاء المعرفيين الحديثين، والتداول المالي، وتوريد زعفران قائنات الفاخر.",
    ventures_title: "فعالياتي",
    tag_saffron: "توريد فاخر",
    desc_saffron: "مورد زعفران نخب أول يقدم أجود جودة مع قوة تلوين عالية جداً مصحوبة بشهادة مخبرية.",
    tag_dietai: "أداة ذكاء اصطناعي",
    desc_dietai: "مطور أداة ذكاء اصطناعي لتخطيط الحمية والتغذية. إرشاد غذائي ذكي ومخصص ومبني على العلم.",
    try_tool: "جرب الأداة — قريباً",
    chat_title: "الدردشة المباشرة",
    chat_welcome: "👋 مرحباً! الرجاء إدخال اسمك لبدء المحادثة.",
    name_placeholder: "اسمك...",
    start_chat: "ابدأ الدردشة",
    msg_placeholder: "اكتب رسالتك...",
    contact_title: "تواصل معي",
    c_phone_wa: "الهاتف وواتساب",
    c_mgmt: "الإدارة",
    c_saffron: "قسم الزعفران",
    c_dietai: "دعم أداة النظام الغذائي (تلغرام)",
    c_bale: "دعم بله",
    c_eitaa: "دعم إيتا",
    footer_rights: "جميع الحقوق محفوظة."
  }
};

let currentLang = localStorage.getItem('ng_lang') || 'fa';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('ng_lang', lang);
  applyLang();
  const dropdown = document.getElementById('langDropdown');
  if (dropdown) dropdown.classList.remove('open');
}

function applyLang() {
  const t = translations[currentLang];
  const dir = currentLang === 'fa' || currentLang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang;
  
  // Apply direction to body and html safely
  document.body.dir = dir;
  const htmlTag = document.querySelector('html');
  if (htmlTag) htmlTag.dir = dir;

  const labels = { en: 'EN', fa: 'FA', ar: 'AR' };
  const langLabelEl = document.querySelector('.lang-label');
  if (langLabelEl) langLabelEl.textContent = labels[currentLang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t && key in t) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t && key in t) {
      el.placeholder = t[key];
    }
  });
}

document.addEventListener('DOMContentLoaded', () => { applyLang(); });
