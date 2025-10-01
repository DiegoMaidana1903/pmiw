let estado = 0;          // pantalla actual
let cantPantallas = 13;  // total de pantallas

// Botones
let btnAncho = 120;
let btnAlto = 40;
let btnIzqX, btnDerX, btnY;
let btnExtraX, btnExtraY;

function setup() {
  createCanvas(600, 400);

  // Posiciones de botones principales
  btnIzqX = 50;
  btnDerX = width - 170;
  btnY = height - 60;

  // Botón extra (centrado abajo)
  btnExtraX = width / 2 - 60;
  btnExtraY = height - 60;
}

function draw() {
  // Cambiar color de fondo según pantalla
  if (estado === 0) background(255, 0, 0);
  else if (estado === 1) background(0, 255, 0);
  else if (estado === 2) background(0, 0, 255);
  else if (estado === 3) background(255, 165, 0);
  else if (estado === 4) background(128, 0, 128);
  else if (estado === 5) background(200, 0, 200);
  else if (estado === 6) background(0, 200, 200);
  else if (estado === 7) background(200, 200, 0);
  else if (estado === 8) background(100, 0, 200);
  else if (estado === 9) background(200, 100, 0);
  else if (estado === 10) background(0, 100, 200);
  else if (estado === 11) background(50, 200, 100);
  else if (estado === 12) background(200, 50, 100);

  // Texto de pantalla
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Pantalla " + (estado + 1), width / 2, height / 2);

  // Botones principales
  drawButton(btnIzqX, btnY, "Anterior");
  drawButton(btnDerX, btnY, "Siguiente");

  // Ejemplo: en la pantalla 2 aparece un botón especial para saltar a la 10
  if (estado === 2) {
    drawButton(btnExtraX, btnExtraY, "Ir a Pantalla 10");
  }

  // Ejemplo: en la pantalla 7 aparece un botón especial para ir a la 12
  if (estado === 7) {
    drawButton(btnExtraX, btnExtraY, "Ir a Pantalla 12");
  }
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

  // Botón especial en pantalla 2 → saltar a 10
  if (estado === 2 &&
      mouseX > btnExtraX && mouseX < btnExtraX + btnAncho &&
      mouseY > btnExtraY && mouseY < btnExtraY + btnAlto) {
    estado = 9; // va a la pantalla 10 (índice 9)
  }

  // Botón especial en pantalla 7 → saltar a 12
  if (estado === 7 &&
      mouseX > btnExtraX && mouseX < btnExtraX + btnAncho &&
      mouseY > btnExtraY && mouseY < btnExtraY + btnAlto) {
    estado = 11; // va a la pantalla 12 (índice 11)
  }
}
