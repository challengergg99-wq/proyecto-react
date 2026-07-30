import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PROJECTS = [
  {
    name: 'proyecto',
    description: 'Proyecto web base construido con HTML.',
    stack: 'HTML',
    url: 'https://github.com/challengergg99-wq/proyecto',
  },
  {
    name: 'astro',
    description: 'Sitio/app desarrollado con el framework Astro.',
    stack: 'TypeScript',
    url: 'https://github.com/challengergg99-wq/astro',
  },
  {
    name: 'clima',
    description: 'Consumo de una API de clima para pruebas de integración.',
    stack: 'HTML',
    url: 'https://github.com/challengergg99-wq/clima',
  },
  {
    name: 'tienda',
    description: 'Aplicación de tienda / e-commerce en Python.',
    stack: 'Python',
    url: 'https://github.com/challengergg99-wq/tienda',
  },
  {
    name: 'analisis-de-ventas-de-cliente',
    description: 'Análisis exploratorio de datos de ventas con Jupyter Notebook.',
    stack: 'Jupyter Notebook',
    url: 'https://github.com/challengergg99-wq/analisis-de-ventas-de-cliente',
  },
  {
    name: 'traductor',
    description: 'Traductor de texto desarrollado en Python.',
    stack: 'Python',
    url: 'https://github.com/challengergg99-wq/traductor',
  },
];

function ProjectCard({ project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col justify-between gap-6 p-6 bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-colors"
    >
      <div>
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400/90 font-mono">
          {project.stack}
        </span>
        <h3 className="mt-2 text-xl font-black text-white leading-tight group-hover:text-orange-400 transition-colors">
          {project.name}
        </h3>
        <p className="mt-2 text-sm text-white/60 leading-relaxed">{project.description}</p>
      </div>
      <span className="text-xs font-semibold text-white/50 group-hover:text-white transition-colors inline-flex items-center gap-1">
        Ver en GitHub
        <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
      </span>
    </a>
  );
}

function Portfolio() {
  const mainRef = useRef(null);
  const missionRef = useRef(null);

  useEffect(() => {
    if (!mainRef.current || !missionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(mainRef.current.children, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: mainRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from(missionRef.current.children, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: missionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="portfolio" className="min-h-screen w-full bg-black text-white flex items-center">
      <main ref={mainRef} className="max-w-5xl mx-auto px-8 md:px-16 py-24 w-full">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50 font-mono mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-white/50 inline-block" /> Proyectos
        </span>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Lo que <span className="text-white/40 font-normal">he construido</span>
        </h1>
        <p className="text-white/70 leading-relaxed mb-10 max-w-xl">
          Una selección de proyectos personales mientras aprendo y practico distintas tecnologías.
        </p>

        <div ref={missionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Portfolio;