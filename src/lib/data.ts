import type { PortfolioItem, BlogPost } from '@/lib/types';

export const machinery: PortfolioItem[] = [
  {
    id: 'excavator',
    title: 'Excavadoras',
    description: 'Potentes y versátiles para cualquier tipo de excavación.',
    imageId: 'excavator',
  },
  {
    id: 'loader',
    title: 'Cargadoras',
    description: 'Ideales para mover grandes volúmenes de material.',
    imageId: 'loader',
  },
  {
    id: 'scissor-lift',
    title: 'Plataformas Tijera',
    description: 'Equipos de elevación seguros para trabajos en altura.',
    imageId: 'scissor-lift',
  },
  {
    id: 'generator',
    title: 'Generadores',
    description: 'Suministro de energía fiable para tus proyectos.',
    imageId: 'generator',
  },
];

export const accessories: PortfolioItem[] = [
  {
    id: 'hydraulic-hammer',
    title: 'Martillos Hidráulicos',
    description: 'Rompe roca y hormigón con la máxima eficiencia.',
    imageId: 'hydraulic-hammer',
  },
  {
    id: 'specialized-bucket',
    title: 'Cucharones Especializados',
    description: 'Optimiza la carga y excavación con nuestros cucharones.',
    imageId: 'specialized-bucket',
  },
];

export const services: PortfolioItem[] = [
  {
    id: 'maintenance-service',
    title: 'Mantenimiento y Soporte',
    description: 'Soporte técnico 24/7 y mantenimiento preventivo.',
    imageId: 'maintenance-service',
  },
  {
    id: 'project-planning',
    title: 'Asesoría y Planificación',
    description: 'Planificación de proyectos con nuestros expertos.',
    imageId: 'project-planning',
  },
  {
    id: 'operator-training',
    title: 'Capacitación y Seguridad',
    description: 'Formación para operadores para un trabajo seguro.',
    imageId: 'operator-training',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Cómo Elegir la Plataforma Elevadora Perfecta',
    description:
      'Una guía práctica con pros y contras para seleccionar la plataforma ideal para trabajos en altura.',
    imageId: 'blog-lift',
    author: 'Juan Pérez',
    date: '2024-07-15',
  },
  {
    id: 'post-2',
    title: 'Innovación: Las 5 Maquinarias Más Eficientes de 2024',
    description:
      'Descubre las máquinas que puedes alquilar hoy para ahorrar combustible y optimizar tu trabajo.',
    imageId: 'blog-efficient',
    author: 'Ana García',
    date: '2024-07-10',
  },
  {
    id: 'post-3',
    title: 'Guía de Mantenimiento Preventivo para tu Maquinaria',
    description:
      'Consejos técnicos de nuestros expertos para extender la vida útil de tus equipos.',
    imageId: 'blog-maintenance',
    author: 'Carlos Sánchez',
    date: '2024-07-05',
  },
];
