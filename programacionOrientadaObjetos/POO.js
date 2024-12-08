// Clase para la encuesta de turismo
class EncuestaTurismo {
    constructor() {
      this.nombre = "";
      this.edad = 0;
      this.lugarFavorito = "";
      this.ultimasVacaciones ="";
      this.actividadesPreferidas = [];
      this.agenciaTurismo=[];
      this.opcionViaje = 0;
      this.recomendacion= [];
    }
  
    // Método para realizar la encuesta
    realizarEncuesta() {
      // Acá se obtienen datos de quien respondes
      this.nombre = prompt("¿Cuál es tu nombre?");
      this.edad = parseInt(prompt("¿Cuántos años tienes?"));
      this.lugarFavorito = prompt("¿Cuál es tu lugar favorito para vacacionar?");
      this.ultimasVacaciones = prompt("En tus ultimas vacaciones, ¿a qué lugar viajaste?");

      // Obtener actividades preferidas en vacaciones
      let actividades = prompt("¿Cuáles son tus actividades preferidas cuando viajas? (Ejemplo: playa, montaña, cultura, gastronomía)");
      this.actividadesPreferidas = actividades.split(",").map(actividad => actividad.trim());
      let opciones = prompt(" En tus últimas vacaciones, ¿utilizaste una agencia de turismo, recomendaciones de tu hotel, acudiste a SERNATUR o buscaste en internet y por tu cuenta recorriste el lugar?");
      this.agenciaTurismo = opciones.split (","). map(turismo=>turismo.trim());
      
      // Obtener nivel de satisfacción y recomendaciones
      this.opcionViaje = parseInt(prompt("En una escala del 1 al 5, ¿qué tan probable es que recomiendes preferir viajar por Chile? (1: Muy improbable, 5: Muy probable)"));
      this.recomendacion = prompt("¿cuál o cuáles crees que sean los mayores problemas de vacacionar en Chile?");
    }
  
    // Método para mostrar los resultados de la encuesta
    mostrarResultados() {
      console.log("---- Resultados de la Encuesta de Turismo ----");
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Edad: ${this.edad}`);
      console.log(`Lugar favorito para vacacionar: ${this.lugarFavorito}`);
      console.log(`Ultimo lugar visitado: ${this.ultimasVacaciones}`);
      console.log(`Actividades preferidas: ${this.actividadesPreferidas.join(", ")}`);
      console.log (`Uso de agencia u otras: ${this.agenciaTurismo.join(", ")}`);
      console.log(`viajar en Chile: ${this.opcionViaje}`);
      console.log(`Problemas de vacacionar en Chile: ${this.recomendacion}`);

    }
  }
  
  // Crear una instancia de la encuesta
  const encuesta = new EncuestaTurismo();
  
  // Realizar la encuesta
  encuesta.realizarEncuesta();
  
  // Mostrar los resultados en consola
  encuesta.mostrarResultados();
  