let estado = 0;        // pantalla actual
let cantPantallas = 13; // total (0 a 12)

// Botones
let btnAncho = 220;
let btnAlto = 40;
let btnX, btnY; // Posición horizontal y vertical inicial

// Separación vertical entre botones
let sep = 60;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);

  btnX = width / 2 - btnAncho / 2;
}

function draw() {
  // Asignar color según pantalla
  if (estado === 0) background(255, 0, 0);        // rojo
  else if (estado === 1) background(0, 255, 0);   // verde
  else if (estado === 2) background(0, 0, 255);   // azul
  else if (estado === 3) background(255, 165, 0); // naranja
  else if (estado === 4) background(255, 255, 0); // amarillo
  else if (estado === 5) background(0, 200, 200); // celeste
  else if (estado === 6) background(200, 0, 200); // violeta
  else if (estado === 7) background(100, 50, 255); // azul fuerte
  else if (estado === 8) background(255, 100, 150); // rosado
  else if (estado === 9) background(50, 50, 50);  // gris oscuro
  else if (estado === 10) background(0, 150, 150); // pantalla alterna 1
  else if (estado === 11) background(150, 0, 100); // pantalla alterna 2
  else if (estado === 12) background(0, 100, 50);  // pantalla alterna 3

  // Título
  fill(255);
  textSize(24);
  text("Pantalla " + estado, width / 2, 60);

  // Dibujar los botones según pantalla
  let yActual = 150; // posición vertical inicial de los botones

  if (estado >= 0 && estado <= 9) {
    // Botones normales
    if (estado > 0) {
      drawButton(btnX, yActual, "Anterior");
      yActual += sep;
    }
    if (estado < 9) {
      drawButton(btnX, yActual, "Siguiente");
      yActual += sep;
    } else {
      drawButton(btnX, yActual, "Volver al inicio");
      yActual += sep;
    }

    // Botones alternos
    if (estado === 3) {
      drawButton(btnX, yActual, "Opción especial → Pantalla 10");
      yActual += sep;
    }
    if (estado === 6) {
      drawButton(btnX, yActual, "Opción especial → Pantalla 12");
      yActual += sep;
    }
    if (estado === 8) {
      drawButton(btnX, yActual, "Opción especial → Pantalla 11");
      yActual += sep;
    }
  } else if (estado === 10 || estado === 11 || estado === 12) {
    // Pantallas alternas solo botón volver al inicio
    drawButton(btnX, yActual, "Volver al inicio");
  }
}

// Función para dibujar botones
function drawButton(x, y, label) {
  fill(50);
  rect(x, y, btnAncho, btnAlto, 10);
  fill(255);
  textSize(16);
  text(label, x + btnAncho / 2, y + btnAlto / 2);
}

function mousePressed() {
  let yActual = 150;

  // Pantallas normales 0–9
  if (estado >= 0 && estado <= 9) {
    // Botón Anterior
    if (estado > 0 && checkClick(btnX, yActual, "Anterior")) {
      estado--;
      return;
    }
    if (estado > 0) yActual += sep;

    // Botón Siguiente
    if (estado < 9 && checkClick(btnX, yActual, "Siguiente")) {
      estado++;
      return;
    }
    if (estado < 9) yActual += sep;
    else { // Pantalla 9
      if (checkClick(btnX, yActual, "Volver al inicio")) {
        estado = 0;
        return;
      }
      yActual += sep;
    }

    // Botones alternos
    if (estado === 3 && checkClick(btnX, yActual, "Opción especial → Pantalla 10")) {
      estado = 10;
      return;
    }
    if (estado === 3) yActual += sep;

    if (estado === 6 && checkClick(btnX, yActual, "Opción especial → Pantalla 12")) {
      estado = 12;
      return;
    }
    if (estado === 6) yActual += sep;

    if (estado === 8 && checkClick(btnX, yActual, "Opción especial → Pantalla 11")) {
      estado = 11;
      return;
    }
  }

  // Pantallas alternas 10–12
  if ((estado === 10 || estado === 11 || estado === 12) &&
      checkClick(btnX, yActual, "Volver al inicio")) {
    estado = 0;
  }
}

// Función para verificar si clic cae dentro del botón
function checkClick(x, y, label) {
  return mouseX > x && mouseX < x + btnAncho &&
         mouseY > y && mouseY < y + btnAlto;
}
