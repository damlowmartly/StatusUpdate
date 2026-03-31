// ── Schedule Data ──────────────────────────────────────────────
const SCHEDULE = [
  {
    id: "body",
    start: 6, end: 7,
    title: "Body & Clarity",
    time: "06:00 – 07:00",
    why: "Light exercise, no phone. Lowers cortisol. Wakes the brain.",
    tags: [],
    skipWarning: "You skipped your morning movement. Without it, cortisol stays high all day — your focus will be foggier and anxiety higher. Just 10 minutes of stretching resets everything.",
    catMsg: "No stretch today? Your body is tight and your brain is foggy. Even 5 min matters! 🐾"
  },
  {
    id: "math",
    start: 7, end: 8.5,
    title: "Deep Study: Math & Physics",
    time: "07:00 – 08:30",
    why: "Logic peak. Best time for hard system thinking.",
    tags: ["math","physics","auto"],
    skipWarning: "You skipped Math & Physics. These subjects build the logical foundation for Automobile mechanics. Every day you skip, the gap grows wider. The engineers you want to compete with never skip.",
    catMsg: "No math today means you fall behind tomorrow. Math is the engine of everything. 📐"
  },
  {
    id: "chores",
    start: 8.5, end: 9.5,
    title: "Breakfast & Chores",
    time: "08:30 – 09:30",
    why: "Brain break. Manual tasks rest focus muscles.",
    tags: [],
    skipWarning: "Skipping rest blocks leads to burnout. Your brain needs recovery cycles just like muscles do.",
    catMsg: "Even champions eat breakfast. Fuel your brain! 🍳"
  },
  {
    id: "tesda",
    start: 9.5, end: 11.5,
    title: "TESDA & Career Growth",
    time: "09:30 – 11:30",
    why: "Action phase. Apply for courses, study modules.",
    tags: ["tesda"],
    skipWarning: "You skipped TESDA today. This is your bridge to a stable job. Every day without a certificate is a day your competitors get ahead. One module at a time builds a career.",
    catMsg: "No TESDA today? Your future job is waiting. Don't keep it waiting too long. 📋"
  },
  {
    id: "lunch",
    start: 11.5, end: 13,
    title: "Lunch & English Immersion",
    time: "11:30 – 01:00",
    why: "Eat thrifty. Watch English auto/physics tutorials.",
    tags: ["english","auto"],
    skipWarning: "You skipped English immersion. Language is your passport to international work. Without daily exposure, fluency fades. Global Automobile jobs require technical English.",
    catMsg: "English skipped = opportunity missed. The world speaks English. Speak back! 🌍"
  },
  {
    id: "sales",
    start: 13, end: 15.5,
    title: "Digital Product Sales",
    time: "01:00 – 03:30",
    why: "Output phase. Update listings, message customers, create assets.",
    tags: ["sales"],
    skipWarning: "You skipped Sales today. Money doesn't appear without action. Every listing not updated, every customer not messaged, is income you leave on the table.",
    catMsg: "No hustle today means no income tomorrow. Your future self is disappointed. 💸"
  },
  {
    id: "english",
    start: 15.5, end: 17,
    title: "English Writing & Grammar",
    time: "03:30 – 05:00",
    why: "Write problems & solutions in English. Fixes grammar and mindset.",
    tags: ["english"],
    skipWarning: "English writing skipped. Writing in English daily is what separates good speakers from great communicators. You can't get a high-paying job if you can't write a professional email.",
    catMsg: "No writing practice = no career upgrade. Write one sentence. Just one! ✍️"
  },
  {
    id: "walk",
    start: 17, end: 18,
    title: "Physical Movement",
    time: "05:00 – 06:00",
    why: "Quick walk/workout. Flushes afternoon brain fog.",
    tags: [],
    skipWarning: "You skipped your afternoon movement. This is what clears brain fog and resets your mood. Without it, your evening will feel heavier and sleep will be worse.",
    catMsg: "Stay still, stay stuck. Move your body, move your life. 🚶"
  },
  {
    id: "dinner",
    start: 18, end: 20,
    title: "Dinner & Reflection",
    time: "06:00 – 08:00",
    why: "Audit your Complaint Budget. Plan 3 wins for tomorrow.",
    tags: [],
    skipWarning: "No reflection means you'll repeat the same mistakes tomorrow. 5 minutes of review prevents 5 hours of wasted effort.",
    catMsg: "No reflection = no growth. What were your 3 wins today? 🏆"
  },
  {
    id: "wind",
    start: 20, end: 21.5,
    title: "Wind Down",
    time: "08:00 – 09:30",
    why: "No screens. Review notes. Brain consolidates memory during sleep.",
    tags: [],
    skipWarning: "Skipping wind-down means your brain stays in fight mode. Poor sleep destroys memory consolidation — everything you studied today gets stored worse.",
    catMsg: "Screens before sleep steal your memory. Rest your eyes. 😴"
  },
  {
    id: "sleep",
    start: 21.5, end: 30,
    title: "Sleep",
    time: "09:30 PM",
    why: "Neuroplasticity. Brain repairs itself and clears toxins.",
    tags: [],
    skipWarning: "You're awake past bedtime. Sleep deprivation reduces IQ by 20 points temporarily. Your study sessions tomorrow will be half as effective.",
    catMsg: "Sleep is not weakness. Sleep is when you actually get smarter. 🌙"
  }
];

