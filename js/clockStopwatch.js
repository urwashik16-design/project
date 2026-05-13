//DIGITAL CLOCK PROGRAM

// function updateclock(){
//     const now=new Date();
//     let hours=now.getHours().toString().padStart(2,0);
//     const meridiem=hours>=12?"PM":"AM";
//     hours=hours%12|| 12;
//     hours=hours.toString().padStart(2,0);
//     const minutes=now.getMinutes().toString().padStart(2,0);
//     const seconds=now.getSeconds().toString().padStart(2,0);
//     const timeString=`${hours}:${minutes}:${seconds} ${meridiem}`;
//     document.getElementById("clock").textContent=timeString;
// }
// updateclock();
// setInterval(updateclock,1000);


//STOPWATCH PROGRAM
const display=document.getElementById("display");
let timer=null;
let startTime=0;
let elapsedTime=0;
let isRunning=false;

function start(){

    if(!isRunning){
        startTime=Date.now()-elapsedTime;
        timer=setInterval(update,10);
        isRunning=true;
    }
    
}
function stop(){

    if(isRunning){
        clearInterval(timer);
        elapsedTime=Date.now()-startTime;
        isRunning=false;
    }

}
function reset(){

    clearInterval(timer);
    startTime=0;
    elapsedTime=0;
    isRunning=false;
    display.textContent="00:00:00:00";


}
function update(){

    const currentTime=Date.now();
    elapsedTime=currentTime-startTime;

    let hours=Math.floor(elapsedTime/(1000*60*60));
    let minutes=Math.floor(elapsedTime/(1000*60)%60);
    let seconds=Math.floor(elapsedTime/1000%60);
    let miliseconds=Math.floor(elapsedTime%1000/10);

    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    miliseconds=String(miliseconds).padStart(2,"0");
    

    display.textContent=`${hours}:${minutes}:${seconds}:${miliseconds}`;
}