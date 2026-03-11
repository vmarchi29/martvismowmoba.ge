let allQuestions = [];
let examQuestions = [];
let examQuestionsBackup = [];
let skippedIndices = [];
let currentIndex = 0;
let correct = 0;
let wrong = 0;
let timeLeft = 30 * 60;
let timer;
let examFinished = false;
let currentCategory = "B";

const dawyebaBtn = document.getElementById("dawyeba");
const gamotovebaBtn = document.getElementById("gamotoveba");
const tavidandawyebaBtn = document.getElementById("tavidandawyeba");

const statusEl = document.createElement("div");
statusEl.style.position = "absolute";
statusEl.style.top = "580px";
statusEl.style.height = "22px";
statusEl.style.left = "50%";
statusEl.style.transform = "translateX(-50%)";
statusEl.style.background = "#0f172a";
statusEl.style.color = "white";
statusEl.style.padding = "10px 20px";
statusEl.style.borderRadius = "10px";
statusEl.style.fontSize = "13px";
statusEl.style.textAlign = "center";
statusEl.style.minWidth = "300px";
statusEl.style.zIndex = "1";
statusEl.style.display = "none";
document.body.appendChild(statusEl);
statusEl.style.fontSize = window.innerWidth <= 768 ? "11px" : "14px";
statusEl.style.minWidth = window.innerWidth <= 768 ? "95vw" : "300px";
statusEl.style.padding = window.innerWidth <= 768 ? "6px 10px" : "10px 20px";

function updateStatus() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  statusEl.innerHTML = `
    დრო: ${minutes}:${seconds < 10 ? "0" : ""}${seconds} |
    კითხვა: ${currentIndex + 1} / ${examQuestions.length} |
    სწორი: ${correct} |
    არასწორი: ${wrong}
  `;
}

function getQuestionsForCategory(category) {
  const categoryBox = document.querySelector(`.all-tickets[data-category="${category}"]`);
  if (!categoryBox) return [];
  return Array.from(categoryBox.querySelectorAll("[class*='question-container']"));
}

// HTML-ის onclick="startExam('B')" — კატეგორიის არჩევა
window.startExam = function(category) {
  if (category) {
    clearInterval(timer);
    hideAllQuestions();
    const info = document.getElementById("finishInfo");
    if (info) info.remove();

    currentCategory = category;
    examFinished = false;
    currentIndex = 0;
    correct = 0;
    wrong = 0;
    skippedIndices = [];
    timeLeft = 30 * 60;

    statusEl.style.display = "none";
    dawyebaBtn.style.display = "block";
    dawyebaBtn.disabled = false;
    dawyebaBtn.textContent = "გამოცდის დაწყება";
    return;
  }

  // გამოცდის დაწყება
  examFinished = false;
  currentIndex = 0;
  correct = 0;
  wrong = 0;
  skippedIndices = [];
  timeLeft = 30 * 60;

  allQuestions = getQuestionsForCategory(currentCategory);
  let shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  examQuestions = shuffled.slice(0, 30);
  examQuestionsBackup = [...examQuestions];

  hideAllQuestions();
  statusEl.style.display = "block";
  updateStatus();
  showQuestion();
}

function hideAllQuestions() {
  document.querySelectorAll(".all-tickets").forEach(el => el.style.display = "none");
  document.querySelectorAll("[class*='question-container']").forEach(q => q.style.display = "none");
}

function showQuestion() {
  hideAllQuestions();

  const activeBox = document.querySelector(`.all-tickets[data-category="${currentCategory}"]`);
  if (activeBox) activeBox.style.display = "block";

  if (currentIndex >= examQuestions.length) {
    if (skippedIndices.length > 0) {
      examQuestions = skippedIndices.map(i => examQuestionsBackup[i]);
      skippedIndices = [];
      currentIndex = 0;
      showQuestion();
      return;
    }
    finishExam("ყველა კითხვა დასრულდა");
    return;
  }

  const q = examQuestions[currentIndex];
  q.style.display = "block";
  updateStatus();
}

document.addEventListener("click", function(e) {
  if (examFinished) return;
  if (dawyebaBtn.disabled === false) return;

  let answerBox = e.target.closest(".answer-box");
  if (!answerBox) return;
  if (!answerBox.textContent || answerBox.textContent.trim().length === 0) return;

  let currentQuestion = examQuestions[currentIndex];
  if (!currentQuestion) return;

  let answers = Array.from(currentQuestion.querySelectorAll(".answer-box"));
  let selectedIndex = answers.indexOf(answerBox);
  if (selectedIndex === -1) return;

  let correctIndex = Number(currentQuestion.dataset.correct);

  answers.forEach(a => a.style.pointerEvents = "none");

  if (selectedIndex === correctIndex) {
    correct++;
    answerBox.style.background = "#16a34a";
  } else {
    wrong++;
    answerBox.style.background = "#dc2626";
    if (answers[correctIndex]) answers[correctIndex].style.background = "#16a34a";
  }

  setTimeout(() => {
    answers.forEach(a => {
      a.style.background = "";
      a.style.pointerEvents = "auto";
    });

    currentIndex++;
    updateStatus();

    if (wrong >= 3) {
      finishExam("3 შეცდომა დააგროვე");
      return;
    }

    showQuestion();
  }, 800);
});