// Tag → stat key map
const TAG_STAT = {
  english: "english",
  math:    "math",
  physics: "physics",
  auto:    "auto",
  tesda:   "tesda",
  sales:   "sales"
};

// Skip warnings per tag
const TAG_WARNINGS = {
  english: "Skipping English costs you fluency. Every missed day increases the gap. Top global auto technicians speak and write English.",
  math:    "Math is the foundation of Physics and Automobile engineering. Skipping math is like skipping leg day — everything suffers.",
  physics: "Physics explains HOW engines, brakes, and transmissions work. Without it, you only memorize steps, never understand why.",
  auto:    "Automobile knowledge is your career. Every skipped session keeps you one step below a technician who showed up.",
  tesda:   "TESDA certification is your proof of skill. No cert = no job upgrade. One module today beats zero modules ever.",
  sales:   "Every day without sales action is income lost forever. Your digital business dies without daily attention."
};

// ── State ────────────────────────────────────────────────────────
let stats   = JSON.parse(localStorage.getItem('rw_stats')  || '{}');
let done    = JSON.parse(localStorage.getItem('rw_done')   || '{}');
let speechOn = JSON.parse(localStorage.getItem('rw_speech') !== null ? localStorage.getItem('rw_speech') : 'true');

function saveStats()  { localStorage.setItem('rw_stats',  JSON.stringify(stats)); }
function saveDone()   { localStorage.setItem('rw_done',   JSON.stringify(done));  }
function saveSpeech() { localStorage.setItem('rw_speech', JSON.stringify(speechOn)); }

// Reset done every midnight
const todayKey = new Date().toDateString();
const lastKey  = localStorage.getItem('rw_lastday');
if (lastKey !== todayKey) {
  done = {};
  saveDone();
  localStorage.setItem('rw_lastday', todayKey);
}

// ── Speech ───────────────────────────────────────────────────────
function speak(text) {
  if (!speechOn) return;
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.95;
  u.pitch = 1.1;
  window.speechSynthesis.speak(u);
}

// ── Toast ────────────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 5000);
}

// ── Cat ──────────────────────────────────────────────────────────
const catMsgs = [
  "You are doing great. Keep going! 🐾",
  "One block at a time. You've got this.",
  "Consistency beats perfection every day.",
  "Small wins add up to big results. Trust the process.",
  "Every checkmark is proof you showed up.",
  "The version of you 6 months from now is watching. Don't let them down.",
  "Meow! I believe in you. ⭐"
];

let catMsgIndex = 0;
function showCatMsg(msg, mood) {
  const bubble = document.getElementById('catBubble');
  const face   = document.getElementById('catFace');
  const msgEl  = document.getElementById('catMsg');

  msgEl.textContent = msg || catMsgs[catMsgIndex % catMsgs.length];
  catMsgIndex++;

  bubble.classList.add('visible');
  face.classList.remove('happy','sad','talking');
  if (mood) face.classList.add(mood);
  face.classList.add('talking');

  speak(msg || catMsgs[(catMsgIndex - 1) % catMsgs.length]);

  clearTimeout(face._bubbleTimer);
  face._bubbleTimer = setTimeout(() => {
    bubble.classList.remove('visible');
    face.classList.remove('talking', 'happy', 'sad');
  }, 6000);
}

