/* ============================================================
   A Little Universe for Shifa ♡  —  script.js
   Photos:  photos/Image1.jpeg ... Image12.jpeg
   Song:    song.mp3 (root)
   ============================================================ */

const PHOTOS = Array.from({ length: 12 }, (_, i) => `photos/Image${i + 1}.jpeg`);
const DEFAULT_SONG = "song.mp3";

/* ---------------- Page content (17 pages) ---------------- */
const PAGES = [
  {
    label: "chapter one",
    title: "Where it all began",
    text: "Some stories don't start with fireworks — they start with a quiet hello that somehow feels like home. That was you, Shifa. That was us.",
    caption: "the beginning ♡",
    note: "— 17 October, our little forever starts here",
    sticker: "🎀", doodle: "✧",
    photo: 0
  },
  {
    label: "chapter two",
    title: "Two cities, one sky",
    text: "Kilometres between us, but the same moon watches over both of us. Every night I look up and know — you're looking too.",
    caption: "same sky, same us",
    note: "distance means nothing when someone means everything",
    sticker: "🌙", doodle: "✦",
    photo: 1
  },
  {
    label: "chapter three",
    title: "Your laugh, my favourite song",
    text: "If I could bottle one sound and keep it forever, it would be your laugh. Soft, sudden, contagious — my favourite melody.",
    caption: "🎵 on repeat",
    note: "you laugh and the whole world softens",
    sticker: "🎶", doodle: "♪",
    photo: 2
  },
  {
    label: "chapter four",
    title: "Little things, big love",
    text: "Good morning texts. Random memes. The way you say my name. It's the tiny things that build the biggest love.",
    caption: "the small stuff ♡",
    note: "little things, endlessly",
    sticker: "💌", doodle: "✧",
    photo: 3
  },
  {
    label: "chapter five",
    title: "You in every colour",
    text: "Every photo of you is my favourite photo. Every version of you is my favourite version. You make ordinary moments feel like art.",
    caption: "my favourite view",
    note: "you, in every frame",
    sticker: "🌸", doodle: "✦",
    photo: 4
  },
  {
    label: "chapter six",
    title: "The way you care",
    text: "You notice when I'm quiet. You ask twice. You remember the small details. That kind of care — it doesn't go unnoticed, Shifa.",
    caption: "softest heart ♡",
    note: "you care like it's breathing",
    sticker: "🌷", doodle: "✧",
    photo: 5
  },
  {
    label: "chapter seven",
    title: "Us, in our own world",
    text: "No filters, no audience, no pretending. Just us — messy, silly, real. And honestly, that's the most beautiful thing I know.",
    caption: "just us ♡",
    note: "our little universe",
    sticker: "✨", doodle: "✦",
    photo: 6
  },
  {
    label: "chapter eight",
    title: "Late night talks",
    text: "3 a.m. conversations that turn into 5 a.m. ones. Sleepy voices, honest words. Those nights are my favourite kind of magic.",
    caption: "🌙 3 a.m. diaries",
    note: "I'd lose sleep for you, always",
    sticker: "🌌", doodle: "✧",
    photo: 7
  },
  {
    label: "chapter nine",
    title: "You make me better",
    text: "You make me want to be kinder, calmer, softer. Loving you isn't just a feeling — it's a direction I want to keep walking.",
    caption: "growing with you",
    note: "you're my favourite teacher",
    sticker: "🌿", doodle: "✧",
    photo: 8
  },
  {
    label: "chapter ten",
    title: "Every version of you",
    text: "Sleepy you. Silly you. Serious you. Angry you. Every single version — I keep falling for all of them, again and again.",
    caption: "all of you ♡",
    note: "every you is my favourite you",
    sticker: "🫶", doodle: "✦",
    photo: 9
  },
  {
    label: "chapter eleven",
    title: "Our promise",
    text: "Not a perfect promise — a real one. To show up, to listen, to stay. Through the easy days and the heavy ones. Together.",
    caption: "you & me ♡",
    note: "always, in all ways",
    sticker: "💍", doodle: "✧",
    photo: 10
  },
  {
    label: "chapter twelve",
    title: "A hundred little forevers",
    text: "Not one big forever — a hundred little ones. Every morning, every call, every 'goodnight'. That's how I want to love you.",
    caption: "little forevers",
    note: "one day at a time, with you",
    sticker: "🕊️", doodle: "✦",
    photo: 11
  },
  {
    label: "chapter thirteen",
    title: "Places I want with you",
    text: "Coffee shops we haven't found yet. Streets we haven't walked. Sunsets we haven't watched. The map is still blank — let's fill it.",
    caption: "where to next?",
    note: "anywhere, as long as it's you",
    sticker: "🗺️", doodle: "✧",
    map: true
  },
  {
    label: "chapter fourteen",
    title: "If I could tell you one thing",
    text: "It would be this: you are not too much, and you are never not enough. You are exactly the kind of person the world needs more of.",
    caption: "for your heart ♡",
    note: "you are enough, always",
    sticker: "💗", doodle: "✦"
  },
  {
    label: "chapter fifteen",
    title: "The way you feel like home",
    text: "I've never needed four walls to feel at home. I just need your voice, your name, your presence. You feel like a place I belong.",
    caption: "you = home",
    note: "my safest place is you",
    sticker: "🏡", doodle: "✧"
  },
  {
    label: "chapter sixteen",
    title: "Grateful for you",
    text: "For every laugh, every talk, every silence that felt comfortable. For being you — fully, honestly, beautifully. Thank you, Shifa.",
    caption: "thank you ♡",
    note: "grateful, endlessly",
    sticker: "🌻", doodle: "✦"
  },
  {
    label: "the last page",
    title: "And this is just the start",
    text: "This book ends here, but our story doesn't. There are so many pages left — blank, waiting, ours. Let's write them slowly, together.",
    caption: "to be continued ♡",
    note: "yours, always — Ahad",
    sticker: "♡", doodle: "✧"
  }
];

