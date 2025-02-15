let gameSeq=[];
let userSeq=[];
let color=["yellow","red","purple","green"];
let started = false;
let level =0;
let h2 =document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started==false){
     console.log("key pressed");
    started=true;
    
    levelup();
 }
});

function btnflash(ele){
    ele.classList.add("flash");
    setTimeout(function(){
      ele.classList.remove("flash");
    },250)

}

function userbtnflash(ele){
    ele.classList.add("flash2");
    setTimeout(function(){
      ele.classList.remove("flash2");
    },250)

}
 
function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let colorIndex = Math.floor(Math.random()*4);
    let randomColor=color[colorIndex];
    let element = document.querySelector(`.${randomColor}`)
//  console.log(colorIndex);
//  console.log(randomColor);
//  console.log(element);
gameSeq.push(randomColor);
console.log(gameSeq);
 
    btnflash(element);
}

function buttonflash(){
    let address=this;
    userbtnflash(address);
userColor=address.getAttribute("id");
userSeq.push(userColor);
console.log(userSeq);
checked(userSeq.length-1);

}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",buttonflash);
}

function checked(ind){
    if(gameSeq[ind]===userSeq[ind]){
if(userSeq.length==gameSeq.length){


    if (level<3){
    setTimeout(levelup,600);}
    else if(level<5) {
        setTimeout(levelup,250);
    }
    else{
        setTimeout(levelup,100);
    }
}
    } 
    else{
        h2.innerText=`Game Over ! Your score  is ${level} Press any key to start `
   let body =document.querySelector("body");
   body.style.backgroundColor="red";
   setTimeout(function(){
    body.style.backgroundColor="white";
    reset();
},350);

    }
}

function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}