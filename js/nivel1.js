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
const largoPared=50;
function startGame() {
  // ACA SE INSTANCIAN LOS NUEVOS PERSONAJES Y PAREDES
    miAreaDejuego.start();
     // ancho, alto, color, x, y, vertical
    // miPersonaje= new component(20,20,"red",0,0,false);
    miPersonaje= new personajes (dani,120,190);
    misParedes=[
        new component(largoPared,anchoPared,"black",30,30,false),
        new component(anchoPared,largoPared,"black",30,30,true)
        // new component(anchoPared,largoPared,"black",80,30,true),
        // new component(largoPared + 4,anchoPared,"black",30,80,false)
    ]
  }
  
  var miAreaDejuego = {
    canvas : document.getElementById('canvas'),
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
    this.x = x;
    this.y = y;
    this.vertical=vertical;
    this.speedX=0;
    this.speedY=0;
    this.update= function(){
     ctx = miAreaDejuego.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.ancho, this.alto);
    }
    
  }

// CONSTRUCTOR DE NUESTRO PERSONAJE

 function personajes (personaje,widthImage,heightImage){
 		this.src = personaje;
        this.frameX = 0;
        this.frameY=0
        this.x = 50;
        this.y = 100;
        this.speedX=0;
        this.speedY=0;
        this.width = 54;
        this.height = 54;
        this.colision1=false;
        this.colision2=false;
        this.colision3=false;
        this.colision4=false;
        this.widthImage=widthImage;
        this.heightImage=heightImage;
        // METODOS
        this.draw = function(){
        	ctx = miAreaDejuego.context;
            ctx.drawImage(this.src, this.frameX * this.widthImage, this.frameY*this.heightImage, this.widthImage, this.heightImage, this.x, this.y, this.width, this.height)
        },
         this.nuevaPosicion=function () {
        this.x+=this.speedX;
        this.y+=this.speedY;
	    },
	    this.colision=function (obj) {
	        // MI PERSONAJE
	        this.miDrc=this.x + this.width;
	        this.miIzq=this.x;
	        this.miTop=this.y;
	        this.miBase=this.y + this.height;

	        // PAREDES

	        const paredDrc= obj.x + (obj.ancho);
	        const paredIzq= obj.x;
	        const paredTop= obj.y;
	        const paredBase=obj.y + (obj.alto);
	        const vertical= obj.vertical;


	        if (vertical) {
	            // <
	            
	            if (this.miTop > paredBase || this.miBase < paredTop ) {
	                this.colision1=false
	            } else if(this.miDrc >  paredIzq || this.miBase > paredTop){
	             this.colision1=true
	           }else if (this.miIzq<=paredDrc) {
	            this.colision2=true;
	            }    


	        }else{
	            if (this.miIzq> paredDrc || this.miDrc < paredIzq ) {
	                this.colision3=false;
	            }else if(this.miTop == paredBase){
	                this.colision3=true;
	            }

	            if (this.miIzq> paredDrc || this.miDrc < paredIzq) {
	              this.colision4=false;
	            }else if (this.miBase == paredTop) {
	              this.colision4=true;
	            }

	        }
	    }


 }



  function updateGameArea() {
   miAreaDejuego.clear();
   miPersonaje.draw();
   miPersonaje.nuevaPosicion();
   
   if (miAreaDejuego.key && miAreaDejuego.key == 37){
     if (miPersonaje.colision2) {
            miPersonaje.speedX=0;
            miPersonaje.colision2=false;
          } else {
          miPersonaje.speedX = -1;
          miPersonaje.frameY=1

      } 

      }
    if (miAreaDejuego.key && miAreaDejuego.key == 39) {
      
      if (miPersonaje.colision1){
        miPersonaje.speedX=0;
        miPersonaje.colision1=false;
      } else if (miPersonaje.colision2 || !miPersonaje.colision1 || miPersonaje.colision3){
      miPersonaje.speedX = 1;
      miPersonaje.frameY=0

      } 

    }
    if (miAreaDejuego.key && miAreaDejuego.key == 38) {
      if (miPersonaje.colision3) {
        miPersonaje.speedY=0;
        miPersonaje.colision3=false;
      }else{
      miPersonaje.speedY = -1;        
      miPersonaje.frameY=2
 
      }
     }
    if (miAreaDejuego.key && miAreaDejuego.key == 40) {
      if (miPersonaje.colision4) {
        miPersonaje.speedY=0;
        miPersonaje.colision4=false;
      }else{
      miPersonaje.speedY = 1;  
      miPersonaje.frameY=3;       

      }
     }

    for (let i = 0; i < misParedes.length; i++) {
        misParedes[i].update() 
        miPersonaje.colision(misParedes[i])   
  
        
    }
  }
    
  
