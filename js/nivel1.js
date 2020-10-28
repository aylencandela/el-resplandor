//Construccion de paredes
// Genero un array vacío y voy pusheando paredes nuevas.
let paredes = []
paredes.push(new Rectangulo(0, altoPared, anchoPared,grosorPared, "#b3a659"))
paredes.push(new Rectangulo(anchoPared, altoPared, grosorPared, altoPared))
paredes.push(new Rectangulo(anchoPared*2,0,grosorPared,altoPared*2))

paredes.push(new Rectangulo(anchoPared,altoPared*4,anchoPared,grosorPared))
paredes.push(new Rectangulo(anchoPared,altoPared*3,grosorPared,altoPared))
paredes.push(new Rectangulo(anchoPared,altoPared*3,anchoPared*2 +grosorPared,grosorPared))
paredes.push(new Rectangulo(anchoPared*3,altoPared,grosorPared,altoPared*2))
paredes.push(new Rectangulo(anchoPared*3,altoPared,anchoPared,grosorPared))
paredes.push(new Rectangulo(anchoPared*4,altoPared,grosorPared,altoPared))

paredes.push(new Rectangulo(anchoPared*3,altoPared*4,anchoPared*2,grosorPared))
paredes.push(new Rectangulo(anchoPared*5,altoPared*4,grosorPared,altoPared+altoPared/3))


paredes.push(new Rectangulo(anchoPared*5,0,grosorPared,altoPared))

paredes.push(new Rectangulo(anchoPared*5,0,grosorPared,altoPared))
paredes.push(new Rectangulo(anchoPared*5,altoPared,anchoPared*2,grosorPared))
paredes.push(new Rectangulo(anchoPared*5,altoPared*4,grosorPared,altoPared))
paredes.push(new Rectangulo(anchoPared*6,altoPared,grosorPared,altoPared))
paredes.push(new Rectangulo(anchoPared*7,altoPared,grosorPared,altoPared))

paredes.push(new Rectangulo(anchoPared*6,altoPared*4,anchoPared,grosorPared))
paredes.push(new Rectangulo(anchoPared*6,altoPared*3,grosorPared,altoPared))
paredes.push(new Rectangulo(anchoPared*6,altoPared*3,anchoPared*2+grosorPared,grosorPared))
paredes.push(new Rectangulo(anchoPared*8,0,grosorPared,altoPared*3))

paredes.push(new Rectangulo(anchoPared*9,0,grosorPared,altoPared*2))

paredes.push(new Rectangulo(anchoPared*9,altoPared*3,grosorPared,altoPared*2+altoPared/3))
paredes.push(new Rectangulo(anchoPared*9,altoPared*3,anchoPared-anchoPared/3,grosorPared))
// Bordes de la pantalla
paredes.push(new Rectangulo(0,0,anchoLaberinto,grosorPared))
paredes.push(new Rectangulo(anchoLaberinto-5,0,grosorPared,altoPared*2))
paredes.push(new Rectangulo(0,altoLaberinto-5,anchoLaberinto,grosorPared))
paredes.push(new Rectangulo(0,0,grosorPared,altoLaberinto))


//INSTANCIA DE PERSONAJES

// Llamar a la imagen del personaje
let dani = new Image()
dani.src = "img/daniel.png"
let llave =new Image()
llave.src="img/llave.png"

let source="img/twins.png"
let twins= new Image();
twins.src=source

// INSTANCIO A LOS FANTASMAS

let gemelas= new fantasma(twins,180,190,70,70,180,101)
let enemies= [gemelas]

// Instancio al héroe.
let heroe = new Hero(dani,120,190);

// Instancia Elementos
let llave1 = new Element(llave,800,575,300,200,50,50)
let elements=[llave1]
