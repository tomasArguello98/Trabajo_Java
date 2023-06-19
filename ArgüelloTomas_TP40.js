//Crea la clase
class Conductor {
    constructor(nombre, licencia) {
      this.nombre = nombre;
      this.licencia = licencia;
    }
  }
  
  //Crea la clase
  class Colectivo {
    constructor(capacidad, conductor) {
      this.capacidad = capacidad;
      this.pasajeros = 0;
      this.conductor = conductor;
    }
  
    subir(pasajeros) {
      const espaciosDisponibles = this.capacidad - this.pasajeros;
      const pasajerosQueSuben = Math.min(pasajeros, espaciosDisponibles);
      this.pasajeros += pasajerosQueSuben;
      console.log(`Se subieron ${pasajerosQueSuben} pasajeros, quedan ${this.capacidad - this.pasajeros} espacios disponibles`);
    }
  
    bajar(pasajeros) {
      const pasajerosQueBajan = Math.min(pasajeros, this.pasajeros);
      this.pasajeros -= pasajerosQueBajan;
      console.log(`Se bajaron ${pasajerosQueBajan} pasajeros, quedan ${this.pasajeros} pasajeros en el colectivo`);
    }
  
    asignarConductor(conductor) {
      this.conductor = conductor;
      console.log(`El conductor ${conductor.nombre} con licencia ${conductor.licencia} ha sido asignado al colectivo`);     
    }
  }
  
  //Muestra por consola
  const conductor = new Conductor("José", 1234);
  const linea1 = new Colectivo(40, conductor);
  linea1.asignarConductor(conductor);
  linea1.subir(25); // Se subieron 25 pasajeros, quedan 15 espacios disponibles
  linea1.subir(35); // Se subieron 15 pasajeros, quedan 0 espacios disponibles
  linea1.bajar(45); // Se bajaron 40 pasajeros, quedan 0 pasajeros en el colectivo
  linea1.subir(10); // Se subieron 10 pasajeros, quedan 30 espacios disponibles
  linea1.bajar(40); // Se bajaron 10 pasajeros, quedan 0 pasajeros en el colectivo
  