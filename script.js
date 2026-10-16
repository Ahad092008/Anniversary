"use strict";

/* ================= Content ================= */
const pages = [
  {
    label: "our first little page",
    title: "Our Little Forever",
    doodle: "🎀",
    sticker: "🧸",
    photo: true,
    text: "Shifa, welcome to our tiny corner of the world. ♡ I made this because sometimes a message feels too small for everything I want to say. So I gave my feelings a little book, pink pages, and a few too many bows. Imagine me beside you, smiling like an idiot and getting shy halfway through saying something sweet.",
    note: "start here, my favourite girl ✧",
    caption: "the beginning of our little forever ♡",
  },
  {
    label: "anniversary keepsake",
    title: "17 October — Our Day",
    doodle: "🗓️",
    sticker: "💌",
    photo: true,
    text: "17 October. Just a date to everyone else, but ours to keep close. 💗 It lets me pause and think about our conversations, silly moments, patience, missing-you moments, and all the little ways you became important to me. Happy anniversary, Shifa. May this date keep giving us reasons to smile, year after year.",
    note: "one date, so many feelings",
    caption: "somehow, you became my favourite person",
  },
  {
    label: "my girl",
    title: "The Girl I Adore 🎀",
    doodle: "🌷",
    sticker: "🎀",
    photo: true,
    text: "There is something about you that makes you you. You can be cute, stubborn, funny, soft, dramatic… sometimes all in one conversation. 😭 I adore the person behind all those little moods, not just the easy days. You never have to perform some perfect version of yourself for me. My favourite is the real Shifa.",
    note: "no edits needed, you are you",
    caption: "one date, a thousand soft feelings",
  },
  {
    label: "little everyday love",
    title: "My Favourite Human",
    doodle: "☁️",
    sticker: "🐻",
    photo: true,
    text: "If something funny happens, you are one of the first people I want to tell. If my day feels long, talking to you can make it lighter. And when nothing special happens, I still like having you there. I love this kind of closeness: sharing ordinary bits of life with my favourite human.",
    note: "you make the ordinary feel ours",
    caption: "our jokes deserve their own little corner",
  },
  {
    label: "details worth keeping",
    title: "Little Things I Love About You",
    doodle: "✿",
    sticker: "🌸",
    photo: true,
    text: "I love your way of talking, the moments you make me laugh without trying, the softness you show in your own way, and tiny habits that probably seem normal to you. ♡ I want to keep noticing the small details—not because they are grand, but because they belong to you.",
    note: "the tiny things are never tiny to me",
    caption: "the day the distance felt smaller",
  },
  {
    label: "our inside joke",
    title: "Pagal–Shukriya Club",
    doodle: "🤡",
    sticker: "💗",
    photo: false,
    text: "You: “Pagal.” Me: “Shukriya.” 😭🤝 How did this become our thing? You call me pagal and I thank you like you have handed me an award. If you call me pagal ten years from now, I will probably still say shukriya. Some traditions are too important to retire.",
    note: "officially certified: your pagal",
    caption: "tiny details, big feelings",
  },
  {
    label: "the day we met",
    title: "The Day I Saw You",
    doodle: "✨",
    sticker: "🦋",
    photo: true,
    text: "Meeting you in real life is a memory I can replay and still feel something. You were no longer just a name on my screen—you were actually there, in the same place as me. For a little while, the distance was not a map or a countdown. It was gone, and I got to be near you.",
    note: "a real-life memory I hold close",
    caption: "a little reminder of what I adore",
  },
  {
    label: "memory no. 01",
    title: "My Most Precious Memory",
    doodle: "🫶",
    sticker: "📸",
    photo: true,
    text: "Of all the things I could keep in a box, I would keep that meeting somewhere safe. Not because every second had to be perfect, but because it was ours. I hope this is only the first of many memories: more days together, more photographs, and more stories that start with “remember when…?”",
    note: "one meeting, a place in my heart forever",
    caption: "a memory I would happily relive",
  },
  {
    label: "our little route",
    title: "Lucknow ♡ Gorakhpur",
    doodle: "🗺️",
    sticker: "💌",
    photo: false,
    map: true,
    text: "Two cities, one stubborn little connection. 🗺️ The map can show roads and miles, but not the way someone can feel close while far away. Some days I wish the journey were shorter; most days I look forward to the next time it brings us closer. Until then, here is our dotted route—one day at a time.",
    note: "distance is real; so is our closeness",
    caption: "a pocketful of our silly moments",
  },
  {
    label: "letters for later",
    title: "Little Letters for You 💌",
    doodle: "💌",
    sticker: "✉️",
    photo: false,
    text: "For a tired day: please rest; you do not have to solve everything at once. For a day you doubt yourself: you are more than one bad moment. For a day you miss me: picture a tight hug that lasts a few seconds longer than expected. And for an ordinary day: hi, Shifa. I am glad you are in my life. That is all. That is a lot.",
    note: "open whichever letter your heart needs",
    caption: "things I hope you never forget",
  },
  {
    label: "your smile goes here",
    title: "Your Smile, My Sukoon",
    doodle: "☀️",
    sticker: "🌼",
    photo: true,
    text: "I do not need you to be cheerful every minute. I love when your smile arrives naturally, when you laugh properly, or when our conversation gets silly. 🤍 There is sukoon in sharing a small happy moment with you. I hope I can give you that feeling too—not by fixing every problem, but by being someone you can breathe around.",
    note: "may your smile always find room to return",
    caption: "a hug saved for the days apart",
  },
  {
    label: "nickname collection",
    title: "The Nicknames Only We Know",
    doodle: "🌸",
    sticker: "🎀",
    photo: true,
    text: "My Shifa, meri jaan, cutie, little lily, madam ji, and the one-and-only pagal-caller. 🎀 Some names are sweet, some silly, and some would sound ridiculous to anyone outside our world. And because you love lilies, here is a tiny lily—a reminder that I pay attention to the things you love.",
    note: "reserved for you, nobody else",
    caption: "every photo has a story only we know",
  },
  {
    label: "hug delivery: in progress",
    title: "If I Could Be There Right Now",
    doodle: "🫂",
    sticker: "☁️",
    photo: false,
    text: "I would not plan some huge scene. I would just want to see you, sit close, and hear you talk without a screen between us. Maybe we would get food, tease each other, and spend too long deciding what to do next. When it was time to leave, I would wish the day had a few more hours. 🫂",
    note: "sending a hug across the miles",
    caption: "my favourite kind of ordinary",
  },
  {
    label: "exhibit A: us",
    title: "Our Little Memory Museum",
    doodle: "🖼️",
    sticker: "⭐",
    photo: true,
    text: "Imagine a tiny museum with a pink door. Inside: favourite photos, screenshots that make no sense without context, jokes we keep repeating, conversations we wish we could save, and that precious day we met. 📸 The exhibits are precious because we know what they mean. Add your pictures and let this museum grow with us.",
    note: "admission fee: one smile ♡",
    caption: "little names, endless affection",
  },
  {
    label: "our someday",
    title: "A Future With You",
    doodle: "🕊️",
    sticker: "🏡",
    photo: true,
    text: "When I picture our future, I picture peace more than perfection: a calm home, shared meals, sleepy conversations, small errands together, and laughing about something nobody else understands. 🏡 I want us both to grow and still come back to each other with kindness. Less rushing, more sukoon. Just a steady, warm “I am home” feeling.",
    note: "a peaceful life, built gently together",
    caption: "until I can say this beside you",
  },
  {
    label: "from me to you",
    title: "A Letter From My Heart",
    doodle: "♡",
    sticker: "🕯️",
    photo: false,
    text: "Shifa, I cannot always find the exact words for what I feel. Sometimes I hide soft things behind jokes; sometimes I miss you and do not know how to make the miles smaller. I am grateful for the memories we have and the ones still ahead. I hope we keep choosing honesty, patience, laughter, and care. You matter to me, more than this little book can fit.",
    note: "written with a very full heart",
    caption: "a home made of moments and kindness",
  },
  {
    label: "our anniversary page",
    title: "Happy Anniversary, Shifa 💗",
    doodle: "💗",
    sticker: "💐",
    photo: true,
    text: "Happy anniversary, my Shifa. 17 October will always be a sweet reminder of us. 🎀 Thank you for the silly pagal–shukriya moments, the memory of meeting you, and giving me someone to look forward to seeing again. I hope the next chapters bring more time together, more lilies, more laughter, and a little less distance. I am happy it is you, meri favourite person. ♡",
    note: "with love, your Ahad · always cheering for us",
    caption: "one more page, still so much love",
  },
];

