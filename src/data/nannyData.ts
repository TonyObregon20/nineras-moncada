export interface FaqTopic {
  id: string;
  title: string;
  content: string;
  links?: { label: string; url: string }[];
}

export const MONCADA_FAQ_DATA: FaqTopic[] = [
  {
    id: 'personal',
    title: 'Personal Moncada',
    content: 'Contamos con personal limitado pero conocido por nosotros; muchas de nuestras niñeras han estudiado en nuestro Centro Educativo Ocupacional por lo que garantizamos nuestra vocación de servicio. En ciertas ocasiones recibimos personal con experiencia previa y estudios propios, sin embargo deben obedecer nuestro reglamento interno y llevar una actualización de primeros auxilios. Así mismo, recibimos personal extranjero que consideremos idóneo para incluir en nuestro personal.'
  },
  {
    id: 'proceso',
    title: 'Proceso de Selección y Asignación',
    content: `El proceso con Niñeras Moncada es simple y transparente:
1) El primer paso es informarte sobre nosotros en nuestra web y contactarte con nosotros.
2) Tomamos tu pedido de manera personalizada. Tu pedido será tomado por teléfono ya que necesitamos entenderte más allá de un simple cuestionario. Te haremos preguntas sobre la familia, el hogar y el bebé o adulto para entender tu entorno, experiencias pasadas y expectativas. Te pedimos contar con aproximadamente 15 minutos para completar la llamada con nosotros.
3) Buscamos dentro de nuestro personal a la candidata idónea para servirte.
4) Entrevistas y pruebas a tu candidata manteniendo la mente abierta y con la mejor actitud, siempre positiva, proceden las dos a familiarizarse una con la otra y las dos aprenden a trabajar en equipo para el bienestar del bebé, niño o adulto.`
  },
  {
    id: 'anticipacion',
    title: 'Debida Anticipación',
    content: 'Debido a la demanda del mercado y a que contamos con personal limitado, sugerimos que empieces tu búsqueda de niñera con nosotros con 8 a 6 semanas de anticipación para bebés recién nacidos.'
  },
  {
    id: 'horario',
    title: 'Horario de Trabajo',
    content: 'Según los derechos otorgados al trabajador del hogar, el personal debe de trabajar como máximo 48 horas a la semana. Sin embargo, nuestras trabajadoras son responsables y trabajan de manera de poder asistir al bebé y dar descanso a los padres. Nuestros clientes son conscientes que la trabajadora debe descansar para poder rendir durante el día por lo que ayudan durante la noche en caso ser necesario. El bebé deberá ser habituado a horario de sueño de acuerdo a la edad de manera que puedan trabajar por el bebé de manera coordinada.'
  },
  {
    id: 'remuneracion',
    title: 'Remuneración y Beneficios de Ley',
    content: 'La remuneración incluye sueldo, CTS, vacaciones y EsSalud. Si la trabajadora lo desea, se le deposita parte de su sueldo en el Sistema Nacional de Pensiones (ONP/AFP).',
    links: [
      {
        label: 'Información Derechos Trabajadores del Hogar (Ministerio de Trabajo)',
        url: 'https://www.trabajo.gob.pe/archivos/file/informacion/TRABAJADORES/INF_DERECHOS_TRABAJADORES_HOGAR.pdf'
      },
      {
        label: 'Régimen Laboral Trabajadores del Hogar (SUNAFIL)',
        url: 'https://www.sunafil.gob.pe/noticias/item/3844-regimen-laboral-de-los-trabajadores-del-hogar.html#ii-derechos-y-obligaciones-de-los-trabajadores-del-hogar'
      }
    ]
  },
  {
    id: 'calculo',
    title: 'Cálculo Oficial de Beneficios',
    content: 'A continuación los enlaces directos a la calculadora de beneficios oficial del Ministerio de Trabajo y el manual de uso correspondiente para su consulta:',
    links: [
      {
        label: 'Calculadora Oficial del Ministerio de Trabajo (MTPE)',
        url: 'http://liquidtrabhogar.trabajo.gob.pe/si.trabajadoreshogarexterno/'
      },
      {
        label: 'Manual de Uso de la Calculadora de Liquidación',
        url: 'http://liquidtrabhogar.trabajo.gob.pe/si.trabajadoreshogarexterno/manual/ManualLiquidTraHogar.pdf'
      }
    ]
  },
  {
    id: 'entrevista',
    title: 'Modalidad de Entrevista',
    content: 'Contamos con personal limitado por lo que no es común tener capacidad de brindar opciones para entrevistar. Las entrevistas se dan en nuestras oficinas si es la primera vez que contrata nuestro servicio. El costo de transporte es compensado por la familia cuando por excepción la entrevista es fuera de nuestra oficina.'
  },
  {
    id: 'preguntas-entrevista',
    title: 'Preguntas en la Entrevista',
    content: `Si desea, nosotros les ofreceremos preguntas sugeridas para la entrevista.

Por Ley de la trabajadora del hogar, las trabajadoras están prohibidas de comentar sobre los clientes a quienes sirvieron anteriormente por lo que pedimos realizar preguntas estrictamente inherentes al cuidado del bebé o adulto. Cualquier duda están bienvenidas a comunicarse con la empresa.

Así mismo, ellas están autorizadas a contestar sobre su vida personal solamente lo básico y por 1 sola vez. Deseamos evitar malos entendidos por ambas partes ya que a la trabajadora se le contrata por su experiencia y para hacer su labor; por favor tengan en cuenta que todas quieren salir adelante y superarse.`
  },
  {
    id: 'prueba',
    title: 'Días de Prueba',
    content: 'Los días de prueba son un máximo de 3 días con pago de tarifa diurna a discutir previamente. Al finalizar este tiempo el contrato empieza si ambas partes están de acuerdo. Los días de prueba no aplican para cambios de personal.'
  },
  {
    id: 'cambio-personal',
    title: 'Cambio de Personal y Garantía',
    content: `Los contratos de 6 meses incluyen 1 cambio de personal dentro de los primeros 3 meses del contrato. 
Ya que contamos con personal limitado, recomendamos guiarse por nuestra forma de trabajo que es la comunicación, cumplimiento de contrato y prevención de problemas.
Si hubiera alguna situación comprobada que pone en riesgo la integridad del bebé/niño o adulto se cambiará a la trabajadora a la brevedad posible.
Si la situación no es inherente al trabajo directo, se procede a hablar con la trabajadora de manera que se evite el cambio de personal y se termine el contrato en buenos términos.
De igual manera, si la trabajadora tiene comentarios sobre incumplimiento de contrato por parte del cliente, se procederá a hablar con el cliente para evitar realizar el cambio.
Contamos con personal limitado por lo que la agencia se reserva la discreción de enviar a la persona que crea conveniente para culminar el contrato. En caso se realice el cambio, la forma de indemnización se coordinará con la agencia.`
  },
  {
    id: 'uniformes',
    title: 'Uniformes y Equipo de Trabajo',
    content: 'Nuestro personal debe tener equipo de trabajo, sin embargo si no los tuviera, la empleadora podrá proporcionarlos y descontarlos del sueldo mensual.'
  },
  {
    id: 'descanso-medico',
    title: 'Descanso Médico',
    content: 'En caso la trabajadora se enferme al punto de necesitar descanso médico, nosotros brindaremos el reemplazo a la brevedad posible. La trabajadora debe de brindar su descanso médico para ser remunerada por los días fuera del trabajo, de otro modo, estos serán descontados de su sueldo y sus beneficios.'
  },
  {
    id: 'seguridad-accidentes',
    title: 'Accidentes, Pérdidas y Prevención',
    content: `Nuestro personal es de confianza por lo que sabemos sobre su honestidad y valores. Sin embargo, para prevenir malos entendidos, por contrato es la obligación de la trabajadora y responsabilidad del cliente revisar sus pertenencias al despedirse. La trabajadora está prohibida de salir con paquetes, regalos, uniformes sin lavar, y deberá salir con cartera pequeña.
En caso de accidentes por descuido, nuestro personal asumirá el costo de roturas o ropa dañada previa conversación del cliente y la trabajadora con nosotros.
Así mismo, al final del contrato deberá mostrar su cartera, maletín de trabajo y todo el equipo de bebé, niño o adulto mayor en perfecto estado para prevenir inconvenientes.`
  },
  {
    id: 'devoluciones',
    title: 'Compromiso y Devoluciones',
    content: 'Una vez que nos comprometemos a servirlos lo hacemos con responsabilidad de manera que puedan disfrutar de los servicios de una trabajadora Moncada. Si usted cumple con las cláusulas del contrato y la trabajadora con su labor de acuerdo a lo solicitado, estamos seguros que ustedes estarán bien servidos y la trabajadora feliz de servirlos. Recuerda que de cualquier manera nuestra garantía incluye un cambio durante los primeros 3 meses.'
  },
  {
    id: 'inversion',
    title: 'Inversión y Formas de Pago',
    content: 'Los sueldos de nuestro personal varían según su experiencia y el tipo de servicio, por lo que pueden variar entre S/. 1,500 y S/. 2,500 por mes. El fee es de acuerdo al costo de mercado, el cual puede variar. Las renovaciones igualmente siempre son menores. Pedimos un depósito previo para empezar la búsqueda, el cual cuenta como parte del pago de la inversión. El pago se hace por transferencia bancaria (no se acepta efectivo). Se atiende presencial durante las horas de oficina de lunes a viernes de 9:00 am a 2:00 pm previa cita. Recuerde siempre pedir su boleta.'
  },
  {
    id: 'renovaciones',
    title: 'Renovaciones de Contrato',
    content: `Para el cliente, la renovación brinda una oportunidad de continuar con una trabajadora de confianza que ya conoce al bebé o al adulto mayor.
Para la trabajadora, le brinda seguridad y confianza de que sus derechos serán respetados, su remuneración será cancelada y que al culminar su contrato satisfactoriamente tendrán trabajo asegurado ya que conocemos de primera mano su ética de trabajo.
Así mismo, por muchas experiencias pasadas nosotros recomendamos contar con nuestro servicio ya que mantiene alineadas las expectativas de ambas partes. En muchos casos cuando han decidido romper el vínculo con la empresa, la trabajadora ha relajado su actitud y el cliente ha demandado más de ella, llevando a desacuerdos y terminando su colaboración. En caso de desvincular a la agencia, queda a nuestro criterio el volver a servir tanto a la cliente como a la trabajadora.`
  }
];