window.catSpeak = function () {
  showCatMsg(catMsgs[catMsgIndex % catMsgs.length], 'happy');
};

// ── Time helpers ─────────────────────────────────────────────────
function nowHours() {
  const n = new Date();
  return n.getHours() + n.getMinutes() / 60;
}

function currentBlock() {
  const h = nowHours();
  return SCHEDULE.find(b => h >= b.start && h < b.end) || null;
}

function isSkipped(block) {
  const h = nowHours();
  return h >= block.end && !done[block.id];
}

// ── Stat increment ────────────────────────────────────────────────
function bumpStat(tag) {
  if (!TAG_STAT[tag]) return;
  const key = TAG_STAT[tag];
  stats[key] = (stats[key] || 0) + 1;
  saveStats();
  renderStats();
  const el = document.getElementById('stat-' + key);
  if (el) {
    el.classList.remove('bump');
    void el.offsetWidth;
    el.classList.add('bump');
    setTimeout(() => el.classList.remove('bump'), 400);
  }
}

// ── Render Stats ─────────────────────────────────────────────────
function renderStats() {
  ['english','math','physics','auto','tesda','sales'].forEach(k => {
    const el = document.getElementById('val-' + k);
    if (el) el.textContent = stats[k] || 0;
  });
}

// ── Render Schedule ───────────────────────────────────────────────
function renderSchedule() {
  const container = document.getElementById('schedule');
  const h = nowHours();
  container.innerHTML = '';

  SCHEDULE.forEach((block, i) => {
    const isActive = (h >= block.start && h < block.end);
    const isDone   = !!done[block.id];
    const skipped  = isSkipped(block);

    const el = document.createElement('div');
    el.className = 'block' +
      (isActive ? ' active-now' : '') +
      (isDone   ? ' done-block' : '') +
      (skipped && !isDone ? ' skipped-block' : '');
    el.id = 'block-' + block.id;
    el.style.animationDelay = (i * 0.04) + 's';

    const tagsHtml = block.tags.length
      ? `<div class="block-tags">${block.tags.map(t =>
          `<span data-tag="${t}" onclick="handleTag('${block.id}','${t}')">${t.toUpperCase()}</span>`
        ).join('')}</div>`
      : '';

    el.innerHTML = `
      <div class="now-badge">NOW</div>
      <div class="block-time">${block.time.replace('–','—')}</div>
      <div class="block-content">
        <div class="block-title">${block.title}</div>
        <div class="block-why">${block.why}</div>
        ${tagsHtml}
      </div>
      <div class="block-action">
        <button class="btn-check" onclick="toggleDone('${block.id}')"
          title="${isDone ? 'Uncheck' : 'Mark done'}">
          ${isDone ? '✓' : '○'}
        </button>
        ${!isDone ? `<button class="btn-skip" onclick="handleSkip('${block.id}')">skip</button>` : ''}
      </div>
    `;
    container.appendChild(el);
  });

  // progress
  const total   = SCHEDULE.length;
  const doneN   = SCHEDULE.filter(b => done[b.id]).length;
  const pct     = Math.round((doneN / total) * 100);
  let pf = document.getElementById('progressFill');
  if (!pf) {
    const ps = document.createElement('div');
    ps.className = 'progress-strip';
    ps.innerHTML = '<div class="progress-fill" id="progressFill"></div>';
    document.querySelector('header').after(ps);
    pf = document.getElementById('progressFill');
  }
  pf.style.width = pct + '%';
}

// ── Toggle Done ───────────────────────────────────────────────────
window.toggleDone = function(id) {
  const block = SCHEDULE.find(b => b.id === id);
  if (!block) return;

  if (done[id]) {
    delete done[id];
    saveDone();
    renderSchedule();
    showCatMsg("Unmarked. It's okay, come back to it. 🐾", null);
    return;
  }

  done[id] = true;
  saveDone();
  renderSchedule();

  // bump tags
  if (block.tags.length) {
    block.tags.forEach(t => bumpStat(t));
  }

  const msgs = [
    `${block.title} done! +${block.tags.length || 1} point${block.tags.length > 1 ? 's' : ''}. Keep going! ✓`,
    `Checked off: ${block.title}. You showed up today. That matters. ✓`,
    `${block.title} complete. Your future self is proud. ✓`
  ];
  const msg = msgs[Math.floor(Math.random() * msgs.length)];
  showCatMsg(msg, 'happy');
};

