<<<<<<< HEAD
let canvas=document.getElementById('canvas'); 
let ctx = canvas.getContext("2d")
canvas.height = window.innerHeight * 0.6;
canvas.width = window.innerWidth * 0.7;

let xLab=30
let yLab=50
let op1=canvas.width/12
let op2=canvas.height/5
let anchoPared= op1+10
let altoPared=op2-22
let grosorPared=5
let interval
let seg=0
// -------------------- PAREDES DEL LOS LABERINTOS --------------------
function component(ancho, alto, color, x, y,vertical) {
=======
//Construccion de paredes
// Genero un array vacío y voy pusheando paredes nuevas.
// let paredes = []
// paredes.push(new Rectangulo(0, altoPared, anchoPared,grosorPared, "#b3a659"))
// paredes.push(new Rectangulo(anchoPared, altoPared, grosorPared, altoPared))
// paredes.push(new Rectangulo(anchoPared*2,0,grosorPared,altoPared*2))

// paredes.push(new Rectangulo(anchoPared,altoPared*4,anchoPared,grosorPared))
// paredes.push(new Rectangulo(anchoPared,altoPared*3,grosorPared,altoPared))
// paredes.push(new Rectangulo(anchoPared,altoPared*3,anchoPared*2 +grosorPared,grosorPared))
// paredes.push(new Rectangulo(anchoPared*3,altoPared,grosorPared,altoPared*2))
// paredes.push(new Rectangulo(anchoPared*3,altoPared,anchoPared,grosorPared))
// paredes.push(new Rectangulo(anchoPared*4,altoPared,grosorPared,altoPared))

// paredes.push(new Rectangulo(anchoPared*3,altoPared*4,anchoPared*2,grosorPared))
// paredes.push(new Rectangulo(anchoPared*5,altoPared*4,grosorPared,altoPared+altoPared/3))


// paredes.push(new Rectangulo(anchoPared*5,0,grosorPared,altoPared))

// paredes.push(new Rectangulo(anchoPared*5,0,grosorPared,altoPared))
// paredes.push(new Rectangulo(anchoPared*5,altoPared,anchoPared*2,grosorPared))
// paredes.push(new Rectangulo(anchoPared*5,altoPared*4,grosorPared,altoPared))
// paredes.push(new Rectangulo(anchoPared*6,altoPared,grosorPared,altoPared))
// paredes.push(new Rectangulo(anchoPared*7,altoPared,grosorPared,altoPared))

// paredes.push(new Rectangulo(anchoPared*6,altoPared*4,anchoPared,grosorPared))
// paredes.push(new Rectangulo(anchoPared*6,altoPared*3,grosorPared,altoPared))
// paredes.push(new Rectangulo(anchoPared*6,altoPared*3,anchoPared*2+grosorPared,grosorPared))
// paredes.push(new Rectangulo(anchoPared*8,0,grosorPared,altoPared*3))

// paredes.push(new Rectangulo(anchoPared*9,0,grosorPared,altoPared*2))

// paredes.push(new Rectangulo(anchoPared*9,altoPared*3,grosorPared,altoPared*2+altoPared/3))
// paredes.push(new Rectangulo(anchoPared*9,altoPared*3,anchoPared-anchoPared/3,grosorPared))
// // Bordes de la pantalla
// paredes.push(new Rectangulo(0,0,anchoLaberinto,grosorPared))
// paredes.push(new Rectangulo(anchoLaberinto-5,0,grosorPared,altoPared*2))
// paredes.push(new Rectangulo(0,altoLaberinto-5,anchoLaberinto,grosorPared))
// paredes.push(new Rectangulo(0,0,grosorPared,altoLaberinto))


//INSTANCIA DE PERSONAJES

// Llamar a la imagen del personaje
let dani = new Image()
dani.src = "img/daniel.png"
// let llave =new Image()
// llave.src="../img/llave.png"

// let source="img/twins.png"
// let twins= new Image();
// twins.src=source

// // INSTANCIO A LOS FANTASMAS

// let gemelas= new fantasma(twins,180,190,70,70,180,101)
// let enemies= [gemelas]

// // Instancio al héroe.
// let heroe = new Hero(dani,120,190);

// // Instancia Elementos
// let llave1 = new Element(llave,800,575,300,200,50,50)
// let elements=[llave1]

// ----------------------------------------------------

let miPersonaje
const anchoPared=5;
const largoPared=75;
function startGame() {
  // ACA SE INSTANCIAN LOS NUEVOS PERSONAJES Y PAREDES
    miAreaDejuego.start();
     // ancho, alto, color, x, y, vertical
    // miPersonaje= new component(20,20,"red",0,0,false);
    miPersonaje= new personajes (dani,120,190);
    misParedes=[
      //Bordes exteriores
      new component(largoPared*20,anchoPared,"black",0,0,false),
      new component(anchoPared,largoPared*8,"black",0,0,true),
      new component(largoPared*20,anchoPared,"black",0,370,false),
      new component(anchoPared,largoPared*2,"black",952,0,true),
      new component(anchoPared,largoPared*2,"black",952,225,true),

      //Paredes Laberinto 1
      new component(largoPared,anchoPared,"black",0,largoPared,false),
      new component(anchoPared,largoPared,"black",largoPared,largoPared,true),
      new component(anchoPared,largoPared*2,"black",largoPared*2,0,true),
      new component(anchoPared,largoPared*2,"black",largoPared*3,largoPared,true),
      new component(largoPared,anchoPared,"black",largoPared*3,largoPared,false),
      new component(anchoPared,largoPared,"black",largoPared*4,largoPared,true),
      new component(largoPared*2+5,anchoPared,"black",largoPared,largoPared*3,false),
      new component(anchoPared,largoPared,"black",largoPared,largoPared*3,true),
      new component(largoPared+5,anchoPared,"black",largoPared,largoPared*4,false),
      new component(largoPared*2+5,anchoPared,"black",largoPared*3,largoPared*4,false),
      new component(anchoPared,largoPared,"black",largoPared*5,largoPared*4,true),
      new component(anchoPared,largoPared,"black",largoPared*5,0,true),
      new component(largoPared*3+5,anchoPared,"black",largoPared*5,largoPared,false),
      new component(anchoPared,largoPared,"black",largoPared*7,largoPared,true),
      new component(anchoPared,largoPared,"black",largoPared*8,largoPared,true),
      new component(anchoPared,largoPared*3,"black",largoPared*10,0,true),
      new component(anchoPared,largoPared*2,"black",largoPared*9,largoPared,true),
      new component(largoPared*4+5,anchoPared,"black",largoPared*6,largoPared*3,false),
      new component(anchoPared,largoPared,"black",largoPared*6,largoPared*3,true),
      new component(largoPared*3+5,anchoPared,"black",largoPared*6,largoPared*4,false),
      new component(largoPared,anchoPared,"black",largoPared*11,largoPared*3,false),
      new component(anchoPared,largoPared*2,"black",largoPared*11,largoPared*3,true),
      new component(anchoPared,largoPared,"black",largoPared*11,0,true),
      new component(anchoPared,largoPared*2,"black",largoPared*12,0,true)
    ]
  }
  
  var miAreaDejuego = {
    canvas : document.getElementById('nivel1'),
    start : function() {
      this.canvas.height = window.innerHeight * 0.6;
	  this.canvas.width = window.innerWidth * 0.7;
      this.context = this.canvas.getContext("2d");
      this.interval = setInterval(updateGameArea, 10);
      window.addEventListener('keydown', function (e) {
        miAreaDejuego.key = e.keyCode;
      })
      window.addEventListener('keyup', function (e) {
        miAreaDejuego.key = false;
      })
    }
    ,
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
  }
// CONSTRUCTOR QUE DIBUJA LAS PAREDES DEL JUEGO
  function component(ancho, alto, color, x, y,vertical) {
    this.ancho = ancho;
    this.alto = alto;
>>>>>>> 842acb0fe222b721dff0fe857ccee7629bfabb88
    this.x = x;
    this.y = y;
    this.ancho= ancho;
    this.alto = alto;
    this.color = color;
    this.vertical=vertical;

    this.dibujar = function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

// --------- bordes ---------------

const bordes=[
      new component(largoPared*20,anchoPared,"black",0,0,false,"wall"),
      new component(anchoPared,largoPared*8,"black",0,0,true,"wall"),
      new component(largoPared*20,anchoPared,"black",0,386.5,false,"wall"),
      new component(anchoPared,largoPared*2,"black",948,0,true,"wall"),
      new component(anchoPared,largoPared*2,"black",948,238,true,"wall")
]

// ---- laberinto 1 -----

const laberinto1=[

      new component(largoPared,anchoPared,"black",0,largoPared,false),
      new component(anchoPared,largoPared,"black",largoPared,largoPared,true),
      new component(anchoPared,largoPared*2,"black",largoPared*2,0,true),
      new component(anchoPared,largoPared*2,"black",largoPared*3,largoPared,true),
      new component(largoPared,anchoPared,"black",largoPared*3,largoPared,false),
      new component(anchoPared,largoPared,"black",largoPared*4,largoPared,true),
      new component(largoPared*2+5,anchoPared,"black",largoPared,largoPared*3,false),
      new component(anchoPared,largoPared,"black",largoPared,largoPared*3,true),
      new component(largoPared+5,anchoPared,"black",largoPared,largoPared*4,false),
      new component(largoPared*2+5,anchoPared,"black",largoPared*3,largoPared*4,false),
      new component(anchoPared,largoPared,"black",largoPared*5,largoPared*4,true),
      new component(anchoPared,largoPared,"black",largoPared*5,0,true),
      new component(largoPared*3+5,anchoPared,"black",largoPared*5,largoPared,false),
      new component(anchoPared,largoPared,"black",largoPared*7,largoPared,true),
      new component(anchoPared,largoPared,"black",largoPared*8,largoPared,true),
      new component(anchoPared,largoPared*3,"black",largoPared*10,0,true),
      new component(anchoPared,largoPared*2,"black",largoPared*9,largoPared,true),
      new component(largoPared*4+5,anchoPared,"black",largoPared*6,largoPared*3,false),
      new component(anchoPared,largoPared,"black",largoPared*6,largoPared*3,true),
      new component(largoPared*3+5,anchoPared,"black",largoPared*6,largoPared*4,false),
      new component(largoPared,anchoPared,"black",largoPared*11,largoPared*3,false),
      new component(anchoPared,largoPared*2,"black",largoPared*11,largoPared*3,true),
      new component(anchoPared,largoPared,"black",largoPared*11,0,true)

];

// -------------- llamar a la funcion que dibuja las paredes -----------


// -------------------- ELEMENTOS DE PUNTUACION  ------------------------------------------
function Element (imagen,recorteX,recorteY,positionX, positionY, ancho, alto){
    this.x = positionX+xLab;
    this.y = positionY+yLab;
    this.width = ancho;
    this.height = alto;

    this.draw=function(){
        ctx.drawImage(imagen,0,0,recorteX,recorteY,this.x,this.y,this.width,this.height)
    }
  }

// --------------- llamar a las imagenes de los objetos----------




// ------------------crear los objetos ----------------------

 // -----------------------------  NUESTRO PERSONAJE -------------------------


 class Hero {
    constructor(personaje,widthImage,heightImage) {
        // Propiedades.
        this.src = personaje;
        this.frameX = 0;
        this.frameY=0
        this.x = 50;
        this.y = 60;
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

                }
                if(wall==llave1){
                    this.getDoorKey=true
                    } else{
                        this.getDoorKey=false
                    }
            }

        }
    }
}

