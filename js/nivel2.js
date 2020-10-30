const laberinto2=[
      new component(largoPared*2+5,anchoPared,"black",largoPared,largoPared*2,false),
      new component(anchoPared,largoPared,"black",largoPared*4,0,true),
      new component(largoPared*2+5,anchoPared,"black",largoPared*2,largoPared,false),
      new component(anchoPared,largoPared,"black",largoPared,largoPared,true),
      new component(largoPared*3+5,anchoPared,"black",largoPared,largoPared*3,false),
      new component(anchoPared,largoPared,"black",largoPared,largoPared*3,true),
      new component(anchoPared,largoPared,"black",largoPared*2,largoPared*4,true),
      new component(largoPared*4+5,anchoPared,"black",largoPared*2,largoPared*4,false),
      new component(anchoPared,largoPared,"black",largoPared*4,largoPared*3,true),
      new component(largoPared*3,anchoPared,"black",largoPared*5,largoPared*3,false),
      new component(largoPared,anchoPared,"black",largoPared*5,largoPared,false),
      new component(anchoPared,largoPared*2,"black",largoPared*8,largoPared*3,true),
      new component(anchoPared,largoPared,"black",largoPared*6,largoPared,true),
      new component(largoPared+5,anchoPared,"black",largoPared*6,largoPared*2,false),
      new component(anchoPared,largoPared*2,"black",largoPared*7,0,true),
      new component(largoPared*3+5,anchoPared,"black",largoPared*8,largoPared,false),
      new component(anchoPared,largoPared,"black",largoPared*11,largoPared,true),
      new component(largoPared*2+5,anchoPared,"black",largoPared*11,largoPared*2,false),
      new component(anchoPared,largoPared,"black",largoPared*8,largoPared,true),
      new component(largoPared*2+5,anchoPared,"black",largoPared*8,largoPared*2,false),
      new component(anchoPared,largoPared*2,"black",largoPared*10,largoPared*2,true),
      new component(largoPared+5,anchoPared,"black",largoPared*9,largoPared*4,false),
      new component(anchoPared,largoPared,"black",largoPared*9,largoPared*3,true),
      new component(anchoPared,largoPared,"black",largoPared*11,largoPared*3,true),
      new component(largoPared*2+5,anchoPared,"black",largoPared*11,largoPared*3,false),
      new component(largoPared+5,anchoPared,"black",largoPared*11,largoPared*4,false)

];

let buttonOn=document.querySelector("#on")
let container=document.querySelector("#cont")
let canvas=document.getElementById('nivel2'); 
let ctx = canvas.getContext("2d");
const gameOver = document.getElementById("game-over");
const game = document.getElementById("cont");

canvas.height = window.innerHeight * 0.6;
canvas.width = window.innerWidth * 0.7;
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// -------------------- PAREDES DEL LOS LABERINTOS --------------------

const anchoPared=5;
const largoPared=75;

