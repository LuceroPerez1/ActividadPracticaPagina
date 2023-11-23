const { clear } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Niveles de juego: 1.Fácil  2.Normal  3.Experto   Selecciona un número: ');

rl.question('¿Qué nivel deseas?', function(nivel) {
  console.log("Nivel: " + nivel);
  let contadorRespuesta = 0;
  let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let emojis = ['🚀', '😊', '🎉', '🌈', '🍎', '🌟', '🌍', '📚', '🎸', '🏆', '🍓', '🌷', '🎤', '🌳', '🐬', '🍉', '🎨', '🍦', '🌺', '🍕'];

  let primerNivel = Math.floor(Math.random() * 40 + 1);
  let indiceAleatorio = Math.floor(Math.random() * letras.length);
  let segundoNivel = letras[indiceAleatorio];
  let tercerNivel = emojis[Math.floor(Math.random() * emojis.length)];

  if (nivel === '1') {
    process.stdout.write(String(primerNivel));
    setTimeout(function () {
      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      rl.question('¿Qué lograste visualizar?: ', function (respuesta) {
        while (respuesta === primerNivel.toString()) {
          console.log('¡Correcto!. Si deseas terminar con la partida escribe SALIR.')
          contadorRespuesta++;
          process.stdout.write(String(primerNivel))
          process.stdout.clearLine();
          process.stdout.cursorTo(0);
          rl.question('¿Qué lograste visualizar?: ', function (respuesta) {
          });
        };
        if (respuesta !== primerNivel.toString()) {
          console.log('Incorrecto')
        } else if (respuesta === 'SALIR' ) {
          rl.close();
        }
      });
    }, 1000);
  } else if (nivel === '2') {
    process.stdout.write(String(primerNivel + ' ' + segundoNivel));
    setTimeout(function() {
      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      rl.close();
    }, 5000);
  } else if (nivel === '3') {
    process.stdout.write(String(primerNivel + ' ' + segundoNivel + ' ' + tercerNivel));
    setTimeout(function() {
      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      rl.close();
    }, 5000);
  }
});
