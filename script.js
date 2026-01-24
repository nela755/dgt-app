// ===== DATOS DE LOS 36 APARTADOS DGT (REORGANIZADOS) =====
const temasDGT = [
  {
    id: 1,
    titulo: "INTRODUCCIÓN",
    icono: "fa-flag",
    color: "#2196F3",
    descripcion: "Conceptos básicos y estructura del curso",
    progreso: 0,
    lecciones: 5,
    completado: false
  },
  {
    id: 2,
    titulo: "TIPOS DE VEHÍCULOS",
    icono: "fa-car",
    color: "#FF9800",
    descripcion: "Clasificación de vehículos y características",
    progreso: 0,
    lecciones: 4,
    completado: false
  },
  {
    id: 3,
    titulo: "VÍAS. TIPO DE VÍAS",
    icono: "fa-road",
    color: "#F44336",
    descripcion: "Tipos de vías, sentidos, carriles y velocidades",
    progreso: 50,
    lecciones: 8,
    completado: false
  },
  {
    id: 4,
    titulo: "CARRILES ESPECIALES",
    icono: "fa-road",
    color: "#E91E63",
    descripcion: "Carriles BUS, VAO, bici, y otros especiales",
    progreso: 0,
    lecciones: 3,
    completado: false
  },
  {
    id: 5,
    titulo: "DISTANCIA FRONTAL DE SEGURIDAD",
    icono: "fa-ruler-horizontal",
    color: "#9C27B0",
    descripcion: "Cálculo y mantenimiento de distancia de seguridad",
    progreso: 0,
    lecciones: 2,
    completado: false
  },
  {
    id: 6,
    titulo: "VELOCIDADES. LÍMITES GENÉRICOS",
    icono: "fa-tachometer-alt",
    color: "#673AB7",
    descripcion: "Límites de velocidad según vía y vehículo",
    progreso: 0,
    lecciones: 6,
    completado: false
  },
  {
    id: 7,
    titulo: "PRIORIDAD",
    icono: "fa-traffic-light",
    color: "#3F51B5",
    descripcion: "Reglas de prioridad en intersecciones",
    progreso: 0,
    lecciones: 5,
    completado: false
  },
  {
    id: 8,
    titulo: "MANIOBRAS",
    icono: "fa-exchange-alt",
    color: "#2196F3",
    descripcion: "Cambios de dirección, adelantamientos, paradas",
    progreso: 0,
    lecciones: 10,
    completado: false
  },
  {
    id: 9,
    titulo: "INMOVILIZACIONES",
    icono: "fa-parking",
    color: "#03A9F4",
    descripcion: "Detención, parada y estacionamiento",
    progreso: 0,
    lecciones: 6,
    completado: false
  },
  {
    id: 10,
    titulo: "SEÑALES",
    icono: "fa-sign",
    color: "#00BCD4",
    descripcion: "Sistema de señalización en general",
    progreso: 0,
    lecciones: 8,
    completado: false
  },
  {
    id: 11,
    titulo: "SEMÁFOROS",
    icono: "fa-traffic-light",
    color: "#009688",
    descripcion: "Funcionamiento y tipos de semáforos",
    progreso: 0,
    lecciones: 4,
    completado: false
  },
  {
    id: 12,
    titulo: "SEÑALES VERTICALES",
    icono: "fa-sign",
    color: "#4CAF50",
    descripcion: "Señales de peligro, prohibición, obligación",
    progreso: 0,
    lecciones: 12,
    completado: false
  },
  {
    id: 13,
    titulo: "MARCAS VIALES",
    icono: "fa-road",
    color: "#8BC34A",
    descripcion: "Marcas en el pavimento y su significado",
    progreso: 0,
    lecciones: 7,
    completado: false
  },
  {
    id: 14,
    titulo: "LUCES",
    icono: "fa-lightbulb",
    color: "#CDDC39",
    descripcion: "Luces de posición, cruce, antiniebla, intermitentes",
    progreso: 0,
    lecciones: 6,
    completado: false
  },
  {
    id: 15,
    titulo: "TRANSPORTE DE PERSONAS",
    icono: "fa-users",
    color: "#FFC107",
    descripcion: "Normas para transporte de pasajeros",
    progreso: 0,
    lecciones: 4,
    completado: false
  },
  {
    id: 16,
    titulo: "TRANSPORTE DE MERCANCÍAS",
    icono: "fa-truck",
    color: "#FF9800",
    descripcion: "Normas para carga y transporte de mercancías",
    progreso: 0,
    lecciones: 5,
    completado: false
  },
  {
    id: 17,
    titulo: "I.T.V.",
    icono: "fa-wrench",
    color: "#FF5722",
    descripcion: "Inspección Técnica de Vehículos",
    progreso: 0,
    lecciones: 3,
    completado: false
  },
  {
    id: 18,
    titulo: "DOCUMENTACIÓN",
    icono: "fa-file-alt",
    color: "#795548",
    descripcion: "Permisos, ITV, seguro, documentación personal",
    progreso: 0,
    lecciones: 5,
    completado: false
  },
  {
    id: 19,
    titulo: "PERMISO POR PUNTOS",
    icono: "fa-star",
    color: "#607D8B",
    descripcion: "Sistema de permiso por puntos",
    progreso: 0,
    lecciones: 4,
    completado: false
  },
  {
    id: 20,
    titulo: "FACTORES EN ACCIDENTE",
    icono: "fa-exclamation-triangle",
    color: "#9E9E9E",
    descripcion: "Factores humanos, ambientales y viales",
    progreso: 0,
    lecciones: 6,
    completado: false
  },
  {
    id: 21,
    titulo: "GRUPOS VULNERABLES",
    icono: "fa-user-shield",
    color: "#795548",
    descripcion: "Peatones, ciclistas, motociclistas",
    progreso: 0,
    lecciones: 3,
    completado: false
  },
  {
    id: 22,
    titulo: "FACTORES DE RIESGO",
    icono: "fa-exclamation-circle",
    color: "#D32F2F",
    descripcion: "Concepto general de factores de riesgo",
    progreso: 0,
    lecciones: 3,
    completado: false
  },
  {
    id: 23,
    titulo: "FACTOR: VELOCIDAD",
    icono: "fa-tachometer-alt",
    color: "#F44336",
    descripcion: "Tiempo de reacción, distancia de reacción...",
    progreso: 0,
    lecciones: 5,
    completado: false
  },
  {
    id: 24,
    titulo: "FACTOR: FATIGA Y SUEÑO",
    icono: "fa-bed",
    color: "#7B1FA2",
    descripcion: "Efectos de la fatiga y sueño en la conducción",
    progreso: 0,
    lecciones: 3,
    completado: false
  },
  {
    id: 25,
    titulo: "FACTOR: ENFERMEDADES Y FÁRMACOS",
    icono: "fa-pills",
    color: "#303F9F",
    descripcion: "Enfermedades y medicamentos que afectan la conducción",
    progreso: 0,
    lecciones: 3,
    completado: false
  },
  {
    id: 26,
    titulo: "FACTOR: CALOR",
    icono: "fa-sun",
    color: "#FF9800",
    descripcion: "Efectos del calor en el conductor y vehículo",
    progreso: 0,
    lecciones: 2,
    completado: false
  },
  {
    id: 27,
    titulo: "FACTOR: DISTRACCIONES",
    icono: "fa-mobile-alt",
    color: "#4CAF50",
    descripcion: "Distracciones al volante y prevención",
    progreso: 0,
    lecciones: 4,
    completado: false
  },
  {
    id: 28,
    titulo: "FACTOR: ALCOHOL",
    icono: "fa-wine-bottle",
    color: "#D32F2F",
    descripcion: "Tasas de alcoholemia y efectos",
    progreso: 0,
    lecciones: 6,
    completado: false
  },
  {
    id: 29,
    titulo: "SEGURIDAD ACTIVA",
    icono: "fa-shield-alt",
    color: "#1976D2",
    descripcion: "Sistemas que previenen accidentes",
    progreso: 0,
    lecciones: 5,
    completado: false
  },
  {
    id: 30,
    titulo: "SEGURIDAD PASIVA",
    icono: "fa-car-crash",
    color: "#0288D1",
    descripcion: "Sistemas que protegen durante el accidente",
    progreso: 0,
    lecciones: 5,
    completado: false
  },
  {
    id: 31,
    titulo: "SEGURIDAD PREVENTIVA",
    icono: "fa-user-shield",
    color: "#0097A7",
    descripcion: "Medidas preventivas antes de conducir",
    progreso: 0,
    lecciones: 3,
    completado: false
  },
  {
    id: 32,
    titulo: "SISTEMAS ADAS",
    icono: "fa-robot",
    color: "#388E3C",
    descripcion: "Sistemas Avanzados de Asistencia a la Conducción",
    progreso: 0,
    lecciones: 7,
    completado: false
  },
  {
    id: 33,
    titulo: "COMPORTAMIENTO EN ACCIDENTE",
    icono: "fa-ambulance",
    color: "#D32F2F",
    descripcion: "Protocolo PAS, primeros auxilios, emergencias",
    progreso: 0,
    lecciones: 5,
    completado: false
  },
  {
    id: 34,
    titulo: "MECÁNICA",
    icono: "fa-cog",
    color: "#5D4037",
    descripcion: "Partes del coche, mantenimiento, neumáticos",
    progreso: 0,
    lecciones: 7,
    completado: false
  },
  {
    id: 35,
    titulo: "TÉCNICAS DE CONDUCCIÓN PREVENTIVA",
    icono: "fa-graduation-cap",
    color: "#00796B",
    descripcion: "Conducción eficiente, preventiva, condiciones adversas",
    progreso: 0,
    lecciones: 9,
    completado: false
  },
  {
    id: 36,
    titulo: "DISTINTIVOS MEDIOAMBIENTALES",
    icono: "fa-leaf",
    color: "#689F38",
    descripcion: "Etiquetas medioambientales DGT",
    progreso: 0,
    lecciones: 3,
    completado: false
  }
];

