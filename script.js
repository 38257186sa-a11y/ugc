const quizData = {
  political: [
    { q: "Who wrote 'Politics'?", options: ["Plato", "Aristotle", "Locke", "Kant"], answer: "Aristotle" },
    { q: "In which year was the Indian Constitution adopted?", options: ["1947", "1948", "1949", "1950"], answer: "1949" }
  ],
  maths: [
    { q: "2 + 2 = ?", options: ["3", "4", "5", "6"], answer: "4" },
    { q: "√16 = ?", options: ["2", "4", "6", "8"], answer: "4" }
  ],
  gk: [
    { q: "Capital of France?", options: ["Berlin", "Paris", "Rome", "Madrid"], answer: "Paris" },
    { q: "Who is the President of India (2025)?", options: ["Narendra Modi", "Droupadi Murmu", "Amit Shah", "Rahul Gandhi"], answer: "Droupadi Murmu" }
  ]
};

const params = new URLSearchParams(window.location.search);
const subject = params.get("subject");
const container = document.getElementById("quiz-container");

if (quizData[subject]) {
  quizData[subject].forEach((item, index) => {
    let div = document.createElement("div");
    div.classList.add("question");
    div.innerHTML = `<p>${item.q}</p>` + item.options.map(opt =>
      `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label><br>`
    ).join("");
    container.appendChild(div);
  });
}

function submitQuiz() {
  let score = 0;
  quizData[subject].forEach((item, index) => {
    const answer = document.querySelector(`input[name="q${index}"]:checked`);
    if (answer && answer.value === item.answer) {
      score++;
    }
  });
  document.getElementById("result").innerText = `Your score: ${score}/${quizData[subject].length}`;
}
