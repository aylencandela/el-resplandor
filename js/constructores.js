// Agregué el parámetro "color" para debuggear mejor cuál pared estaba tocando. Pueden sacarlo.
function Rectangulo(positionX, positionY, ancho, alto, color,vertical) {
    this.x = positionX+xLab;
    this.y = positionY+yLab;
    this.width = ancho;
    this.height = alto;
    this.color = color;
    this.vertical=vertical;

    this.dibujar = function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

function Element (imagen,recorteX,recorteY,positionX, positionY, ancho, alto){
    this.x = positionX+xLab;
    this.y = positionY+yLab;
    this.width = ancho;
    this.height = alto;

    this.draw=function(){
        ctx.drawImage(imagen,0,0,recorteX,recorteY,this.x,this.y,this.width,this.height)
    }
}

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

        this.checkCollision = function (wall){
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

class fantasma {
    constructor (src, x,y,ancho, alto, altoImg, anchoImg){
        //Propiedades
        this.src = src;
        this.frameX = 0;
        this.frameY = 0;
        this.x = x;
        this.y = y;
        this.speedX=5;
        this.speedY=0;
        this.width = ancho;
        this.height = alto;
        this.collide = false;
        this.anchoImg = anchoImg;
        this.altoImg = altoImg;

        // Métodos.
        this.draw = function(){
            ctx.drawImage(this.src, this.frameX * this.anchoImg, this.frameY*this.altoImg, this.anchoImg, this.altoImg, this.x, this.y, this.height, this.width)
        
        },

        this.newPos=function(){ 
            this.x+=this.speedX
            this.y+=this.speedY
        },

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