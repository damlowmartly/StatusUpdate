// ── Schedule Data ──────────────────────────────────────────────
const SCHEDULE = [
  {
    id: "body",
    start: 6, end: 7,
    title: "Body & Clarity",
    time: ["6:00 AM","7:00 AM"],
    why: "Light exercise, no phone. Lowers cortisol. Wakes the brain.",
    tags: [],
    skipWarning: {
      title: "You missed Body & Clarity.",
      body: "Without morning movement, cortisol stays high ALL day. Your focus will be foggy, your mood lower, and your willpower weaker. 10 minutes of stretching literally resets your nervous system. The days you skip this are the days everything else feels harder."
    },
    catMsg: "No stretch today? Your cortisol is still spiked. Everything will feel harder today because of this skip. 🐾"
  },
  {
    id: "math",
    start: 7, end: 8.5,
    title: "Deep Study: Math & Physics",
    time: ["7:00 AM","8:30 AM"],
    why: "Logic peak. Best time for hard system thinking.",
    tags: ["math","physics","auto"],
    skipWarning: {
      title: "You missed Math & Physics.",
      body: "These subjects are the foundation of Automobile engineering. Every day you skip, the knowledge gap between you and working technicians grows wider. The engineers who get hired didn't skip their logic sessions. Without math, you can only follow steps — never understand WHY the engine works."
    },
    catMsg: "No math today. You're falling behind someone who studied. The gap grows daily. 📐"
  },
  {
    id: "chores",
    start: 8.5, end: 9.5,
    title: "Breakfast & Chores",
    time: ["8:30 AM","9:30 AM"],
    why: "Brain break. Manual tasks rest focus muscles.",
    tags: [],
    skipWarning: {
      title: "You skipped your recovery block.",
      body: "Skipping rest and meals leads to burnout. Your brain needs glucose and recovery cycles like muscles need rest days. Push through without eating and your cognitive performance drops 20%. Clean environment = clear mind."
    },
    catMsg: "No food break? Your brain runs on glucose. You're running on empty right now. 🍳"
  },
  {
    id: "tesda",
    start: 9.5, end: 11.5,
    title: "TESDA & Career Growth",
    time: ["9:30 AM","11:30 AM"],
    why: "Action phase. Apply for courses, study modules.",
    tags: ["tesda"],
    skipWarning: {
      title: "You missed TESDA today.",
      body: "TESDA certification is your bridge from no-job to stable-job. Every day without working on it is a day your competitors with certs get the interview instead of you. One module per day = a full certificate in weeks. Skipping today is borrowing time from your future self."
    },
    catMsg: "No TESDA progress. The job you want requires certs. Someone else is getting that cert right now. 📋"
  },
  {
    id: "lunch",
    start: 11.5, end: 13,
    title: "Lunch & English Immersion",
    time: ["11:30 AM","1:00 PM"],
    why: "Eat thrifty. Watch English auto/physics tutorials.",
    tags: ["english","auto"],
    skipWarning: {
      title: "You skipped English Immersion.",
      body: "English is your passport to international work and higher pay. Without daily exposure, fluency fades. Global automobile companies — Toyota, BMW, Bosch — all require technical English. Every session you skip means more months before you can confidently apply for those jobs."
    },
    catMsg: "English skipped. The international job you want requires English fluency. You just lost a session. 🌍"
  },
  {
    id: "sales",
    start: 13, end: 15.5,
    title: "Digital Product Sales",
    time: ["1:00 PM","3:30 PM"],
    why: "Output phase. Update listings, message customers, create assets.",
    tags: ["sales"],
    skipWarning: {
      title: "You missed your Sales session.",
      body: "Your digital income only exists if you actively maintain it. Every listing not updated loses ranking. Every customer message not answered loses trust. Businesses that go quiet die quietly. The income you didn't make today cannot be recovered — that money is gone."
    },
    catMsg: "No sales action today means no income action today. Money requires movement. 💸"
  },
  {
    id: "english",
    start: 15.5, end: 17,
    title: "English Writing & Grammar",
    time: ["3:30 PM","5:00 PM"],
    why: "Write problems & solutions in English. Fixes grammar and mindset.",
    tags: ["english"],
    skipWarning: {
      title: "You skipped English Writing.",
      body: "Writing English daily is what separates good speakers from great communicators. You cannot get a high-paying international job if you can't write a clear email. Every skipped writing session is another day you can't send that confident job application."
    },
    catMsg: "No writing practice. The resume you want to send requires professional English. Not yet. ✍️"
  },
  {
    id: "walk",
    start: 17, end: 18,
    title: "Physical Movement",
    time: ["5:00 PM","6:00 PM"],
    why: "Quick walk/workout. Flushes afternoon brain fog.",
    tags: [],
    skipWarning: {
      title: "You skipped afternoon movement.",
      body: "This block flushes the adenosine buildup causing afternoon brain fog. Without it, your evening reflection will be foggy, your sleep lighter, and tomorrow's focus worse. Physical movement literally clears metabolic waste from your brain."
    },
    catMsg: "No walk. The brain fog you feel right now stays there without movement. 🚶"
  },
  {
    id: "dinner",
    start: 18, end: 20,
    title: "Dinner & Reflection",
    time: ["6:00 PM","8:00 PM"],
    why: "Audit your Complaint Budget. Plan exactly 3 wins for tomorrow.",
    tags: [],
    skipWarning: {
      title: "You missed Dinner & Reflection.",
      body: "Without daily review, you repeat the same mistakes forever. 5 minutes of reflection prevents 5 hours of wasted effort tomorrow. People who journal and review their days outperform those who don't by a measurable margin. You're flying blind without it."
    },
    catMsg: "No reflection = no improvement. You'll repeat today's mistakes tomorrow. 🏆"
  },
  {
    id: "wind",
    start: 20, end: 21.5,
    title: "Wind Down",
    time: ["8:00 PM","9:30 PM"],
    why: "No screens. Review notes. Brain moves info to long-term memory while you sleep.",
    tags: [],
    skipWarning: {
      title: "You skipped Wind Down.",
      body: "Screens before sleep suppress melatonin by up to 3 hours. Your brain stays in high-alert mode. Worse: memory consolidation requires sleep-onset calm — everything you studied today gets stored less effectively. You literally waste your study sessions by skipping this."
    },
    catMsg: "No wind down. Your brain is still in fight mode. Tonight's sleep will be shallow. 😴"
  },
  {
    id: "sleep",
    start: 21.5, end: 30,
    title: "Sleep",
    time: ["9:30 PM",""],
    why: "Neuroplasticity. Brain repairs itself and clears toxins during deep sleep.",
    tags: [],
    skipWarning: {
      title: "You're still awake.",
      body: "Sleep deprivation after 24 hours reduces cognitive performance equivalent to being legally drunk. Your brain literally cannot form new memories properly without 7-8 hours. Every hour of missed sleep costs you IQ points tomorrow. Go to sleep."
    },
    catMsg: "Sleep is not laziness. Sleep is when you actually get smarter. Go to bed. 🌙"
  }
];