// ── Handle tag click ──────────────────────────────────────────────
window.handleTag = function(blockId, tag) {
  bumpStat(tag);
  const msg = `+1 ${tag.toUpperCase()}! ${TAG_WARNINGS[tag] ? "Keep at it — " + tag + " matters." : "Good work!"}`;
  showCatMsg(msg, 'happy');
};

// ── Handle Skip ───────────────────────────────────────────────────
window.handleSkip = function(id) {
  const block = SCHEDULE.find(b => b.id === id);
  if (!block) return;
  done[id] = false; // mark as explicitly skipped (false vs undefined)
  saveDone();
  renderSchedule();
  showToast('⚠ ' + block.skipWarning);
  showCatMsg(block.catMsg, 'sad');
};

// ── Auto-detect skips (past blocks not done) ──────────────────────
function checkMissedBlocks() {
  const h = nowHours();
  SCHEDULE.forEach(block => {
    // Block is fully past, not done, and not already warned (undefined = not interacted)
    if (h >= block.end && done[block.id] === undefined) {
      // mark as skipped so we only warn once
      done[block.id] = false;
      saveDone();
    }
  });
}

// ── Clock ─────────────────────────────────────────────────────────
function updateClock() {
  const n = new Date();
  const hh = String(n.getHours()).padStart(2,'0');
  const mm = String(n.getMinutes()).padStart(2,'0');
  document.getElementById('liveTime').textContent = hh + ':' + mm;

  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const mons = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  document.getElementById('liveDate').textContent =
    days[n.getDay()] + ' · ' + mons[n.getMonth()] + ' ' + n.getDate();
}

// ── Speech FAB ────────────────────────────────────────────────────
document.getElementById('speechFab').addEventListener('click', () => {
  speechOn = !speechOn;
  saveSpeech();
  const fab = document.getElementById('speechFab');
  fab.textContent = speechOn ? '🔊' : '🔇';
  fab.classList.toggle('muted', !speechOn);
  if (speechOn) showCatMsg("Voice is ON. I'll cheer you on! 🐾", 'happy');
});

// ── Reset ─────────────────────────────────────────────────────────
document.getElementById('resetBtn').addEventListener('click', () => {
  if (!confirm('Reset all stats and progress?')) return;
  stats = {};
  done  = {};
  saveStats();
  saveDone();
  renderStats();
  renderSchedule();
  showCatMsg("Fresh start! Let's do this! 🐾", 'happy');
});

// ── Morning greeting ──────────────────────────────────────────────
function morningGreet() {
  const h = new Date().getHours();
  let msg;
  if (h < 7)       msg = "Early bird! The world belongs to those who rise early. 🌅";
  else if (h < 12) msg = "Good morning! Time to study and grow. Let's go! ☀️";
  else if (h < 17) msg = "Afternoon check-in! Stay on track. You've got this. 💪";
  else if (h < 21) msg = "Evening warrior! Review your wins and plan tomorrow. 🌙";
  else              msg = "Rest time. Tomorrow is a new chance to be better. 😴";
  showCatMsg(msg, 'happy');
}

// ── Init ──────────────────────────────────────────────────────────
(function init() {
  checkMissedBlocks();
  renderStats();
  renderSchedule();
  updateClock();
  setInterval(updateClock, 30000);
  setInterval(() => {
    checkMissedBlocks();
    renderSchedule();
  }, 60000);

  const fab = document.getElementById('speechFab');
  fab.textContent = speechOn ? '🔊' : '🔇';
  fab.classList.toggle('muted', !speechOn);

  setTimeout(morningGreet, 1200);

  // Scroll active block into view
  setTimeout(() => {
    const cur = currentBlock();
    if (cur) {
      const el = document.getElementById('block-' + cur.id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 800);
})();
