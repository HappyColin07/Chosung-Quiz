const quizData = [
    {
        quiz: "ㅅ ㅇ",
        answer: "서울"
    },
    {
        quiz: "ㅅ ㄴ",
        answer: "성남"
    },
    {
        quiz: "ㄱ ㅇ",
        answer: "고양"
    },
    {
        quiz: "ㄴ ㅇ ㅈ",
        answer: "남양주"
    },
    {
        quiz: "ㅅ ㅇ (경기도)",
        answer: "수원"
    },
    {
        quiz: "ㅊ ㅇ",
        answer: "천안"
    },
    {
        quiz: "ㅂ ㅅ",
        answer: "부산"
    },
    {
        quiz: "ㅇ ㅊ",
        answer: "인천"
    },
    {
        quiz: "ㅎ ㄴ",
        answer: "하남"
    },
    {
        quiz: "ㅇ ㅈ ㅂ",
        answer: "의정부"
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
        let reStartBtn = document.createElement("button");
        reStartBtn.innerText = "다시풀기";
        reStartBtn.className = "reStartBtn";
        reStartBtn.onclick = function() {
            window.location.reload();
        }
        let $quiz = document.querySelector('.quiz');
        $quiz.appendChild(reStartBtn);
    }
}

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}