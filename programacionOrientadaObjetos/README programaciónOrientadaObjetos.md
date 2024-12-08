
# Proyecto Modulo2 JS

Se crean las Carpetas programacionFuncional y programacionOrientadaObjetos.
En ambas se crea un archivo .js y un archivo .html

programacionOrientada Objetos

Acá cree class encuestaTurismo y fui agrupando los datos.

// Clase para la encuesta de turismo
class encuestaTurismo {
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


Fhui ajustando las opciones y al final el metodo para que se muestren los resultados en la consola.


// Método para mostrar los resultados de la encuesta
    mostrarResultados() {
      console.log("---- Resultados de la Encuesta de Turismo ----");
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Edad: ${this.edad}`);
      console.log(`Lugar favorito para vacacionar: ${this.lugarFavorito}`);
      console.log(`Ultimo lugar visitado: ${this.ultimasVacaciones}`);
      console.log(`Actividades preferidas: ${this.actividadesPreferidas.join(", ")}`);
      console.log (`Uso de agencia u otras: ${this.agenciaTurismo.join(", ")}`);
      console.log(`Viajar en Chile: ${this.opcionViaje}`);
      console.log(`Problemas de vacacionar en Chile: ${this.recomendacion}`);

    }
  }