const prompt = require("prompt-sync")();
// Función para obtener un número aleatorio entre min y max (ambos incluidos)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  // Inicializar variables
  let dinero = 50;
  let jugar = true;
  
  console.log(`Bienvenido al juego de apuestas con dados. Tienes ${dinero} pesos para apostar.`);
  
  // Ciclo principal del juego
  while (jugar) {
    // Pedir al usuario el número y monto de la apuesta
    let numApostado = parseInt(prompt("Ingresa un número del 1 al 6 por el que quieras apostar (por defecto es 1): ") || "1");
    let montoApostado = parseInt(prompt("Ingresa la cantidad que quieres apostar (por defecto son 20 pesos): ") || "20");
  
    // Verificar que la apuesta sea válida
    if (isNaN(numApostado) || numApostado < 1 || numApostado > 6) {
      console.log("El número ingresado no es válido. Inténtalo de nuevo.");
      continue;
    }
  
    if (isNaN(montoApostado) || montoApostado <= 0) {
      console.log("El monto de la apuesta no es válido. Inténtalo de nuevo.");
      continue;
    }
  
    // Tirar el dado
    let dado = getRandomNumber(1, 6);
    console.log(`Ha salido un ${dado}.`);
  
    // Verificar si ha acertado
    if (dado === numApostado) {
      dinero += montoApostado * 2;
      console.log(`¡Felicitaciones! Has ganado ${montoApostado * 2} pesos. Ahora tienes ${dinero} pesos.`);
    } else {
      dinero -= montoApostado;
      console.log(`Lo siento, has perdido ${montoApostado} pesos. Ahora tienes ${dinero} pesos.`);
    }
  
    // Verificar si el juego ha terminado
    if (dinero <= 0) {
      console.log("Has perdido el juego. ¡Mejor suerte la próxima vez!");
      jugar = false;
    } else if (dinero >= 200) {
      console.log("¡Felicitaciones! Has ganado el juego.");
      jugar = false;
    }
  }
  
  //Muestra por consola
  console.log("Gracias por jugar al juego de apuestas con dados.");
  