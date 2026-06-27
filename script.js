const story = {
  herName: "Anjali",
  letter: [
    "hii anju bahut dino se eak bat kehni thi samaj nahi aa raha kaise kahu mai nahi janta ki tu ise wapas kholegi bhi ya nahi par agar khol rahi hai to mai bus itna kehna chaunga ki mai janta hu mai confusion create kar raha hu bahut aur tu bhi confised hai ha mana ki mai bus tera jawab sunne ke liye aya tha yaha jiske liye mai har bar koi na koi nya tarika nikal raha hu jo ki shayad galat ho sakta hai jiske liye I am really sorry mai bus itna hi kehna chaata hu yar ki atleast matlab agar tere liye possible ho sake to yar ignore to mat kar mai force nahi karunga i will wait pata nahi kyu par itna pass hoke aur jyada dur se ho gye hai aaisa lag raha hai pehle jaise na to ab bate hoti hai sab badal sa gya hai ye socha bhi nahi tha yar maine mai nahi chaata ki tujhse bat karna hi band ho jaye ha par agar tujhe chayea ki mai chale jau to bata dena i won't say or ask anything bus yar ignore mat karna I know ki tere liye bahut hard hoga wapas believe karna kisi pe bhi khas kar jo hua hai pehle mere liye khud hota/hoga bus yar agar tu jawab dena chaati hai to jaldi de de last mai to yehi kehna chaaunga aaisa nahi hai ki mujhe koi aur pasand hai bus agar jawab yaha rehaye mai jaldi mil jaye kahi jane se pehle to shayad thoda celebrate kar paye \nyour ashik Abhay Suyal\n\n",
    "Dear Anju,\n\n",
    "Har pal jo tumhare saath guzarta hai,\n",
    "ek khoobsurat sapne jaisa lagta hai...\n",
    "jisse main kabhi jaagna nahi chahta.\n\n",
    "Tumhari muskaan,\n",
    "mere sabse andhere dinon mein bhi roshni bhar deti hai.\n",
    "Aur tumhari hansi,\n",
    "mere liye duniya ki sabse pyari dhun hai.\n\n",
    "Main dil se shukraguzaar hoon,\n",
    "tumhare pyaar ke liye,\n",
    "tumhari kindness ke liye,\n",
    "aur us tarah ke liye,\n",
    "jis tarah tum sirf apni maujoodgi se meri zindagi ko aur bhi khoobsurat bana deti ho.\n\n",
    "Tum meri zindagi ki sabse pyari khushi ho. ❤️"

  ],
  memories: [
    {
      image: "assets/fistsoloselfie.jpg",
      caption: "Our first selfie."
    },
    {
      image: "assets/secondselfie.jpg",
      caption: "The smiles I kept replaying quietly."
    },
    {
      image: "assets/meinnashthird.jpg",
      caption: "Our first portrait halaki mai nashe mai hu😂."
    },
    {
      image: "assets/hehe.jpg",
      caption: "hheeeeeheee😁😁."
    },
    {
      image: "assets/twinning.jpg",
      caption: "Headphones twinning😁😂😂😂."
    },
    {
      image: "assets/myzulfe.jpg",
      caption: "no caption needed par likhna hai to see see my zulfe😂😂."
    },
    {
      image: "assets/Perfectshot.jpg",
      caption: "💝💝."
    },
    {
      image: "assets/candid.jpg",
      caption: "galti se aya hua candid😁😁aulthoudh photo ke bich mai ayi tu."
    },
    {
      image: "assets/Babyanju.jpg",
      caption: "cutie DON😁💝."
    },
    {
      image: "assets/anju1.jpg",
      caption: "ufff ye smile💘."
    },
    {
      image: "assets/anju.jpg",
      caption: "shabdo ki kami hai thodi😅, but would you like to meet my bandi😁😁."
    },
    {
      image: "assets/curl.jpg",
      caption: "😘😻💓."
    },
    {
      image: "assets/cute.jpg",
      caption: "ufffff 🫠🫠🫠🫠."
    },
    {
      image: "assets/mine.jpg",
      caption: "ufffff 🫠🫠🫠🫠."
    },
    {
      image: "assets/Lab.jpg",
      caption: "😅aachi hai yar photo mujhe to lag rahi hai."
    },
    {
      image: "assets/mine.jpg",
      caption: "😘😘😘😘."
    },
    {
      image: "assets/forth.jpg",
      caption: "🫠🫠🫠🫠."
    }

  ],
  shayari: [
    "Teri muskurahat meri subah ban jaati hai,\n",
    "teri baaton se har shaam saj jaati hai.\n\n",
    "Main lafzon mein kaise bataun tujhe,\n",
    "tu paas ho toh duniya khoobsurat lag jaati hai.\n\n",
    "Bas itna sa khwaab hai mera,\n",
    "har kal mein tera saath ho."
  ]
};