/* ---------------- DOM ---------------- */
const book       = document.getElementById("book");
const bookArea   = document.getElementById("bookArea");
const prevBtn    = document.getElementById("prev");
const nextBtn    = document.getElementById("next");
const counter    = document.getElementById("counter");
const bar        = document.getElementById("bar");
const statusEl   = document.getElementById("status");

const musicBtn   = document.getElementById("music");
const musicCard  = document.getElementById("musicCard");
const musicClose = document.getElementById("musicClose");
const songTitle  = document.getElementById("songTitle");
const songAudio  = document.getElementById("songAudio");
const songFile   = document.getElementById("songFile");
const changeSong = document.getElementById("changeSong");
const clearSong  = document.getElementById("clearSong");

const confettiBtn = document.getElementById("confetti");
const allPhotos   = document.getElementById("allPhotos");

/* ---------------- Build book pages ---------------- */
let current = 0;           // 0 = cover, 1..N = pages
const total = PAGES.length;

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

function photoHTML(idx, customSrc) {
  const src = customSrc || PHOTOS[idx];
  if (!src) {
    return `<div class="polaroid"><div class="pic"><span class="ph">📷 add our photo</span></div><small>us ♡</small></div>`;
  }
  return `
    <div class="polaroid" data-photo="${idx}">
      <div class="pic">
        <img src="${esc(src)}" alt="us ♡" loading="lazy" onerror="this.style.display='none';this.parentNode.querySelector('.ph').style.display='block';" />
        <span class="ph" style="display:none">📷 add our photo</span>
      </div>
      <small>us ♡</small>
    </div>`;
}

