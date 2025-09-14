let animacionActivada = false;
PImage img; // Imagen a mostrar en el lado izquierdo

function setup() {
  size(800, 400);
 img = loadImage("obra optica.png"); 
}


function draw() {
  background(255);
  mostrarImagenIzquierda();

let mod = 400 / 2;

  // Dibuja los cuadrados en las esquinas
  for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 2; j++) {
      let x = 400 + mod * i + mod / 2;
      let y = mod * j + mod / 2;
      dibujaCuadradosConcentricos(x, y, mod, 4);
    }
  }
  
  // Dibuja el cuadrado un poco más a la izquierda del centro del lado derecho
  let xDerecha = width - mod / 2 - 100; // Ajusta 100 píxeles hacia la izquierda
  let yDerecha = height / 2;
  dibujaCuadradosConcentricos(xDerecha, yDerecha, mod, 4);
}

function mostrarImagenIzquierda() {
  if (img != null) {
    imageMode(CENTER);
    image(img, 200, height / 2, 300, 300); // Imagen centrada en la mitad izquierda
  }
}

function dibujaCuadradosConcentricos x_, y_, tam_, cant_) {
  push();
  translate(x_, y_);
  rectMode(CENTER);
  
  let anguloInicial = atan2(y_ - height / 2, x_ - width / 2);
  
  for (int i = 0; i < cant_; i++) {
    fill((i % 2) * 255);
    let lado = map(i, 0, cant_, tam_, 0);
    
    if (animacionActivada) {
      rotate(anguloInicial);
      rotate(sin(frameCount * 0.1));
    }
    
    rect(0, 0, lado, lado);
  }
  pop();
}

function mousePressed() {
  animacionActivada = !animacionActivada;
}


























}
