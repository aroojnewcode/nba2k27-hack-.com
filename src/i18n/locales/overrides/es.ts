import { PRIMARY_CHECKOUT_PATH } from '../../../config/checkout';
import { PRODUCT_BASE } from '../../../config/site';
import type { Translations } from '../../types';

const productBase = PRODUCT_BASE;

/** Strong Spanish overrides (merged after string map). */
export const esOverrides: Partial<Translations> = {
  hero: {
    titleLine1: 'Hack NBA 2K27',
    titleLine2: 'auto green, tiro',
    titleLine3: 'timing y herramientas',
    subtitle:
      'Auto green, medidor de tiro, macros de dribbling, editor de badges y utilidades VC en un menú—actualizado tras cada parche en nba2k27hack.net.',
    ctaPrimary: 'Ver productos',
    ctaBuy: 'Comprar ahora',
    ctaDiscord: 'Unirse a Discord',
    modesLabel: 'Modos NBA 2K27',
    metrics: [
      { label: 'Seguro para stream', strong: 'Sí' },
      { label: 'Velocidad de parche', strong: '<24h' },
      { label: 'Usuarios', strong: '300+' },
      { label: 'Soporte en vivo', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Funciones',
    title: 'Todo lo que necesitas en un solo paquete',
    subtitle:
      'Tiro, badges, VC y utilidades Park/Rec para NBA 2K27 en PC—mantenido en cada actualización.',
    items: [
      {
        title: 'Auto Green',
        subtitle: 'Lanzamiento perfecto. Cualquier build.',
        desc:
          'Ventanas de lanzamiento humanizadas según altura, badges y latencia—empieza conservador en MyCourt antes de Park o Rec.',
        bullets: [
          'Asistencia de timing con sliders de latencia e input',
          'Perfiles de build para bases, alas y pívots',
          'Slots de presets Park vs MyCareer en el portal',
          'Modo solo medidor para tiradores manuales',
          'Sincronización en la nube en cada PC',
        ],
        tags: ['auto green', 'shot timing', 'myplayer'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Medidor de tiro',
        subtitle: 'Lee la ventana con claridad.',
        desc: 'Feedback de overlay legible en Rec y Park—sin HUD saturado.',
        bullets: [
          'Estilos de medidor y control de opacidad',
          'Offset de latencia por modo de juego',
          'Activa o desactiva el overlay sin reiniciar',
        ],
        tags: ['shot meter', 'overlay', 'timing'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Macros de dribbling',
        subtitle: 'Combos bajo demanda.',
        desc:
          'Encadena size-ups y escapes con valores sensatos—afina timings cuando te sientas cómodo online.',
        bullets: [
          'Cadenas de combos con una tecla para Park',
          'Sliders de ritmo según stamina',
          'Perfiles de hotkeys por arquetipo',
        ],
        tags: ['dribble macros', 'combos', 'park'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Editor de badges',
        subtitle: 'Planifica builds antes de farmear.',
        desc: 'Previsualiza badges y límites localmente antes de gastar VC en MyCareer.',
        bullets: [
          'Planificador de puntos de badge con topes',
          'Notas de meta Park vs Rec',
          'Exporta favoritos a perfiles en la nube',
        ],
        tags: ['badge editor', 'build planner', 'mycareer'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Herramientas VC',
        subtitle: 'Sigue el progreso. Gasta mejor.',
        desc: 'Monitoriza el flujo de VC y evita mejoras desperdiciadas—con valores conservadores online.',
        bullets: [
          'Seguimiento de VC y calculadoras de mejoras',
          'Recordatorios de drills MyCareer desde el portal',
          'Listas de gasto antes de compras grandes',
          'Overlays compatibles con stream',
        ],
        tags: ['vc tools', 'mycareer', 'progress'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Presets Park / Rec',
        subtitle: 'Listo para online en un clic.',
        desc: 'Perfiles separados de latencia, auto green y macros para Park, Rec y Pro-Am.',
        bullets: [
          'Perfiles en la nube por modo',
          'Hotkeys rápidos entre Park y Rec',
          'Valores conservadores tras parches',
          'Notas de operadores en Discord #status',
        ],
        tags: ['park presets', 'rec', 'pro-am'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Unlock All',
        subtitle: 'Previsualiza equipamiento localmente.',
        desc: 'Canchas, jerseys y armarios MyPlayer para planificar contenido—flujo local en el portal.',
        bullets: [
          'Biblioteca de canchas y jerseys',
          'Favoritos de armario MyPlayer',
          'Incluido con Elite o utilidad standalone',
        ],
        tags: ['unlock all', 'jerseys', 'courts'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
      {
        title: 'A prueba de stream',
        subtitle: 'Creadores más seguros.',
        desc: 'Mantén asistencias en tu monitor mientras capturas un feed limpio para streams.',
        bullets: ['Modos seguros OBS y Game Bar', 'Stream proof por módulo', 'Checklist de prueba en el portal'],
        tags: ['obs safe', 'stream proof', 'capture hide'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6',
      },
      {
        title: 'Config en la nube y actualizaciones',
        subtitle: 'Listo para día de parche.',
        desc: 'Mismos presets en cada PC—el portal publica builds rápido tras parches de NBA 2K27.',
        bullets: [
          'Backup en la nube de perfiles',
          'Loader en horas tras parches',
          'Discord #status para notas de build',
        ],
        tags: ['cloud sync', 'auto update', 'presets'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Por qué nosotros',
    title: 'Cheats NBA 2K27 al día con cada parche',
    subtitle:
      'Muchos sitios venden herramientas viejas y soporte lento. Priorizamos parches rápidos, ajustes naturales y ayuda real en Discord.',
    otherLabel: 'Proveedor típico',
    rows: [
      {
        title: 'Actualizaciones del loader el día del parche',
        desc: 'Builds en horas tras actualizaciones—revisa Discord #status antes de Park o Rec.',
      },
      {
        title: 'Timing y delays humanizados',
        desc: 'Sliders de latencia y auto green conservador—no tiros bot instantáneos.',
      },
      {
        title: 'Operadores en vivo en Discord',
        desc: 'Ingenieros reales para loader, presets Park y HWID—24/7.',
      },
      {
        title: 'Loader externo + a prueba de stream',
        desc: 'Suite overlay con modos seguros para OBS—sin inyección arriesgada al juego.',
      },
      {
        title: 'Sincronización de presets en la nube',
        desc: 'Perfiles MyCareer, Park y Rec en el portal—mismos sliders en cualquier PC.',
      },
      {
        title: 'Reset HWID y cambio de licencia',
        desc: 'Resets HWID y traslados vía Discord—otros proveedores bloquean un solo PC.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Tiempo de parche',
        desc: 'Tiempo medio para publicar un build tras cambios importantes de NBA 2K27.',
      },
      {
        value: '24/7',
        title: 'Soporte de operadores',
        desc: 'Ingenieros en Discord para setup, configs y cuentas.',
      },
      {
        value: '300+',
        title: 'Operadores activos',
        desc: 'Jugadores en PC con auto green, badges y utilidades en nba2k27hack.net.',
      },
    ],
  },
  setup: {
    eyebrow: 'Guía de configuración',
    titleLead: 'Del checkout a tu primer partido online en solo',
    titleHighlight: 'tres pasos simples',
    intro:
      'Empezar es fácil. Sigue el portal para descargar el loader, cargar presets Park/Rec y abrir NBA 2K27 en PC—con ayuda en Discord si algo falla.',
    ctaPrimary: 'Ver productos',
    ctaSecondary: 'FAQ de configuración',
    steps: [
      {
        step: 'Paso 1',
        title: 'Desbloquea el portal y descarga el loader',
        desc: 'Completa el checkout, abre tu panel y descarga el último loader para Windows.',
      },
      {
        step: 'Paso 2',
        title: 'Inicia y configura módulos',
        desc: 'Ejecuta el loader externo, importa presets y ajusta auto green y medidor en MyCourt.',
      },
      {
        step: 'Paso 3',
        title: 'Verifica estado y entra online',
        desc: 'Revisa el banner de estado, abre NBA 2K27 y juega con perfiles guardados en el portal.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Compatibilidad',
    title: 'Funciona en tu PC.',
    subtitle: 'Revisa el banner de estado antes de abrir NBA 2K27 tras actualizaciones.',
    items: [
      'Windows 10 y 11',
      'PC (Steam / Epic)',
      'Cliente NBA 2K27',
      'Actualizador automático',
      'Sync de config en la nube',
      'Soporte en Discord',
      'Reset HWID',
      'Loader externo',
    ],
  },
  cheats: {
    eyebrow: 'Hack Elite',
    title: 'Hack Elite NBA 2K27',
    subtitle:
      'Suite completa en PC—auto green, editor de badges, VC, Unlock All y parches prioritarios.',
    viewAll: 'Ver detalles Elite',
    explore: 'Explorar',
    items: [
      {
        badge: 'Plazas limitadas',
        tier: 'Privado',
        name: 'Elite',
        title: 'NBA 2K27 Elite',
        desc:
          'Build privado con auto green, macros, editor de badges, VC, Unlock All y soporte directo del dev.',
        features: [
          'Auto Green y medidor de tiro',
          'Suite de macros de dribbling',
          'Editor de badges y VC',
          'Presets Park / Rec en la nube',
          'Cosméticos Unlock All',
          'Cola de parches prioritaria',
        ],
        more: 42,
        href: `${productBase}elite/`,
        variant: 'limited',
      },
    ],
  },
  products: {
    eyebrow: 'Productos',
    title: 'Productos NBA 2K27',
    subtitle: 'Hack Elite más utilidades HWID spoofer y Unlock All.',
    viewAll: 'Ver todos los productos',
    get: 'Obtener',
    explore: 'Explorar',
    items: [
      {
        badge: 'Disponible',
        category: 'Utilidad del sistema',
        title: 'HWID Spoofer',
        subtitle: 'PC como nuevo',
        desc:
          'Spoofing de HWID para discos, MAC y GPU—sigue la guía del portal antes de abrir NBA 2K27.',
        features: [
          'Herramientas spoofer y limpieza',
          'Rotación de perfiles seriales',
          'Escaneo de compatibilidad',
          'Verificación post-spoof',
        ],
        more: 9,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Disponible',
        category: 'Cosmético',
        title: 'Unlock All',
        subtitle: 'Vista previa de canchas, jerseys y gear',
        desc:
          'Unlock All para canchas, jerseys City Edition y armarios MyPlayer—vista previa local sin farmear todo.',
        features: [
          'Biblioteca de canchas y jerseys',
          'Vista previa de armario MyPlayer',
          'Exportar favoritos',
          'Combina con suite Elite',
        ],
        more: 7,
        href: `${productBase}unlock-all/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    subtitle:
      'Configuración del hack, auto green, notas Elite y revisiones de parche para NBA 2K27.',
    latestSubtitle:
      'Filtra por tema u ordena para encontrar guías, funciones y notas de parche.',
    filterAll: 'Todos los artículos',
    searchLabel: 'Buscar artículos',
    searchPlaceholder: 'Buscar por título o tema…',
    sortLabel: 'Ordenar por',
    sortNewest: 'Más recientes',
    sortOldest: 'Más antiguos',
    sortShortRead: 'Lectura más corta',
    sortLongRead: 'Lectura más larga',
    emptyFilter: 'Ningún artículo coincide con este filtro.',
    viewAll: 'Ver todos los blogs',
    read: 'Leer',
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Organizado y fácil de configurar',
    subtitle: 'Cada módulo agrupado para afinar entre pruebas en MyCourt y Park online.',
    items: [
      {
        num: '01',
        label: 'Tiro',
        title: 'Auto green que respeta la latencia',
        desc: 'Overlay de medidor, ventanas de release y sliders por modo en una pestaña.',
      },
      {
        num: '02',
        label: 'Manejo',
        title: 'Macros de dribbling sin caos',
        desc: 'Cadenas de combos, ritmo de stamina y hotkeys para Park.',
      },
      {
        num: '03',
        label: 'Builds',
        title: 'Editor de badges y planificación VC',
        desc: 'Topes de badges, calculadoras y recordatorios MyCareer en un panel.',
      },
      {
        num: '04',
        label: 'Online',
        title: 'Slots de presets Park / Rec',
        desc: 'Cambia perfiles en la nube sin reajustar desde cero.',
      },
      {
        num: '05',
        label: 'Cosméticos',
        title: 'Biblioteca preview Unlock All',
        desc: 'Canchas, jerseys y gear MyPlayer para planificar contenido.',
      },
      {
        num: '06',
        label: 'Perfiles',
        title: 'Configs para cada modo',
        desc: 'Presets separados MyCareer, Park y Rec con backup en la nube.',
      },
    ],
  },
  workflow: {
    eyebrow: 'Cómo funciona',
    badge: '4 pasos fáciles',
    titleBefore: 'De comprobar estado a',
    titleHighlight: 'perfil guardado.',
    subtitle:
      'Un camino claro desde la compra hasta un perfil NBA 2K27 que reutilizas cada sesión.',
    ctaLabel: 'Plan actual',
    ctaSecondary: 'FAQ de configuración',
    items: [
      {
        num: '01',
        phase: 'Antes de comprar',
        title: 'Comprueba el estado del parche',
        desc: 'Lee el banner en nba2k27hack.net antes de comprar o abrir el juego.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Elige tu tier',
        desc: 'Elite o utilidad—el acceso que encaja con tus objetivos en MyCareer y Park.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Inicia y configura',
        desc: 'Descarga desde el portal, activa módulos y ajusta timing en MyCourt.',
      },
      {
        num: '04',
        phase: 'En el juego',
        title: 'Guarda tu perfil',
        desc: 'Cuando los ajustes estén bien, guarda presets Park y Rec en la nube.',
      },
    ],
  },
  hackMenu: {
    eyebrow: 'Menú del loader',
    titleBefore: 'Tiro, builds y herramientas Park en un solo',
    titleHighlight: 'overlay NBA 2K27',
    subtitle:
      'Toca una pestaña para previsualizar módulos Elite—timing, utilidades MyPlayer y presets Park antes de entrar online.',
    previewHint: 'La vista previa cambia al cambiar de pestaña',
    previewFooter: 'ARRASTRA SLIDERS EN EL PORTAL · VISTA PREVIA EN VIVO NBA 2K27',
    tabs: [
      { id: 'shooting', label: 'Tiro' },
      { id: 'myplayer', label: 'MyPlayer' },
      { id: 'park', label: 'Park' },
    ],
    panels: [
      {
        id: 'shooting',
        rows: [
          { label: 'Overlay medidor de tiro', value: 'On', kind: 'status' },
          { label: 'Asistencia auto green', value: 'On', kind: 'status' },
          { label: 'Offset de latencia', value: 'On', kind: 'slider', sliderValue: '12 ms' },
        ],
        note: 'Medidor, auto green y latencia—la mayoría empieza aquí en Park.',
      },
      {
        id: 'myplayer',
        rows: [
          { label: 'Editor de badges', value: 'On', kind: 'status' },
          { label: 'Vista previa de atributos', value: 'Off', kind: 'status' },
          { label: 'Utilidades VC', value: 'On', kind: 'status' },
        ],
        note: 'Ajusta badges y builds offline antes de gastar VC en MyCareer.',
      },
      {
        id: 'park',
        rows: [
          { label: 'Configs en la nube', value: 'On', kind: 'status' },
          { label: 'Preview Unlock All', value: 'On', kind: 'status' },
          { label: 'Hotkeys', value: 'On', kind: 'slider', sliderValue: 'F6 menú' },
        ],
        note: 'Guarda presets Park/Rec, hotkeys y preview de canchas localmente.',
      },
    ],
    cards: [
      {
        tabId: 'shooting',
        title: 'Tiro',
        text: 'Medidor, auto green y latencia—la mayoría empieza aquí en Park.',
      },
      {
        tabId: 'myplayer',
        title: 'MyPlayer',
        text: 'Editor de badges y VC—prueba perfiles conservadores en MyCourt primero.',
      },
      {
        tabId: 'park',
        title: 'Park',
        text: 'Configs en la nube, hotkeys y preview Unlock All sin tocar matchmaking.',
      },
    ],
    ctaPrimary: 'Plan actual',
    ctaSecondary: 'Abrir demo del menú',
  },
  fieldNotes: {
    eyebrow: 'Notas de campo',
    title: 'Hecho para cómo se juega NBA 2K27.',
    items: [
      {
        num: '01',
        title: 'Listo para día de parche',
        desc: 'Las notas llegan a Discord y al portal antes que muchos creadores—revisa antes de Park o Rec.',
      },
      {
        num: '02',
        title: 'Valores conservadores',
        desc: 'Empieza con latencia y macros seguros y sube poco a poco—not al revés.',
      },
      {
        num: '03',
        title: 'Soporte de operadores real',
        desc: '¿Atascado con loader o presets? El staff de Discord te guía en vivo.',
      },
    ],
  },
  support: {
    eyebrow: 'Soporte',
    title: 'Soporte NBA 2K27 HACK',
    subtitle: 'Cuéntanos cómo podemos ayudarte.',
    channels: [
      {
        icon: 'users',
        title: 'Chat antes del checkout',
        desc: 'Habla con el equipo sobre Elite y utilidades.',
        linkLabel: 'Iniciar checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Chat con soporte',
        desc: 'Estamos para loader, HWID y problemas de cuenta.',
        linkLabel: 'support@nba2k27hack.net',
        href: 'mailto:support@nba2k27hack.net',
      },
      {
        icon: 'navFaq',
        title: 'Leer las FAQ',
        desc: 'Compatibilidad, bans y configuración—antes de comprar.',
        linkLabel: 'Ver todas las FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Operadores en vivo',
        desc: 'Ingenieros en Discord 24/7.',
        linkLabel: 'Abrir página de contacto',
        href: '/support/',
      },
    ],
    ticketTitle: 'Incluye en tu ticket',
    ticketItems: [
      {
        title: 'Email del pedido',
        desc: 'La dirección usada en el checkout en nba2k27hack.net.',
      },
      {
        title: 'Plataforma',
        desc: 'NBA 2K27 en Windows 10 u 11—Steam o Epic.',
      },
      {
        title: 'Detalle del error',
        desc: 'Captura o mensaje exacto del loader o del juego.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Respuestas claras antes del checkout.',
    subtitle: 'Compatibilidad, bans y acceso—sin promesas vagas.',
    items: [
      {
        num: '01',
        q: '¿Dónde compruebo si el hack NBA 2K27 está online?',
        a: 'El banner de estado está en nba2k27hack.net y en Discord #status. Compruébalo tras cada actualización de NBA 2K27.',
      },
      {
        num: '02',
        q: '¿Qué pasa después de comprar?',
        a: 'Tu portal desbloquea loader, guía y biblioteca de configs tras el checkout seguro. Sigue la guía antes de abrir NBA 2K27.',
      },
      {
        num: '03',
        q: '¿Puedo recibir ban usando herramientas de terceros en NBA 2K27?',
        a: 'Sí—cualquier modificación tiene riesgo. Lee el estado actual y asume el riesgo antes de usar.',
      },
      {
        num: '04',
        q: '¿Qué plataformas son compatibles?',
        a: 'NBA 2K27 en Windows 10/11 64-bit (Steam o Epic). macOS y consolas no están soportados.',
      },
      {
        num: '05',
        q: '¿Puedo mover mi licencia a otro PC?',
        a: 'Sí—usa el reset HWID en tu portal o abre ticket en Discord. Los límites dependen de tu tier.',
      },
      {
        num: '06',
        q: '¿Dónde están listados productos y utilidades?',
        a: 'Elite, HWID Spoofer y Unlock All están en nba2k27hack.net con listas de funciones y checkout con nuestro partner.',
      },
    ],
  },
  footer: {
    tagline: 'Hack NBA 2K27 — auto green, badges y herramientas para PC. nba2k27hack.net',
    explore: 'Explorar',
    exploreLinks: [
      { href: '/', label: 'Resumen de funciones', ariaLabel: 'Funciones', scrollTarget: 'features' },
      { href: `${productBase}elite/`, label: 'Hack Elite NBA 2K27', ariaLabel: 'Hack Elite' },
      { href: productBase, label: 'Todos los productos y utilidades', ariaLabel: 'Productos' },
      { href: '/blog/', label: 'Guías de parches', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'FAQ antes de comprar', ariaLabel: 'FAQ' },
    ],
    support: 'Soporte',
    legal: 'Legal',
    privacy: 'Política de privacidad',
    terms: 'Términos y condiciones',
    about: 'Acerca de',
  },
  faqPage: {
    eyebrow: 'Centro de ayuda',
    title: 'FAQ del hack NBA 2K27',
    subtitle:
      'Tiers Elite, utilidades, auto green, HWID, seguridad y configuración en un solo lugar.',
  },
  notFound: {
    title: 'Página no encontrada',
    description: 'No encontramos esa página en nba2k27hack.net.',
    heading: 'Página no encontrada',
    body: 'Esa URL no existe o cambió. Vuelve al inicio o explora productos y tiers.',
    backHome: 'Volver al inicio',
    viewProducts: 'Ver productos',
    viewElite: 'Ver cheats Elite',
  },
  productsUtilities: {
    breadcrumb: 'Comparar utilidades',
    title: 'Comparar utilidades',
    subtitle:
      'HWID Spoofer y Unlock All resuelven problemas distintos. Elige la herramienta adecuada antes del checkout.',
    tableUtility: 'Utilidad',
    tableBestFor: 'Ideal para',
    tableLink: 'Página de producto',
    viewCategory: 'Ver',
    includes: 'Incluye:',
  },
};
