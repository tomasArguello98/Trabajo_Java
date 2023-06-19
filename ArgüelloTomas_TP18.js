function breakStatement(number) {
  let result = [];
  let sum = number;

  for (let i = 0; i < 10; i++) {
    sum += 2; 
    result.push(sum);

    if (sum === i) {
      return "Se interrumpió la ejecución"; // Si se cambia el sum de un 2 a un 0, ejecuta este mensjae
    }
  }

  return result;
}

// Muestra por consola
console.log(breakStatement(5));
