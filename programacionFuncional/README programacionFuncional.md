
# Proyecto Modulo2 JS

Se crean las Carpetas programacionFuncional y programacionOrientadaObjetos.
En ambas se crea un archivo .js y un archivo .html

programacionFuncional:

originalmente habia pensado en crear un cuestionario con pregunta correcta, pero despues lo cambie a una votación.

// Definir las preguntas, opciones y respuestas

const preguntas = [
    {
      pregunta: "Al ir de vacaciones, ¿Qué lugares prefieres?",
      opciones: ["playas", "montañas", "sitios históricos"],
      respuesta: {},
    },
    {
      pregunta: "¿Qué actividades disfrutas realizar cuando estás de vacaciones?",
      opciones:[ "dormir","trekking","sol y playa", "vida nocturna"],
      respuesta: {},
    },
    {
      pregunta: "¿Cuál de los siguientes lugares de Chile conoces?",
      opciones: ["San Pedro de Atacama", "Isla de Pascua", "Torres del Paine", "ninguno"],
      respuesta: {},
    },
   
Cree las 8 preguntas, pero no lograba que se vieran en el prompt, asi que tuve tutoria.

Finalmente resolví las dudas y ya para terminar pude agregar la opcion de participar en la votación y que se muestre la respuesta en la consola.

//Función para manejar la participación en la votación
const iniciarVotacion = () => {
  //Función pura que pregunta al usuario si quiere participar
  const preguntarParticipacion = () => prompt("¿Deseas participar en la encuesta sobre turismo? (si/no)").toLowerCase();

  //Función para mostrar un mensaje según la respuesta
  const mostrarResultado = (respuesta) => {
      if (respuesta === "si") {
          console.log("Gracias por participar en la votación.");
      } else if (respuesta === "no") {
          console.log("Entendido, en otra oportunidad puedes participar");
      } else {
          console.log("Respuesta no válida. Por favor, responde 'si' o 'no'.");
      }
  };

  // Usamos la composición de funciones
  mostrarResultado(preguntarParticipacion());
};