function finishExam(reason) {
  clearInterval(timer);
  examFinished = true;
  hideAllQuestions();
  statusEl.style.display = "none";

  const passed = wrong < 3;

  const oldInfo = document.getElementById("finishInfo");
  if (oldInfo) oldInfo.remove();

  const info = document.createElement("div");
  info.id = "finishInfo";
  info.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 18px;
    z-index: 9999;
    background-color: #1e293b;
    padding: 30px;
    border-radius: 10px;
    width: 90%;
    max-width: 400px;
    box-sizing: border-box;
  `;
  info.innerHTML = `
    <button onclick="document.getElementById('finishInfo').remove()" style="
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
      color: white;
      font-size: 22px;
      cursor: pointer;
      line-height: 1;
    ">✕</button>
    <p style="font-size:20px; color:white;">${reason}</p>
    <p style="color:white">✅ სწორი: <strong>${correct}</strong> | ❌ შეცდომები: <strong>${wrong}</strong></p>
    <p style="font-size:22px; font-weight:bold; color:${passed ? "#16a34a" : "#dc2626"}">
      ${passed ? "🎉 ჩაბარებულია!" : "😞 ვერ ჩააბარე"}
    </p>
  `;
  document.body.appendChild(info);

  dawyebaBtn.style.display = "block";
  dawyebaBtn.disabled = false;
  dawyebaBtn.textContent = "კვლავ სცადე";
}

// გამოცდის დაწყება ღილაკი
dawyebaBtn.addEventListener("click", () => {
  dawyebaBtn.style.display = "none";
  dawyebaBtn.disabled = true;

  const info = document.getElementById("finishInfo");
  if (info) info.remove();

  startExam();

  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    updateStatus();
    if (timeLeft <= 0) finishExam("დრო ამოიწურა");
  }, 1000);

  setTimeout(() => {
    window.scrollTo({ top: 515, behavior: "smooth" });
  }, 50);
});

// გამოტოვება
gamotovebaBtn.addEventListener("click", () => {
  if (examFinished || examQuestions.length === 0) return;
  skippedIndices.push(currentIndex);
  currentIndex++;
  updateStatus();
  if (wrong >= 3) finishExam("3 შეცდომა დააგროვე");
  else showQuestion();
});

// თავიდან დაწყება
tavidandawyebaBtn.addEventListener("click", () => {
  clearInterval(timer);
  hideAllQuestions();
  const info = document.getElementById("finishInfo");
  if (info) info.remove();

  examFinished = false;
  currentIndex = 0;
  correct = 0;
  wrong = 0;
  skippedIndices = [];
  timeLeft = 30 * 60;

  statusEl.style.display = "none";
  dawyebaBtn.style.display = "block";
  dawyebaBtn.disabled = false;
  dawyebaBtn.textContent = "გამოცდის დაწყება";

  setTimeout(() => {
  const scrollTarget = window.innerWidth <= 768 ? 0 : 515;
  window.scrollTo({ top: scrollTarget, behavior: "smooth" });
}, 50);
});

const btnAM = document.getElementById("btnAM");
const btnA = document.getElementById("btnA");
const btnB = document.getElementById("btnB");
btnAM.addEventListener("click",()=>{
  if(btnAM.classList.contains("greeen")){
    btnAM.classList.remove("greeen");
  }else{
    btnA.classList.remove("greeen");
    btnB.classList.remove("greeen")
    btnAM.classList.add("greeen");
  }
})
btnA.addEventListener("click",()=>{
  if(btnA.classList.contains("greeen")){
    btnA.classList.remove("greeen");
  }else{
    btnAM.classList.remove("greeen");
    btnB.classList.remove("greeen")
    btnA.classList.add("greeen");
  }
})
btnB.addEventListener("click",()=>{
  if(btnB.classList.contains("greeen")){
    btnB.classList.remove("greeen");
  }else{
    btnAM.classList.remove("greeen");
    btnA.classList.remove("greeen");
    btnB.classList.add("greeen");
  }
})
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navMenu").classList.toggle("open");
});

