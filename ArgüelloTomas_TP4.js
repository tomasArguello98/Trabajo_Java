const prompt = require('prompt-sync')();

// Pedir al usuario que ingrese un número y guardarlo en una variable
let numero = prompt("Ingrese un número:");

// Definir una función que determine si el número es divisible por 5 o no
function esDivisiblePorCinco(numero) {
  return numero % 5 === 0;
}

// Llamar a la función y guardar el resultado en una variable
let divisible = esDivisiblePorCinco(numero);

// Mostrar el resultado por consola
if (divisible) {
  console.log(numero + " es divisible por 5.");
} else {
  console.log(numero + " no es divisible por 5.");
}
