const quizData = [
    {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct:'d'
    },
    {
        question: 'How is he President of US?',
        a: 'Lopez Obrador',
        b: 'Donald Trump',
        c: 'Ivan saldano',
        d: 'Joe Biden',
        correct:'d'
    },
    {
        question: 'How does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals motorboards Lamborginis',
        correct:'a'
    },
    {
        question: 'What years was JavaScript launched?',
        a: '1996',
        b: '2019',
        c: '1994',
        d: 'none of the above',
        correct:'d'        
    },
    {
        question: 'What is the most practiced sport in the world?',
        a: 'Futbol',
        b: 'Baseball',
        c: 'BasquetBall',
        d: 'other',
        correct:'a'        
    },
    {
        question: 'Which is the most popular tech brand in the world?',
        a: 'Apple',
        b: 'Motorola',
        c: 'Xiaomi',
        d: 'Samsung',
        correct:'a'        
    },
    {
        question: 'What is the meaning of HDMI?',
        a: 'High Definition Mode Interface',
        b: 'High Date Multimedia Internet',
        c: 'High-Definition Multimedia Interface',
        d: 'None of the above',
        correct:'c'        
    }
]

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');


const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    // const answerEls = document.querySelectorAll('.answer');

    let answer = undefined; 

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    // const answerEls = document.querySelectorAll('.answer');

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click',()=>{
    // Checar para ver la respuesta 
    const answer = getSelected();

    if(answer){
        if (answer === quizData[currentQuiz].correct) {
            score ++;
        }
        currentQuiz++;
        
        if (currentQuiz < quizData.length) {
            loadQuiz();        
        }else{
           quiz.innerHTML = `<H2>You answered correctly at ${score} / ${quizData.length} questions.</H2>
                            <button onclick='location.reload()'>Reload</button>`
        }     
    }
});