function mapHTML() {
  return `
    <div class="map-wrap">
      <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#fff5f8"/>
            <stop offset="1" stop-color="#f5e7f1"/>
          </linearGradient>
        </defs>
        <rect width="400" height="200" fill="url(#g1)"/>
        <path d="M40 160 Q120 40 200 100 T360 60" stroke="#c2587f" stroke-width="2.5" fill="none" class="route"/>
        <circle cx="40" cy="160" r="7" fill="#c2587f"/>
        <circle cx="360" cy="60" r="7" fill="#a24468"/>
        <text x="40" y="185" font-family="Nunito" font-size="11" fill="#9b6f82" text-anchor="middle">me</text>
        <text x="360" y="48" font-family="Nunito" font-size="11" fill="#9b6f82" text-anchor="middle">you</text>
        <text x="200" y="100" font-family="Dancing Script" font-size="16" fill="#c2587f" text-anchor="middle">♡</text>
      </svg>
    </div>
    <p class="map-caption">somewhere between here and you ♡</p>`;
}

function buildPages() {
  PAGES.forEach((p, i) => {
    const el = document.createElement("div");
    el.className = "page";
    el.dataset.index = i + 1;

    const sticker = p.sticker ? `<span class="sticker">${p.sticker}</span>` : "";
    const doodle  = p.doodle  ? `<span class="doodle">${p.doodle}</span>`   : "";

    const photoBlock = p.photo !== undefined
      ? photoHTML(p.photo)
      : (p.map ? mapHTML() : "");

    el.innerHTML = `
      <div class="face front">
        <span class="tape"></span>
        ${doodle}
        <div class="inner">
          <span class="label">${esc(p.label)}</span>
          <h2 class="title">${esc(p.title)}</h2>
          <p class="text">${esc(p.text)}</p>
          ${photoBlock}
          ${p.caption ? `<div class="caption"><span>${esc(p.caption)}</span><span>♡</span></div>` : ""}
          ${p.note ? `<p class="note">${esc(p.note)}</p>` : ""}
          <span class="pagenum">— ${i + 1} / ${total} —</span>
        </div>
        ${sticker}
      </div>
      <div class="face back"><span>♡</span></div>
    `;

    el.addEventListener("click", () => goTo(i + 1));
    book.appendChild(el);
  });

  // Cover page
  const cover = document.createElement("div");
  cover.className = "page";
  cover.dataset.index = 0;
  cover.innerHTML = `
    <div class="face cover">
      <span class="cover-sticker l">🌸</span>
      <span class="cover-sticker r">🎀</span>
      <div class="cover-top">✦ ❦ ✦</div>
      <div>
        <div class="cover-small">A Little Book For</div>
        <div class="cover-title">Shifa</div>
        <div class="cover-flower">🌹</div>
        <div class="cover-small" style="margin-top:14px">from Ahad ♡</div>
      </div>
      <div class="cover-bottom">— a little universe, just for you —</div>
    </div>
    <div class="face back"><span>♡</span></div>
  `;
  cover.addEventListener("click", () => goTo(1));
  book.insertBefore(cover, book.children[1] || null);
}

/* ---------------- Flip logic ---------------- */
function pages() {
  return [...book.querySelectorAll(".page")];
}

function goTo(n, silent) {
  n = Math.max(0, Math.min(total, n));
  const all = pages();

  all.forEach((pg, i) => {
    pg.classList.remove("is-active", "flipped", "far");
    if (i < n) {
      pg.classList.add("flipped");
    } else if (i === n) {
      pg.classList.add("is-active");
    } else {
      pg.classList.add("far");
    }
  });

  current = n;

  const coverShowing = n === 0;
  prevBtn.disabled = coverShowing;
  nextBtn.disabled = n >= total;

  counter.textContent = coverShowing ? "Cover" : `Page ${n} of ${total}`;
  bar.style.transform = `scaleX(${n / total})`;

  if (!silent && statusEl && !statusEl.dataset.locked) {
    statusEl.textContent = coverShowing
      ? "Tap the cover to open our little book ♡"
      : `Page ${n} — tap, swipe, or use the arrows ♡`;
  }
}

prevBtn.addEventListener("click", () => goTo(current - 1));
nextBtn.addEventListener("click", () => goTo(current + 1));

/* ---------------- Keyboard ---------------- */
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") goTo(current + 1);
  if (e.key === "ArrowLeft")  goTo(current - 1);
});

