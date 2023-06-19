const prompt = require('prompt-sync')();

// Pedir al usuario que ingrese una temperatura en grados Farenheit y guardarla en una variable
let farenheit = prompt("Ingrese una temperatura en grados Farenheit:");

// Definir una función que convierta la temperatura de Farenheit a Celsius
function farenheitACelsius(farenheit) {
  let celsius = (farenheit - 32) * (5/9);
  return celsius;
}

// Llamar a la función y guardar el resultado en una variable
let celsius = farenheitACelsius(farenheit);

// Mostrar el resultado por consola
console.log(farenheit + " grados Farenheit son " + celsius + " grados Celsius.");
