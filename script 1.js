const quizData = [
    {
        quiz: "ㅅ ㅅ",
        answer: "삼성"
    },
    {
        quiz: "ㅇ ㅅ ㅋ ㅇ",
        answer: "에스케이"
    },
    {
        quiz: "ㅎ ㄷ",
        answer: "현대"
    },
    {
        quiz: "ㅇ ㅈ",
        answer: "엘지"
    },
    {
        quiz: "ㄹ ㄷ",
        answer: "롯데"
    },
    {
        quiz: "ㅎ ㅎ",
        answer: "한화"
    },
    {
        quiz: "ㅋ ㅋ ㅇ",
        answer: "카카오"
    },
    {
        quiz: "ㄷ ㅅ",
        answer: "두산"
    },
    {
        quiz: "ㄴ ㅇ ㅂ",
        answer: "네이버"
    },
    {
        quiz: "ㄱ ㅎ",
        answer: "금호"
    }
];

let $quizSentence = document.querySelector(".quiz-sentence");
let quizNumber = 0;
const $userInput = document.querySelector(".inputFromKey");
const $ok_btn = document.querySelector("#ok-btn");
$ok_btn.addEventListener('click', check_answer);
let score = 0;
let currentquizData;
let $scoreValue = document.querySelector("#scoreValue");
let $quizNumber = document.querySelector("#quiz-number");
loadquiz();

function loadquiz() {
    $userInput.value = "";
    currentquizData = quizData[quizNumber];
    $quizSentence.innerText = currentquizData.quiz;
    $quizNumber.innerText = quizNumber + 1;
}

async function check_answer() {
    let isCorrect = "";
    if($userInput.value === currentquizData.answer) {
        score++;
        isCorrect = "맞음";
    } else {
        isCorrect = "틀림";
    }
    $quizSentence.innerText = isCorrect; 
    await delay(1);
    $scoreValue.innerText = score;
    quizNumber++;
    if(quizNumber < quizData.length) {
        loadquiz();
    } else {
        $quizSentence.innerText = `결과:${score}점/총${quizData.length}문제`;
    }
}

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}