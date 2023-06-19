const prompt = require('prompt-sync')();

// Pedir al usuario que ingrese dos números y guardarlos en variables
let numero1 = parseInt(prompt("Ingrese el primer número:"));
let numero2 = parseInt(prompt("Ingrese el segundo número:"));

// Comparar los dos números y mostrar el mayor por consola
if (numero1 > numero2) {
  console.log("El número mayor es: " + numero1);
} else if (numero2 > numero1) {
  console.log("El número mayor es: " + numero2);
} else {
  console.log("Los números son iguales.");
}
