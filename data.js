// 01_ 지금시작하기 버튼 클릭 시 test.html로 이동
const startBtn = document.getElementById("start-btn");
if (startBtn) {
  startBtn.addEventListener("click", function () {
    window.location.href = "test.html";
  });
}

// 02_ test.html에서 선택한 답안에 따라 결과 페이지로 이동
const questions = [
  {
    question: "요즘 나는 자주 이런 생각을 해",
    choices: [
      { text: "뭔가 이상한데 말은 못 하겠어", type: "H" },
      { text: "나는 내가 좀 귀여운 것 같아", type: "Y" },
      { text: "그냥 해보고 보자!", type: "A" },
      { text: "뭔가 에너지가 넘쳐!", type: "N" },
      { text: "다들 나를 이상하게 볼지도?", type: "Z" },
    ],
  },

  {
    question: "오늘 하루를 한 단어로 표현한다면?",
    choices: [
      { text: "음... 뭐라 설명하기 어려워", type: "H" },
      { text: "나 오늘 꽤 괜찮았어", type: "Y" },
      { text: "계획에 없던 걸 해봤지!", type: "A" },
      { text: "몸이 움직이고 싶어져!", type: "N" },
      { text: "내가 나도 이상했어", type: "Z" },
    ],
  },

  {
    question: "누가 나를 이해 못 할 때 나는...",
    choices: [
      { text: "어쩌라고 그럴수도 있지", type: "H" },
      { text: "이해 못 해도 난 나야", type: "Y" },
      { text: "그냥 무시하고 나감", type: "A" },
      { text: "왜 몰라줘? 라며 답답", type: "N" },
      { text: "뭔가 엇나가고 싶은 느낌", type: "Z" },
    ],
  },
  
  {
    question: "나는 이런 상황에서 민망하다...",
    choices: [
      { text: "내가 뭔가 이상한 말을 했을 때", type: "H" },
      { text: "내 감정을 티냈다가 눈치챌 때", type: "Y" },
      { text: "의도치 않게 튀었을 때", type: "A" },
      { text: "실수로 규칙을 어겼을 때", type: "N" },
      { text: "어색한 침묵 속에서 혼자 떠들고 있을 때", type: "Z" },
    ],
  },
  {
    question: "주말이면 나는 보통...",
    choices: [
      { text: "혼자만의 이상한 루틴을 탐험", type: "H" },
      { text: "예쁜 카페 or 셀카 찍기", type: "Y" },
      { text: "즉흥 드라이브나 번개 약속", type: "A" },
      { text: "에너지 넘치게 뭔가 해야 돼!", type: "N" },
      { text: "나 혼자만의 세계 속에 숨기", type: "Z" },
    ],
  },

  {
    question: "SNS에 내가 올릴 수 있는 건...",
    choices: [
      { text: "약간 해석이 필요한 감정", type: "H" },
      { text: "셀카, 내 취향 잔뜩", type: "Y" },
      { text: "도전적이거나 의외의 순간", type: "A" },
      { text: "생동감 넘치는 사진이나 영상", type: "N" },
      { text: "이건 뭘까 싶은 엉뚱한 짤", type: "Z" },
    ],
  },

  {
    question: "내가 좋아하는 대화 스타일은?",
    choices: [
      { text: "주제 없이 흘러가는 이상한 얘기", type: "H" },
      { text: "서로 예뻐해주는 대화", type: "Y" },
      { text: "도발적이거나 도전 욕구 자극하는 대화", type: "A" },
      { text: "에너지가 팡팡 튀는 대화", type: "N" },
      { text: "진지한데 갑자기 이상하게 튀는 말", type: "Z" },
    ],
  },

  {
    question: "친구가 고민 상담을 한다면 나는?",
    choices: [
      { text: "명확한 해답은 없지만, 묘하게 감정에 공감해", type: "H" },
      { text: "내가 예쁘게 정리해 줄게. 같이 감정 정리하자", type: "Y" },
      { text: "팩트 기반 조언으로 정신 번쩍 들게 해", type: "A" },
      { text: "논리적으로 해결 가능한 방법부터 짚어줘", type: "N" },
      { text: "엉뚱한 말로 분위기 바꿔버림ㅋㅋ", type: "Z" },
    ],
  },

  {
    question: "내 방의 모습은 보통 어떤 편?",
    choices: [
      { text: "설명하기 어려운 구조와 배치", type: "H" },
      { text: "거울, 조명, 꾸미기 아이템 많음", type: "Y" },
      { text: "예상 못 한 아이템이 있음", type: "A" },
      { text: "컬러풀하고 활기찬 분위기", type: "N" },
      { text: "귀엽고 이상한 굿즈들이 있음", type: "Z" },
    ],
  },

  {
    question: "갑작스런 약속 취소! 나는 어떻게 반응해?",
    choices: [
      { text: "그럼 다른 이상한 걸 해볼까?", type: "H" },
      { text: "헐.. 나 예쁘게 꾸몄는데ㅠ", type: "Y" },
      { text: "오히려 잘됐다, 혼자만의 플랜 실행", type: "A" },
      { text: "시간 아까워… 다른 생산적인 걸 해야지", type: "N" },
      { text: "오예!!! 집에 있음 = 해방이다!", type: "Z" },
    ],
  },

  {
    question: "나는 감정을 표현할 때...",
    choices: [
      { text: "묘하게 전달되는 스타일", type: "H" },
      { text: "예쁘게 말하거나 글로 표현", type: "Y" },
      { text: "말보다 행동으로 표현", type: "A" },
      { text: "확실하게, 눈에 보이게 표현", type: "N" },
      { text: "엉뚱하고 이상하게 새어나옴", type: "Z" },
    ],
  },

  {
    question: "나는 갑자기 감정이 올라올 때...",
    choices: [
      { text: "어디선가 묘하게 티가 난다", type: "H" },
      { text: "글 쓰거나 눈물이 먼저 난다", type: "Y" },
      { text: "감정보단 행동으로 표현된다", type: "A" },
      { text: "숨기고 정리하려고 노력함", type: "N" },
      { text: "아무 말 없이 갑자기 사라진다", type: "Z" },
    ],
  },

  {
    question: "새벽 3시, 갑자기 잠이 안 온다. 나는...",
    choices: [
      { text: "이상한 생각의 나락으로 빠져든다", type: "H" },
      { text: "감성 글귀 찾아보다 울컥함", type: "Y" },
      { text: "갑자기 뭐라도 만들고 싶어진다", type: "A" },
      { text: "내일 할 일 체크하고 루틴 조정", type: "N" },
      { text: "왜 안 자지? 하며 멍 때림", type: "Z" },
    ],
  },

  {
    question: "누군가 나에게 미안하다고 할 때 나는?",
    choices: [
      { text: "감정 뉘앙스를 먼저 읽어봐", type: "H" },
      { text: "감정적으로 푸는 걸 선호해", type: "Y" },
      { text: "‘그럴 수도 있지’ 하고 넘김", type: "A" },
      { text: "원인 분석 → 재발 방지 안내", type: "N" },
      { text: "‘미안하단 말 왜 하지?’ 하며 딴생각", type: "Z" },
    ],
  },

  {
    question: "사람들이 나를 어떻게 기억하길 바래?",
    choices: [
      { text: "알쏭달쏭하지만 묘하게 끌리는 사람", type: "H" },
      { text: "다정하고 예쁜 감성의 사람", type: "Y" },
      { text: "멋지고 대담한 이미지로 남는 사람", type: "A" },
      { text: "에너지 넘치고 재밌는 사람", type: "N" },
      { text: "이상한데 계속 생각나는 사람", type: "Z" },
    ],
  },
];
