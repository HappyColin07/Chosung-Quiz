const quizData = [
    {
        quiz: "ㅋ ㅋ ㅇ ㅌ",
        answer: "카카오톡"
    },
    {
        quiz: "ㅇ ㅅ ㅌ ㄱ ㄹ",
        answer: "인스타그램"
    },
    {
        quiz: "ㅇ ㅌ ㅂ",
        answer: "유튜브"
    },
    {
        quiz: "ㅂ ㄷ ㅇ ㅁ ㅈ",
        answer: "배달의민족"
    },
    {
        quiz: "ㅌ ㅌ",
        answer: "틱톡"
    },
    {
        quiz: "ㄷ ㄱ ㅁ ㅋ",
        answer: "당근마켓"
    },
    {
        quiz: "ㄴ ㅇ ㅂ",
        answer: "네이버"
    },
    {
        quiz: "ㅌ ㅅ",
        answer: "토스"
    },
    {
        quiz: "ㅋ ㅍ",
        answer: "쿠팡"
    },
    {
        quiz: "ㅍ ㅇ ㅅ ㅂ",
        answer: "페이스북"
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

// function imgOn(){
//     let img = document.querySelector(".img31");
//     console.log(img);
//     img.style.visibility = 'visible';
// }