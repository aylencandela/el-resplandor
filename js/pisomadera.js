



function dibujar (canvas){
const canvas4= document.querySelector('canvas')
const ctx4 = canvas4.getContext('2d')
canvas4.width =1000
canvas4.height = 487

canvas4.style.background = "#453635"
ctx4.strokeStyle = "#251207";

function horizontal(y){
    ctx4.strokeStyle = "#251207";
    for (y =0; y<1050; y+=50){
  ctx4.moveTo(0,y);
  ctx4.lineTo(1000,y);
  ctx4.stroke();
}
}

function madera(x){
    ctx4.fillStyle = "#513937";
    for (x=0; x<1050; x+=150){
  ctx4.fillRect(750,0+x,250,50);
  ctx4.strokeRect(750,0+x,250,50);
  ctx4.fillRect(0,50+x,300,50);
  ctx4.strokeRect(0,50+x,300,50);
  ctx4.fillRect(350,100+x,350,50);
  ctx4.strokeRect(350,100+x,350,50);
    }
 }  
 
 function madera2(x){
    ctx4.fillStyle = "#3E302F";
    for (x=0; x<1050; x+=150){
  ctx4.fillRect(0,0+x,450,50);
  ctx4.strokeRect(0,0+x,450,50);
  ctx4.fillRect(550,50+x,450,50);
  ctx4.strokeRect(550,50+x,450,50);
    }
 }  
horizontal (50)
madera(50)
madera2 (50)
}

dibujar (#pisodemadera1)