

const questions = [

    { question: "What is 12 + 15?", options: ["A. 27", "B. 26", "C. 25", "D. 24"], answer: "A. 27" },
    { question: "If you have 3 boxes with 4 apples each, how many apples do you have?", options: ["A. 7", "B. 10", "C. 12", "D. 15"], answer: "C. 12" },
    { question: "What is 9 x 7?", options: ["A. 56", "B. 63", "C. 62", "D. 65"], answer: "B. 63" },
    { question: "What is 144 ÷ 12?", options: ["A. 10", "B. 11", "C. 12", "D. 13"], answer: "C. 12" },
    { question: "What is 15 - 8?", options: ["A. 6", "B. 7", "C. 8", "D. 9"], answer: "B. 7" },
    { question: "What is the result of 5²?", options: ["A. 10", "B. 15", "C. 20", "D. 25"], answer: "D. 25" },
    { question: "What is the sum of 32 and 45?", options: ["A. 77", "B. 75", "C. 70", "D. 65"], answer: "A. 77" },
    { question: "Which is greater: 7 x 9 or 65 + 2?", options: ["A. 7 x 9", "B. 65 + 2", "C. They are equal", "D. Cannot tell"], answer: "A. 7 x 9" },
    { question: "What is the remainder when 19 is divided by 4?", options: ["A. 1", "B. 2", "C. 3", "D. 4"], answer: "C. 3" },
    { question: "If you save $5 every day, how much will you have in 30 days?", options: ["A. $120", "B. $130", "C. $140", "D. $150"], answer: "D. $150" },
    { question: "What is 81 ÷ 9?", options: ["A. 9", "B. 10", "C. 8", "D. 7"], answer: "A. 9" },
    { question: "If you double 14, what do you get?", options: ["A. 26", "B. 28", "C. 30", "D. 32"], answer: "B. 28" },
    { question: "What is 7³ (7 to the power of 3)?", options: ["A. 49", "B. 196", "C. 343", "D. 400"], answer: "C. 343" },
    { question: "What is 60% of 50?", options: ["A. 30", "B. 25", "C. 20", "D. 35"], answer: "A. 30" },
    { question: "What is the next prime number after 7?", options: ["A. 9", "B. 10", "C. 11", "D. 12"], answer: "C. 11" },
    { question: "How many minutes are there in 2 hours?", options: ["A. 100", "B. 120", "C. 140", "D. 150"], answer: "B. 120" },
    { question: "What is 45 + 36 - 20?", options: ["A. 59", "B. 61", "C. 63", "D. 65"], answer: "B. 61" },
    { question: "Which is a multiple of 6: 34, 38, 42, or 50?", options: ["A. 34", "B. 38", "C. 42", "D. 50"], answer: "C. 42" },
    { question: "If a dozen eggs costs $4, how much do 2 dozen cost?", options: ["A. $6", "B. $7", "C. $8", "D. $9"], answer: "C. $8" },
    { question: "What is the smallest even number?", options: ["A. 1", "B. 0", "C. 2", "D. 4"], answer: "B. 0" },


    { question: "What planet is known as the Red Planet?", options: ["A. Venus", "B. Mars", "C. Saturn", "D. Jupiter"], answer: "B. Mars" },
    { question: "Which country is the Eiffel Tower located in?", options: ["A. Italy", "B. Germany", "C. France", "D. Spain"], answer: "C. France" },
    { question: "Who was the first president of the United States?", options: ["A. Thomas Jefferson", "B. Abraham Lincoln", "C. George Washington", "D. John Adams"], answer: "C. George Washington" },
    { question: "What is the capital of Japan?", options: ["A. Tokyo", "B. Seoul", "C. Beijing", "D. Bangkok"], answer: "A. Tokyo" },
    { question: "What is the largest mammal?", options: ["A. Elephant", "B. Blue Whale", "C. Giraffe", "D. Great White Shark"], answer: "B. Blue Whale" },
    { question: "How many continents are there on Earth?", options: ["A. 5", "B. 6", "C. 7", "D. 8"], answer: "C. 7" },
    { question: "What is the smallest country in the world?", options: ["A. Vatican City", "B. Monaco", "C. Nauru", "D. San Marino"], answer: "A. Vatican City" },
    { question: "Which gas is most abundant in Earth's atmosphere?", options: ["A. Oxygen", "B. Hydrogen", "C. Nitrogen", "D. Carbon Dioxide"], answer: "C. Nitrogen" },
    { question: "What is the longest river in the world?", options: ["A. Nile", "B. Amazon", "C. Mississippi", "D. Yangtze"], answer: "A. Nile" },
    { question: "What do bees collect from flowers?", options: ["A. Water", "B. Pollen", "C. Nectar", "D. Honey"], answer: "C. Nectar" },
    { question: "What animal is known as the 'Ship of the Desert'?", options: ["A. Horse", "B. Camel", "C. Elephant", "D. Kangaroo"], answer: "B. Camel" },
    { question: "Who invented the telephone?", options: ["A. Thomas Edison", "B. Alexander Graham Bell", "C. Nikola Tesla", "D. Guglielmo Marconi"], answer: "B. Alexander Graham Bell" },
    { question: "How many planets are in our solar system?", options: ["A. 7", "B. 8", "C. 9", "D. 10"], answer: "B. 8" },
    { question: "Which ocean is the largest?", options: ["A. Atlantic", "B. Indian", "C. Arctic", "D. Pacific"], answer: "D. Pacific" },
    { question: "Who painted the Mona Lisa?", options: ["A. Vincent van Gogh", "B. Pablo Picasso", "C. Leonardo da Vinci", "D. Michelangelo"], answer: "C. Leonardo da Vinci" },
    { question: "How many legs does a spider have?", options: ["A. 6", "B. 8", "C. 10", "D. 12"], answer: "B. 8" },
    { question: "Which element has the chemical symbol 'O'?", options: ["A. Oxygen", "B. Iron", "C. Gold", "D. Osmium"], answer: "A. Oxygen" },
    { question: "What does a thermometer measure?", options: ["A. Speed", "B. Temperature", "C. Distance", "D. Weight"], answer: "B. Temperature" },
    { question: "Which country has the most people?", options: ["A. India", "B. United States", "C. China", "D. Brazil"], answer: "C. China" },
    { question: "What shape is the Milky Way galaxy?", options: ["A. Spiral", "B. Elliptical", "C. Irregular", "D. Circular"], answer: "A. Spiral" },



];

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];