const params = new URLSearchParams(window.location.search);
if (params.get("name")) {
  story.herName = params.get("name").trim();
  story.letter[0] = `Dear ${story.herName},\n\n`;
}

const scenes = [...document.querySelectorAll(".scene")];
const dots = [...document.querySelectorAll(".dot")];
const nextButtons = [...document.querySelectorAll("[data-next]")];
const landingName = document.querySelector("#landing-name");
const letterText = document.querySelector("#letter-text");
const shayariText = document.querySelector("#shayari-text");
const letterContinue = document.querySelector("#letter-continue");
const shayariContinue = document.querySelector("#shayari-continue");
const invitation = document.querySelector("#invitation");
const openInvitation = document.querySelector("#open-invitation");
const yesButton = document.querySelector("#yes-button");
const noButton = document.querySelector("#no-button");
const memoryGrid = document.querySelector("#memory-grid");
const petalField = document.querySelector(".petal-field");
const canvas = document.querySelector("#confetti-canvas");
const ctx = canvas.getContext("2d");

let currentScene = 0;
let letterTyped = false;
let shayariTyped = false;
let celebrationStarted = false;
let confettiRunning = false;
let confettiPieces = [];
let audio;

landingName.textContent = `Hi, ${story.herName}`;

function createPetals() {
  for (let index = 0; index < 26; index += 1) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.setProperty("--left", `${Math.random() * 100}%`);
    petal.style.setProperty("--sway", `${Math.random() * 12 - 6}rem`);
    petal.style.setProperty("--fall-time", `${9 + Math.random() * 9}s`);
    petal.style.setProperty("--delay", `${Math.random() * -12}s`);
    petalField.appendChild(petal);
  }
}

function renderMemories() {
  const memoryCount = story.memories.length;
  const desktopColumns = Math.min(Math.max(memoryCount, 1), 4);

  memoryGrid.innerHTML = "";
  memoryGrid.dataset.count = String(memoryCount);
  memoryGrid.style.setProperty("--memory-columns", desktopColumns);
  memoryGrid.style.setProperty("--memory-width", `${desktopColumns * 15 + Math.max(desktopColumns - 1, 0)}rem`);

  story.memories.forEach((memory, index) => {
    const card = document.createElement("article");
    card.className = "memory-card";
    card.style.setProperty("--tilt", `${[-2, 1.4, -0.8, 1.8, -1.5][index % 5]}deg`);

    const photo = document.createElement("img");
    photo.className = "memory-photo";
    photo.src = memory.image;
    photo.alt = memory.caption;
    photo.loading = "lazy";

    const caption = document.createElement("p");
    caption.textContent = memory.caption;

    card.append(photo, caption);
    memoryGrid.appendChild(card);
  });
}

function showScene(index) {
  currentScene = Math.max(0, Math.min(index, scenes.length - 1));
  scenes.forEach((scene, sceneIndex) => {
    scene.classList.toggle("is-active", sceneIndex === currentScene);
  });
  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === currentScene);
  });

  document.body.classList.toggle("proposal-mode", scenes[currentScene].dataset.scene === "proposal");
  document.body.classList.toggle("final-mode", scenes[currentScene].dataset.scene === "final");

  const active = scenes[currentScene].dataset.scene;
  if (active === "letter" && !letterTyped) {
    letterTyped = true;
    typeInto(letterText, story.letter, 42, () => {
      letterContinue.classList.remove("is-hidden");
    });
  }
  if (active === "proposal") {
    audio?.setMode("heartbeat");
  }
  if (active === "celebration" && !celebrationStarted) {
    celebrationStarted = true;
    audio?.setMode("happy");
    startCelebration();
  }
  if (active !== "celebration") {
    confettiRunning = false;
  }
  if (active === "shayari" && !shayariTyped) {
    shayariTyped = true;
    typeInto(shayariText, story.shayari, 62, () => {
      shayariContinue.classList.remove("is-hidden");
    });
  }
}

function nextScene() {
  audio = audio || new StoryAudio();
  audio.start();
  showScene(currentScene + 1);
}

