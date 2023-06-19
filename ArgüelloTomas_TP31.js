const prompt = require("prompt-sync")();

//Define la funcion
function esPrimo(numero) {
    let divisor = 2;
    while (divisor < numero) {
      if (numero % divisor === 0) {
        return false;
      }
      divisor++;
    }
    return true;
  }
  
  //Define la variable y le pide al usuario que ingrese un numero
  let num = parseInt(prompt("Ingresa un número para determinar si es primo: "));

  //Muestra por consola
  console.log("Numero:", num);
  if (esPrimo(num)) {
    console.log(num + " es un número primo");
  } else {
    console.log(num + " no es un número primo");
  }
  