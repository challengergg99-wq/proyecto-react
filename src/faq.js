import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';


const STUDIES = [
  {
    period: '2021 — 2025',
    title: 'Ingeniería en Informática',
    place: 'INACAP, sede La Granja',
    detail: 'Egresado.',
  },
  {
    period: '2017 — 2020',
    title: 'Educación media',
    place: 'Liceo Paula Jaraquemada',
  },
  {
    period: '2005 — 2017',
    title: 'Educación básica',
    place: 'Chilean Eagle College',
  },
];

const CERTIFICATES = [
  {
    fileName: 'Cybersecurity_Defense_Analyst_Career_Path_certificate_bryan-carreno-inacapmail-cl_fe47c5b4-ec25-4683-a8da-2906dbd069ea.pdf',
    title: 'Career Path: Analista de Defensa de la Ciberseguridad',
    issuer: 'Cisco / Splunk',
    year: '2026',
    description: 'Certificado oficial por el programa de Cisco en colaboración con Splunk para analistas de defensa de ciberseguridad.',
    skills: ['Seguridad SOC', 'Threat Hunting', 'Análisis de amenazas', 'Monitoreo SIEM'],
  },
  {
    fileName: 'Cyber_Threat_Management_certificate_bryan-carreno-inacapmail-cl_1d981301-4860-45e6-9818-5e54787c787f.pdf',
    title: 'Cyber Threat Management',
    issuer: 'Cisco',
    year: '2026',
    description: 'Certificación en gestión de amenazas cibernéticas para detección, respuesta e investigación.',
    skills: ['Detección de amenazas', 'Investigación forense', 'Gestión de incidentes'],
  },
  {
    fileName: 'Introduction_to_IoT_certificate_bryan-carreno-inacapmail-cl_f8a008c8-ba38-45ac-ba84-f28b2697c80f.pdf',
    title: 'Introduction to IoT',
    issuer: 'Cisco',
    year: '2026',
    description: 'Certificado de introducción al Internet de las Cosas, con enfoque en tecnologías y seguridad IoT.',
    skills: ['IoT', 'Conectividad', 'Seguridad de dispositivos'],
  },
  {
    fileName: '_certificate_bryan-carreno-inacapmail-cl_781ddaf2-b5c1-4b2f-9eb2-80cc27d7ad05.pdf',
    title: 'Certificado Cisco / Splunk Adicional',
    issuer: 'Cisco / Splunk',
    year: '2026',
    description: 'Documento adicional de certificación profesional emitido por Cisco y Splunk.',
    skills: ['Ciberseguridad', 'Plataformas SOC'],
  },
  {
    fileName: 'app-basicas.pdf',
    title: 'Aplicaciones Básicas',
    issuer: 'Formación técnica',
    year: '2025',
    description: 'Certificado en manejo de aplicaciones básicas para entornos de trabajo y productividad.',
    skills: ['Office', 'Productividad', 'Herramientas digitales'],
  },
  {
    fileName: 'base de datos.pdf',
    title: 'Base de Datos',
    issuer: 'Formación técnica',
    year: '2025',
    description: 'Certificado de fundamentos de bases de datos y administración de información estructurada.',
    skills: ['SQL', 'Modelado de datos', 'Administración de bases de datos'],
  },
  {
    fileName: 'cloud.pdf',
    title: 'Cloud Computing',
    issuer: 'Formación técnica',
    year: '2025',
    description: 'Certificación en conceptos y servicios de computación en la nube.',
    skills: ['Cloud', 'Infraestructura', 'Servicios en la nube'],
  },
  {
    fileName: 'diseño-agil.pdf',
    title: 'Diseño Ágil',
    issuer: 'Formación técnica',
    year: '2025',
    description: 'Certificado en diseño ágil y metodologías de trabajo iterativo.',
    skills: ['Agilidad', 'UX', 'Diseño colaborativo'],
  },
  {
    fileName: 'full-stack.pdf',
    title: 'Full Stack',
    issuer: 'Formación técnica',
    year: '2025',
    description: 'Certificado en desarrollo full stack con énfasis en front-end y back-end.',
    skills: ['JavaScript', 'Front-end', 'Back-end'],
  },
  {
    fileName: 'innovacion.pdf',
    title: 'Innovación',
    issuer: 'Formación técnica',
    year: '2025',
    description: 'Certificado en innovación aplicada a proyectos y soluciones digitales.',
    skills: ['Innovación', 'Creatividad', 'Soluciones digitales'],
  },
  {
    fileName: 'soporte.pdf',
    title: 'Soporte Técnico',
    issuer: 'Formación técnica',
    year: '2025',
    description: 'Certificación en soporte técnico y atención de usuarios.',
    skills: ['Soporte', 'Resolución de problemas', 'Atención al cliente'],
  },
  {
    fileName: '508_challenger.gg99@gmail.com.pdf',
    title: 'Accesibilidad 508',
    issuer: 'Formación técnica',
    year: '2025',
    description: 'Certificado en accesibilidad digital cumpliendo la norma 508.',
    skills: ['Accesibilidad', 'Norma 508', 'Diseño inclusivo'],
  },
  {
    fileName: "Data_Analytics_Essentials_certificate.pdf",
    title: "Fundamentos de Análisis de Datos",
    issuer:"Cisco",
    year:"2026",
    description:"Certificado de fundamentos de analista de datos",
    skills:['Dashboard', 'Tableau', 'Data Visualization', 'Data Storytelling', 'SQL', 'Excel', 'Data Analysis']
  },
  {
    fileName: "Data_Science_Essentials_with_Python.pdf",
    title: "Data Science Essentials with Python",
    issuer:"Cisco",
    year:"2026",
    description:"Certificado de Data Science Essentials with Python",
    skills:['IA y ciencia de datos']
  },
  {
    fileName: 'excel avanzado.pdf',
    title: 'Excel Avanzado',
    issuer: 'Microsoft Excel',
    year: '2025',
    description: 'Certificado en uso avanzado de Excel para análisis, fórmulas, tablas dinámicas y gestión eficiente de datos.',
    skills: ['Excel', 'Fórmulas', 'Tablas dinámicas', 'Análisis de datos'],
  },
  {
    fileName: 'introduccion excel.pdf',
    title: 'Introducción a Excel',
    issuer: 'Microsoft Excel',
    year: '2025',
    description: 'Certificado de introducción a Excel con enfoque en funciones básicas, organización de información y productividad.',
    skills: ['Excel', 'Funciones básicas', 'Organización', 'Productividad'],
  },
  {
    fileName: 'data analisists datacamp.pdf',
    title: 'Data Analyst',
    issuer: 'DataCamp',
    year: '2025',
    description: 'Certificado de análisis de datos con énfasis en limpieza, manipulación, visualización e interpretación de información.',
    skills: ['Data Analysis', 'SQL', 'Python', 'Visualización de datos'],
  },
  {
    title: 'Python',
    issuer: 'freeCodeCamp',
    year: '2026',
    url: 'https://www.freecodecamp.org/certification/fcccc0a28fb-01da-4991-9e5b-3aa3005e6ff7/python-v9',
    description: 'Certificación de freeCodeCamp en Python, cubriendo estructuras de datos, programación y proyectos prácticos.',
    skills: ['Python', 'Automatización', 'Analítica', 'Programación'],
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    year: '2026',
    url: 'https://www.freecodecamp.org/certification/fcccc0a28fb-01da-4991-9e5b-3aa3005e6ff7/responsive-web-design-v9',
    description: 'Certificado de freeCodeCamp en Responsive Web Design, con énfasis en HTML, CSS y diseño adaptable.',
    skills: ['HTML', 'CSS', 'Responsive', 'Accesibilidad'],
  },
];