export interface NannyProfile {
  id: string;
  name: string;
  age: number;
  role: string;
  category: 'cama_adentro' | 'cama_afuera' | 'neonatal' | 'adultos';
  experienceYears: number;
  education: string;
  district: string;
  rating: number;
  completedPlacements: number;
  badges: string[];
  bio: string;
  specialties: string[];
  availability: string;
  initials: string;
  accentColor: string;
  photoUrl: string;
}

export const NANNY_PROFILES: NannyProfile[] = [
  {
    id: 'nan-1',
    name: 'Milagros Córdova',
    age: 34,
    role: 'Niñera Especialista (0 - 18 meses)',
    category: 'cama_adentro',
    experienceYears: 8,
    education: 'Egresada del Centro Educativo Ocupacional Moncada',
    district: 'Santiago de Surco',
    rating: 4.9,
    completedPlacements: 5,
    badges: ['Egresada Moncada', 'Primeros Auxilios Pediátricos', 'Reglamento Interno Aprobado', 'Referencias Verificadas'],
    bio: 'Formada en nuestra casa de estudios. Especialista en recién nacidos y bebés hasta los 18 meses. Proactiva, cariñosa y rigurosa en rutinas de sueño y lactancia.',
    specialties: ['Cuidado de Recién Nacido', 'Estimulación Temprana', 'Rutinas de Sueño', 'Lavandería y Aseo del Bebé'],
    availability: 'Disponible para servicio interno o diario',
    initials: 'MC',
    accentColor: 'from-amber-400 to-orange-500',
    photoUrl: '/images/nanny-1.jpg'
  },
  {
    id: 'nan-2',
    name: 'Patricia Valdivia',
    age: 31,
    role: 'Técnica en Enfermería & Cuidados Neonatales',
    category: 'neonatal',
    experienceYears: 7,
    education: 'Técnica en Enfermería con Actualización Moncada',
    district: 'Miraflores / San Isidro',
    rating: 5.0,
    completedPlacements: 9,
    badges: ['Titulada en Enfermería', 'Primeros Auxilios RCP', 'Reglamento Moncada', 'Verificación Completa'],
    bio: 'Experiencia en asistencia médica preventiva para recién nacidos, prematuros y recuperación post-parto. Apoyo en turnos nocturnos para el descanso de los padres.',
    specialties: ['Neonatología', 'Turno Noche Asistido', 'Monitoreo de Cólicos', 'Mellizos y Gemelos'],
    availability: 'Turnos nocturnos o diurnos',
    initials: 'PV',
    accentColor: 'from-teal-400 to-emerald-600',
    photoUrl: '/images/nanny-2.jpg'
  },
  {
    id: 'nan-3',
    name: 'Gladys Montesinos',
    age: 46,
    role: 'Asistente de Adulto Mayor',
    category: 'adultos',
    experienceYears: 12,
    education: 'Egresada como Asistente de Ancianos - Centro Moncada',
    district: 'Surco / San Borja',
    rating: 4.95,
    completedPlacements: 7,
    badges: ['Asistente de Ancianos Certificada', 'Acompañamiento a Citas', 'Control de Medicinas', 'Prevención de Caídas'],
    bio: 'Gran empatía y respeto por el adulto mayor. Acompaña a citas médicas, asiste en la marcha para prevenir caídas, administra medicinas recetadas y brinda compañía activa.',
    specialties: ['Control de Medicinas Orales', 'Aseo y Movilidad', 'Alimentación Saludable', 'Acompañamiento a Citas'],
    availability: 'Interna o Externa',
    initials: 'GM',
    accentColor: 'from-rose-400 to-pink-600',
    photoUrl: '/images/nanny-3.jpg'
  },
  {
    id: 'nan-4',
    name: 'Andrea Quintana',
    age: 28,
    role: 'Niñera para Niños & Apoyo Estimulación',
    category: 'cama_afuera',
    experienceYears: 5,
    education: 'Alumna Centro Ocupacional Moncada & Educadora',
    district: 'La Molina / San Isidro',
    rating: 4.88,
    completedPlacements: 8,
    badges: ['Capacitación Moncada', 'Primeros Auxilios al Día', 'Estimulación Psicomotriz', 'Puntualidad Comprobada'],
    bio: 'Dinámica, paciente y con vocación de servicio. Excelente manejo de rutinas infantiles, juegos creativos y preparación de alimentos balanceados para niños.',
    specialties: ['Desarrollo Infantil', 'Juegos Sensoriales', 'Cuidado Exclusivo', 'Rutinas Saludables'],
    availability: 'Lunes a Viernes (Horario diario)',
    initials: 'AQ',
    accentColor: 'from-indigo-400 to-blue-600',
    photoUrl: '/images/nanny-4.jpg'
  },
  {
    id: 'nan-5',
    name: 'Rosa Elena Benavides',
    age: 52,
    role: 'Asistente de Adulto Mayor Senior',
    category: 'adultos',
    experienceYears: 15,
    education: 'Asistente de Adultos y Hogar - Familia Moncada',
    district: 'Lima Metropolitana',
    rating: 4.98,
    completedPlacements: 6,
    badges: ['15 Años en Familia Moncada', 'Recomendación 5 Estrellas', 'Paciencia y Vocación', 'Control de Signos Vitales'],
    bio: 'Más de una década brindando soporte a familias con adultos mayores. Especialista en trato digno, compañía afectuosa, paseos seguros y dieta adaptada.',
    specialties: ['Acompañamiento Integral', 'Prevención de Caídas', 'Mantenimiento Ligero', 'Compañía y Lectura'],
    availability: 'Disponible para régimen interno',
    initials: 'RB',
    accentColor: 'from-purple-400 to-violet-600',
    photoUrl: '/images/nanny-5.jpg'
  },
  {
    id: 'nan-6',
    name: 'Karla Morales',
    age: 30,
    role: 'Niñera de Bebés & Cuidados Infantiles',
    category: 'cama_adentro',
    experienceYears: 6,
    education: 'Certificada por el Centro Ocupacional Moncada',
    district: 'Magdalena / Jesús María',
    rating: 4.92,
    completedPlacements: 5,
    badges: ['Centro Moncada', 'Primeros Auxilios Certificados', 'Honestidad Comprobada', 'Atención Exclusiva al Bebé'],
    bio: 'Vocación absoluta y trato dulce. Cuida al bebé de manera integral y autosuficiente, encargándose de su aseo, alimentación y lavado exclusivo de sus prendas.',
    specialties: ['Cuidado Autosuficiente', 'Aseo e Higiene del Bebé', 'Primeros Auxilios', 'Atención Exclusiva'],
    availability: 'Interna o Externa',
    initials: 'KM',
    accentColor: 'from-cyan-400 to-sky-600',
    photoUrl: '/images/nanny-6.jpg'
  }
];

