let currentQuestion = 0;
let score = { H: 0, Y: 0, A: 0, N: 0, Z: 0 };
let userAnswers = []; // 사용자가 선택한 타입을 저장

// 질문 랜덤으로 나오게하기
function shuffle(array) {
  return array.slice().sort(() => Math.random() - 0.5);
}

// 질문 생성 이게 실행돼야 질문이 뜸!
function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("progress").innerText = `Q${currentQuestion + 1}/${
    questions.length
  }`;
  document.getElementById("question").innerText = q.question;

  const choicesBox = document.getElementById("choices");
  choicesBox.innerHTML = "";

  const shuffledChoices = shuffle(q.choices);
  shuffledChoices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.innerText = choice.text;

    btn.onclick = () => {
      score[choice.type]++;
      userAnswers[currentQuestion] = choice.type;

      const nextBtn = document.getElementById("next-btn");
      nextBtn.style.display = "block";

      // ✨ 마지막 문제일 경우 버튼 결과보기
      if (currentQuestion === questions.length - 1) {
        nextBtn.innerText = "결과 보기";
      } else {
        nextBtn.innerText = "다음";
      }
    };
    choicesBox.appendChild(btn);
  });

  // ✅ 이전 버튼 보이기 조건
  if (currentQuestion > 0) {
    document.getElementById("prev-btn").style.display = "block";
  } else {
    document.getElementById("prev-btn").style.display = "none";
  }
}


document.getElementById("next-btn").addEventListener("click", () => {
  currentQuestion++; // 다음 문제로 이동
  document.getElementById("next-btn").style.display = "none";

  if (currentQuestion < questions.length) {
    showQuestion(); // 다음 질문 보여줌
  } else {
    const result = Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];
    window.location.href = `result.html?type=${result}`;
  }
});

// 이전 버튼 기능
document.getElementById("prev-btn").addEventListener("click", () => {
  // 현재 질문에서 선택했던 답 알파벳 가져오기
  const prevType = userAnswers[currentQuestion];

  // 그 알파벳의 점수를 -1 해서 복원
  if (prevType) {
    score[prevType]--;
  }

  // 이전 질문으로 이동
  currentQuestion--;

  // 다음 버튼 숨기기 (초기화)
  document.getElementById("next-btn").style.display = "none";

  // 이전 버튼 감추기 (Q1에서는 안 보이게)
  if (currentQuestion === 0) {
    document.getElementById("prev-btn").style.display = "none";
  }

  // 질문 다시 보여주기
  showQuestion();
});
window.onload = showQuestion;
