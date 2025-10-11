/*
 Tema: MITOLOGIA - Medusa
 Alumnos: Diego Ezequiel Maidana y Mauro Romero
 Comision 3: Profesor David.B
 Link del Video: https://youtu.be/Al4mYuioQm0
 creditos: apretar "f"
*/

let estado = 0;          // pantalla actual
let cantPantallas = 21;  // total de pantallas

// Botones
let btnAncho = 120;
let btnAncho2 = 360;
let btnAlto = 40;
let btnIzqX, btnDerX, btnY, btnVolX, btnVolY;

//array de imagenes
let images = new Array(cantPantallas);
//Variables musicales
let click;
let fondo;

function preload(){
  //carga imagenes en el array
  images[0] = loadImage('data/imagen1.jpg');
  images[1] = loadImage('data/imagen2.jpg');
  images[2] = loadImage('data/imagen3.jpg');
  images[3] = loadImage('data/imagen0.jpg');
  images[4] = loadImage('data/imagen4.jpg');
  images[5] = loadImage('data/imagen5.jpg');
  images[6] = loadImage('data/imagen6.jpg');
  images[7] = loadImage('data/imagen7.jpg');
  images[8] = loadImage('data/imagen8.jpg');
  images[9] = loadImage('data/imagen9.jpg');
  images[10] = loadImage('data/imagen10.jpg');
  images[11] = loadImage('data/imagen11.jpg');
  images[12] = loadImage('data/imagen12.jpg');
  images[13] = loadImage('data/imagen13.jpg');
  images[14] = loadImage('data/imagen14.jpg');
  images[15] = loadImage('data/imagen15.jpg');
  images[16] = loadImage('data/imagen16.jpg');
  images[17] = loadImage('data/imagen17.jpg');
  images[18] = loadImage('data/imagen18.jpg');
  images[19] = loadImage('data/imagen19.jpg');
  images[20] = loadImage('data/creditos.jpg');
  //Carga musica
  soundFormats('mp3','ogg');
  click = loadSound('click.mp3');
  fondo = loadSound('fondo.mp3');
}
function setup() {
  createCanvas(640, 480);

  // Posiciones de botones principales
  btnIzqX = 50;
  btnDerX = width - 170;
  btnY = height - 60;

  // Botón opciones (centrado al medio para opciones)
  btnExtraX = width / 2 - 180;
  btnExtraY = height/2-75;
  btnExtraX2 = width / 2 - 180;
  btnExtraY2 = height/2-125;
  
  //Boton volver
  btnVolx = width / 2 -180
  btnVoly = height/2-75;

}
function draw() {
  fondo.play();
  if (estado === 0){ 
    image(images[estado], 0,0,width, height);
    narratorSpeaking('"Medusa era la más hermosa de las Gorgonas, quienes eran conocidas como monstruos horribles, sin embargo, su belleza la hacia distinta a cualquier otra, una belleza tal que tentaba a todo aquel que la viera... "');
  } else if (estado === 1) { 
    image(images[estado], 0,0,width, height);
    narratorSpeaking('"...La belleza de Medusa, era tal, que entre el Olimpo, hasta los dioses la codiciaban, entre ellos, Poseidón dio el primer paso, para reclamarla como suya"');
  } else if (estado === 2) { 
    image(images[estado], 0,0,width, height);
    characterSpeaking('Poseidon', '"Tu belleza es tal que deja a Afrodita en pena" Susurró él. "Sé mía, y te mostraré un mundo que ningún otro Hombre o Dios podrá hacerte ver, sé mía, hasta el final de tus días"');
  } else if (estado === 3) {
    image(images[estado], 0,0,width, height);
    narratorSpeaking('"Tentada por las palabras y promesas del Dios de los Mares, Medusa cedió ante su cortejo, ofreciéndole su cuerpo y vida al Dios, en el templo de Athena"');
  } else if (estado === 4) {
    image(images[estado], 0,0,width, height);
    narratorSpeaking('"Athena finalmente los descubrió, con las manos en la masa, mancillando su templo, un monumento a la pureza y santidad, con sus actos, lo cuál, la hizo HERVIR de cólera"');
  } else if (estado === 5) {
    image(images[estado], 0,0,width, height);
    characterSpeaking('Athena', '"Tú, cómo te atreves a cometer tales indecentes actos!? El Tuyo será un castigo duro, ningún otro jamás te deseará, y jamás te volverán a ver, vete, carga con esta maldición, y vive en soledad en las Tierras hiperboreas"');
  } else if (estado === 6) {
    image(images[estado], 0,0,width, height);
    narratorSpeaking('"Lejos de todo, un lugar que estaba lleno de vida y de paz, sin embargo ella jamás podría gozar de tales placeres, su maldicion, la dejó hecho un monstruo, un monstruo que nadie podría siquiera ver sin quedar de piedra, tan cerca de un paraíso, pero incapaz de alcanzarlo, hasta el final de los días"');
  } else if (estado === 7) {
    image(images[estado], 0,0,width, height);
    characterSpeaking('Medusa', '"Oh dioses, porqué yo e de sufrir tanto, porqué no sólo mi cuerpo, si no mi corazón deben permanecer en este castigo tan largo, imploro piedad, misericordia, solo quiero... Ser yo otra vez"');
  } else if (estado === 8) {
    image(images[estado], 0,0,width, height);
    narratorSpeaking('"Una diosa escucho a la ahora bestia horrible, y la juzgó, la observó y eligió qué hacer, dando su propio juicio divino sobre ella, una nueva Mancha, o tal vez... Salvación?"');
  } else if (estado === 9) {
    image(images[estado], 0,0,width, height);
    characterSpeaking('Medusa', '"Por qué!? Por qué siguen castigandome!? No tengo nada más!! Los odio! Los odio a todos! Si me maldicen, entonces los maldecire de regreso! LOS ODIO, LOS ODIOOOO!!!!" Sus gritos desesperados inundaron las tierras hiperboreas, mientras su cabellera, ahora también maldita, era convertida en serpientes retorcidas');
  } else if (estado === 10) {
    image(images[estado], 0,0,width, height);
    narratorSpeaking('"Tiempo después de haber desterrado a Medusa, Athena se enteró de algo problemático, sus andadas con Poseidón, hicieron que Medusa, quedará embarazada, lo que significaba un enorme riesgo, al ser hijos de Poseidón, serían dioses peligrosos, o eso pensaba ella, decidiendo enviar a Perseo, a brindarle fin a la vida de Medusa"');
  } else if (estado === 11) {
    image(images[estado], 0,0,width, height);
    characterSpeaking('Perseo', '"(Esa Gorgona, Medusa, no a hecho más que ser castigada desde aquel día, Poseidón nisiquiera se hace cargo, y Athena la desprecia, pero es realmente correcto matarla? Ésa es la justicia de los Dioses? Es ésto... Correcto?)" Se preguntó a sí mismo, con dudas en su corazón');
  } else if (estado === 12) {
    image(images[estado], 0,0,width, height);
    narratorSpeaking('"Eligiendo seguir a Athena, y su justicia, Perseo emprendió su viaje al norte, llegando luego de un tormentoso viaje a las Tierras Hiperboreas durante la noche, al entrar a los aposentos de Medusa en su cueva, aprovechó su estado durmiente, y blandio su espada en su cuello, dándole finalmente, el alivio de la muerte"');
  } else if (estado === 13) {
    image(images[estado], 0,0,width, height);
    characterSpeaking('Medusa', '"(Es así como termina entonces? Viví mi vida, siendo sólo un juguete para los dioses, así de patético será mi fin? Ni siquiera se dignaron en ponerme fin por su cuenta... Los odio, los odio tanto, ni siquiera maldita, son capaces de dejar de hacerme... Sufrir..." Sus últimos pensamientos, no fueron más que, palabras de puro desprecio ante su destino, y a los dioses que la pusieron en él');
  } else if (estado === 14) {
    image(images[estado], 0,0,width, height);
    characterSpeaking('Medusa', '"Mi diosa, le imploró misericordia, fui débil, y caí ante las palabras dulces de este hombre, mancille su templo, y le falte al respeto, pero le pido, que me brinde su perdón, y sea comprensiva conmigo" Medusa imploró');
  } else if (estado === 15) {
    image(images[estado], 0,0,width, height);
    narratorSpeaking('"Viendo el arrepentimiento de la Gorgona, Athena se calmo, y eligió el perdón, pero su ira no se fue tan fácil, y en su lugar, castigó a Poseidón, el causante real del problema, dejando a Medusa libre, y Poseidón, recibiendo un castigo justamente merecido"');
  } else if (estado === 16) {
    image(images[estado], 0,0,width, height);
    characterSpeaking('Afrodita', '"Pobre mujer, afrontando un castigo desmedido por la furia de una Diosa inexperta, no temas niña, pues yo, la Diosa del amor, te brindo mi mano, mi ayuda y apoyo, y haré que seas tan bella, que olvidarás tus penas" Prometió, extendiendo su mano desde los cielos a la mujer maldita');
  } else if (estado === 17) {
    image(images[estado], 0,0,width, height);
    narratorSpeaking('"Y fué así, como Afrodita, junto a la ayuda de su esposo Hefesto, y sus habilidades excepcionales, lograron romper la maldicion de Medusa, quién ahora tenía una nueva oportunidad en su vida, y esta vez, nadie jamás podría volver a dañarla o engañarla otra vez..."');
  } else if (estado === 18) {
    image(images[estado], 0,0,width, height);
    characterSpeaking('Perseo', '"Lo siento, mi Diosa Athena, pero ésto no es la justicia que busco, no seré quien le brinde muerte, esa mujer, Medusa, ya a sufrido lo suficiente, me niego a ser quien le brinde otro castigo por una situación que ella no pidió!"');
  } else if (estado === 19) {
    image(images[estado], 0,0,width, height);
    narratorSpeaking('"Llena de ira por la desobediencia, y la osadía de cuestionar sus actos, Athena le puso punto y final a la vida de Perseo, llevando al heroico semidiós, a su final, Medusa viviría un día más, pero el futuro era incierto, y ahora, Perseo no estaría allí para ayudarla, el futuro de Medusa, como siempre, está a manos De los Dioses');
  } else if (estado === 20 ) {
    image(images[estado], 0,0,640, 480);    
  }
  // Texto de final
  if ( estado == 13 || estado == 15 || estado == 17 || estado == 19 ){
  fill(255,0,0);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Fin de la historia", width-80, 50);
  }
  // Botones principales
  if(estado > 0) {
    drawButton(btnIzqX, btnY, "Anterior");
  }
    drawButton(btnDerX, btnY, "Siguiente");
  
  //opciones

    if (estado == 4){
      drawOption(btnExtraX2, btnExtraY2, "Aceptar su ira");
      drawOption(btnExtraX, btnExtraY, "Implorar su piedad");
    }
    if (estado == 8){
      drawOption(btnExtraX2, btnExtraY2, "Castigo divino");
      drawOption(btnExtraX, btnExtraY, "Apiadarse de ella");
    }
    if (estado == 11) {
      drawOption(btnExtraX2, btnExtraY2, "Seguir la justicia de Athena");
      drawOption(btnExtraX, btnExtraY, "Aboga por la verdadera justicia");
    } 
    if ( estado == 13 || estado ==15  || estado == 17 || estado == 19 ){
      drawOption(btnVolx, btnVoly, "Volver al inicio");
    }

  }
