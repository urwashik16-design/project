const questions=[
    {
        question:"My Toys nickname?",
        answers:[
            {text:"Puchan",correct:false},
            {text:"Puchu",correct:true},
            {text:"Puchi",correct:false},
            {text:"Puchaniya",correct:false},
        ]
    },
    {
        question:"What is my love language?",
        answers:[
            {text:"Beating",correct:false},
            {text:"Holding Hands",correct:false},
            {text:"Biting",correct:true},
            {text:"Physical Touch",correct:false},
        ]
    },
    {
        question:"What is something on my bucket list?",
        answers:[
            {text:"Traveling solo",correct:true},
            {text:"Making my parents proud",correct:false},
            {text:"Getting Tattoos",correct:false},
            {text:"Trying every type of food at least once",correct:false},
        ]
    },
    {
        question:"What's one thing that makes me feel really happy?",
        answers:[
            {text:"You ignoring other girls",correct:true},
            {text:"Sleeping",correct:false},
            {text:"Eating",correct:true},
            {text:"You saying sorry even when it's my fault",correct:false},
        ]
    },
    {
        question:"What is my biggest insecurity?",
        answers:[
            {text:"Being to much",correct:false},
            {text:"You hiding things from me",correct:true},
            {text:"You leaving after 1 got attached",correct:false},
            {text:"Being replaced",correct:false},
        ]
    },
    {
        question:"What was your first impression of me",
        answers:[
            {text:"No chance I'd ever like her",correct:true},
            {text:"She is a simple girl",correct:false},
            {text:"She is rude",correct:false},
            {text:"Not my type",correct:false},
        ]
    },
    {
        question:"What's my “I'm upset but pretending I'm fine” behavior?",
        answers:[
            {text:"Sending only OK",correct:false},
            {text:"Gets quiet and says, “I don't want to talk right now.”",correct:true},
            {text:"Becomes sarcastic suddenly",correct:false},
            {text:"Acting extra busy",correct:false},
        ]
    },
    {
        question:"What's my most dramatic habit?",
        answers:[
            {text:"Takes the biggest steps for the smallest things",correct:false},
            {text:"Makes weird faces whenever something feels annoying",correct:false},
            {text:"Starts dancing after eating something good",correct:false},
            {text:"Can't control laughter in public places",correct:true},
        ]
    },
    {
        question:"What's my funniest reaction when I get scared?",
        answers:[
            {text:"Runs first",correct:false},
            {text:"Covers face",correct:false},
            {text:"Starts screaming",correct:true},
            {text:"Jumps like a cartoon character",correct:false},
        ]
    },
    {
        question:"My one of the closest friend?",
        answers:[
            {text:"Shubhanshi",correct:false},
            {text:"Sayan",correct:true},
            {text:"Tamanna",correct:false},
            {text:"Anisha",correct:false},
        ]
    }
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