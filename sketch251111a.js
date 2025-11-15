/*
Alumno: Diego Maidana
Profesor: David Bedoian
Link del Video: https://youtu.be/NiNrkLKjlno
*/

/* ---------------- CLASES ---------------- */
let medusa;
let athena;
let fondo;
let compressor
let musica;
class Juego {
  constructor() {
    this.estado = 0;           // 0: inicio, 1: jugando, 2: ganó, 3: perdió, 4: créditos
    this.tiempoRestante = 12;
    this.puntaje = 0;
    this.numEnemigos = 1;
    this.jugador = new Jugador(width / 2, height / 2);
    this.enemigos = [];
    this.intervalo = null;
  }

  iniciar() {
    this.crearEnemigos();
    this.iniciarContador();
  }

  crearEnemigos() {
    this.enemigos = [];
    for (let i = 0; i < this.numEnemigos; i++) {
      this.enemigos.push(new Enemigo(random(width), random(height)));
    }
  }

  iniciarContador() {
    clearInterval(this.intervalo);
    this.intervalo = setInterval(() => {
      if (this.estado === 1) {
        this.tiempoRestante--;
        this.puntaje += 2; // gana puntos por sobrevivir

        if (this.tiempoRestante <= 0) {
          clearInterval(this.intervalo);
          this.estado = this.puntaje > 20 ? 2 : 3;
        }
      }
    }, 1000);
  }

  actualizar() {
    if (this.estado === 1) {
      this.jugador.mover(mouseX, mouseY);

      for (let enemigo of this.enemigos) {
        enemigo.perseguir(this.jugador.x, this.jugador.y, this.enemigos);

        let d = dist(this.jugador.x, this.jugador.y, enemigo.x, enemigo.y);
        if (d < this.jugador.tam / 2 + enemigo.tam / 2) {
          this.puntaje -= 5;
          if (this.puntaje < 0) this.puntaje = 0;
        }
      }
    }
  }

  dibujar() {
    background(255);
    textAlign(LEFT);
    textSize(20);
    fill(0);

    if (this.estado === 1) {
      image(fondo,0,0,width,height);
      fill(255);
      text("Puntaje: " + this.puntaje, 20, 30);
      text("Tiempo: " + this.tiempoRestante, 20, 60);
    }

    switch (this.estado) {
      case 0: this.pantallaInicio(); break;
      case 1: this.pantallaJugando(); break;
      case 2: this.pantallaGano(); break;
      case 3: this.pantallaPerdio(); break;
      case 4: this.pantallaCreditos(); break;
    }
  }

  pantallaInicio() {
    musica.stop();
    background(0, 100, 255);
    textAlign(CENTER);
    fill(255);
    textSize(40);
    text("MEDUSA", width / 2, height / 2 - 40);
    textSize(20);
    text("Esquiva a la diosa. Gana puntos al sobrevivir.", width / 2, height / 2);
    text("Haz click para comenzar.", width / 2, height / 2 + 40);
  }

  pantallaJugando() {
    musica.play();
    musica.setVolume(0.2);
    this.jugador.mostrar();
    for (let enemigo of this.enemigos) {
      enemigo.mostrar();
    }
  }

  pantallaGano() {
    musica.stop();
    background(0, 255, 100);
    textAlign(CENTER);
    fill(0);
    textSize(40);
    text("¡Ganaste!", width / 2, height / 2);
    textSize(20);
    text("Haz click para ver los créditos.", width / 2, height / 2 + 50);
  }

  pantallaPerdio() {
    musica.stop();
    background(255, 100, 100);
    textAlign(CENTER);
    fill(0);
    textSize(40);
    text("Perdiste :(", width / 2, height / 2);
    textSize(20);
    text("Haz click para ver los créditos.", width / 2, height / 2 + 50);
  }