const MAP_SVG = `<div class="map-wrap"><svg viewBox="0 0 440 190" role="img" aria-label="Route between Lucknow and Gorakhpur"><defs><linearGradient id="land" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#fff7ed"/><stop offset="1" stop-color="#f5e2ed"/></linearGradient></defs><rect width="440" height="190" fill="url(#land)"/><path d="M-10 45C60 15 95 80 145 52S235 22 270 62 360 100 455 48" fill="none" stroke="#d4e8dc" stroke-width="18" opacity=".8"/><path d="M-10 142C55 112 108 160 164 125S270 140 320 104 395 128 455 100" fill="none" stroke="#d4e8dc" stroke-width="12" opacity=".7"/><path d="M95 73Q190 10 300 112" stroke="#cf86a4" stroke-width="3" fill="none" class="route"/><g transform="translate(95 73)"><circle r="19" fill="#fff" stroke="#d88ca9" stroke-width="2"/><text text-anchor="middle" y="6" font-size="20">🌸</text></g><g transform="translate(300 112)"><circle r="19" fill="#fff" stroke="#d88ca9" stroke-width="2"/><text text-anchor="middle" y="6" font-size="20">💗</text></g><g font-family="Arial" font-size="13" font-weight="bold" fill="#9b5f7a"><text x="95" y="45" text-anchor="middle">LUCKNOW</text><text x="300" y="147" text-anchor="middle">GORAKHPUR</text></g><g fill="#d8a7b9"><text x="195" y="58" font-size="19">♡</text><text x="220" y="88" font-size="12">♡</text><text x="170" y="123" font-size="15">✧</text><text x="350" y="55" font-size="18">✿</text></g></svg></div><div class="map-caption">two cities · one little universe ♡</div>`;

