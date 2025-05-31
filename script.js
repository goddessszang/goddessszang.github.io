let currentQuestion = 0; // 현재 질문 번호
let score = { H: 0, Y: 0, A: 0, N: 0, Z: 0 }; // 감정 알파벳 점수
let userAnswers = []; // 사용자가 선택한 타입을 저장

// 배열을 랜덤하게 섞는 함수 (보기 순서 랜덤화용)
function shuffle(array) {
  return array.slice().sort(() => Math.random() - 0.5);
}

// 현재 질문을 화면에 표시하는 함수
function showQuestion() {
  const q = questions[currentQuestion]; // 현재 질문 불러오기

  // 진행 상황 업데이트
  document.getElementById("progress").innerText = `Q${currentQuestion + 1}/${
    questions.length
  }`;

  // 질문 텍스트 표시
  document.getElementById("question").innerText = q.question;

  const choicesBox = document.getElementById("choices");
  choicesBox.innerHTML = ""; // 기존 보기 초기화

  // 보기 랜덤으로 섞어서 생성
  const shuffledChoices = shuffle(q.choices);
  shuffledChoices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.innerText = choice.text;
    btn.dataset.type = choice.type; // 감정 알파벳 정보 저장

    // 보기 클릭 시 이벤트
    btn.onclick = () => {
      const prevType = userAnswers[currentQuestion]; // 이전 선택 가져오기

      // 이전 선택한 점수 복원 처리
      if (prevType) {
        score[prevType]--;
      }

      // 현재 선택 반영
      score[choice.type]++;
      userAnswers[currentQuestion] = choice.type;

      // 모든 보기 버튼 선택 해제 후 선택한 버튼만 강조
      Array.from(choicesBox.children).forEach((b) =>
        b.classList.remove("selected")
      );
      btn.classList.add("selected");

      // 다음 버튼 보여주기
      const nextBtn = document.getElementById("next-btn");
      nextBtn.style.display = "block";

      // 마지막 문제일 경우 버튼 텍스트 변경
      nextBtn.innerText =
        currentQuestion === questions.length - 1 ? "결과 보기" : "다음";
    };

    choicesBox.appendChild(btn);
  });

  // 이전 버튼 표시 조건 (첫 질문 제외)
  document.getElementById("prev-btn").style.display =
    currentQuestion > 0 ? "block" : "none";

  // 이전에 선택한 답이 있다면 버튼 상태 복원
  const prevAnswer = userAnswers[currentQuestion];
  if (prevAnswer) {
    Array.from(choicesBox.children).forEach((b) => {
      if (b.dataset.type === prevAnswer) {
        b.classList.add("selected");
      }
    });

    const nextBtn = document.getElementById("next-btn");
    nextBtn.style.display = "block";
    nextBtn.innerText =
      currentQuestion === questions.length - 1 ? "결과 보기" : "다음";
  } else {
    // 선택 안 되어 있으면 다음 버튼 숨기기
    document.getElementById("next-btn").style.display = "none";
  }
}

// 다음 버튼 클릭 이벤트
document.getElementById("next-btn").addEventListener("click", () => {
  currentQuestion++; // 다음 질문으로 이동
  document.getElementById("next-btn").style.display = "none"; // 다음 버튼 초기화

  if (currentQuestion < questions.length) {
    showQuestion(); // 다음 질문 보여주기
  } else {
    // 🎯 최종 결과 계산: 최고 점수 유형 찾아서 결과로 이동
    const max = Math.max(...Object.values(score));
    const topTypes = Object.entries(score)
      .filter(([type, val]) => val === max)
      .map(([type]) => type);

    // 동점일 경우 랜덤으로 하나 선택
    const result = topTypes[Math.floor(Math.random() * topTypes.length)];
    window.location.href = `result.html?type=${result}`;
  }
});

// 이전 버튼 클릭 이벤트
document.getElementById("prev-btn").addEventListener("click", () => {
  const prevType = userAnswers[currentQuestion]; // 현재 위치에서 선택했던 답
  if (prevType) score[prevType]--; // 점수 복원

  currentQuestion--; // 이전 질문으로 이동
  document.getElementById("next-btn").style.display = "none"; // 다음 버튼 숨기기
  showQuestion(); // 이전 질문 다시 보여주기
});

// 첫 로딩 시 첫 번째 질문 실행
window.onload = showQuestion;
