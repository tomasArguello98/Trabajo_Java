//Define la funcion
function tipoDeCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
      return "solo mayusculas";
    } else if (cadena === cadena.toLowerCase()) {
      return "solo minusculas";
    } else {
      return "mayusculas y minusculas";
    }
  }
  
  //Muestra por consola
  console.log(tipoDeCadena("HOLA")); // "solo mayusculas"
  console.log(tipoDeCadena("adiós")); // "solo minusculas"
  console.log(tipoDeCadena("Hola Mundo")); // "mayusculas y minusculas"
  