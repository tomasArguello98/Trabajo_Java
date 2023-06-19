//Define la funcion
function doubleFilter(paises, continente, poblacionMinima) {
    let filteredCountries = paises.filter((pais) => {
      return pais.continente === continente && pais.poblacion >= poblacionMinima;
    });
  
    let nombresPaises = filteredCountries.map((pais) => pais.nombre);
    let poblacionTotal = filteredCountries.reduce((total, pais) => total + pais.poblacion, 0);
  
    return {
      nombres: nombresPaises,
      "poblacion total": poblacionTotal
    };
  }
  
  // Guarda una lista
  let paises = [
    { nombre: "Argentina", continente: "Sudamérica", poblacion: 45000000 },
    { nombre: "Brasil", continente: "Sudamérica", poblacion: 295000000 },
    { nombre: "Alemania", continente: "Europa", poblacion: 83000000 },
    { nombre: "Canadá", continente: "Norteamérica", poblacion: 38000000 }
  ];
  
  //Muestra por consola
  console.log(doubleFilter(paises, "Sudamérica", 30000000));
  