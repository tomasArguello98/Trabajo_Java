const prompt = require('prompt-sync')();

// Pedir al usuario que ingrese un color y guardarlo en una variable
let color = prompt("Ingrese un color:");

// Usar la sentencia switch para determinar el string correspondiente y mostrarlo por consola
switch (color) {
  case "azul":
    console.log("blue");
    break;
  case "rojo":
    console.log("red");
    break;
  case "verde":
    console.log("green");
    break;
  case "naranja":
    console.log("orange");
    break;
  case "amarillo":
    console.log("yellow");
    break;
  default:
    console.log("Color not found");
    break;
}
