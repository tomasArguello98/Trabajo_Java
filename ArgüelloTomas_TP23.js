//Define la funcion
function arregloDeObjetos(num) {
    const arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push({ valor: i });
    }
    return arr;
  }
  
  //Muestra por consola
  console.log(arregloDeObjetos(5)); // [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]
  console.log(arregloDeObjetos(3)); // [{valor: 1}, {valor: 2}, {valor: 3}]
  