function component(ancho, alto, color, x, y,vertical) {
    this.x = x;
    this.y = y;
    this.width = ancho;
    this.height = alto;
    this.color = color;
    this.vertical=vertical;

    this.dibujar = function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

//-------------------- ELEMENTOS DE PUNTUACION  ------------------------------------------
function Element (imagen,recorteX,recorteY,positionX, positionY, ancho, alto){
      this.x = positionX;
      this.y = positionY;
      this.width = ancho;
      this.height = alto;
  
      this.draw=function(){
          ctx.drawImage(imagen,0,0,recorteX,recorteY,this.x,this.y,this.width,this.height)
      }
    }

  // --------------- llamar a las imagenes de los objetos----------

let llave =new Image()
llave.src="img/llave.png"


// ------------------crear los objetos ----------------------
let doorKey= new Element(llave,800,575,300,200,50,50)

let elements=[doorKey]

 // -----------------------------  NUESTRO PERSONAJE -------------------------


 class Hero {
      constructor(personaje,widthImage,heightImage) {
          // Propiedades.
          this.src = personaje;
          this.frameX = 0;
          this.frameY=0
          this.x = 20;
          this.y = 10;
          this.width = 54;
          this.height = 54;
          this.collide = false;
          this.widthImage=widthImage
          this.heightImage=heightImage
  
  
          // Métodos.
          this.draw = function(){
              ctx.drawImage(this.src, this.frameX * this.widthImage, this.frameY*this.heightImage, this.widthImage, this.heightImage, this.x, this.y, this.width, this.height)
          }
          this.checkCollision = function (wall) {
              // Defino los bordes del héroe.
              this.top = this.y;
              this.bottom = this.y + this.height;
              this.left = this.x;
              this.right = this.x + this.width;
  
              // Defino los bordes de la pared.
              const wallTop = wall.y;
              const wallBottom = wall.y + wall.height;
              const wallLeft = wall.x;
              const wallRight = wall.x + wall.width;
  
              // Compruebo si los bordes chocan.
              if (
                  this.left < wallRight &&
                  this.right > wallLeft &&
                  this.top < wallBottom &&
                  this.bottom > wallTop
  
              ) {
                  this.collide = true;
                   if(wall == gemelas){
                     
                      grito.play()
                      stop() 
                      game.style.display = "none";
                      gameOver.style.display = "flex";
                      
  
                  }
                  // if(wall==llave1){
                  //     this.getDoorKey=true
                  //       score+=1
                  //     } else{
                  //         this.getDoorKey=false
                  //     }
              }
  
          }
      }
  }

  // -------------- llamar a la imagen del heroe -----------
let dani = new Image()
dani.src = "img/daniel.png"
let wendy =new Image()
wendy.src="img/mom.png"

// ------------------------------- FANTASMAS -------------------------------

class fantasma {
      constructor (src,randomX1,randomX2,randomY1,randomY2,xInit,yInit,ancho, alto, altoImg, anchoImg,positionX1Reset,positionY1Reset,up,down,left,right){
          this.src = src;
          this.frameX = 0;
          this.frameY=0
          this.x = xInit;
          this.y = yInit;
          this.speedX=getRandomInt(randomX1, randomX2);
          this.speedY=getRandomInt(randomY1, randomY2);
          this.width = ancho;
          this.height = alto;
          this.collide = false;
          this.anchoImg=anchoImg;
          this.altoImg=altoImg;
          
    
          // Métodos.
          this.draw = function(){
              ctx.drawImage(this.src, this.frameX * this.anchoImg, this.frameY*this.altoImg, this.anchoImg, this.altoImg, this.x, this.y, this.height, this.width)
          
          },
          this.newPos=function(){ 
              this.x+=this.speedX
              this.y+=this.speedY},
          this.movimiento=function(){
    
              if (this.x>canvas.width-100) {
                 
                  this.speedX=-left;
                 
              }
    
              if(this.x<30){
                 
                  this.speedX=right
                  this.frameY=1
                 
              }
    
              if (this.y<48) {
                  
                  this.speedY=down
                  
              }
              if (this.y>canvas.height-100) {
                  this.speedY=-up ;
                  
              }
              if (this.x> canvas.width) {
                  this.reset()
              }
    
          },
          this.reset=function(){
              this.x=positionX1Reset;
              this.y=positionY1Reset;
          }
    
          //metodo para mover de lado a lado
          this.moveToSide = function(cantMov){
              aux = this.x
              while(this.x < cantMov){
                  this.x += this.speedX
                  this.frameY = 1
                  this.draw()
                  console.log(this.x)
              }
              if(this.x >= cantMov){
                  this.moveToSide(-this.x,-aux)
              }
    
          }
    
      }
    }
    // // -----llamar a las imagenes de los fantasmas ------
    let source="img/twins.png"
    let twins= new Image();
    twins.src=source
    
    let source2 = "img/ghost1.png"
    let ghost1 = new Image();
    ghost1.src=source2
    // // ----------------- crear array de componentes de fantasmas -----------------
    let gemelas= new fantasma(twins,2,10,2,10,80,400,70,70,180,101,30,50,2,2,2,2)
    let fantasma1= new fantasma(ghost1,2,10,2,10,800,50,70,70,180,101,30,50,2,2,2,2)
    
    let enemies= [gemelas,fantasma1]
    let heroe = new Hero(dani,120,190);
    // let llave1 = new Element(llave,800,575,300,200,50,50)
    
    function gameInit(){
      ctx.clearRect(0, 0, canvas.width,canvas.height);
     laberinto2.forEach(component=>{
       component.dibujar();
    heroe.checkCollision(component)
       
     })
    
     elements[0].draw()
     
     bordes.forEach(component=>{
      component.dibujar();
     })
    heroe.draw()
    // llave1.draw()
//     gemelas.draw()
    enemies.forEach(enemigo => {
          enemigo.draw()
    })
    gemelas.frameX++
    gemelas.frameX >= 5 ? gemelas.frameX = 0 : null;
    gemelas.newPos()
    gemelas.movimiento()
    heroe.checkCollision(gemelas)
      heroe.draw()
      heroe.frameX++
      heroe.frameX >= 5 ? heroe.frameX = 0 : null;
      
    }
    function on(){
      interval= setInterval(gameInit, 1000/15)
      
      container.removeChild(buttonOn)
    }
    
    function stop(){
         
      clearInterval(interval)
        // reload.style.display="inline"
    }
    // -------------------------- CONSTROLES ----------------------------
    document.addEventListener("keydown", (e) => {
     switch (e.key) {
            // Arriba
            case "ArrowUp":
            case "w":
            case "W":
                if (!heroe.collide) {
                    heroe.y -= 3;
                    heroe.frameY=2
                } else {
                    heroe.y += 15;
                    heroe.collide = false;
                }
                
                break;
    
            // Abajo
            case "ArrowDown":
            case "s":
            case "S":
                if (!heroe.collide) {
                    heroe.y += 3;heroe.frameY=3
                } else {
                    heroe.y -= 15;
                    heroe.collide = false;
    
                }
                break;
    
    
            // Izquierda
            case "ArrowLeft":
            case "a":
            case "A":
                if (!heroe.collide) {
                    heroe.x -= 3;
                    heroe.frameY=1
                } else {
                    heroe.x += 15;
                    heroe.collide = false;
                }
                break;
    
            // Derecha
            case "ArrowRight":
            case "d":
            case "D":
                if (!heroe.collide) {
                    heroe.x += 3;
                    heroe.frameY=0
                 
                } else {
                    heroe.x -= 15;
    
                  
    
                    heroe.collide = false;
                }
                
                  
        
                break;
    
    
            default:
                break;
        }
    })