function characterSpeaking(nombre, dialogo){
  push();
  translate(25,50);
  fill(255,255,255,175);
  rect(0,225,100,25);  //cuadro nombre personaje
  rect(0,250, 580, 100); //cuadro dialogo
  if(nombre == 'Medusa'){
    fill(0,255,0);
  } else if (nombre == 'Perseo') {
    fill(237,159,34);
  } else if (nombre == 'Athena') {
    fill(240,255,36);
  } else if (nombre == 'Afrodita') {
    fill(255,21,252);
  } else if (nombre == 'Poseidon') {
    fill(0,0,255);
  }
  text(nombre,35,240); //muestra el nombre del personaje hablamdo
  fill(0);
  textAlign(LEFT);
  text(dialogo,5,255, 550, 80);  //contenido del dialogo
  pop();
}

function narratorSpeaking(texto){
  push();
  translate(25,50);
  fill(255,255,255,175);
  rect(0,250, 580, 100); //cuadro dialogo
  fill(0);
  textAlign(LEFT);
  text(texto,5,255, 550, 80);  //contenido del dialogo
  pop();
}

function drawOption(x, y, label){
  //Aqui irian unos botones, al menos dos, uno con la opcion de ir a uno de los finales alternos
  fill(50);
  rect(x, y, btnAncho2, btnAlto, 10);
  fill(255);
  textSize(14);
  textAlign(CENTER, CENTER);
  text(label, x + btnAncho / 2, y + btnAlto / 2);
}

