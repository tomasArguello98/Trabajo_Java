const prompt = require('prompt-sync')();

// Pedir al usuario que ingrese un año y guardarlo en una variable
let anio = parseInt(prompt("Ingrese un año:"));

// Comprobar si el año es bisiesto y mostrar un mensaje por consola
if (anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0)) {
  console.log("El año ingresado es bisiesto");
} else {
  console.log("El año ingresado no es bisiesto");
}
