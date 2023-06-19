const prompt = require('prompt-sync')();

// Pedir al usuario que ingrese los tres ángulos del triángulo y guardarlos en variables
let angulo1 = parseInt(prompt("Ingrese el primer ángulo:"));
let angulo2 = parseInt(prompt("Ingrese el segundo ángulo:"));
let angulo3 = parseInt(prompt("Ingrese el tercer ángulo:"));

// Calcular la suma de los tres ángulos
let sumaAngulos = angulo1 + angulo2 + angulo3;

// Comprobar si la suma es igual a 180
if (sumaAngulos === 180) {
  console.log("El triángulo es válido.");
} else {
  console.log("El triángulo no es válido.");
}