function typeInto(element, parts, speed, done) {
  element.textContent = "";
  let partIndex = 0;
  let charIndex = 0;

  function tick() {
    if (partIndex >= parts.length) {
      done();
      return;
    }

    const part = parts[partIndex];
    element.textContent += part[charIndex];
    charIndex += 1;

    if (charIndex >= part.length) {
      partIndex += 1;
      charIndex = 0;
      window.setTimeout(tick, 520);
      return;
    }

    window.setTimeout(tick, speed + Math.random() * 32);
  }

  tick();
}

nextButtons.forEach((button) => {
  button.addEventListener("click", nextScene);
});

openInvitation.addEventListener("click", () => {
  audio = audio || new StoryAudio();
  audio.start();
  invitation.classList.add("is-open");
  openInvitation.disabled = true;
  window.setTimeout(() => showScene(2), 1450);
});

function moveNoButton() {
  const row = noButton.parentElement.getBoundingClientRect();
  const button = noButton.getBoundingClientRect();
  const maxX = Math.max(0, row.width - button.width);
  const maxY = Math.max(0, row.height - button.height);
  noButton.style.position = "absolute";
  noButton.style.left = `${Math.random() * maxX}px`;
  noButton.style.top = `${Math.random() * maxY}px`;
  noButton.textContent = ["NO 🙈", "Are you sure?", "Think again ❤️", "Too slow"][Math.floor(Math.random() * 4)];
}

noButton.addEventListener("pointerenter", moveNoButton);
noButton.addEventListener("focus", moveNoButton);
noButton.addEventListener("click", (event) => {
  event.preventDefault();
  moveNoButton();
});

yesButton.addEventListener("click", () => {
  showScene(4);
});

function fitCanvas() {
  const ratio = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * ratio;
  canvas.height = window.innerHeight * ratio;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function startCelebration() {
  fitCanvas();
  confettiRunning = true;
  confettiPieces = Array.from({ length: 190 }, () => ({
    x: Math.random() * window.innerWidth,
    y: -30 - Math.random() * window.innerHeight,
    size: 5 + Math.random() * 9,
    speed: 2 + Math.random() * 4.5,
    spin: Math.random() * Math.PI,
    color: ["#ff4f87", "#fff1f4", "#f4c56f", "#ff8bad", "#ffffff"][Math.floor(Math.random() * 5)],
    shape: Math.random() > 0.35 ? "petal" : "heart"
  }));
  requestAnimationFrame(drawConfetti);
}

function drawConfetti() {
  if (!confettiRunning) {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    return;
  }
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  confettiPieces.forEach((piece) => {
    piece.y += piece.speed;
    piece.x += Math.sin(piece.y * 0.018) * 1.3;
    piece.spin += 0.08;
    if (piece.y > window.innerHeight + 30) {
      piece.y = -30;
      piece.x = Math.random() * window.innerWidth;
    }

    ctx.save();
    ctx.translate(piece.x, piece.y);
    ctx.rotate(piece.spin);
    ctx.fillStyle = piece.color;
    if (piece.shape === "heart") {
      ctx.font = `${piece.size + 7}px serif`;
      ctx.fillText("❤️", -piece.size / 2, piece.size / 2);
    } else {
      ctx.beginPath();
      ctx.ellipse(0, 0, piece.size * 0.46, piece.size, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  });
  requestAnimationFrame(drawConfetti);
}

class StoryAudio {
  constructor() {
    this.audio = new Audio("assets/song.mp3");

    this.audio.loop = true;
    this.audio.volume = 0.28;

    // Better playback
    this.audio.preload = "auto";
  }

  start() {
    this.audio.play().catch(() => {});
  }

  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  pause() {
    this.audio.pause();
  }

  resume() {
    this.audio.play().catch(() => {});
  }

  setVolume(volume) {
    this.audio.volume = Math.max(0, Math.min(1, volume));
  }

  fadeIn(duration = 2000) {
    this.audio.volume = 0;
    this.audio.play().catch(() => {});

    const target = 0.28;
    const step = target / (duration / 50);

    const fade = setInterval(() => {
      if (this.audio.volume < target) {
        this.audio.volume = Math.min(target, this.audio.volume + step);
      } else {
        clearInterval(fade);
      }
    }, 50);
  }

  fadeOut(duration = 1500) {
    const step = this.audio.volume / (duration / 50);

    const fade = setInterval(() => {
      if (this.audio.volume > 0) {
        this.audio.volume = Math.max(0, this.audio.volume - step);
      } else {
        this.audio.pause();
        clearInterval(fade);
      }
    }, 50);
  }
}

window.addEventListener("resize", fitCanvas);
createPetals();
renderMemories();
showScene(0);
