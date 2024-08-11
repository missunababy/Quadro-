document.addEventListener("DOMContentLoaded", function() {
    const questionElement = document.getElementById("question");
    const answerInput = document.getElementById("answer");
    const submitAnswerButton = document.getElementById("submitAnswer");
    const resultElement = document.getElementById("result");

    let currentQuestion = {};
    let score = 0;
    let questionCount = 0;
    const totalQuestions = 10;

    // Specific Grade 6-7 Math Questions
    const questions = [
        { question: "What is 7 × 8?", answer: 56 },
        { question: "What is 42 ÷ 6?", answer: 7 },
        { question: "What is 12 + 14?", answer: 26 },
        { question: "What is 9 × 9?", answer: 81 },
        { question: "What is 64 ÷ 8?", answer: 8 },
        { question: "What is 15 + 27?", answer: 42 },
        { question: "What is 14 × 3?", answer: 42 },
        { question: "What is 30 ÷ 5?", answer: 6 },
        { question: "What is 11 × 12?", answer: 132 },
        { question: "What is 80 ÷ 10?", answer: 8 }
    ];

    function generateQuestion() {
        currentQuestion = questions[questionCount];
        questionElement.innerText = `Question ${questionCount + 1}: ${currentQuestion.question}`;
        answerInput.value = '';
        resultElement.innerText = '';
        resultElement.style.color = 'white';
    }

    function endGame() {
        questionElement.innerText = `Game Over! Your final score is ${score} out of ${totalQuestions}.`;
        answerInput.style.display = 'none';
        submitAnswerButton.style.display = 'none';
        resultElement.style.color = score > 5 ? 'lightgreen' : 'red';
    }

    submitAnswerButton.addEventListener("click", function() {
        const userAnswer = parseFloat(answerInput.value);

        if (userAnswer === currentQuestion.answer) {
            score++;
            resultElement.innerText = `Correct!`;
            resultElement.style.color = 'lightgreen';

            questionCount++;
            
            if (questionCount < totalQuestions) {
                generateQuestion();
            } else {
                endGame();
            }
        } else {
            resultElement.innerText = `Incorrect.`;
            resultElement.style.color = 'red';
        }
    });

    // Start the game by generating the first question
    generateQuestion();
});