// -------------- llamar a la imagen del heroe -----------


// ------------- llamar a a funcion que crea al heroe--------------



// ------------------------------- FANTASMAS -------------------------------


class fantasma {
    constructor (src, x,y,ancho, alto, altoImg, anchoImg){
        this.src = src;
        this.frameX = 0;
        this.frameY=0
        this.x = x;
        this.y = y;
        this.speedX=5;
        this.speedY=0;
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

            if (this.x >canvas.width-100) {
                this.speedX=-this.speedX;
            }

            if(this.x<50){
                this.speedX=0;
                this.speedY=-3 ;
            }

            if (this.y<48) {
                this.speedY =0;
                this.speedX=3;
            }

            if (this.x> canvas.width) {
                this.reset()
            }

        },
        this.reset=function(){
            this.x=50;
            this.y=200;
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

// -----llamar a las imagenes de los fantasmas ------


// ----------------- crear array de componentes de fantasmas -----------------



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
            
              
    
<<<<<<< HEAD
            break;

        default:
            break;
    }
})
  
=======
  
// LABERINTOS
        
// Paredes Laberinto 2
// new component(largoPared*2+5,anchoPared,"black",largoPared,largoPared*2,false),
// new component(anchoPared,largoPared,"black",largoPared*4,0,true),
// new component(largoPared*2+5,anchoPared,"black",largoPared*2,largoPared,false),
// new component(anchoPared,largoPared,"black",largoPared,largoPared,true),
// new component(largoPared*3+5,anchoPared,"black",largoPared,largoPared*3,false),
// new component(anchoPared,largoPared,"black",largoPared,largoPared*3,true),
// new component(anchoPared,largoPared,"black",largoPared*2,largoPared*4,true),
// new component(largoPared*4+5,anchoPared,"black",largoPared*2,largoPared*4,false),
// new component(anchoPared,largoPared,"black",largoPared*4,largoPared*3,true),
// new component(largoPared*3,anchoPared,"black",largoPared*5,largoPared*3,false),
// new component(largoPared,anchoPared,"black",largoPared*5,largoPared,false),
// new component(anchoPared,largoPared*2,"black",largoPared*8,largoPared*3,true),
// new component(anchoPared,largoPared,"black",largoPared*6,largoPared,true),
// new component(largoPared+5,anchoPared,"black",largoPared*6,largoPared*2,false),
// new component(anchoPared,largoPared*2,"black",largoPared*7,0,true),
// new component(largoPared*3+5,anchoPared,"black",largoPared*8,largoPared,false),
// new component(anchoPared,largoPared,"black",largoPared*11,largoPared,true),
// new component(largoPared*2+5,anchoPared,"black",largoPared*11,largoPared*2,false),
// new component(anchoPared,largoPared,"black",largoPared*8,largoPared,true),
// new component(largoPared*2+5,anchoPared,"black",largoPared*8,largoPared*2,false),
// new component(anchoPared,largoPared*2,"black",largoPared*10,largoPared*2,true),
// new component(largoPared+5,anchoPared,"black",largoPared*9,largoPared*4,false),
// new component(anchoPared,largoPared,"black",largoPared*9,largoPared*3,true),
// new component(anchoPared,largoPared,"black",largoPared*11,largoPared*3,true),
// new component(largoPared*2+5,anchoPared,"black",largoPared*11,largoPared*3,false),
// new component(largoPared+5,anchoPared,"black",largoPared*11,largoPared*4,false)