/* ================= Helpers ================= */
const $ = (id) => document.getElementById(id);
const rand = (a, b) => a + Math.random() * (b - a);
const statusEl = $("status");
const say = (msg) => {
  statusEl.textContent = msg;
};

/* ---- IndexedDB (song + photos persist in this browser) ---- */
function openDB() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) return reject(new Error("IndexedDB unavailable"));
    const req = indexedDB.open("ShifaAnniversaryDiary", 2);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains("song")) db.createObjectStore("song");
      if (!db.objectStoreNames.contains("photos"))
        db.createObjectStore("photos");
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function idb(store, mode, fn) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, mode);
    const req = fn(tx.objectStore(store));
    tx.oncomplete = () => {
      db.close();
      resolve(req ? req.result : undefined);
    };
    tx.onerror = tx.onabort = () => {
      db.close();
      reject(tx.error);
    };
  });
}

/* Downscale big phone photos so the page stays smooth */
async function shrink(file, max = 900) {
  try {
    const bmp = await createImageBitmap(file);
    const r = Math.min(1, max / Math.max(bmp.width, bmp.height));
    const c = document.createElement("canvas");
    c.width = Math.round(bmp.width * r);
    c.height = Math.round(bmp.height * r);
    c.getContext("2d").drawImage(bmp, 0, 0, c.width, c.height);
    if (bmp.close) bmp.close();
    return await new Promise((res) =>
      c.toBlob((b) => res(b || file), "image/jpeg", 0.86),
    );
  } catch {
    return file;
  }
}