function drawButton(x, y, label) {
  fill(50);
  rect(x, y, btnAncho, btnAlto, 10);
  fill(255);
  textSize(14);
  textAlign(CENTER, CENTER);
  text(label, x + btnAncho / 2, y + btnAlto / 2);
}

function mousePressed() {
  click.play();
  // Botón izquierdo
  if (mouseX > btnIzqX && mouseX < btnIzqX + btnAncho &&
      mouseY > btnY && mouseY < btnY + btnAlto) {
    estado--;
    if (estado < 0) estado = 0;
  }

  // Botón derecho
  if (mouseX > btnDerX && mouseX < btnDerX + btnAncho &&
      mouseY > btnY && mouseY < btnY + btnAlto) {
    estado++;
    if (estado >= cantPantallas) estado = cantPantallas - 1;
  }
  //opciones
  if (mouseX > btnExtraX && mouseX < btnExtraX + btnAncho2 && mouseY > btnExtraY && mouseY < btnExtraY + btnAlto) {
    if (estado == 4) {
      estado = 14;
    }
    if (estado == 8) {
      estado = 16;
    }
    if (estado == 11) {
      estado = 18;
    }
  }
  if (mouseX > btnExtraX2 && mouseX < btnExtraX2 + btnAncho2 && mouseY > btnExtraY2 && mouseY < btnExtraY2 + btnAlto) {
    if (estado == 4) {
      estado++;
    }
    if (estado == 8) {
      estado++;
    }
    if (estado == 11) {
      estado++;
    }
  }
  //Volver al inicio
  if (mouseX > btnVolx && mouseX < btnVolx + btnAncho2 && mouseY > btnVoly && mouseY < btnVoly + btnAlto) {
   if( estado == 13 || estado == 15  || estado == 17 || estado == 19 ){
      estado = 0;
    }
  }
}
function keyPressed(){
  //ir a los creditos
  if('f'){
    estado = 20;
  }
}