// Paredes Laberinto 3
// new component(largoPared*3+5,anchoPared,"black",largoPared,largoPared,false),
// new component(anchoPared,largoPared,"black",largoPared,0,true),
// new component(anchoPared,largoPared*2,"black",largoPared*4,largoPared,true),
// new component(largoPared*2+5,anchoPared,"black",largoPared*4,largoPared*2,false),
// new component(largoPared+5,anchoPared,"black",largoPared*4,largoPared*3,false),
// new component(anchoPared,largoPared,"black",largoPared*5,largoPared,true),
// new component(largoPared*2+5,anchoPared,"black",0,largoPared*3,false),
// new component(anchoPared,largoPared,"black",largoPared*2,largoPared*2,true),
// new component(largoPared+5,anchoPared,"black",largoPared*2,largoPared*2,false),
// new component(anchoPared,largoPared*2,"black",largoPared*3,largoPared*2,true),
// new component(largoPared*2+5,anchoPared,"black",largoPared,largoPared*4,false),
// new component(largoPared*2+5,anchoPared,"black",largoPared*4,largoPared*4,false),
// new component(anchoPared,largoPared,"black",largoPared*6,largoPared*3,true),
// new component(anchoPared,largoPared,"black",largoPared*7,largoPared*4,true),
// new component(largoPared*2+5,anchoPared,"black",largoPared*8,largoPared*3,false),
// new component(anchoPared,largoPared,"black",largoPared*9,largoPared*3,true),
// new component(largoPared*3+5,anchoPared,"black",largoPared*9,largoPared*4,false),
// new component(anchoPared,largoPared*3,"black",largoPared*11,largoPared,true),
// new component(largoPared+5,anchoPared,"black",largoPared*11,largoPared,false),
// new component(largoPared*2+5,anchoPared,"black",largoPared*7,largoPared*2,false),
// new component(largoPared+5,anchoPared,"black",largoPared*7,largoPared,false),
// new component(anchoPared,largoPared,"black",largoPared*7,largoPared,true),
// new component(anchoPared,largoPared,"black",largoPared*8,0,true),
// new component(anchoPared,largoPared,"black",largoPared*9,largoPared,true),
// new component(anchoPared,largoPared*2,"black",largoPared*10,0,true)
>>>>>>> 842acb0fe222b721dff0fe857ccee7629bfabb88
