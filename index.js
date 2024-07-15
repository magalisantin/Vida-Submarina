let fondo; //creamos una variable bajo el nombre fondo
let objeto15; //creamos una variable bajo el nombre objeto15
let objetos = []; //creamos una variable que contenga una lista de imagenes bajo el nombre objetos
let posicionY = [];  //creamos una variable que contenga una lista de la posicion sobre el ejeY de determinado grupo de imagenes bajo el nombre posicionY
let bajarBasura = false; //creamos una variable que funcione como interruptor y permita un accionar bajo el nombre bajarBasura
let barco; //creamos una variable que para llamar a determinada imagen bajo el nombre barco
let barcoVisible = false; //creamos una variable que funcione de interruptor y permita un accionar bajo el nombre barcoVisible
let barcoX; //creamos una variable que establezca un punto del ejeX para determinada imagen bajo el nombre barcoX
let barcoWidth; //creamos una variable para definir el ancho de la imagen del barco
let barcoHeight; //creamos una variable para definir el alto de la imagen del barco
let petroleo; //creamos una variable para llamar a determinada imagen bajo el nombre petroleo
let petroleoVisible = false; //creamos una variable que permita un accionar bajo el nombre petroleoVisible
let petroleoX; //creamos una variable que establezca un punto del ejeX para determinada imagen bajo el nombre petroleoX
let petroleoY; //creamos una variable que establezca un punto del ejeY para determinada imagen bajo el nombre petroleoY
let petroleoSubiendo = false; //creamos una variable que permita un accionar bajo el nombre petroleoSubiendo
let activarBlur = false; //creamos una variable que permita un accionar bajo el nombre activarBlur

let mostrarTexto1 = true; //creamos una variable que funcione de interruptor para mostrar y ocultar los bloques de texto
let mostrarTexto2 = false;
let mostrarTexto3 = false;
let mostrarTexto4 = false;
let mostrarTexto5 = false;
let mostrarTexto6 = false; 
let mostrarTexto7 = false; 

let rectWidth = 529; //definimos tamaño y posición del rectángulo donde estarán situados los textos
let rectHeight = 125;
let rectX;
let rectY1;
let rectY2;
let rectY3;
let rectY4; 

let miSonido; //creamos una variable para el audio que se va a escuchar de fondo

function preload() { //cargamos todas las imágenes y el sonido para colocarlas más adelante
  fondo = loadImage('Fondo del Mar.jpg'); //carga la imagen del océano y los animales marinos que funcionara como fondo
  objeto15 = loadImage('Objetos/Objeto15.png'); //carga la imagen del ultimo objeto de la carpeta "Objetos"
  barco = loadImage('Barco/barco.png'); //carga la imagen del barco petrolero
  petroleo = loadImage('Barco/petroleobarco.png'); //carga la imagen que funcionara como el petroleo
  control1 = loadImage('Controles/Control1.png'); //carga la imagen para el botón de la tecla de abajo
  control2 = loadImage('Controles/Control2.png'); //carga la imagen para el boton de la tecla 'P'
  control3 = loadImage('Controles/Control3.png'); //carga la imagen para el boton de la tecla 'b'
  control4 = loadImage('Controles/Control4.png'); //carga la imagen para el boton de la tecla 'f'
  miSonido = loadSound('Sonidos/Mar.mp3'); //cargar el sonido

  for (let i = 1; i <= 14; i++) { //cargamos todas las demás imágenes de la carpeta "Objetos"
    objetos[i - 1] = loadImage('Objetos/Objeto' + i + '.png');
    posicionY[i - 1] = 0;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight); //definimos de canvas el alto y el ancho de la pantalla
  barcoX = windowWidth; //definimos como punto de aparicion del barco el ultimo pixel del eje X
  petroleoX = windowWidth; //definimos como punto de aparicion del petroleo el ultimo pixel del eje X
  petroleoY = 0; //definimos como punto de aparicion del barco el pixel 0 del eje Y


  rectX = (windowWidth - rectWidth) / 2; //se calcula la posicion del rectangulo de los bloques de texto
  rectY1 = (2 / 12) * windowHeight;
  rectY2 = (2 / 12) * windowHeight;
  rectY3 = windowHeight;
  rectY4 = windowHeight;

  barcoWidth = barco.width/7; //cambiamos el ancho y el alto proporcional del barco dividiendo sus valores originales por 7
  barcoHeight = barco.height/7; //

  miSonido.loop(); //definimos que se reproduzca el audio en bucle 
}

