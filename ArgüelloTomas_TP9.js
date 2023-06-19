const prompt = require('prompt-sync')();

// Pedir al usuario que ingrese una edad y guardarla en una variable
let edad = parseInt(prompt("Ingrese una edad:"));

// Determinar en qué rango de edad se encuentra la edad ingresada y mostrar un mensaje correspondiente
if (edad < 13) {
  console.log("Es un niño");
} else if (edad >= 13 && edad <= 17) {
  console.log("Es un adolescente");
} else if (edad >= 18 && edad <= 110) {
  console.log("Es un adulto");
} else {
  console.log("No es una edad válida");
}