// ===== SISTEMA DE PROGRESO =====
let rachaDias = 5; // Cambiado a 5 para demostración
let monedas = 120; // Cambiado a 120 para demostración

// ===== FUNCIONES PRINCIPALES =====

// Cargar el árbol de aprendizaje
function cargarArbolAprendizaje() {
  const container = document.getElementById('treeContainer');
  // Limpiar loading
  container.innerHTML = '';
  
  // Crear tarjetas para cada tema
  temasDGT.forEach((tema, index) => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tree-card';
    
    // Calcular el progreso para mostrar texto apropiado
    let textoBoton = 'Comenzar';
    if (tema.progreso === 100) {
      textoBoton = 'Completado ✔';
    } else if (tema.progreso > 0) {
      textoBoton = 'Continuar';
    }
    
    tarjeta.innerHTML = `
      <div class="tree-card-header">
        <i class="fas ${tema.icono}"></i>
        <span class="tree-card-badge">${tema.lecciones} lecciones</span>
      </div>
      <div class="tree-card-body">
        <h3>${tema.titulo}</h3>
        <p>${tema.descripcion}</p>
        <div class="tree-card-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${tema.progreso}%"></div>
          </div>
          <span>${tema.progreso}% completado</span>
        </div>
        <button class="btn-continue" data-tema="${tema.id}">
          ${textoBoton}
        </button>
      </div>
    `;
    
    container.appendChild(tarjeta);
  });
  
  // Añadir eventos a los botones
  document.querySelectorAll('.btn-continue').forEach(btn => {
    btn.addEventListener('click', function() {
      const temaId = parseInt(this.getAttribute('data-tema'));
      iniciarTema(temaId);
    });
  });
}

