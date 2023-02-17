let canvas=document.getElementById("gameCanvas");
let canvasWidth= document.getElementById("canvasWidth").valueAsNumber;
let canvasHeight= document.getElementById("canvasHeight").valueAsNumber;
let size=80;
canvas.width =  canvasWidth * size;
canvas.height =  canvasHeight * size ;

let context = canvas.getContext ("2d");
 let herox=1;
 let heroy=2;
 
 
 let context1 = canvas.getContext ("2d");
 let heroa=2;
 let herob=1; 
 
 
 

 let img1 =new Image();
 img1.src ="mario.png"
 let img=new Image();
 img.src ="11.png"
 
  function drawMapAndHero(){
  context.fillStyle="lightblue";
 	context.fillRect(0,0,canvasWidth*size,canvasHeight*size);
 	
 	 context.drawImage(img,herox *size,heroy*size,size,size);
  context.drawImage(img,heroa *size,herob*size,size,size);
 
 
 
function moveUp(){
  heroy --;
  drawMapAndHero();

}
function moveDown(){
    heroy ++;
  drawMapAndHero();
}
function moveLeft(){
    herox --;
  drawMapAndHero();
}
function moveRight(){
   herox ++;
  drawMapAndHero();
 }
 document.onkeypress=function(e){
  let key=e.key;
  switch(key){
  case "w" :moveUp();break;
  case "s" : moveDown();break;
  case "a" : moveLeft();break;
  case "d" : moveRight();break;
 }
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 for(let i=0;i<canvasWidth;i++){
 	for(let j=0;j<canvasHeight;j++){
 	
 context.strokeRect(i* size, j * size, size, size);
 }
 }
 }
drawMapAndHero();

 canvas.onclick=function(e){
   let mousePosX=e.x - e.originalTarget.offsetLeft;
   let mousePosY=e.y - e.originalTarget.offsetTop;
 herox=Math.floor(mousePosX/size);
  heroy=Math.floor(mousePosY/size);
  drawMapAndHero() 
  }
 
console.log(context);