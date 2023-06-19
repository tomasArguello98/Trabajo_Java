//Crea la clase
class Ficha {
    constructor(nombre) {
      this.nombre = nombre;
      this.sesiones = [];
      this.numsesiones = 0;
    }
  
    anotar(kilometros) {
      this.sesiones.push(kilometros);
      this.numsesiones++;
    }
  
    media() {
      let totalKilometros = this.sesiones.reduce((total, sesion) => total + sesion, 0);
      return totalKilometros / this.numsesiones;
    }
  }
  
  //Muestra por consola
  const miFicha = new Ficha("Javier");
  console.log(miFicha);
  miFicha.anotar(8);
  miFicha.anotar(10);
  miFicha.anotar(6);
  console.log(miFicha.media()); // debe retornar 8
  