// Iniciar un tema específico
function iniciarTema(temaId) {
  const tema = temasDGT.find(t => t.id === temaId);
  
  // Si ya está completado, mostrar mensaje diferente
  if (tema.progreso === 100) {
    mostrarLeccionDemo(tema);
    return;
  }
  
  // Mostrar mensaje de inicio
  const mensaje = `¡Comenzando "${tema.titulo}"!\n\n${tema.descripcion}\n\nEste tema tiene ${tema.lecciones} lecciones interactivas.`;
  alert(mensaje);
  
  // Simular progreso (en la app real sería por lecciones completadas)
  const progresoNuevo = tema.progreso + 25;
  tema.progreso = progresoNuevo > 100 ? 100 : progresoNuevo;
  
  // Marcar como completado si llega a 100%
  if (tema.progreso === 100) {
    tema.completado = true;
    monedas += 50; // Recompensa por completar tema
    alert(`¡Felicidades! Has completado "${tema.titulo}"\n\nGanaste 50 monedas!`);
  } else {
    monedas += 10; // Recompensa por progresar
  }
  
  // Actualizar racha si es primera vez del día (simulación)
  const hoy = new Date().toDateString();
  const ultimoAcceso = localStorage.getItem('ultimoAcceso');
  if (ultimoAcceso !== hoy) {
    rachaDias++;
    localStorage.setItem('ultimoAcceso', hoy);
    localStorage.setItem('rachaDias', rachaDias);
  }
  
  // Actualizar vista
  cargarArbolAprendizaje();
  actualizarProgresoGeneral();
  actualizarEstadisticasHeader();
}

