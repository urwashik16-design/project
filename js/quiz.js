const questions=[
    {
        question:"Which is the largest continent in the world?",
        answers:[
            {text:"Africa",correct:false},
            {text:"Asia",correct:true},
            {text:"Europe",correct:false},
            {text:"Australia",correct:false},
        ]
    },
    {
        question:"Which country is known as the Land of the Rising Sun?",
        answers:[
            {text:"China",correct:false},
            {text:"Japan",correct:true},
            {text:"Thailand",correct:false},
            {text:"South Korea",correct:false},
        ]
    },
    {
        question:"What is the capital of Australia?",
        answers:[
            {text:"Sydney",correct:false},
            {text:"Melbourne",correct:false},
            {text:"Canberra",correct:true},
            {text:"Perth",correct:false},
        ]
    },
    {
        question:"Which ocean is the largest in the world?",
        answers:[
            {text:"Atlantic Ocean",correct:false},
            {text:"Pacific Ocean",correct:true},
            {text:"Indian Ocean",correct:false},
            {text:"Arctic Ocean",correct:false},
        ]
    },
]

const proceedBtn=document.querySelector(".proceedBtn");
const questionheading=document.querySelector(".questionheading");
const nextBtn=document.querySelector(".nextBtn");
const firstpage=document.querySelector(".firstpage");
const questionblock=document.querySelector(".questionblock");
const answeBtn=document.querySelector(".answeBtn");
const last=document.querySelector(".last");

let currentQuestionIndex=0;
let score=0;

proceedBtn.addEventListener("click",()=>{
    firstpage.style.display="none";
    questionblock.style.display="block";
    showQuestion();
});
function showQuestion(){
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionheading.innerHTML=questionNo+"."+currentQuestion.question;

    answeBtn.innerHTML = "";

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answeBtn.appendChild(button);

        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function selectAnswer(e){
    const selectBtn=e.target;
    const isCorrect=selectBtn.dataset.correct==="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answeBtn.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextBtn.style.display="block";
}
nextBtn.addEventListener("click",()=>{
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showResult();
    }
});
function showResult(){
    questionblock.style.display="none";
    last.textContent=` You scored ${score} out of ${questions.length} !!!`;
    last.style.display="block"
}