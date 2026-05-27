export const projectsSection = {
  title: 'Proyectos',
  subtitle: 'Trabajo seleccionado y productos recientes',
  items: [
    {
      id: 'bioplantas-web',
      icon: 'fa-leaf',
      title: 'Centro de Bioplantas',
      role: 'Full Stack Developer',
      period: '2024 - 2026',
      copy:
        'Sitio institucional con foco en claridad, mantenimiento y performance para contenidos en crecimiento.',
      details:
        'Rediseño completo del sitio, estructura modular para contenidos cientificos y panel de administracion ligero para el equipo interno.',
      highlights: [
        'Arquitectura de contenidos por secciones y colecciones.',
        'Optimizacion de carga y SEO tecnico.',
        'Componentes reutilizables y mantenibles.',
      ],
      technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Node.js'],
      href: '#contact',
      linkLabel: 'Ver detalles',
      liveUrl: 'https://bioplantas.example.com',
      repoUrl: 'https://github.com/example/bioplantas-web',
      screenshots: [
        { src: '/stimulus/home-img.jpg', alt: 'Home del proyecto Bioplantas' },
        { src: '/stimulus/about-img.jpg', alt: 'Seccion institucional Bioplantas' },
      ],
      containerClass: 'bg-orange',
      cardClass: 'text-white',
    },
    {
      id: 'commerce-lab',
      icon: 'fa-rocket',
      title: 'Commerce Lab',
      role: 'Frontend & UI',
      period: '2025',
      copy:
        'Sistema de ventas con catalogo dinamico, busqueda rapida y UX optimizada para conversion.',
      details:
        'Dashboard con focus en conversion, componentes de compra rapida y catalogo con filtros avanzados.',
      highlights: [
        'Experiencia de compra en menos de 3 pasos.',
        'Filtros instantaneos y ordenamiento inteligente.',
        'Componentes UI reutilizables para marketing.',
      ],
      technologies: ['React', 'Vite', 'Stripe', 'A11y'],
      href: '#contact',
      linkLabel: 'Ver detalles',
      liveUrl: 'https://commerce-lab.example.com',
      repoUrl: 'https://github.com/example/commerce-lab',
      screenshots: [
        { src: '/stimulus/experience-img.jpg', alt: 'Checkout rapido Commerce Lab' },
        { src: '/stimulus/education-img.jpg', alt: 'Catalogo Commerce Lab' },
      ],
      containerClass: 'bg-white',
      cardClass: '',
    },
    {
      id: 'data-ops',
      icon: 'fa-database',
      title: 'Data Ops Suite',
      role: 'Backend & Data',
      period: '2024',
      copy:
        'Pipeline de datos con monitoreo, alertas y reportes accionables para equipos internos.',
      details:
        'Automatizacion de ETL, validaciones de integridad y panel de estado para operacion diaria.',
      highlights: [
        'Alertas proactivas y trazabilidad de eventos.',
        'Validacion de datos y calidad automatizada.',
        'Reportes accionables para stakeholders.',
      ],
      technologies: ['PostgreSQL', 'Prisma', 'ETL', 'Observability'],
      href: '#contact',
      linkLabel: 'Ver detalles',
      liveUrl: 'https://data-ops.example.com',
      repoUrl: 'https://github.com/example/data-ops-suite',
      screenshots: [
        { src: '/stimulus/quotes-bg.jpg', alt: 'Panel principal Data Ops Suite' },
        { src: '/stimulus/contact-img.jpg', alt: 'Alertas Data Ops Suite' },
      ],
      containerClass: 'bg-dark',
      cardClass: 'text-white',
    },
    {
      id: 'studio-flow',
      icon: 'fa-paint-brush',
      title: 'Studio Flow',
      role: 'Product Design',
      period: '2025',
      copy:
        'Sistema de contenidos visuales con flujos claros, assets versionados y publishing controlado.',
      details:
        'Biblioteca de assets con versionado, permisos y aprobaciones por etapa de publicacion.',
      highlights: [
        'Workflows claros para equipos creativos.',
        'Versionado de assets y aprobaciones.',
        'Publicacion programada por campañas.',
      ],
      technologies: ['Next.js', 'Supabase', 'Auth', 'Design System'],
      href: '#contact',
      linkLabel: 'Ver detalles',
      liveUrl: 'https://studio-flow.example.com',
      repoUrl: 'https://github.com/example/studio-flow',
      screenshots: [
        { src: '/stimulus/about-img.jpg', alt: 'Workspace Studio Flow' },
        { src: '/stimulus/home-img.jpg', alt: 'Dashboard Studio Flow' },
      ],
      containerClass: 'bg-orange',
      cardClass: 'text-white',
    },
    {
      id: 'clinic-booking',
      icon: 'fa-calendar',
      title: 'Clinic Booking',
      role: 'Full Stack',
      period: '2024',
      copy:
        'Agenda digital para reservas medicas con recordatorios y experiencia mobile-first.',
      details:
        'Reservas en tiempo real, recordatorios automaticos y panel administrativo para clinicas.',
      highlights: [
        'Reservas en tiempo real con notificaciones.',
        'Panel de administracion para equipos.',
        'Mobile-first para pacientes.',
      ],
      technologies: ['Next.js', 'PostgreSQL', 'Twilio', 'Redis'],
      href: '#contact',
      linkLabel: 'Ver detalles',
      liveUrl: 'https://clinic-booking.example.com',
      repoUrl: 'https://github.com/example/clinic-booking',
      screenshots: [
        { src: '/stimulus/contact-img.jpg', alt: 'Reservas Clinic Booking' },
        { src: '/stimulus/experience-img.jpg', alt: 'Panel Clinic Booking' },
      ],
      containerClass: 'bg-white',
      cardClass: '',
    },
    {
      id: 'ops-radar',
      icon: 'fa-line-chart',
      title: 'Ops Radar',
      role: 'Analytics & QA',
      period: '2023',
      copy:
        'Monitoreo de operaciones con tableros claros y seguimiento de incidentes.',
      details:
        'Visibilidad en tiempo real para operaciones, trazabilidad de incidentes y reportes semanales.',
      highlights: [
        'KPIs en tiempo real y alertas clave.',
        'Seguimiento de incidentes con historico.',
        'Reportes automaticos por equipo.',
      ],
      technologies: ['React', 'Node.js', 'Grafana', 'Testing'],
      href: '#contact',
      linkLabel: 'Ver detalles',
      liveUrl: 'https://ops-radar.example.com',
      repoUrl: 'https://github.com/example/ops-radar',
      screenshots: [
        { src: '/stimulus/quotes-bg.jpg', alt: 'Dashboard Ops Radar' },
        { src: '/stimulus/education-img.jpg', alt: 'Reporte Ops Radar' },
      ],
      containerClass: 'bg-dark',
      cardClass: 'text-white',
    },
  ],
} as const

export type ProjectItem = (typeof projectsSection.items)[number]