// Mostrar lección demo (cuando se completa un tema)
function mostrarLeccionDemo(tema) {
  const preguntasDemo = {
    1: {
      pregunta: "¿Cuál es la velocidad máxima en autopista para turismos?",
      opciones: ["100 km/h", "120 km/h", "130 km/h", "140 km/h"],
      correcta: 2
    },
    3: {
      pregunta: "¿Qué significa una señal circular roja con fondo blanco?",
      opciones: ["Obligación", "Prohibición", "Peligro", "Información"],
      correcta: 1
    },
    8: {
      pregunta: "¿A qué distancia mínima debes mantenerte del vehículo anterior?",
      opciones: ["50 metros", "100 metros", "Distancia de seguridad", "2 segundos"],
      correcta: 2
    },
    28: {
      pregunta: "¿Cuál es la tasa máxima de alcohol permitida para conductores noveles?",
      opciones: ["0.5 g/l", "0.3 g/l", "0.0 g/l", "0.15 g/l"],
      correcta: 1
    }
  };
  
  const pregunta = preguntasDemo[tema.id];
  if (pregunta) {
    const respuesta = prompt(
      `${tema.titulo} - Pregunta demo:\n\n${pregunta.pregunta}\n\n` +
      `1. ${pregunta.opciones[0]}\n` +
      `2. ${pregunta.opciones[1]}\n` +
      `3. ${pregunta.opciones[2]}\n` +
      `4. ${pregunta.opciones[3]}\n\n` +
      'Escribe el número de la respuesta correcta:'
    );
    
    if (respuesta && parseInt(respuesta) - 1 === pregunta.correcta) {
      alert("✅ ¡Correcto! Respuesta acertada.");
    } else if (respuesta) {
      alert(`✖️ Incorrecto. La respuesta correcta es: ${pregunta.opciones[pregunta.correcta]}`);
    }
  } else {
    alert(`"${tema.titulo}" completado\n\nHas dominado este tema. ¡Buen trabajo!`);
  }
}

// Actualizar progreso general
function actualizarProgresoGeneral() {
  const totalProgreso = temasDGT.reduce((sum, tema) => sum + tema.progreso, 0);
  const promedioProgreso = Math.round(totalProgreso / temasDGT.length);
  
  // Actualizar círculo de progreso
  const progressCircle = document.querySelector('.progress-circle');
  const progressText = progressCircle.querySelector('span');
  
  progressCircle.style.background = `conic-gradient(#4CAF50 ${promedioProgreso * 3.6}deg, #e0e0e0 0deg)`;
  progressCircle.setAttribute('data-progress', promedioProgreso);
  progressText.textContent = `${promedioProgreso}%`;
  
  // Guardar en localStorage
  localStorage.setItem('progresoGeneral', promedioProgreso);
  localStorage.setItem('temasDGT', JSON.stringify(temasDGT));
}

