const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function iniciarJuego() {
  console.log('Niveles de juego: 1.Fácil  2.Normal  3.Experto   Selecciona un número: ');
  rl.question('¿Qué nivel deseas?', function (nivel) {
    console.log("Nivel: " + nivel);
    let contadorRespuesta = 0;

    if (nivel === '1') {
      jugarNivel1(contadorRespuesta);
    } else if (nivel === '2') {
      jugarNivel2(contadorRespuesta);
    } else if (nivel === '3') {
      jugarNivel3(contadorRespuesta);
    } else {
      console.log('Nivel no válido');
      rl.close();
    }
  });
}

function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 40 + 1);
}

function generarLetraAleatoria() {
  let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  return letras[Math.floor(Math.random() * letras.length)];
}

function generarEmojiAleatorio() {
  let emojis = ['🚀', '😊', '🎉', '🌈', '🍎', '🌟', '🌍', '📚', '🎸', '🏆', '🍓', '🌷', '🎤', '🌳', '🐬', '🍉', '🎨', '🍦', '🌺', '🍕'];
  return emojis[Math.floor(Math.random() * emojis.length)];
}


function jugarNivel1(contadorRespuesta) {
  let primerNivel = generarNumeroAleatorio();
  process.stdout.write(String(primerNivel));
  setTimeout(function () {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    rl.question('¿Qué lograste visualizar?: ', function (respuesta) {
      if (respuesta === primerNivel.toString()) {
        contadorRespuesta++;
        console.log('¡Correcto, continúemos!');
        jugarNivel1(contadorRespuesta);
      } else {
        console.log('Respuesta incorrecta. El número correcto era: ' + primerNivel + '. Tu puntaje fue de: ' + contadorRespuesta);
        preguntarJugarDeNuevo();
      }
    });
  }, 1000);
}

function jugarNivel2(contadorRespuesta) {
  let primerNivel = generarNumeroAleatorio();
  let segundoNivel = generarLetraAleatoria();
  process.stdout.write(String(primerNivel + segundoNivel));
  setTimeout(function () {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    rl.question('¿Qué lograste visualizar?: ', function (respuesta) {
      if (respuesta === primerNivel.toString() + segundoNivel) {
        contadorRespuesta++;
        console.log('¡Correcto, continúemos!');
        jugarNivel2(contadorRespuesta);
      } else {
        console.log('Respuesta incorrecta. La respuesta correcta era: ' + primerNivel + segundoNivel + '. Tu puntaje fue de: ' + contadorRespuesta);
        preguntarJugarDeNuevo();
      }
    });
  }, 1000);
}

function jugarNivel3(contadorRespuesta) {
  let primerNivel = generarNumeroAleatorio();
  let segundoNivel = generarLetraAleatoria();
  let tercerNivel = generarEmojiAleatorio();
  process.stdout.write(String(primerNivel + segundoNivel + tercerNivel));
  setTimeout(function () {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    rl.question('¿Qué lograste visualizar?: ', function (respuesta) {
      if (respuesta === primerNivel.toString() + segundoNivel + tercerNivel) {
        contadorRespuesta++;
        console.log('¡Correcto, continúemos!');
        jugarNivel3(contadorRespuesta);
      } else {
        console.log('Respuesta incorrecta. La respuesta correcta era: ' + primerNivel + segundoNivel + tercerNivel + '. Tu puntaje fue de: ' + contadorRespuesta);
        preguntarJugarDeNuevo();
      }
    });
  }, 1000);
}

function preguntarJugarDeNuevo() {
  rl.question('¿Quieres jugar de nuevo?, Responde SI/NO: ', function (jugar) {
    if (jugar.toUpperCase() === 'SI') {
      iniciarJuego();
    } else {
      rl.close();
    }
  });
}

iniciarJuego();
