const questions = [
    {
        question: "Name two woodwind instruments?",
        options: ["Trombone,clarinet,trumpet,xylophone"],
        correctAnswer: "clarinet"
    },
    {
        question: "What is the name of the last piece that Beethoven wrote?",
        options: ["String Quartet No.16 in F major"],
        correctAnswer: "String Quartet No.16 in F major"
    },
    {
        question: "What are the letter notes in music?",
        options: ["A"],
        correctAnswer: "A"
    },
    {
        question: "What are the numbers in music?",
        options: ["1,2,3,4,"],
        correctAnswer: "all of the above"
    },
    
];

const quizContainer = document.querySelector('.quiz-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const timerElement = document.getElementById('time');

let currentQuestion = 0;
let score = 0;
let timeRemaining = 40;

function loadQuestion() {
    const currentQuestionData = questions[currentQuestion];

    questionElement.innerText = currentQuestionData.question;
    optionsElement.innerHTML = '';

    currentQuestionData.options.forEach((option, index) => {
        const optionElement = document.createElement('li');
        optionElement.className = 'option';
        optionElement.innerHTML = option;
        optionElement.onclick = () => checkAnswer(option, currentQuestionData.correctAnswer);
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        score++;
        resultElement.innerText = "Correct!";
    } else {
        resultElement.innerText = "Incorrect!";
    }
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
        resultElement.innerText = '';
    } else {
        showResult();
    }
}

function showResult() {
    clearInterval(timerInterval);
    resultElement.innerText = `Your Score: ${score} out of ${questions.length}`;
    optionsElement.innerHTML = '';
}

function updateTimer() {
    timerElement.innerText = `${timeRemaining}s`;

    if (timeRemaining <= 0) {
        showResult();
    } else {
        timeRemaining--;
    }
}


loadQuestion();


const timerInterval = setInterval(updateTimer, 1000);