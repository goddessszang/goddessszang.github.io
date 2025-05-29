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
      { text: "내가 이상한 건가 싶어짐", type: "H" },
      { text: "이해 못 해도 난 나야", type: "Y" },
      { text: "그냥 무시하고 나감", type: "A" },
      { text: "왜 몰라줘? 라며 답답", type: "N" },
      { text: "뭔가 엇나가고 싶은 느낌", type: "Z" },
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
    question: "친한 친구가 우울하다고 하면 나는...",
    choices: [
      { text: "이유는 모르겠지만 곁에 있어준다", type: "H" },
      { text: "따뜻한 말과 예쁜 말로 위로한다", type: "Y" },
      { text: "기분전환 시켜주려 이벤트를 계획한다", type: "A" },
      { text: "밖으로 데리고 나가서 활동을 유도한다", type: "N" },
      { text: "갑자기 뜬금없는 얘기로 웃긴다", type: "Z" },
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