  pantallaCreditos(){
    musica.stop();
    background(200, 255, 255);
    textAlign(CENTER);
    fill(0);
    textSize(30);
    text("Créditos", width / 2, height / 2 - 150);

    textSize(22);
    text("Creadores:", width / 2, height / 2 - 110);
    text("Diego Maidana", width / 2, height / 2 - 60);
    text("Mauro Romero", width / 2, height / 2);
    
    textSize(20);
    text("Gracias por jugar", width / 2, height / 2 + 60);

    // Botón de reinicio
    fill(0, 150, 255);
    rect(width / 2 - 80, height / 2 + 80, 160, 50, 10);
    fill(255);
    textSize(20);
    text("Reiniciar", width / 2, height / 2 + 110);
  }

  reiniciar() {
    this.puntaje = 0;
    this.tiempoRestante = 30;
    this.jugador = new Jugador(width / 2, height / 2);
    this.crearEnemigos();
    this.estado = 0;
  }
}

class Jugador {
  constructor(x, y) {
    this.medusa = medusa;
    this.x = x;
    this.y = y;
    this.tam = 40;
  }

  mover(nx, ny) {
    this.x = constrain(nx, this.tam / 2, width - this.tam / 2);
    this.y = constrain(ny, this.tam / 2, height - this.tam / 2);
  }

  mostrar() {
    fill(0, 0, 255);
    image(this.medusa, this.x-37, this.y-30, 75, 90);
  }
}

class Enemigo {
  constructor(x, y) {
    this.athena = athena;
    this.x = x;
    this.y = y;
    this.tam = 60;          // más grande
    this.vel = random(7, 9); // más rápido
    this.tipo = int(random(3));
    this.oscilacion = random(TWO_PI);
    this.wanderAngle = random(TWO_PI);
  }

  perseguir(objX, objY, otros) {
    let ang = atan2(objY - this.y, objX - this.x);

    if (this.tipo == 0) ang += random(-0.2, 0.2);
    else if (this.tipo == 1) {
      this.oscilacion += 0.1;
      ang += sin(this.oscilacion) * 0.3;
    } else if (this.tipo == 2) {
      ang += noise(frameCount * 0.02 + this.x * 0.05) * 0.6 - 0.3;
    }

    // Separación
    let sepX = 0;
    let sepY = 0;
    for (let otro of otros) {
      if (otro !== this) {
        let d = dist(this.x, this.y, otro.x, otro.y);
        if (d < 80 && d > 0) {
          let diffX = this.x - otro.x;
          let diffY = this.y - otro.y;
          sepX += diffX / d;
          sepY += diffY / d;
        }
      }
    }

    // Wander
    this.wanderAngle += random(-0.2, 0.2);
    let wanderX = cos(this.wanderAngle) * 0.5;
    let wanderY = sin(this.wanderAngle) * 0.5;

    let dirX = cos(ang) + sepX * 0.5 + wanderX;
    let dirY = sin(ang) + sepY * 0.5 + wanderY;

    let mag = sqrt(dirX * dirX + dirY * dirY);
    dirX /= mag;
    dirY /= mag;

    this.x += dirX * this.vel;
    this.y += dirY * this.vel;

    // Teletransportarse en bordes
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }

  mostrar() {
    fill(255, 0, 0);
    image(this.athena, this.x-37, this.y-48, 75, 90);
  }
}

/* ---------------- SETUP Y DRAW ---------------- */

let juego;

function setup() {
  medusa = loadImage("data/medusa.png");
  athena = loadImage("data/athena.png");
  fondo = loadImage("data/fondo.jpg");
  musica = loadSound("data/musica.mp4");
  createCanvas(640, 480);
  juego = new Juego();
}

function draw() {
  juego.actualizar();
  juego.dibujar();
}

function mousePressed() {
  if (juego.estado === 0) {
    juego.estado = 1;
    juego.iniciar();
  } else if (juego.estado === 2 || juego.estado === 3) {
    juego.estado = 4;
  } else if (juego.estado === 4) {
    // Botón reinicio
    if (
      mouseX > width / 2 - 80 &&
      mouseX < width / 2 + 80 &&
      mouseY > height / 2 + 80 &&
      mouseY < height / 2 + 130
    ) {
      juego.reiniciar();
    }
  }
}