function draw() {
  image(fondo, 0, 0, windowWidth, windowHeight); //dibujamos la imagen que usaremos como fondo desde el punto (0,0) del canvas y que ocupe todo el alto y ancho del canvas

  let redimension = objeto15.width / objeto15.height; //se guarda una variable con el tamaño de la imagen objeto15 de la carpeta Objetos
  let newHeight = windowWidth / redimension; //y se utiliza para plantear una nueva variable con el mismo alto

  image(objeto15, 0, posicionY[14], windowWidth, newHeight); //se determina la posicion sobre el eje Y del objeto15 con el nuevo alto

  if (bajarBasura) { //se establece la condición de que al usar la variable bajarBasura:
    let todosFuera = true;
    for (let i = 0; i < objetos.length; i++) { //se utiliza un bucle for para que todas las imagenes de la carpeta Objetos:
      if (posicionY[i] < windowHeight) { //bajen por el ejeY hasta llegar a sus posiciones pautadas:
        todosFuera = false;
      }
      if (i === 0 && posicionY[i] < (1 / 10) * windowHeight) { //por ejemplo, la primera imagen de la carpeta Objetos caerá sobre el ejeY hasta llegar la 1/10 parte de la altura de la pantalla
        posicionY[i] += 1;
      } else if (i === 1 && posicionY[i] < (8 / 10) * windowHeight) {
        posicionY[i] += 1;
      } else if (i === 2 && posicionY[i] < (6 / 10) * windowHeight) {
        posicionY[i] += 1;
      } else if (i === 3 && posicionY[i] < (3 / 10) * windowHeight) {
        posicionY[i] += 1;
      } else if (i === 4 && posicionY[i] < (3 / 10) * windowHeight) {
        posicionY[i] += 1;

        if (posicionY[i] >= (3 / 10) * windowHeight) { //una vez que el cuarto objeto llega a la 3/10 parte de la altura de la pantalla:
          mostrarTexto2 = true; //aparecerá el segundo bloque de texto
        }
      } else if (i === 5 && posicionY[i] < (5 / 10) * windowHeight) {
        posicionY[i] += 1;
      } else if (i === 6 && posicionY[i] < (8 / 10) * windowHeight) {
        posicionY[i] += 1;
      } else if (i === 7 && posicionY[i] < (5 / 10) * windowHeight) {
        posicionY[i] += 1;
      } else if (i === 8 && posicionY[i] < (7 / 10) * windowHeight) {
        posicionY[i] += 1;
      } else if (i === 9 && posicionY[i] < (4 / 10) * windowHeight) {
        posicionY[i] += 1;
      } else if (i === 10 && posicionY[i] < (8 / 10) * windowHeight) {
        posicionY[i] += 1;
      } else if (i === 11 && posicionY[i] < (7 / 10) * windowHeight) {
        posicionY[i] += 1;
      } else if (i === 12 && posicionY[i] < (3 / 10) * windowHeight) {
        posicionY[i] += 1;
      } else if (i === 13 && posicionY[i] < (7 / 10) * windowHeight) {
        posicionY[i] += 1;
      }
    }

    if (todosFuera && petroleoY + windowHeight <= 0) {
      mostrarTexto5 = true;
    }

    if (posicionY[10] >= (8 / 10) * windowHeight) { //se establece que cuando el objeto que tiene que cae más abajo llega a su posicion:
      barcoVisible = true; //aparecerá el barco
      petroleoVisible = true; //aparecerá en petroleo
    }
  }

  for (let i = 0; i < objetos.length; i++) { //se utiliza un bucle for para dterminar la posicion y dimension de todas las imagenes de la carpeta objetos
    image(objetos[i], 0, posicionY[i], windowWidth, newHeight);
  }

  if (barcoVisible) { //se establece que si aparece el barco
    barcoX -= 1; //este se tendrá que deslizar desde el extremo derecho con velocidad -1, por lo que se deslizará hacia la izquierda
    image(barco, barcoX, 0, barcoWidth, barcoHeight);
    mostrarTexto2 = false; //además, aparecerá el segundo texto
  }

  if (petroleoVisible) { //se establece que si aparece el petroleo
    petroleoX -= 1; //este se tendrá que deslizar desde el extremo derecho con velocidad -1, por lo que se deslizará hacia la izquierda
    image(petroleo, petroleoX, petroleoY, windowWidth, windowHeight);

    if (petroleoX <= 0) { //se establece que si el petroleo es menor o igual a 0:
      petroleoX = 0;
      petroleoVisible = false; //el petroleo se detendrá en el lugar
      mostrarTexto3 = true; //y aparecerá el tercer bloque de texto
    }
  }

  if (petroleoSubiendo) {//se establece que si el se utiliza la variable petroleoSubiendo
    petroleoY -= 2; //el petroleo subira por el ejeY debido a su velocidad el negativo
    if (petroleoY + windowHeight <= 0) { //una vez que el petroleo haya subido por el ejeY hasta desaparecer del canvas:
      petroleoSubiendo = false;
      petroleoY = -windowHeight;
      mostrarTexto6 = true; //aparecerá otro bloque de texto
    }

    rectY1 -= 2;
    rectY2 -= 2;
    rectY3 -= 2;
    rectY4 -= 2; //se ajustan las posiciones verticales de los textos mientras suben junto con el petroleo
  }

  if (barcoX <= -barcoWidth) { //se establece que si el barco desaparece por el lado izquierdo del canvas:
    mostrarTexto4 = true; //aparecerá otro bloque de texto
  }

  if (mostrarTexto6) {
    fill(255);
    textFont('ruddy');
    textSize(16);
    textAlign(CENTER, CENTER);
    textLeading(30);
    text("Cómo ayudar al impacto de derrames de petróleo:\n\n- Apoyar políticas y regulaciones ambientales más estrictas.\n- Promover tecnologías más seguras y limpias en la industria del transporte marítimo.\n- Apoyar organizaciones que trabajan en la rehabilitación de hábitats afectados por derrames.", rectX, rectY3 + (2 / 12) * windowHeight, rectWidth, rectHeight);
  }

  if (mostrarTexto5) {
    fill(255);
    textFont('ruddy');
    textSize(16);
    textAlign(CENTER, CENTER);
    textLeading(30);
    text("Cómo ayudar con la contaminación marina por basura:\n\n- Reducir el uso de plásticos desechables y optar por alternativas reutilizables.\n- Participar en limpiezas de playas y costas.\n- Educar sobre la importancia de desechar adecuadamente los residuos.", rectX, rectY4 + (2 / 12) * windowHeight, rectWidth, rectHeight);
  }

  if (mostrarTexto4) {
    fill(255);
    textFont('ruddy');
    textSize(32);
    textAlign(CENTER, CENTER);
    textLeading(30);
    text("¿Los ayudamos?", rectX, rectY2 + rectHeight + + (2 / 12) * windowHeight, rectWidth, rectHeight);
  }

  if (mostrarTexto3) {
    noFill(); 
    noStroke();
    rect(rectX, rectY1, rectWidth, rectHeight);
    fill(255);
    textSize(16);
    textAlign(CENTER, CENTER);
    text("Cada año, los derrames de petróleo causados por barcos petroleros liberan grandes cantidades de petróleo crudo en los océanos, contaminando hábitats marinos y afectando gravemente a especies como mamíferos marinos, aves marinas, peces y organismos bentónicos.", rectX, rectY1 + (2 / 12) * windowHeight, rectWidth, rectHeight);
  }

  if (mostrarTexto2) {
    fill(255);
    textFont('ruddy');
    textSize(16);
    textAlign(CENTER, CENTER);
    textLeading(30);
    text("Al menos 800 especies marinas han sufrido los efectos de la ingestión de plásticos o de quedar atrapadas en desechos como redes de pesca abandonadas o en bolsas plásticas e incluso terminan enredadas en hilos.", rectX, rectY2, rectWidth, rectHeight);
  }

  if (mostrarTexto1) {
    fill(255);
    textFont('ruddy');
    textSize(16);
    textAlign(CENTER, CENTER);
    textLeading(30);
    text("Se estima que cada año, entre 4.8 y 12.7 millones de toneladas métricas de plásticos ingresan a los océanos. Esto equivale a depositar un camión de basura lleno de plástico en los océanos cada minuto.", rectX, rectY1, rectWidth, rectHeight);
  }

  if (mostrarTexto1) { //se establece que si se llama a la variante mostrarTexto1:
    image(control1, 20, 20, control1.width / 2, control1.height / 2); //aparecerá la instrucción de qué tecla presionar para que aparezca el texto
  }
  
  let control2PosX = 20;
  let control2PosY = 20 - (windowHeight - rectY4); //ajustamos la posición según el movimiento de los textos

  if (mostrarTexto4) { //se establece que si se llama a la variante mostrarTexto4:
    image(control2, control2PosX, control2PosY, control2.width / 2, control2.height / 2); //aparecerá la instrucción de qué tecla presionar para que aparezca el texto
  }

  if (mostrarTexto6) { //se establece que si se llama a la variante mostrarTexto6:
    image(control3, 20, 20, control2.width / 2, control3.height / 2); //aparecerá la instrucción de qué tecla presionar para que aparezca el texto
  }

  if (mostrarTexto5) { //se establece que si se llama a la variante mostrarTexto5:
    image(control4, 20, 20, control4.width / 2, control4.height / 2); //aparecerá la instrucción de qué tecla presionar para que aparezca el texto
  }

  if (activarBlur) { //se establece que si se llama a la variante activarBlur
    image(fondo, 0, 0, windowWidth, windowHeight); //la imagen que está de fondo
    filter(BLUR, 8); //pasará a verse borrosa 

    fill(255); //y aparecerá otro bloque de texto
    textFont('ruddy');
    textSize(24);
    textAlign(CENTER, CENTER);
    textLeading(36);
    text("Cada pequeña acción cuenta para proteger nuestros océanos y la vida marina.", rectX, rectY3 + (2 / 12) * windowHeight, rectWidth, rectHeight);
  
    textSize(18);
    text("-El cambio empieza por vos-", rectX, rectY3 + (4 / 12) * windowHeight, rectWidth, rectHeight);
  }
  
  
}

function keyPressed() { //se establece que
  if (keyCode === DOWN_ARROW) { //si se presiona la tecla de la flecha para abajo
    bajarBasura = true; //la basura comenzará a bajar hacia las posiciones determinadas para cada objeto
    mostrarTexto1 = false; //y desaparecerá el texto que ya estaba
  } else if (key === 'b' || key === 'B') { //si se presiona la tecla B
    if (mostrarTexto6) { //se ocultará el texto
      mostrarTexto6 = false;
    } else {
      for (let i = 0; i < objetos.length; i++) { //y se iran desapareciendo las fotos de la carpeta Objetos
        if (posicionY[i] > 0 && posicionY[i] < windowHeight) {
          posicionY[i] = windowHeight + 100; //se mueve el objeto fuera del canvas
          break; //permite que desaparezcan una por una
        }
      }
    }
  } else if (key === 'p' || key === 'P') { //si se presiona la tecla P
    petroleoSubiendo = true; //el petroleo comenzará a subir por el eje Y hasta salirse del canvas
  } else if (key === 'f' || key === 'F') { //si se presiona la tecla F
    activarBlur = true; //el fondo pasa a verse borroso
  }
}