// Random daily exercises
const EXERCISES = [
  "30 push-ups · 20 squats · 10 min walk",
  "3×10 lunges · 20 sit-ups · 5 min stretch",
  "25 push-ups · 30 jumping jacks · plank 1 min",
  "20 push-ups · wall sit 45s · 15 min jog",
  "40 squats · 15 push-ups · 10 min brisk walk",
  "3×8 dips · 20 crunches · 10 min stretch",
  "30 jumping jacks · 20 push-ups · jog in place 3 min"
];

// Brain/learning facts (shown in ticker)
const LOCAL_FACTS = [
  "Your brain is 60% fat — omega-3s literally build your neurons.",
  "Sleep moves memories from short-term to long-term storage. No sleep = no learning.",
  "Exercise increases BDNF — the fertilizer for brain cell growth.",
  "The brain can rewire itself at any age. This is called neuroplasticity.",
  "Reading out loud activates more brain regions than reading silently.",
  "Spaced repetition is 200% more effective than cramming.",
  "Walking increases creative thinking by 81% according to Stanford research.",
  "Your prefrontal cortex — decision-making center — fully develops at age 25.",
  "Fasting for 12-16 hours triggers autophagy, clearing old brain cells.",
  "Writing by hand strengthens memory more than typing.",
  "Cold water exposure increases norepinephrine by 300%, boosting focus.",
  "Learning a physical skill (like auto repair) activates the cerebellum — strengthening all learning.",
  "Boredom is productive: it triggers the default mode network that solves problems.",
  "Bilingual people get Alzheimer's 4-5 years later than monolingual people.",
  "A 20-minute nap improves performance more than 200mg of caffeine.",
  "Engines convert chemical energy into mechanical energy through controlled combustion.",
  "Ohm's Law: Voltage = Current × Resistance. Electricians use this every single day.",
  "Newton's 3rd Law applies to every gear, belt, and pulley in an automobile.",
  "Torque × RPM / 5252 = Horsepower. Automobile technicians use this formula.",
  "Diesel engines have no spark plugs — compression alone ignites the fuel."
];

