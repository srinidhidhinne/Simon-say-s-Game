let gameSeq = [];
let userSeq = [];
let btns = ["btn1","btn2","btn3","btn4"];


let started = false;
let para = document.querySelector("p");
let level = 0;
document.addEventListener("keypress",function(){
    if(started==false){
     started = true;
    
    levelUp();
    } 

});
function btnFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },250);
}
function levelUp(){
   userSeq = [];
   level++;
   para.innerText = `Level ${level}`;
   let idx = Math.floor(Math.random()*4);
   let randColor = btns[idx];
   gameSeq.push(randColor);
   let randBtn = document.querySelector(`#${randColor}`);
   btnFlash(randBtn);
   
}
function checkLevel(idx){
   // let idx = level-1;
   if(userSeq[idx]===gameSeq[idx]){
      if(userSeq.length==gameSeq.length){
         setTimeout(levelUp,1000);
         
      }
   }
   else{
      para.innerText = "Game over! Press any key to start again";
      reset();
   }

}
function btnPress(){
   let btn = this;
   btnFlash(btn);
   userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   checkLevel(userSeq.length-1);


}
let allBtns = document.querySelectorAll(".btns");
for(let btn of allBtns){
   btn.addEventListener("click",btnPress);
}
function reset(){
   started = false;
   gameSeq = [];
   userSeq = [];
   level = 0;
}

