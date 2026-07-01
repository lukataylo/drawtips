/* Draw.tips Practice Room
   Two tools: a guided warm-up timer and a drawing prompt generator.
   No dependencies, no build step. */

(function () {
  "use strict";

  /* ------------------------------------------------------------------
     Warm-up timer
     A session is a sequence of one-minute rounds. Each round names one
     exercise (drawn from the lessons). A soft beep marks round changes.
     ------------------------------------------------------------------ */

  var EXERCISES = [
    { name: "Dot-to-dot lines", tip: "Place two dots, ghost 3 times, commit in one fast stroke. From the shoulder." },
    { name: "Parallel freeways", tip: "One long line, then parallels 5 mm apart. Even spacing beats straightness." },
    { name: "Circles, arm swing", tip: "Let the arm orbit 2–3 times per circle in one flowing motion." },
    { name: "Rows of ellipses", tip: "Draw ellipses touching each other in a row. Keep them the same tilt." },
    { name: "C-curves and S-curves", tip: "Big sweeping curves. Ghost each one, then commit fast." },
    { name: "Draw-through boxes", tip: "Boxes at random angles. Draw all 12 edges — hidden ones lightly." },
    { name: "Cylinders", tip: "Two full ellipses joined by straight sides. The far ellipse is rounder." },
    { name: "Tapered strokes", tip: "Press, then lift smoothly as you stroke. Line should fade like a whisker." }
  ];

  var ROUND_SECONDS = 60;

  var timerEl = document.getElementById("timer-display");
  var exerciseEl = document.getElementById("timer-exercise");
  var progressEl = document.getElementById("timer-progress");
  var startBtn = document.getElementById("timer-start");
  var resetBtn = document.getElementById("timer-reset");
  var durationBtns = Array.prototype.slice.call(document.querySelectorAll(".duration-picker button"));

  var totalRounds = 5;
  var round = 0;            // 0-based index of current round
  var secondsLeft = ROUND_SECONDS;
  var running = false;
  var intervalId = null;
  var plan = [];            // exercise indices for this session

  function buildPlan() {
    plan = [];
    var pool = EXERCISES.map(function (_, i) { return i; });
    // Shuffle so every session is a different circuit
    for (var i = pool.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = pool[i]; pool[i] = pool[j]; pool[j] = t;
    }
    for (var r = 0; r < totalRounds; r++) plan.push(pool[r % pool.length]);
  }

  function beep(freq, ms) {
    try {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      beep.ctx = beep.ctx || new Ctx();
      var ctx = beep.ctx;
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.frequency.value = freq;
      osc.type = "sine";
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + ms / 1000);
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + ms / 1000);
    } catch (e) { /* audio is a nicety, never an error */ }
  }

  function fmt(s) {
    var m = Math.floor(s / 60);
    var sec = s % 60;
    return m + ":" + (sec < 10 ? "0" : "") + sec;
  }

  function render() {
    timerEl.textContent = fmt(secondsLeft);
    if (round < totalRounds) {
      var ex = EXERCISES[plan[round]];
      exerciseEl.innerHTML = "<strong>" + ex.name + "</strong><br><span class=\"muted\">" + ex.tip + "</span>";
      progressEl.textContent = "Round " + (round + 1) + " of " + totalRounds;
    }
  }

  function finish() {
    stopTicking();
    timerEl.textContent = "0:00";
    exerciseEl.innerHTML = "<strong>Warm-up complete — nice work!</strong><br><span class=\"muted\">Your arm is loose. Now draw the prompt of the day below.</span>";
    progressEl.textContent = totalRounds + " rounds done";
    startBtn.textContent = "Start again";
    beep(880, 500);
    round = 0;
    secondsLeft = ROUND_SECONDS;
  }

  function tick() {
    secondsLeft--;
    if (secondsLeft <= 0) {
      round++;
      if (round >= totalRounds) { finish(); return; }
      secondsLeft = ROUND_SECONDS;
      beep(660, 300);
    }
    render();
  }

  function stopTicking() {
    running = false;
    if (intervalId) { clearInterval(intervalId); intervalId = null; }
  }

  function startPause() {
    if (running) {
      stopTicking();
      startBtn.textContent = "Resume";
      return;
    }
    if (plan.length === 0) buildPlan();
    running = true;
    startBtn.textContent = "Pause";
    beep(660, 200);
    render();
    intervalId = setInterval(tick, 1000);
  }

  function reset() {
    stopTicking();
    round = 0;
    secondsLeft = ROUND_SECONDS;
    plan = [];
    startBtn.textContent = "Start warm-up";
    exerciseEl.innerHTML = "<span class=\"muted\">Press start — the timer will call out one exercise per minute.</span>";
    progressEl.textContent = totalRounds + " one-minute rounds";
    timerEl.textContent = fmt(ROUND_SECONDS);
  }

  durationBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      durationBtns.forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
      btn.setAttribute("aria-pressed", "true");
      totalRounds = parseInt(btn.getAttribute("data-minutes"), 10);
      reset();
    });
  });

  if (startBtn) {
    startBtn.addEventListener("click", startPause);
    resetBtn.addEventListener("click", reset);
    reset();
  }

  /* ------------------------------------------------------------------
     Prompt of the day
     Deterministic daily prompt (same for every visitor, changes at
     midnight local time) + a shuffle button for extra prompts.
     ------------------------------------------------------------------ */

  var SUBJECTS = [
    "your favourite mug", "a crumpled piece of paper", "your non-drawing hand",
    "a house plant (or one leaf of it)", "your keys", "a pair of shoes",
    "an egg on a plate", "your phone charger, cable and all", "a slice of bread",
    "a glass of water", "the corner of your room", "a spoon and a fork crossed",
    "an apple with a bite taken out", "your backpack or bag", "a stack of three books",
    "a chair, from a low angle", "a banana", "your desk lamp",
    "a toothbrush in a cup", "a cardboard box, slightly open", "a bottle with a label",
    "a hat", "scissors, half open", "a roll of tape", "a wristwatch or clock",
    "a teapot or kettle", "an onion with papery skin", "a padlock",
    "a simple robot made of boxes and cylinders", "a lighthouse on a cliff",
    "a mushroom house", "a hot air balloon", "a paper boat", "a friendly monster",
    "a snail", "a cat curled up (from a photo or life)", "an umbrella, closed",
    "a treasure chest", "an old key", "a street lamp"
  ];

  var TWISTS = [
    "Construct it from basic forms first, then add detail.",
    "Draw it in under two minutes — gesture only.",
    "Draw it without lifting your pencil off the paper.",
    "Use no outlines at the end — shadow shapes only.",
    "Draw it twice: once tiny (2 cm), once filling the page.",
    "Add a single light source and shade all five elements.",
    "Draw it from an unusual angle — from above, or lying down.",
    "Draw through: keep every construction line visible.",
    "Exaggerate one feature until it becomes a caricature.",
    "Put it in a box in two-point perspective first."
  ];

  var promptText = document.getElementById("prompt-text");
  var promptLabel = document.getElementById("prompt-label");
  var shuffleBtn = document.getElementById("prompt-shuffle");

  // Days since epoch, local time — stable seed for "prompt of the day"
  function dayNumber() {
    var now = new Date();
    var midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.floor(midnight.getTime() / 86400000);
  }

  function promptFor(n) {
    var subject = SUBJECTS[((n % SUBJECTS.length) + SUBJECTS.length) % SUBJECTS.length];
    var twist = TWISTS[((Math.floor(n / 3) % TWISTS.length) + TWISTS.length) % TWISTS.length];
    return "Draw " + subject + ". " + twist;
  }

  function showDaily() {
    promptLabel.textContent = "Prompt of the day";
    promptText.textContent = promptFor(dayNumber() * 7919); // spread consecutive days apart
  }

  if (promptText) {
    showDaily();
    shuffleBtn.addEventListener("click", function () {
      promptLabel.textContent = "Random prompt";
      var s = SUBJECTS[Math.floor(Math.random() * SUBJECTS.length)];
      var t = TWISTS[Math.floor(Math.random() * TWISTS.length)];
      promptText.textContent = "Draw " + s + ". " + t;
    });
  }

})();
