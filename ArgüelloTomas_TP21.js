//Define la funcion
function abbrevName(name) {
    var namesArray = name.split(" ");
    var initials = namesArray[0].charAt(0).toUpperCase() + "." + namesArray[1].charAt(0).toUpperCase();
    return initials;
  }
  
  // Muestro por consola
  var resultado1 = abbrevName("Manu Ginobilli"); //Guarda el nombre en una variable y llama a la funcion 
  console.log(resultado1); // Salida: "M.G"
  
  var resultado2 = abbrevName("Kobe Bryant");
  console.log(resultado2); // Salida: "K.B"
  
  var resultado3 = abbrevName("Michael Jordan");
  console.log(resultado3); // Salida: "M.J"
  