// ── State ─────────────────────────────────────────────────────
// stats = { english: N, math: N, ... } — persists across days
// done  = { blockId: true | false }   — resets daily
//         true  = completed (checked)
//         false = explicitly skipped OR auto-detected as missed
//         undefined = untouched
// statSnapshot = { blockId: { tag: N } } — stat values at time of check, for undo

let stats        = JSON.parse(localStorage.getItem('rw_stats')   || '{}');
let done         = JSON.parse(localStorage.getItem('rw_done')    || '{}');
let statSnapshot = JSON.parse(localStorage.getItem('rw_snap')    || '{}');
let speechOn     = localStorage.getItem('rw_speech') !== null
                   ? JSON.parse(localStorage.getItem('rw_speech'))
                   : true;

function saveStats()   { localStorage.setItem('rw_stats', JSON.stringify(stats)); }
function saveDone()    { localStorage.setItem('rw_done',  JSON.stringify(done)); }
function saveSnap()    { localStorage.setItem('rw_snap',  JSON.stringify(statSnapshot)); }
function saveSpeech()  { localStorage.setItem('rw_speech', JSON.stringify(speechOn)); }

// Daily reset of done (not stats — stats accumulate across days)
const todayKey = new Date().toDateString();
const lastKey  = localStorage.getItem('rw_lastday');
if (lastKey !== todayKey) {
  done = {};
  statSnapshot = {};
  saveDone();
  saveSnap();
  localStorage.setItem('rw_lastday', todayKey);
}

// ── 12-Hour Time ──────────────────────────────────────────────
function to12h(h24) {
  const n = new Date();
  n.setHours(Math.floor(h24), 0, 0, 0);
  return n.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}

function formatClock(date) {
  return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}

// ── Time Helpers ──────────────────────────────────────────────
function nowHours() {
  const n = new Date();
  return n.getHours() + n.getMinutes() / 60;
}

function currentBlock() {
  const h = nowHours();
  return SCHEDULE.find(b => h >= b.start && h < b.end) || null;
}

function isSkipped(block) {
  return nowHours() >= block.end && done[block.id] !== true;
}