export const HISTORY_DATA = {
  founder: 'Yodalia Alvarez de Moncada',
  years: 65,
  instituteYear: 1994,
  title: 'NIÑERAS MONCADA',
  subtitle: 'Negocio familiar que crece con el país',
  quote: 'Cuando eres el soporte para una persona, entiendes que cada día tocas a esa vida y esa vida tocará la tuya',
  quoteAuthor: 'Anónimo'
};

export const SELECTION_STEPS = [
  {
    number: '01',
    title: 'Formación en Centro Educativo Ocupacional',
    subtitle: 'Tituladas y capacitadas desde 1994',
    description: 'Nuestras niñeras y asistentes han estudiado en nuestro propio Centro Educativo Ocupacional, donde aprenden primeros auxilios, estimulación, ética y cuidado integral del hogar.'
  },
  {
    number: '02',
    title: 'Filtro Documental & Antecedentes Legales',
    subtitle: 'Certificados oficiales 100% limpios',
    description: 'Validamos directamente antecedentes policiales, penales y judiciales ante el Poder Judicial y la PNP, además de récord migratorio para personal extranjero idóneo.'
  },
  {
    number: '03',
    title: 'Evaluación Psicológica y Vocación',
    subtitle: 'Control emocional y paciencia',
    description: 'Evaluamos tolerancia a la frustración, estabilidad afectiva, control de impulsos y verdadera vocación de servicio para el bienestar de bebés, niños y adultos.'
  },
  {
    number: '04',
    title: 'Auditoría de Referencias Laborales',
    subtitle: 'Personal conocido por nosotros',
    description: 'Mantenemos una red cercana con hijas, hermanas y sobrinas de nuestras primeras niñeras, conociendo de primera mano su honestidad, valores y trayectoria.'
  },
  {
    number: '05',
    title: 'Reglamento Interno y Actualización Continua',
    subtitle: 'Primeros auxilios y prevención',
    description: 'Todo el personal obedece nuestro estricto reglamento interno, lleva cursos actualizados de primeros auxilios pediátricos, manejo de emergencias y protocolos de respeto.'
  }
];