/* ---------------- Swipe ---------------- */
let touchX = null, touchY = null;
bookArea.addEventListener("touchstart", (e) => {
  if (e.touches.length !== 1) return;
  touchX = e.touches[0].clientX;
  touchY = e.touches[0].clientY;
}, { passive: true });

bookArea.addEventListener("touchend", (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  const dy = e.changedTouches[0].clientY - touchY;
  touchX = touchY = null;
  if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy)) return;
  if (dx < 0) goTo(current + 1);
  else        goTo(current - 1);
}, { passive: true });

/* ---------------- Music ---------------- */
const LS_SONG = "shifa_song_v1";     // { name, dataUrl }
const LS_POS  = "shifa_song_pos_v1";

function setSongTitle(name) {
  songTitle.textContent = name ? `♫ ${name}` : "♫ Your little soundtrack";
}

function loadSong(name, src, restorePos) {
  songAudio.src = src;
  setSongTitle(name);
  songAudio.addEventListener("loadedmetadata", () => {
    if (restorePos && restorePos < songAudio.duration - 2) {
      try { songAudio.currentTime = restorePos; } catch (_) {}
    }
  }, { once: true });
}

function initDefaultSong() {
  const saved = localStorage.getItem(LS_SONG);
  if (saved) {
    try {
      const { name, dataUrl } = JSON.parse(saved);
      const pos = +localStorage.getItem(LS_POS) || 0;
      loadSong(name, dataUrl, pos);
      return;
    } catch (_) {}
  }
  // Fallback: song.mp3 from root
  loadSong("song.mp3", DEFAULT_SONG, 0);
}

musicBtn.addEventListener("click", () => {
  musicCard.classList.add("show");
  songAudio.play().catch(() => {});
});
musicClose.addEventListener("click", () => {
  musicCard.classList.remove("show");
  songAudio.pause();
});
changeSong.addEventListener("click", () => songFile.click());

songFile.addEventListener("change", () => {
  const f = songFile.files && songFile.files[0];
  if (!f) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      localStorage.setItem(LS_SONG, JSON.stringify({ name: f.name, dataUrl: reader.result }));
      localStorage.setItem(LS_POS, "0");
    } catch (_) {
      statusEl.textContent = "Song is a bit large to save — it will play this session only ♡";
      statusEl.dataset.locked = "1";
    }
    loadSong(f.name, reader.result, 0);
    songAudio.play().catch(() => {});
  };
  reader.readAsDataURL(f);
});

clearSong.addEventListener("click", () => {
  localStorage.removeItem(LS_SONG);
  localStorage.removeItem(LS_POS);
  songAudio.pause();
  // fall back to bundled song.mp3
  loadSong("song.mp3", DEFAULT_SONG, 0);
});

// Save position periodically
setInterval(() => {
  if (!songAudio.paused && songAudio.currentTime > 0) {
    try { localStorage.setItem(LS_POS, String(Math.floor(songAudio.currentTime))); } catch (_) {}
  }
}, 3000);

/* ---------------- Photos (upload all) ---------------- */
const LS_PHOTOS = "shifa_photos_v1";

function applyCustomPhotos(map) {
  // map: { "0": dataUrl, "1": dataUrl, ... }
  document.querySelectorAll(".polaroid").forEach((pol) => {
    const idx = pol.dataset.photo;
    if (idx == null) return;
    const dataUrl = map && map[idx];
    if (!dataUrl) return;
    const img = pol.querySelector("img");
    const ph  = pol.querySelector(".ph");
    if (img) { img.src = dataUrl; img.style.display = "block"; }
    if (ph)  { ph.style.display = "none"; }
  });
}

