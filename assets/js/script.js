/**
 * SRIEVi DEVELOPER PORTFOLIO - CORE INTERACTION CONTROLLER
 */

document.addEventListener('DOMContentLoaded', () => {
  initSoundEngine();
  initLiveClock();
  initChapterSwitcher();
  initTerminal();
  initVideoModal();
  initMobileDrawer();
  initCopyActions();
  initProjectDetails();
});

/* ==========================================================================
   1. SOUND & AUDIO ENGINE
   ========================================================================== */
let soundEnabled = true;
let ambientPlaying = false;

const soundClick = document.getElementById('soundClick');
const soundTransit = document.getElementById('soundTransit');
const soundWhoosh = document.getElementById('soundWhoosh');
const soundAmbient = document.getElementById('soundAmbient');

function initSoundEngine() {
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const soundIcon = document.getElementById('soundIcon');
  const ambientPlayBtn = document.getElementById('ambientPlayBtn');
  const ambientIcon = document.getElementById('ambientIcon');

  // Sound FX toggle
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      if (soundEnabled) {
        soundIcon.className = 'fa-solid fa-volume-high';
        playSound(soundClick);
      } else {
        soundIcon.className = 'fa-solid fa-volume-xmark';
      }
    });
  }

  // Ambient Track toggle
  if (ambientPlayBtn && soundAmbient) {
    ambientPlayBtn.addEventListener('click', () => {
      if (ambientPlaying) {
        soundAmbient.pause();
        ambientPlaying = false;
        ambientIcon.className = 'fa-solid fa-play';
      } else {
        soundAmbient.volume = 0.35;
        soundAmbient.play().then(() => {
          ambientPlaying = true;
          ambientIcon.className = 'fa-solid fa-pause';
        }).catch(err => {
          console.log('Audio autoplay prevented:', err);
        });
      }
    });
  }

  // Attach sound to interactive buttons
  document.querySelectorAll('.sound-click').forEach(elem => {
    elem.addEventListener('click', () => {
      playSound(soundClick);
    });
  });
}

function playSound(audioElem) {
  if (!soundEnabled || !audioElem) return;
  try {
    audioElem.currentTime = 0;
    audioElem.volume = 0.4;
    audioElem.play().catch(() => {});
  } catch (e) {}
}

/* ==========================================================================
   2. LIVE PHNOM PENH CLOCK (GMT+7)
   ========================================================================== */
function initLiveClock() {
  const clockElem = document.getElementById('cambodiaTime');
  if (!clockElem) return;

  function updateTime() {
    const now = new Date();
    // Phnom Penh is UTC+7
    const options = {
      timeZone: 'Asia/Phnom_Penh',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    clockElem.textContent = new Intl.DateTimeFormat('en-GB', options).format(now);
  }

  updateTime();
  setInterval(updateTime, 1000);
}

/* ==========================================================================
   3. CHAPTER / JOURNAL SWITCHER
   ========================================================================== */
function initChapterSwitcher() {
  const tabs = document.querySelectorAll('.chapter-tab');
  const cards = document.querySelectorAll('.chapter-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetChapter = tab.getAttribute('data-chapter');

      tabs.forEach(t => t.classList.remove('active'));
      cards.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      const targetCard = document.getElementById(`chapter-${targetChapter}`);
      if (targetCard) {
        targetCard.classList.add('active');
        playSound(soundTransit);
      }
    });
  });
}

/* ==========================================================================
   4. INTERACTIVE TERMINAL (CLI)
   ========================================================================== */