/* ================= Book ================= */
const book = $("book");
const sheets = [];
const photoSlots = [];
let current = 0;

function coverFace() {
  const f = document.createElement("div");
  f.className = "face cover";
  f.innerHTML = `<div class="cover-top">✿ ✧ ♡ ✧ ✿</div><span class="cover-sticker l">🧸</span><span class="cover-sticker r">🦋</span>
    <div><div class="cover-small">a little diary for</div><h2 class="cover-title">My Shifa</h2><div class="cover-small">17 pages · one little forever</div><div class="cover-flower">🌸 ♡ 🌷</div></div>
    <div class="cover-bottom">made slowly, with all my love</div>`;
  return f;
}
function backFace() {
  const f = document.createElement("div");
  f.className = "face back";
  f.textContent = "♡";
  return f;
}
function pageFace(p, n) {
  const f = document.createElement("div");
  f.className = "face";
  f.innerHTML = `<span class="tape"></span><span class="doodle">${p.doodle}</span><span class="sticker">${p.sticker}</span>
    <div class="inner">
      <div class="label"></div><h2 class="title"></h2><p class="text"></p>
      <div class="caption"><span class="cap-text"></span><span>♡ ✧ 🎀</span></div>
      ${p.map ? MAP_SVG : ""}
      ${p.photo ? `<label class="polaroid"><span class="pic"><img alt="Our memory"><span class="ph">♡ add a photo ♡</span></span><small>tap to add / change</small><input type="file" accept="image/*" hidden></label>` : ""}
      <p class="note"></p><span class="pagenum">♡ ${n} / 17 ♡</span>
    </div>`;
  f.querySelector(".label").textContent = p.label;
  f.querySelector(".title").textContent = p.title;
  f.querySelector(".text").textContent = p.text;
  f.querySelector(".cap-text").textContent = p.caption;
  f.querySelector(".note").textContent = p.note;

  if (p.photo) {
    const img = f.querySelector("img");
    const ph = f.querySelector(".ph");
    const input = f.querySelector("input");
    const slot = {
      key: "photo" + photoSlots.length,
      url: null,
      show(blob) {
        if (slot.url) URL.revokeObjectURL(slot.url);
        slot.url = URL.createObjectURL(blob);
        img.src = slot.url;
        img.style.display = "block";
        ph.style.display = "none";
      },
      async set(file) {
        const blob = await shrink(file);
        slot.show(blob);
        try {
          await idb("photos", "readwrite", (s) => s.put(blob, slot.key));
        } catch (e) {
          console.error(e);
        }
      },
    };
    input.addEventListener("change", () => {
      const file = input.files && input.files[0];
      input.value = "";
      if (file && file.type.startsWith("image/")) slot.set(file);
    });
    photoSlots.push(slot);
  }
  return f;
}

function addSheet(front, back, z) {
  const s = document.createElement("div");
  s.className = "page";
  s.style.zIndex = z;
  s.append(front, back);
  book.appendChild(s);
  sheets.push(s);
}
addSheet(coverFace(), backFace(), pages.length + 1);
pages.forEach((p, i) =>
  addSheet(pageFace(p, i + 1), backFace(), pages.length - i),
);

/* ================= Navigation ================= */
const total = sheets.length;
const counter = $("counter"),
  prev = $("prev"),
  next = $("next"),
  bar = $("bar");

function update() {
  sheets.forEach((s, i) => {
    s.classList.toggle("flipped", i < current);
    s.classList.toggle("is-active", i === current);
    s.classList.toggle("far", i < current - 1 || i > current + 1); // hide off-stage pages: big speed-up
  });
  counter.textContent = current === 0 ? "Cover" : `Page ${current} / 17`;
  prev.disabled = current === 0;
  next.disabled = current >= total - 1;
  bar.style.transform = `scaleX(${current / (total - 1)})`;
}
const go = (d) => {
  const n = current + d;
  if (n < 0 || n > total - 1) return;
  current = n;
  update();
};
next.addEventListener("click", () => go(1));
prev.addEventListener("click", () => go(-1));