// Actualizar estadísticas en el header
function actualizarEstadisticasHeader() {
  const streakElement = document.querySelector('.streak');
  const coinsElement = document.querySelector('.coins');
  
  if (streakElement) {
    streakElement.innerHTML = `<i class="fas fa-fire"></i> ${rachaDias}`;
  }
  
  if (coinsElement) {
    coinsElement.innerHTML = `<i class="fas fa-star"></i> ${monedas}`;
  }
  
  // Guardar en localStorage
  localStorage.setItem('rachaDias', rachaDias);
  localStorage.setItem('monedas', monedas);
}

// Cargar datos guardados
function cargarDatosGuardados() {
  // Cargar progreso de temas
  const temasGuardados = localStorage.getItem('temasDGT');
  if (temasGuardados) {
    const temasParseados = JSON.parse(temasGuardados);
    temasParseados.forEach((temaGuardado, index) => {
      if (temasDGT[index]) {
        temasDGT[index].progreso = temaGuardado.progreso || 0;
        temasDGT[index].completado = temaGuardado.completado || false;
      }
    });
  }
  
  // Cargar racha
  const rachaGuardada = localStorage.getItem('rachaDias');
  if (rachaGuardada) {
    rachaDias = parseInt(rachaGuardada);
  }
  
  // Cargar monedas
  const monedasGuardadas = localStorage.getItem('monedas');
  if (monedasGuardadas) {
    monedas = parseInt(monedasGuardadas);
  }
}

// Botón comenzar aprendizaje
document.getElementById('startLearning').addEventListener('click', function() {
  // Encontrar el primer tema no completado
  const temaIncompleto = temasDGT.find(t => t.progreso < 100);
  if (temaIncompleto) {
    iniciarTema(temaIncompleto.id);
  } else {
    // Si todos están completados, empezar con el primero
    iniciarTema(1);
  }
});

// Práctica rápida
document.querySelectorAll('.practice-card').forEach(card => {
  card.addEventListener('click', function() {
    const tipo = this.getAttribute('data-type');
    switch(tipo) {
      case 'señales':
        alert('PRÁCTICA DE SEÑALES\n\n10 preguntas sobre señalización');
        monedas += 3;
        break;
      case 'test':
        alert('TEST RÁPIDO\n\n5 minutos para 15 preguntas');
        monedas += 5;
        break;
      case 'repaso':
        // Encontrar temas con progreso más bajo
        const temasDebiles = temasDGT
          .filter(t => t.progreso < 70)
          .sort((a, b) => a.progreso - b.progreso);
        
        if (temasDebiles.length > 0) {
          const tema = temasDebiles[0];
          if (confirm(`REPASO RECOMENDADO\n\nTu tema más débil es: "${tema.titulo}"\nProgreso: ${tema.progreso}%\n\n¿Quieres repasarlo ahora?`)) {
            iniciarTema(tema.id);
          }
        } else {
          alert('¡Excelente! No tienes temas débiles para repasar.\n\nTu progreso es uniforme en todos los temas.');
        }
        break;
    }
    actualizarEstadisticasHeader();
  });
});

// Navegación del footer
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Remover active de todos
    document.querySelectorAll('.nav-item').forEach(nav => {
      nav.classList.remove('active');
    });
    
    // Añadir active al clickado
    this.classList.add('active');
    
    const texto = this.querySelector('span').textContent;
    alert(`Navegando a: ${texto}\n\n(En la versión completa esta sección estaría implementada)`);
  });
});

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
  // Cargar datos guardados
  cargarDatosGuardados();
  
  // Cargar el árbol de aprendizaje
  cargarArbolAprendizaje();
  
  // Actualizar progreso general
  actualizarProgresoGeneral();
  
  // Actualizar estadísticas del header
  actualizarEstadisticasHeader();
  
  console.log('Teoria DGT cargada correctamente');
  console.log('Temas cargados:', temasDGT.length);
  console.log('Racha actual:', rachaDias, 'días');
  console.log('Monedas:', monedas);
});