function initTerminal() {
  const input = document.getElementById('terminalInput');
  const body = document.getElementById('terminalBody');
  if (!input || !body) return;

  const commands = {
    help: () => `
      <div class="t-line t-emerald">Available Commands:</div>
      <div class="t-line">  <span class="t-yellow">about</span>       - Print biography & developer background</div>
      <div class="t-line">  <span class="t-yellow">skills</span>      - List core CS & Web programming skills</div>
      <div class="t-line">  <span class="t-yellow">philosophy</span>  - Read Shiliaiwei's thoughts on AI & ICT Ethics</div>
      <div class="t-line">  <span class="t-yellow">timeline</span>    - View academic & personal milestones</div>
      <div class="t-line">  <span class="t-yellow">quote</span>       - Display a random mindful quote</div>
      <div class="t-line">  <span class="t-yellow">contact</span>     - Display official contact email & channels</div>
      <div class="t-line">  <span class="t-yellow">clear</span>       - Clear the terminal console</div>
    `,
    about: () => `
      <div class="t-line t-cyan">== SRIEVi DEV PROFILE ==</div>
      <div class="t-line">Name: វី (Shiliaiwei)</div>
      <div class="t-line">Degree: Bachelor of Computer Science & ICT</div>
      <div class="t-line">Role: Software Developer & Creative Innovator</div>
      <div class="t-line">Location: Phnom Penh, Cambodia</div>
      <div class="t-line">Mindset: Rural Roots + Buddhist Dharma + Deep Work</div>
    `,
    skills: () => `
      <div class="t-line t-cyan">== TECHNICAL SKILLS MATRIX ==</div>
      <div class="t-line">• Languages: JavaScript, Python, PHP, SQL, HTML5/CSS3</div>
      <div class="t-line">• Systems: REST APIs, Node.js, Laravel, Database Normalization</div>
      <div class="t-line">• Foundations: Computer Science, ICT Networks, Data Ethics</div>
    `,
    philosophy: () => `
      <div class="t-line t-emerald">"ទោះបីជាបច្ចេកវិទ្យាឆ្លាតវៃយ៉ាងណាក៏ដោយ ក៏មិនអាចខ្វះខាតមនុស្សជាតិ ដើម្បីគ្រប់គ្រង និងធ្វើការជាមួយបានឡើយ។"</div>
      <div class="t-line t-dim">Be mindful of algorithmic dark psychology and protect human dignity.</div>
    `,
    timeline: () => `
      <div class="t-line t-cyan">== CAREER & GROWTH TIMELINE ==</div>
      <div class="t-line">[1] Rural Village Roots & Primary Schooling</div>
      <div class="t-line">[2] Self-Taught Reading & Urban Transition</div>
      <div class="t-line">[3] Kesararam with Digital Award Winner</div>
      <div class="t-line">[4] Bachelor of CS / ICT Degree Completion</div>
    `,
    quote: () => `
      <div class="t-line t-yellow">«អ្វីដែលខ្ញុំត្រូវធ្វើគឺការស្តាប់ពាក្យទូន្មានប្រៀនប្រដៅមនុស្សនៅជុំវិញខ្លួន ជាជាងការនិយាយបកស្រាយ»</div>
    `,
    contact: () => `
      <div class="t-line t-emerald">Email: shiliaiwei.developer@gmail.com</div>
      <div class="t-line">Location: Phnom Penh, Cambodia</div>
    `,
    clear: () => {
      body.innerHTML = '';
      return '';
    }
  };

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const rawVal = input.value.trim();
      const cmd = rawVal.toLowerCase();

      if (cmd === '') return;

      // Echo input
      const echo = document.createElement('div');
      echo.className = 't-line';
      echo.innerHTML = `<span class="terminal-prompt">shiliaiwei@dev:~$</span> ${escapeHTML(rawVal)}`;
      body.appendChild(echo);

      // Execute command
      if (commands[cmd]) {
        const output = commands[cmd]();
        if (output) {
          const res = document.createElement('div');
          res.innerHTML = output;
          body.appendChild(res);
        }
      } else {
        const error = document.createElement('div');
        error.className = 't-line';
        error.innerHTML = `<span style="color:#EF4444">Command not found:</span> ${escapeHTML(cmd)}. Type <span class="t-yellow">help</span> for commands.`;
        body.appendChild(error);
      }

      input.value = '';
      body.scrollTop = body.scrollHeight;
      playSound(soundClick);
    }
  });
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

/* ==========================================================================
   5. VIDEO MODAL
   ========================================================================== */
function initVideoModal() {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('portfolioVideo');
  const openBtn = document.getElementById('openVideoModalBtn');
  const playTrigger = document.getElementById('videoCardTrigger');
  const heroPlayBtn = document.getElementById('playVideoBtn');
  const closeBtn = document.getElementById('closeVideoModalBtn');

  function openModal() {
    if (modal && video) {
      modal.classList.add('open');
      video.play().catch(() => {});
      playSound(soundTransit);
    }
  }

  function closeModal() {
    if (modal && video) {
      modal.classList.remove('open');
      video.pause();
      playSound(soundClick);
    }
  }

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (playTrigger) playTrigger.addEventListener('click', openModal);
  if (heroPlayBtn) heroPlayBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
}

/* ==========================================================================
   6. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileDrawer() {
  const drawer = document.getElementById('mobileDrawer');
  const openBtn = document.getElementById('mobileMenuBtn');
  const closeBtn = document.getElementById('closeDrawerBtn');
  const links = document.querySelectorAll('.drawer-link');

  if (openBtn && drawer) {
    openBtn.addEventListener('click', () => {
      drawer.classList.add('open');
      playSound(soundWhoosh);
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
      playSound(soundClick);
    });
  }

  links.forEach(l => {
    l.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });
}

/* ==========================================================================
   7. COPY EMAIL ACTION
   ========================================================================== */
function initCopyActions() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const emailElem = document.getElementById('devEmail');

  if (copyBtn && emailElem) {
    copyBtn.addEventListener('click', () => {
      const email = emailElem.textContent.trim();
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        copyBtn.style.background = '#10B981';
        copyBtn.style.color = '#000';

        setTimeout(() => {
          copyBtn.innerHTML = originalText;
          copyBtn.style.background = '';
          copyBtn.style.color = '';
        }, 2000);
      });
    });
  }
}

/* ==========================================================================
   8. PROJECT DETAIL MODAL / HANDLER
   ========================================================================== */
function initProjectDetails() {
  document.querySelectorAll('.view-project-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-title');
      const desc = btn.getAttribute('data-desc');
      alert(`${title}\n\n${desc}`);
    });
  });
}

/* Contact Form Simulation */
window.handleContactSubmit = function() {
  const name = document.getElementById('senderName').value;
  const feedback = document.getElementById('formFeedback');
  
  if (feedback) {
    feedback.innerHTML = `<span style="color:#34D399"><i class="fa-solid fa-circle-check"></i> អរគុណ ${escapeHTML(name)}, សាររបស់អ្នកត្រូវបានផ្ញើដោយជោគជ័យ!</span>`;
    document.getElementById('contactForm').reset();
    playSound(soundClick);
  }
};