sheets.forEach((s, i) =>
  s.addEventListener("click", (e) => {
    if (i !== current || e.target.closest("label,input,button")) return;
    const r = s.getBoundingClientRect();
    go(e.clientX - r.left < r.width * 0.18 && current > 0 ? -1 : 1);
  }),
);
document.addEventListener("keydown", (e) => {
  if (e.target.closest && e.target.closest("audio,input")) return;
  if (e.key === "ArrowRight") go(1);
  if (e.key === "ArrowLeft") go(-1);
});
let startX = null;
const area = $("bookArea");
area.addEventListener(
  "touchstart",
  (e) => {
    startX = e.touches[0].clientX;
  },
  { passive: true },
);
area.addEventListener(
  "touchend",
  (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    startX = null;
    if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1);
  },
  { passive: true },
);
update();

/* ================= Photos ================= */
$("allPhotos").addEventListener("change", async (e) => {
  const files = [...(e.target.files || [])].filter((f) =>
    f.type.startsWith("image/"),
  );
  e.target.value = "";
  if (!files.length) return say("Choose photos to make this diary yours ♡");
  const n = Math.min(files.length, photoSlots.length);
  say("Tucking your photos in… ♡");
  for (let i = 0; i < n; i++) await photoSlots[i].set(files[i]);
  say(
    `${n} photo(s) tucked into your diary ♡ saved in this browser` +
      (files.length > n ? ` · only the first ${n} fit` : ""),
  );
});
(async () => {
  for (const slot of photoSlots) {
    try {
      const blob = await idb("photos", "readonly", (s) => s.get(slot.key));
      if (blob) slot.show(blob);
    } catch (e) {
      console.error(e);
    }
  }
})();

/* ================= Music ================= */
const musicBtn = $("music"),
  musicCard = $("musicCard"),
  audio = $("songAudio"),
  songFile = $("songFile"),
  songTitle = $("songTitle");
let songUrl = null;

function setSong(blob, name, autoplay) {
  if (songUrl) URL.revokeObjectURL(songUrl);
  songUrl = URL.createObjectURL(blob);
  audio.src = songUrl;
  const label = (name || "Our song").replace(/\.[^.]+$/, "");
  songTitle.textContent = "♫ " + label;
  musicBtn.textContent = "♫ " + label;
  musicCard.classList.add("show");
  say("Saved in this browser until you change it ♡");
  if (autoplay)
    audio.play().catch(() => say("Song saved ♡ Tap play when you are ready."));
}
musicBtn.addEventListener("click", () => {
  musicCard.classList.add("show");
  if (!audio.src) return songFile.click();
  if (audio.paused)
    audio
      .play()
      .catch(() => say("Tap play in the player to start your song ♡"));
  else audio.pause();
});
$("changeSong").addEventListener("click", () => songFile.click());
$("musicClose").addEventListener("click", () =>
  musicCard.classList.remove("show"),
);

songFile.addEventListener("change", async (e) => {
  const file = e.target.files && e.target.files[0];
  e.target.value = "";
  if (!file) return;
  if (
    !file.type.startsWith("audio/") &&
    !/\.(mp3|m4a|wav|ogg|aac|flac)$/i.test(file.name)
  )
    return say("Please choose an audio file, like MP3 or M4A ♡");
  setSong(file, file.name, true);
  try {
    await idb("song", "readwrite", (s) =>
      s.put({ blob: file, name: file.name }, "chosen"),
    );
  } catch (err) {
    say("Playing ♡ but this browser would not save it (private mode?).");
    console.error(err);
  }
});
$("clearSong").addEventListener("click", async () => {
  audio.pause();
  audio.removeAttribute("src");
  audio.load();
  if (songUrl) {
    URL.revokeObjectURL(songUrl);
    songUrl = null;
  }
  try {
    await idb("song", "readwrite", (s) => s.delete("chosen"));
  } catch (err) {
    console.error(err);
  }
  songTitle.textContent = "♫ Your little soundtrack";
  musicBtn.textContent = "♫ Choose our song";
  say("Song removed. Choose another whenever you like ♡");
});
audio.addEventListener("play", () =>
  say("Your song is playing — turn pages, it keeps going ♡"),
);
audio.addEventListener("pause", () => {
  if (audio.src) say("Song paused — your saved song is still here ♡");
});
audio.addEventListener("error", () => {
  if (audio.src) say("This audio format may not play here. Try an MP3 ♡");
});
(async () => {
  try {
    const saved = await idb("song", "readonly", (s) => s.get("chosen"));
    if (saved && saved.blob) {
      setSong(saved.blob, saved.name, false);
      say("Your saved song is ready ♡ Tap play whenever you want.");
    }
  } catch (err) {
    console.error(err);
  }
})();