allPhotos.addEventListener("change", () => {
  const files = [...(allPhotos.files || [])];
  if (!files.length) return;
  const map = {};
  let pending = files.length;
  files.forEach((f, i) => {
    const reader = new FileReader();
    reader.onload = () => {
      map[String(i % 12)] = reader.result;
      if (--pending === 0) {
        try { localStorage.setItem(LS_PHOTOS, JSON.stringify(map)); } catch (_) {}
        applyCustomPhotos(map);
        statusEl.textContent = "Your photos are tucked into the pages ♡";
        statusEl.dataset.locked = "1";
        setTimeout(() => { delete statusEl.dataset.locked; }, 4000);
      }
    };
    reader.readAsDataURL(f);
  });
});

/* ---------------- Confetti / magic canvas ---------------- */
const canvas = document.getElementById("fx");
const ctx = canvas.getContext("2d");
let W = 0, H = 0, DPR = Math.min(window.devicePixelRatio || 1, 2);
function resize() {
  W = canvas.width  = innerWidth  * DPR;
  H = canvas.height = innerHeight * DPR;
  canvas.style.width  = innerWidth + "px";
  canvas.style.height = innerHeight + "px";
}
resize();
addEventListener("resize", resize);

const CONFETTI_COLORS = ["#c2587f", "#e08aab", "#f6cfe1", "#c9a15b", "#a24468", "#fbe3ec"];
let bits = [];

function burst(n = 90) {
  for (let i = 0; i < n; i++) {
    bits.push({
      x: Math.random() * W,
      y: -20 * DPR,
      vx: (Math.random() - 0.5) * 3 * DPR,
      vy: (Math.random() * 3 + 1.5) * DPR,
      s: (Math.random() * 7 + 4) * DPR,
      r: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.2,
      c: CONFETTI_COLORS[(Math.random() * CONFETTI_COLORS.length) | 0],
      heart: Math.random() < 0.25
    });
  }
}

function drawHeart(x, y, s) {
  ctx.beginPath();
  ctx.moveTo(x, y + s * 0.3);
  ctx.bezierCurveTo(x, y, x - s * 0.5, y, x - s * 0.5, y + s * 0.4);
  ctx.bezierCurveTo(x - s * 0.5, y + s * 0.8, x, y + s * 1.1, x, y + s * 1.4);
  ctx.bezierCurveTo(x, y + s * 1.1, x + s * 0.5, y + s * 0.8, x + s * 0.5, y + s * 0.4);
  ctx.bezierCurveTo(x + s * 0.5, y, x, y, x, y + s * 0.3);
  ctx.fill();
}

function loop() {
  ctx.clearRect(0, 0, W, H);
  bits.forEach((b) => {
    b.x += b.vx; b.y += b.vy; b.r += b.vr;
    b.vy += 0.03 * DPR;
    ctx.save();
    ctx.translate(b.x, b.y);
    ctx.rotate(b.r);
    ctx.fillStyle = b.c;
    if (b.heart) drawHeart(0, 0, b.s);
    else ctx.fillRect(-b.s / 2, -b.s / 2, b.s, b.s * 0.6);
    ctx.restore();
  });
  bits = bits.filter((b) => b.y < H + 40 * DPR);
  requestAnimationFrame(loop);
}
loop();

confettiBtn.addEventListener("click", () => burst(110));

/* ---------------- Ambient floating hearts ---------------- */
setInterval(() => {
  if (document.hidden) return;
  if (bits.length > 220) return;
  bits.push({
    x: Math.random() * W,
    y: H + 10,
    vx: (Math.random() - 0.5) * 0.6 * DPR,
    vy: -(Math.random() * 0.7 + 0.4) * DPR,
    s: (Math.random() * 5 + 3) * DPR,
    r: (Math.random() - 0.5),
    vr: (Math.random() - 0.5) * 0.05,
    c: CONFETTI_COLORS[(Math.random() * CONFETTI_COLORS.length) | 0],
    heart: true
  });
}, 900);

/* ---------------- Boot ---------------- */
buildPages();
initDefaultSong();
goTo(0, true);

// load saved custom photos
try {
  const savedPhotos = localStorage.getItem(LS_PHOTOS);
  if (savedPhotos) applyCustomPhotos(JSON.parse(savedPhotos));
} catch (_) {}
