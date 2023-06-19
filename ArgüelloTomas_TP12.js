//Define la funcion 
function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
  
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
//Dependiendo de si es primo o no, devuelve true o false
  console.log(esPrimo(7)); // Devuelve true
  console.log(esPrimo(3)); // Devuelve true
  console.log(esPrimo(10)); // Devuelve false
  console.log(esPrimo(4)); // Devuelve false