/* ================= Confetti (Web Animations, no layout work) ================= */
$("confetti").addEventListener("click", () => {
  const syms = ["♡", "✧", "🌸", "🎀", "💗", "⭐", "🦋", "🌷"];
  const frag = document.createDocumentFragment();
  for (let i = 0; i < 22; i++) {
    const el = document.createElement("span");
    el.textContent = syms[(Math.random() * syms.length) | 0];
    el.style.cssText = `position:fixed;z-index:30;left:${rand(5, 95)}vw;top:${rand(35, 80)}vh;font-size:${rand(17, 36)}px;pointer-events:none;will-change:transform,opacity`;
    frag.appendChild(el);
    el.animate(
      [
        { transform: "translate(0,0) rotate(0)", opacity: 1 },
        {
          transform: `translate(${rand(-80, 80)}px,${rand(-300, -140)}px) rotate(${rand(-180, 180)}deg)`,
          opacity: 0,
        },
      ],
      { duration: 1600, easing: "ease-out", fill: "forwards" },
    ).onfinish = () => el.remove();
  }
  document.body.appendChild(frag);
  say("A little shower of magic, just for you ✨");
});

/* ================= Background particles: ONE canvas instead of ~70 animated DOM nodes ================= */
(function particles() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const cv = $("fx"),
    ctx = cv.getContext("2d");
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let W = 0,
    H = 0;

  function resize() {
    W = innerWidth;
    H = innerHeight;
    cv.width = W * dpr;
    cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  addEventListener("resize", resize);

  function glyph(ch, px, color) {
    const s = Math.ceil(px * 1.6);
    const c = document.createElement("canvas");
    c.width = c.height = s * dpr;
    const g = c.getContext("2d");
    g.scale(dpr, dpr);
    g.font = `${px}px serif`;
    g.textAlign = "center";
    g.textBaseline = "middle";
    g.fillStyle = color;
    g.fillText(ch, s / 2, s / 2);
    c.size = s;
    return c;
  }
  function glow() {
    const s = 16,
      c = document.createElement("canvas");
    c.width = c.height = s * dpr;
    const g = c.getContext("2d");
    g.scale(dpr, dpr);
    const grad = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    grad.addColorStop(0, "rgba(255,250,215,1)");
    grad.addColorStop(0.4, "rgba(246,201,222,.55)");
    grad.addColorStop(1, "rgba(246,201,222,0)");
    g.fillStyle = grad;
    g.fillRect(0, 0, s, s);
    c.size = s;
    return c;
  }

  const k = W < 600 ? 0.6 : 1;
  const hearts = ["♡", "✧", "✿", "♥", "❀"].map((ch, i) =>
    glyph(ch, 24, ["#d58aa6", "#e7a6bf", "#c7829e", "#dd8fae", "#e6a9c0"][i]),
  );
  const petals = ["🌸", "🌷"].map((ch) => glyph(ch, 22, "#000"));
  const fly = glow();
  const bfly = glyph("🦋", 26, "#000");
  const ps = [];

  for (let i = 0; i < 16 * k; i++)
    ps.push({
      t: "up",
      s: hearts[i % hearts.length],
      x: rand(0, W),
      y: rand(0, H),
      v: rand(-40, -18),
      amp: rand(10, 28),
      ph: rand(0, 6.28),
      sw: rand(0.4, 1),
      sc: rand(0.5, 1.1),
      a: rand(0.45, 0.8),
      r: rand(-0.4, 0.4),
    });
  for (let i = 0; i < 9 * k; i++)
    ps.push({
      t: "down",
      s: petals[i % 2],
      x: rand(0, W),
      y: rand(0, H),
      v: rand(22, 48),
      amp: rand(18, 40),
      ph: rand(0, 6.28),
      sw: rand(0.3, 0.7),
      sc: rand(0.55, 1),
      a: rand(0.55, 0.85),
      r: rand(0, 6),
    });
  for (let i = 0; i < 14 * k; i++)
    ps.push({
      t: "fly",
      s: fly,
      x: rand(0, W),
      y: rand(0, H),
      v: rand(-6, 6),
      amp: rand(6, 16),
      ph: rand(0, 6.28),
      sw: rand(0.5, 1.4),
      sc: rand(0.5, 1),
    });
  for (let i = 0; i < 3; i++)
    ps.push({
      t: "bf",
      s: bfly,
      x: rand(-40, W),
      y: rand(60, H - 60),
      y0: 0,
      v: rand(26, 46),
      amp: rand(18, 34),
      ph: rand(0, 6.28),
      sw: rand(0.8, 1.4),
      sc: rand(0.8, 1.1),
    });
  ps.forEach((p) => {
    p.y0 = p.y;
    p.x0 = p.x;
  });

  let last = 0,
    raf = 0,
    time = 0;
  function frame(now) {
    raf = requestAnimationFrame(frame);
    const dt = Math.min((now - last) / 1000 || 0, 0.05);
    last = now;
    time += dt;
    ctx.clearRect(0, 0, W, H);
    for (const p of ps) {
      let a = 1,
        rot = 0,
        x = p.x,
        y = p.y;
      if (p.t === "up" || p.t === "down") {
        p.y += p.v * dt;
        if (p.y < -40) p.y = H + 40;
        if (p.y > H + 40) p.y = -40;
        x = p.x0 + Math.sin(time * p.sw + p.ph) * p.amp;
        y = p.y;
        a =
          p.a *
          Math.sin(Math.PI * Math.min(1, Math.max(0, (y + 40) / (H + 80))));
        rot =
          p.t === "down"
            ? p.r + time * 0.4
            : p.r + Math.sin(time * p.sw + p.ph) * 0.3;
      } else if (p.t === "fly") {
        x = p.x + Math.sin(time * p.sw + p.ph) * p.amp;
        y = p.y + Math.cos(time * p.sw * 0.8 + p.ph) * p.amp;
        a = 0.15 + 0.85 * (0.5 + 0.5 * Math.sin(time * p.sw * 2 + p.ph));
      } else {
        p.x += p.v * dt;
        if (p.x > W + 40) p.x = -40;
        x = p.x;
        y = p.y0 + Math.sin(time * p.sw + p.ph) * p.amp;
        rot = Math.sin(time * p.sw * 2 + p.ph) * 0.25;
        a = 0.85;
      }
      if (a <= 0.01) continue;
      const w = p.s.size * p.sc;
      ctx.globalAlpha = a;
      if (rot) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rot);
        ctx.drawImage(p.s, -w / 2, -w / 2, w, w);
        ctx.restore();
      } else {
        ctx.drawImage(p.s, x - w / 2, y - w / 2, w, w);
      }
    }
    ctx.globalAlpha = 1;
  }
  const start = () => {
    if (!raf) {
      last = performance.now();
      raf = requestAnimationFrame(frame);
    }
  };
  const stop = () => {
    cancelAnimationFrame(raf);
    raf = 0;
  };
  document.addEventListener("visibilitychange", () =>
    document.hidden ? stop() : start(),
  );
  start();
})();