function shuffleQuestions() {
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5).slice(0, 10);
}

function loadQuestion() {
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');


    questionEl.textContent = shuffledQuestions[currentQuestionIndex].question;


    optionsEl.innerHTML = '';
    shuffledQuestions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.onclick = () => selectAnswer(button, option);
        optionsEl.appendChild(button);
    });


    updateProgress();
}

function selectAnswer(button, selectedOption) {
    const correctAnswer = shuffledQuestions[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('incorrect');
    }


    const options = document.querySelectorAll('.option');
    options.forEach(option => option.onclick = null);


    setTimeout(() => {
        nextQuestion();
    }, 1000);
}

function updateProgress() {
    const progressEl = document.querySelector('.progress');
    const progressPercentage = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
    progressEl.style.width = `${progressPercentage}%`;
}

function nextQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showScore();
    }
    toggleNavButtons();
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
    toggleNavButtons();
}

function toggleNavButtons() {
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('next-btn').disabled = currentQuestionIndex === shuffledQuestions.length - 1;
}

function showScore() {
    document.querySelector('.quiz-content').classList.add('hidden');
    document.querySelector('.navigation').classList.add('hidden');
    document.querySelector('.progress-bar').classList.add('hidden');
    const scoreEl = document.getElementById('score');
    scoreEl.classList.remove('hidden');
    scoreEl.querySelector('#score-value').textContent = `${score} / ${shuffledQuestions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    shuffleQuestions();
    document.querySelector('.quiz-content').classList.remove('hidden');
    document.querySelector('.navigation').classList.remove('hidden');
    document.querySelector('.progress-bar').classList.remove('hidden');
    document.getElementById('score').classList.add('hidden');
    loadQuestion();
    toggleNavButtons();
}

shuffleQuestions();
loadQuestion();
toggleNavButtons();
