//Crea una lista
let balancesUltimoSemestre = [
    { mes: "julio", ganancia: 50 }, 
    { mes: "agosto", ganancia: -12 }, 
    { mes: "septiembre", ganancia: 1000 }, 
    { mes: "octubre", ganancia: 300 }, 
    { mes:  "noviembre", ganancia: 200 }, 
    { mes: "diciembre", ganancia: 0 }
  ];
  
  //Define la funcion
  function cantidadBalancesPositivos(balances) {
    let cantidad = 0;
    for (let i = 0; i < balances.length; i++) {
      if (balances[i].ganancia > 0) {
        cantidad++;
      }
    }
    return cantidad;
  }
  
  //Muestra por consola
  console.log(cantidadBalancesPositivos(balancesUltimoSemestre));
  // Output esperado: 4
  