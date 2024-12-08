

// Definir las preguntas, opciones y respuestas
const preguntas = [
    {
      pregunta: "Al ir de vacaciones, ¿Qué lugares prefieres?",
      opciones: ["Playas", "Montañas", "Sitios históricos", "Lugares con vida nocturna"],
      respuesta: {},
    },
    {
      pregunta: "¿Qué actividades disfrutas realizar cuando estás de vacaciones?",
      opciones:[ "Dormir","Trekking","Sol y playa", "Vida nocturna"],
      respuesta: {},
    },
    {
      pregunta: "¿Cuál de los siguientes lugares de Chile te gusta más?",
      opciones: ["San Pedro de Atacama", "Isla de Pascua", "Torres del Paine", "Puerto Varas"],
      respuesta: {},
    },
    {
    pregunta: "En general, ¿Cuántos días sueles tener de vacaciones dedicados a viajar?",
    opciones: [ "Menos de 5 días", " Entre 5 y 10 días", " De 10 a 15 días", "La vida es una sola, dedico más de 15 a viajar" ],
    respuesta: {},
    },
    {
    pregunta:"¿Cuál de las siguientes opciones prefieres para planear tus vacaciones?",
    opciones: [ "Paquetes de viajes", "Agencias de turismo", "Preguntando se llega a Roma", "Nunca he planificado un viaje"],
    respuesta:{},
    },
    {
    pregunta: "¿Cuándo fue la última vez que contrataste un seguro de viajes?",
     opciones: ["Siempre que viajo", "Cuando viajo con niños", "Depende del lugar", "Nunca"],
     respuesta: {},
     },
     {
    pregunta: "¿Cómo financias tus vacaciones?",
    opciones: ["Ahorro", "Créditos de consumo","Me invitan", "Tarjeta de credito"],  
    respuesta: {} ,
    },
    {
    pregunta:"En tus vacaciones, ¿Qué prefieres como hospedaje?",
    opciones: [ "Hotel", "Airbnb", "Carpa", "Hostal"],
    respuesta: {},
    },
  ];
  
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

// Llamamos a la función principal para iniciar el proceso
iniciarVotacion();

//Función para saber nombre, visible en el prompt
  function userFnName() {
    const nombre = prompt("¿Cuál es tu nombre?");
    return nombre ? nombre.trim() : "Usuario Anónimo";
  }

  function votar(pregunta, userName) {
    let opcionValida = false;
   
    while (!opcionValida) {
      const opcionSeleccionada = prompt(
        `Hola ${userName},\n\nPregunta: ${
          pregunta.pregunta
        }\n\nEscribe el Número de opción que más te represente (1,2,3 ó 4)\n${pregunta.opciones
          .map((opcion, index) => `${index + 1}. ${opcion}`)
          .join("\n")}`
      );
   
      if (opcionSeleccionada === null) {
        console.log("Pregunta omitida.");
        break;
      }
   
      const indiceOpcion = parseInt(opcionSeleccionada) - 1;
   
      if (
        !isNaN(indiceOpcion) &&
        indiceOpcion >= 0 &&
        indiceOpcion < pregunta.opciones.length
      ) {
        agregarVoto(pregunta, pregunta.opciones[indiceOpcion]);
        opcionValida = true;
      } else {
        console.log("Opción no válida. Intenta de nuevo.");
      }
    }
  }
   
  function agregarVoto(pregunta, opcionSeleccionada) {
    if (pregunta.respuesta[opcionSeleccionada]) {
      pregunta.respuesta[opcionSeleccionada]++;
    } else {
      pregunta.respuesta[opcionSeleccionada] = 1;
    }
  }

    function mostrarResultados(pregunta) {
    console.log(`\nResultados para la pregunta: "${pregunta.pregunta}":`);
    pregunta.opciones.forEach((opcion) => {
      console.log(`Opción "${opcion}": ${pregunta.respuesta[opcion] || 0} votos`);
    });
  }
   
  function realizarCuestionario() {
    const userName = userFnName();
    preguntas.forEach((pregunta) => {
      votar(pregunta, userName);
    });

   
    console.log("\nResultados finales de la encuesta:");
    preguntas.forEach(mostrarResultados);
  }
   
  realizarCuestionario();
   
