export const fullstackSkillCategories = [
  {
    id: 'frontend',
    icon: 'fa-code',
    title: 'Frontend Web',
    copy: 'Interfaces modernas, accesibles y responsive para productos web.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'],
    containerClass: 'bg-yellow text-white',
    cardClass: 'text-white',
  },
  {
    id: 'backend',
    icon: 'fa-server',
    title: 'Backend & APIs',
    copy: 'Servicios robustos, escalables y bien documentados.',
    technologies: ['Node.js', 'REST/JSON', 'SQL', 'Auth/JWT', 'Postman'],
    containerClass: 'text-white',
    cardClass: 'text-white',
  },
  {
    id: 'data',
    icon: 'fa-database',
    title: 'Data & Calidad',
    copy: 'Modelado, integridad de datos y pruebas automatizadas.',
    technologies: ['PostgreSQL', 'Pruebas E2E', 'Testing Library', 'Prisma', 'Monitoring'],
    containerClass: 'bg-dark text-white',
    cardClass: 'text-white',
  },
  {
    id: 'efficiency',
    icon: 'fa-bolt',
    title: 'Eficiencia & Performance',
    copy: 'Flujos rapidos, optimizacion y herramientas que aceleran el trabajo.',
    technologies: ['Vite', 'Linting/Format', 'Caching', 'Code Splitting', 'Bundle Analysis'],
    containerClass: 'bg-white',
    cardClass: '',
  },
] as const

export const serviceSection = {
  categories: fullstackSkillCategories,
} as const