function getCertificateUrl(fileName) {
  return fileName ? `/certificados/${encodeURIComponent(fileName)}` : undefined;
}

function getCertificateLink(cert) {
  return cert.url ? cert.url : getCertificateUrl(cert.fileName);
}

function ArrowButton({ direction, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'prev' ? 'Anterior certificado' : 'Siguiente certificado'}
      className="
        group flex items-center justify-center w-9 h-9
        border border-white/15 bg-white/5
        transition-all duration-200
        hover:border-orange-400/60 hover:bg-orange-400/10
        disabled:opacity-25 disabled:cursor-not-allowed
        disabled:hover:border-white/15 disabled:hover:bg-white/5
      "
    >
      {direction === 'prev' ? (
        // Left chevron
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="text-white/70 group-hover:text-orange-400 transition-colors">
          <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) : (
        // Right chevron
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="text-white/70 group-hover:text-orange-400 transition-colors">
          <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  );
}
 
// ── Certificate Carousel ──────────────────────────────────────────────────────
function CertificateCarousel({ certificates }) {
  const [current, setCurrent] = useState(0);
  const [detailOpen, setDetailOpen] = useState(false);
  const cardRef = useRef(null);
  const isAnimating = useRef(false);
 
  const navigate = (nextIndex, direction) => {
    if (isAnimating.current || nextIndex === current) return;
    isAnimating.current = true;
    setDetailOpen(false);
 
    const card = cardRef.current;
    // slide out to the left when going next, to the right when going prev
    const exitX = direction === 'next' ? -48 : 48;
    const enterX = direction === 'next' ? 48 : -48;
 
    gsap.to(card, {
      opacity: 0,
      x: exitX,
      duration: 0.22,
      ease: 'power2.in',
      onComplete: () => {
        setCurrent(nextIndex);
        // After React re-renders the new content, animate in
        gsap.fromTo(
          card,
          { opacity: 0, x: enterX },
          {
            opacity: 1,
            x: 0,
            duration: 0.28,
            ease: 'power2.out',
            onComplete: () => {
              isAnimating.current = false;
            },
          }
        );
      },
    });
  };
 
  const prev = () =>
    navigate((current - 1 + certificates.length) % certificates.length, 'prev');
 
  const next = () =>
    navigate((current + 1) % certificates.length, 'next');
 
  // Dot click — determine direction by position
  const goToDot = (i) => navigate(i, i >= current ? 'next' : 'prev');
 
  const cert = certificates[current];
  const link = getCertificateLink(cert);
 
  return (
    <div className="flex flex-col gap-4">
 
      {/* ── Header row: label + counter + arrows ── */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white/50">
          Certificados
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-white/30 tabular-nums mr-1">
            {String(current + 1).padStart(2, '0')} / {String(certificates.length).padStart(2, '0')}
          </span>
          <ArrowButton direction="prev" onClick={prev} />
          <ArrowButton direction="next" onClick={next} />
        </div>
      </div>
 
      {/* ── Card ── */}
      <div
        ref={cardRef}
        className="bg-white/[0.03] border border-white/10 overflow-hidden"
        style={{ willChange: 'transform, opacity' }}
      >
        {/* Top accent bar */}
        <div className="h-px w-full bg-gradient-to-r from-orange-400/60 via-orange-400/20 to-transparent" />
 
        <div className="px-6 py-5">
          {/* Issuer + year */}
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400/90 font-mono">
            {cert.year} · {cert.issuer}
          </span>
 
          {/* Title */}
          <h3 className="mt-2 text-base md:text-lg font-bold text-white leading-snug">
            {cert.title}
          </h3>
 
          {/* Actions */}
          <div className="flex items-center gap-2 mt-4">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider
                  border border-white/15 bg-white/5 px-4 py-2
                  transition-all hover:border-orange-400/50 hover:bg-orange-400/10 hover:text-orange-400
                  text-white/80
                "
              >
                {/* External link icon */}
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 10L10 1M10 1H4M10 1V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Ver certificado
              </a>
            )}
            <button
              type="button"
              onClick={() => setDetailOpen(!detailOpen)}
              className="
                inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider
                border border-white/10 bg-transparent px-4 py-2
                transition-all hover:border-white/25 hover:bg-white/5
                text-white/50 hover:text-white/80
              "
            >
              {detailOpen ? 'Ocultar' : 'Detalles'}
            </button>
          </div>
 
          {/* Expandable details */}
          {detailOpen && (
            <div className="mt-5 pt-5 border-t border-white/8">
              <p className="text-sm text-white/65 leading-relaxed mb-4">
                {cert.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] font-mono uppercase tracking-wide text-white/55 border border-white/12 px-2 py-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
 
      {/* ── Dot indicators ── */}
      <div className="flex justify-center items-center gap-1.5 pt-1">
        {certificates.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir al certificado ${i + 1}`}
            onClick={() => goToDot(i)}
            className={`
              transition-all duration-200 rounded-full
              ${i === current
                ? 'w-4 h-1.5 bg-orange-400'
                : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}
 
// ── Timeline Item ─────────────────────────────────────────────────────────────
function TimelineItem({ item }) {
  return (
    <div className="flex gap-6 py-5 border-b border-white/10">
      <span className="w-24 shrink-0 text-xs font-mono uppercase tracking-widest text-white/40 pt-1">
        {item.period}
      </span>
      <div>
        <h3 className="text-lg font-bold text-white">{item.title}</h3>
        <p className="text-sm text-white/60 mt-1">{item.place}</p>
        {item.detail && <p className="text-sm text-white/50 mt-1">{item.detail}</p>}
      </div>
    </div>
  );
}
 
// ── Main Section ──────────────────────────────────────────────────────────────
function StudiesAndCertificates() {
  const mainRef = useRef(null);
 
  useEffect(() => {
    if (!mainRef.current) return;
 
    const ctx = gsap.context(() => {
      gsap.from(mainRef.current.children, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: mainRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });
    });
 
    return () => ctx.revert();
  }, []);
 
  return (
    <div id="estudios" className="w-full bg-black text-white">
      <main ref={mainRef} className="max-w-5xl mx-auto px-8 md:px-16 py-24 w-full">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50 font-mono mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-white/50 inline-block" />
          Estudios y certificados
        </span>
        <h1 className="text-4xl md:text-5xl font-black mb-12">
          Mi formación{' '}
          <span className="text-white/40 font-normal">y credenciales</span>
        </h1>
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Studies */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-2">
              Estudios
            </h2>
            <div>
              {STUDIES.map((item) => (
                <TimelineItem key={item.title} item={item} />
              ))}
            </div>
          </div>
 
          {/* Certificates carousel */}
          <div>
            <CertificateCarousel certificates={CERTIFICATES} />
          </div>
        </div>
      </main>
    </div>
  );
}
 
export default StudiesAndCertificates;