// ── Speech ────────────────────────────────────────────────────
function speak(text) {
  if (!speechOn || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.95; u.pitch = 1.1;
  window.speechSynthesis.speak(u);
}

// ── Toast (centered modal style) ─────────────────────────────
let toastTimer;
function showToast(title, body) {
  const t = document.getElementById('toast');
  t.innerHTML = `
    <span class="toast-title">⚠ ${title}</span>
    ${body}
    <button class="toast-close" onclick="closeToast()">CLOSE ✕</button>
  `;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(closeToast, 9000);
}
window.closeToast = function() {
  document.getElementById('toast').classList.remove('show');
};

// ── Cat ───────────────────────────────────────────────────────
const CAT_RANDOM = [
  "You are doing great. Keep going! 🐾",
  "One block at a time. You've got this.",
  "Consistency beats perfection every single day.",
  "Small wins compound into big results. Trust it.",
  "Every checkmark is proof you showed up. That counts.",
  "The version of you 6 months from now is watching. Don't disappoint them.",
  "Meow! I believe in you. ⭐",
  "Hard days build the person who handles easy days with grace.",
  "You don't need motivation. You need identity. Be someone who shows up."
];
let catIdx = 0;

function showCatMsg(msg, mood) {
  const bubble = document.getElementById('catBubble');
  const face   = document.getElementById('catFace');
  const msgEl  = document.getElementById('catMsg');

  msgEl.textContent = msg;
  bubble.classList.add('visible');
  face.classList.remove('happy','sad','talking');
  if (mood) face.classList.add(mood);
  face.classList.add('talking');
  speak(msg);

  clearTimeout(face._bubbleTimer);
  face._bubbleTimer = setTimeout(() => {
    bubble.classList.remove('visible');
    face.classList.remove('talking','happy','sad');
  }, 7000);
}

window.catSpeak = function() {
  const msg = CAT_RANDOM[catIdx % CAT_RANDOM.length];
  catIdx++;
  showCatMsg(msg, 'happy');
};

// ── Eye Tracking ──────────────────────────────────────────────
(function setupEyes() {
  document.addEventListener('mousemove', e => {
    ['Left','Right'].forEach(side => {
      const eye    = document.getElementById('eye' + side);
      const pupil  = document.getElementById('pupil' + side);
      if (!eye || !pupil) return;

      const rect   = eye.getBoundingClientRect();
      const cx     = rect.left + rect.width / 2;
      const cy     = rect.top  + rect.height / 2;
      const dx     = e.clientX - cx;
      const dy     = e.clientY - cy;
      const dist   = Math.sqrt(dx*dx + dy*dy);
      const maxMove = 3;
      const ratio  = Math.min(dist, 40) / 40;
      const tx     = (dx / dist || 0) * maxMove * ratio;
      const ty     = (dy / dist || 0) * maxMove * ratio;
      pupil.style.transform = `translate(${tx}px, ${ty}px)`;
    });
  });

  // Touch support
  document.addEventListener('touchmove', e => {
    const touch = e.touches[0];
    document.dispatchEvent(new MouseEvent('mousemove', {
      clientX: touch.clientX,
      clientY: touch.clientY
    }));
  }, { passive: true });
})();

// ── Stats ─────────────────────────────────────────────────────
function bumpStat(tag) {
  if (!tag) return;
  stats[tag] = (stats[tag] || 0) + 1;
  saveStats();
  renderStats();
  animateStat(tag);
}

function removeStat(tag) {
  if (!tag || !stats[tag]) return;
  stats[tag] = Math.max(0, (stats[tag] || 0) - 1);
  saveStats();
  renderStats();
  animateStat(tag);
}

function animateStat(tag) {
  const el = document.getElementById('stat-' + tag);
  if (!el) return;
  el.classList.remove('bump');
  void el.offsetWidth;
  el.classList.add('bump');
  setTimeout(() => el.classList.remove('bump'), 420);
}

function renderStats() {
  ['english','math','physics','auto','tesda','sales'].forEach(k => {
    const el = document.getElementById('val-' + k);
    if (el) el.textContent = stats[k] || 0;
  });
}

// ── Schedule Render ───────────────────────────────────────────
function renderSchedule() {
  const container = document.getElementById('schedule');
  const h = nowHours();
  container.innerHTML = '';

  SCHEDULE.forEach((block, i) => {
    const isActive = h >= block.start && h < block.end;
    const isDone   = done[block.id] === true;
    const isMissed = h >= block.end && done[block.id] !== true;

    const el = document.createElement('div');
    el.className = 'block'
      + (isActive           ? ' active-now'    : '')
      + (isDone             ? ' done-block'    : '')
      + (isMissed && !isDone? ' skipped-block' : '');
    el.id = 'block-' + block.id;
    el.style.animationDelay = (i * 0.04) + 's';

    // Build time display
    const t1 = block.time[0];
    const t2 = block.time[1];
    const timeDisplay = t2 ? `${t1}<br>${t2}` : t1;

    const tagsHtml = block.tags.length
      ? `<div class="block-tags">${block.tags.map(t =>
          `<span onclick="handleTag('${block.id}','${t}')">${t.toUpperCase()}</span>`
        ).join('')}</div>`
      : '';

    const actionHtml = isDone
      ? `<button class="btn-check" onclick="toggleDone('${block.id}')" title="Uncheck">✓</button>`
      : `<button class="btn-check" onclick="toggleDone('${block.id}')" title="Mark done">○</button>
         <button class="btn-skip" onclick="handleSkip('${block.id}')">skip</button>`;

    el.innerHTML = `
      <div class="now-badge">NOW</div>
      <div class="block-time">${timeDisplay}</div>
      <div class="block-content">
        <div class="block-title">${block.title}</div>
        <div class="block-why">${block.why}</div>
        ${tagsHtml}
      </div>
      <div class="block-action">${actionHtml}</div>
    `;
    container.appendChild(el);
  });

  // Progress bar
  let pf = document.getElementById('progressFill');
  if (!pf) {
    const ps = document.createElement('div');
    ps.className = 'progress-strip';
    ps.innerHTML = '<div class="progress-fill" id="progressFill"></div>';
    document.querySelector('.stats-bar').after(ps);
    pf = document.getElementById('progressFill');
  }
  const total = SCHEDULE.length;
  const doneN = SCHEDULE.filter(b => done[b.id] === true).length;
  pf.style.width = Math.round((doneN / total) * 100) + '%';
}

// ── Toggle Done ───────────────────────────────────────────────
window.toggleDone = function(id) {
  const block = SCHEDULE.find(b => b.id === id);
  if (!block) return;

  if (done[id] === true) {
    // UNCHECK — reverse the stats we added
    done[id] = undefined; // untouched state
    saveDone();

    // Subtract stats that were added when this was checked
    const snap = statSnapshot[id] || {};
    Object.keys(snap).forEach(tag => {
      for (let i = 0; i < snap[tag]; i++) removeStat(tag);
    });
    delete statSnapshot[id];
    saveSnap();

    renderSchedule();
    showCatMsg("Unchecked. No worries — come back to it. 🐾", null);
    return;
  }

  // CHECK
  done[id] = true;
  saveDone();

  // Save snapshot of what we added so we can undo it
  const added = {};
  block.tags.forEach(t => {
    bumpStat(t);
    added[t] = (added[t] || 0) + 1;
  });
  statSnapshot[id] = added;
  saveSnap();

  renderSchedule();

  const msgs = [
    `${block.title} done! You showed up. That always matters. ✓`,
    `Checked: ${block.title}. Your future self just smiled. ✓`,
    `${block.title} complete. One block closer to the life you want. ✓`
  ];
  showCatMsg(msgs[Math.floor(Math.random() * msgs.length)], 'happy');
};

// ── Tag Click ─────────────────────────────────────────────────
window.handleTag = function(blockId, tag) {
  bumpStat(tag);
  // Also track in snapshot so uncheck is accurate
  if (!statSnapshot[blockId]) statSnapshot[blockId] = {};
  statSnapshot[blockId][tag] = (statSnapshot[blockId][tag] || 0) + 1;
  saveSnap();
  showCatMsg(`+1 ${tag.toUpperCase()}! Keep practicing. Every rep counts. 🐾`, 'happy');
};

// ── Handle Skip ───────────────────────────────────────────────
window.handleSkip = function(id) {
  const block = SCHEDULE.find(b => b.id === id);
  if (!block) return;
  done[id] = false;
  saveDone();
  renderSchedule();
  showToast(block.skipWarning.title, block.skipWarning.body);
  showCatMsg(block.catMsg, 'sad');
};

// ── Auto-detect missed blocks (called on load + every min) ────
let warnedMissed = JSON.parse(localStorage.getItem('rw_warned') || '[]');

function checkMissedBlocks() {
  const h = nowHours();
  let newlyMissed = [];

  SCHEDULE.forEach(block => {
    if (h >= block.end && done[block.id] === undefined) {
      done[block.id] = false;
      saveDone();

      // Only warn once per block per day
      if (!warnedMissed.includes(block.id)) {
        newlyMissed.push(block);
        warnedMissed.push(block.id);
      }
    }
  });

  localStorage.setItem('rw_warned', JSON.stringify(warnedMissed));

  // Show complaint for most recently missed block
  if (newlyMissed.length > 0) {
    const b = newlyMissed[newlyMissed.length - 1];
    setTimeout(() => {
      showToast(b.skipWarning.title, b.skipWarning.body);
      showCatMsg(b.catMsg, 'sad');
    }, 1500);
  }
}

// ── Clock ─────────────────────────────────────────────────────
function updateClock() {
  const n = new Date();
  document.getElementById('liveTime').textContent = formatClock(n);
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const mons = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  document.getElementById('liveDate').textContent =
    days[n.getDay()] + ' · ' + mons[n.getMonth()] + ' ' + n.getDate();
}

// ── Brain Facts (API + local fallback) ───────────────────────
let factIndex = 0;

async function fetchFact() {
  // Try useless facts API (has some fun science facts)
  try {
    const res = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');
    if (res.ok) {
      const data = await res.json();
      if (data && data.text) return data.text;
    }
  } catch (_) {}
  // Fallback to local facts
  const fact = LOCAL_FACTS[factIndex % LOCAL_FACTS.length];
  factIndex++;
  return fact;
}

async function rotateFact() {
  const el = document.getElementById('factText');
  el.style.opacity = '0';
  el.style.transition = 'opacity 0.4s ease';
  await new Promise(r => setTimeout(r, 400));
  const fact = await fetchFact();
  el.textContent = fact;
  el.style.opacity = '1';
}

// ── Daily Exercise ─────────────────────────────────────────────
function setDailyExercise() {
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  document.getElementById('exerciseText').textContent =
    EXERCISES[dayOfYear % EXERCISES.length];
}

// ── Speech FAB ─────────────────────────────────────────────────
document.getElementById('speechFab').addEventListener('click', () => {
  speechOn = !speechOn;
  saveSpeech();
  const fab = document.getElementById('speechFab');
  fab.textContent = speechOn ? '🔊' : '🔇';
  fab.classList.toggle('muted', !speechOn);
  if (speechOn) showCatMsg("Voice is ON. I'll cheer you on! 🐾", 'happy');
  else showCatMsg("Voice off. I'll keep quiet.", null);
});

// ── Reset ──────────────────────────────────────────────────────
document.getElementById('resetBtn').addEventListener('click', () => {
  if (!confirm('Reset ALL stats and progress? This cannot be undone.')) return;
  stats = {}; done = {}; statSnapshot = {}; warnedMissed = [];
  saveStats(); saveDone(); saveSnap();
  localStorage.setItem('rw_warned', '[]');
  renderStats();
  renderSchedule();
  showCatMsg("Fresh start! Every legend had a day zero. Let's go! 🐾", 'happy');
});

// ── Morning Greeting ───────────────────────────────────────────
function morningGreet() {
  const h = new Date().getHours();
  let msg;
  if (h < 7)       msg = "Early bird! The world is yours right now. 🌅";
  else if (h < 12) msg = "Good morning! Your brain is at peak power. Study hard. ☀️";
  else if (h < 17) msg = "Afternoon! Stay on track. The blocks won't complete themselves. 💪";
  else if (h < 21) msg = "Evening. What did you accomplish today? Review your wins. 🌙";
  else              msg = "Late night. Rest is productive too. Sleep = memory. 😴";
  showCatMsg(msg, 'happy');
}

// ── Init ──────────────────────────────────────────────────────
(function init() {
  setDailyExercise();
  updateClock();
  renderStats();
  checkMissedBlocks();
  renderSchedule();

  // Update clock every 30s
  setInterval(updateClock, 30000);

  // Check missed blocks every 60s
  setInterval(() => {
    checkMissedBlocks();
    renderSchedule();
  }, 60000);

  // Speech FAB initial state
  const fab = document.getElementById('speechFab');
  fab.textContent = speechOn ? '🔊' : '🔇';
  fab.classList.toggle('muted', !speechOn);

  // Rotate fact on load + every 30s
  rotateFact();
  setInterval(rotateFact, 30000);

  // Greeting after short delay
  setTimeout(morningGreet, 1400);

  // Scroll to active block
  setTimeout(() => {
    const cur = currentBlock();
    if (cur) {
      const el = document.getElementById('block-' + cur.id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 900);
})();
