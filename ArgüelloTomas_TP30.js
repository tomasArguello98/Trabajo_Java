const prompt = require("prompt-sync")();

//Define las variables
let numero = 1;
let suma = 0;

//Define el ciclo while
while(numero !== 0) {
  numero = parseInt(prompt("Ingresa un número (Ingresa 0 para salir): "));
  suma += numero;
}

//Muestra por consola
console.log("La suma de todos los números ingresados es: " + suma);
