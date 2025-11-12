let estado = 0;
let tiempoInicio;
let tiempoRestante = 30;
let puntaje = 0;
let enemigos = [];
let numEnemigos = 1; // menos enemigos
let jugador;
let intervalo;

function setup() {
  createCanvas(600, 600);
  jugador = new Jugador(width / 2, height / 2);
  crearEnemigos();
}

function draw() {
  background(255);
  textAlign(LEFT);
  textSize(20);
  fill(0);

  if (estado == 1) {
    text("Puntaje: " + puntaje, 20, 30);
    text("Tiempo: " + tiempoRestante, 20, 60);
  }

  if (estado == 0) pantallaInicio();
  else if (estado == 1) pantallaJugando();
  else if (estado == 2) pantallaGano();
  else if (estado == 3) pantallaPerdio();
  else if (estado == 4) pantallaCreditos();
}

function iniciarContador() {
  clearInterval(intervalo);
  intervalo = setInterval(() => {
    if (estado == 1) {
      tiempoRestante--;

      // Gana puntos por sobrevivir
      puntaje += 2;

      if (tiempoRestante <= 0) {
        clearInterval(intervalo);
        // Si tiene puntaje -> gana, si no -> pierde
        if (puntaje > 0) estado = 2;
        else estado = 3;
      }
    }
  }, 1000);
}

function crearEnemigos() {
  enemigos = [];
  for (let i = 0; i < numEnemigos; i++) {
    enemigos.push(new Enemigo(random(width), random(height)));
  }
}

function mousePressed() {
  if (estado == 0) {
    estado = 1;
    tiempoInicio = millis();
    iniciarContador();
  } else if (estado == 2 || estado == 3) {
    estado = 4;
  } else if (estado == 4) {
    // Botón reinicio
    if (
      mouseX > width / 2 - 80 &&
      mouseX < width / 2 + 80 &&
      mouseY > height / 2 + 50 &&
      mouseY < height / 2 + 100
    ) {
      reiniciarJuego();
    }
  }
}

function pantallaInicio() {
  background(0, 100, 255);
  textAlign(CENTER);
  fill(255);
  textSize(40);
  text("MEDUSA", width / 2, height / 2 - 40);
  textSize(20);
  text("Esquiva a la diosa. Gana puntos al sobrevivir.", width / 2, height / 2);
  text("Haz click para comenzar.", width / 2, height / 2 + 40);
}

function pantallaJugando() {
  jugador.mover(mouseX, mouseY);
  jugador.mostrar();

  for (let i = 0; i < enemigos.length; i++) {
    enemigos[i].perseguir(jugador.x, jugador.y, enemigos);
    enemigos[i].mostrar();

    // Solo reducir puntos si el jugador es tocado
    let d = dist(jugador.x, jugador.y, enemigos[i].x, enemigos[i].y);
    if (d < jugador.tam / 2 + enemigos[i].tam / 2) {
      puntaje -= 5;
      if (puntaje < 0) puntaje = 0;
    }
  }
}

function pantallaGano() {
  background(0, 255, 100);
  textAlign(CENTER);
  fill(0);
  textSize(40);
  text("¡Ganaste!", width / 2, height / 2);
  textSize(20);
  text("Haz click para ver los créditos.", width / 2, height / 2 + 50);
}

function pantallaPerdio() {
  background(255, 100, 100);
  textAlign(CENTER);
  fill(0);
  textSize(40);
  text("Perdiste :(", width / 2, height / 2);
  textSize(20);
  text("Haz click para ver los créditos.", width / 2, height / 2 + 50);
}

function pantallaCreditos() {
  background(200, 255, 255);
  textAlign(CENTER);
  fill(0);
  textSize(30);
  text("Créditos", width / 2, height / 2 - 120);
  textSize(20);
  text("Creadores:", width / 2, height / 2 - 90);
  text("Diego Maidana", width / 2, height / 2 - 60);
  text("Mauro Romero", width / 2, height / 2 - 20);
  text("Gracias por jugar", width / 2, height / 2 - 5);

  fill(0, 150, 255);
  rect(width / 2 - 80, height / 2 + 50, 160, 50, 10);
  fill(255);
  textSize(20);
  text("Reiniciar", width / 2, height / 2 + 80);
}

function reiniciarJuego() {
  puntaje = 0;
  tiempoRestante = 30;
  jugador = new Jugador(width / 2, height / 2);
  crearEnemigos();
  estado = 0;
}

/* ---------------- CLASES ---------------- */

class Jugador {
  constructor(x, y) {
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
    ellipse(this.x, this.y, this.tam);
  }
}

class Enemigo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tam = 30;
    this.vel = random(3.5, 5); // velocidad razonable
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

    // Separación más fuerte
    let sepX = 0;
    let sepY = 0;
    for (let otro of otros) {
      if (otro !== this) {
        let d = dist(this.x, this.y, otro.x, otro.y);
        if (d < 80 && d > 0) { // más separación
          let diffX = this.x - otro.x;
          let diffY = this.y - otro.y;
          sepX += diffX / d;
          sepY += diffY / d;
        }
      }
    }

    // Wander más marcado
    this.wanderAngle += random(-0.2, 0.2);
    let wanderX = cos(this.wanderAngle) * 0.5;
    let wanderY = sin(this.wanderAngle) * 0.5;

    // Combinar vectores
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
    ellipse(this.x, this.y, this.tam);
  }
}
