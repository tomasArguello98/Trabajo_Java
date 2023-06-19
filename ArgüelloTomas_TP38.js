//Define la funcion
function esPalindromo(cadena) {
    // Convertimos la cadena a minúsculas y eliminamos los espacios en blanco
    cadena = cadena.toLowerCase().replace(/ /g, '');
  
    // Invertimos la cadena
    var cadenaInvertida = cadena.split('').reverse().join('');
  
    // Comparamos la cadena original con la invertida
    if (cadena === cadenaInvertida) {
      return "Es palíndromo";
    } else {
      return "No es palíndromo";
    }
  }
  
  //Muestra por consola
  console.log(esPalindromo("La ruta nos aporto otro paso natural")); // debe retornar "Es palíndromo"
  console.log(esPalindromo("La ruta nos aportol")); // debe retornar "No es palíndromo"
  