//Define la funcion 
function toTime(segundos) {
    var horas = Math.floor(segundos / 3600); // Obtiene las horas redondeando hacia abajo
    var minutos = Math.floor((segundos - (horas * 3600)) / 60); // Obtiene los minutos restando las horas y redondeando hacia abajo
    var horasString = horas > 1 ? horas + " horas" : horas + " hora"; // Crea el string de horas con plural o singular
    var minutosString = minutos > 1 ? minutos + " minutos" : minutos + " minuto"; // Crea el string de minutos con plural o singular
    return horasString + " y " + minutosString; // Devuelve el resultado final
  }
  
  // Muestra el resultado por consola
  var resultado = toTime(7200); //Llama a la funcion y la guarda en una variable
  console.log(resultado); // Salida: "2 horas y 0 minutos"
  var resultado = toTime(1800); 
  console.log(resultado); // Salida: "0 horas y 30 minutos"
  var resultado = toTime(3600); 
  console.log(resultado); // Salida: "1 hora y 0 minutos"