import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

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

function CertificateCard({ cert }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white/[0.03] border border-white/10">
      <div className="w-full px-6 py-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between hover:bg-white/[0.03] transition-colors">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400/90 font-mono">
            {cert.year} · {cert.issuer}
          </span>
          <h3 className="mt-1 text-base md:text-lg font-bold text-white">{cert.title}</h3>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={getCertificateLink(cert)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Ver certificado
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {open ? 'Ocultar detalles' : 'Ver detalles'}
          </button>
        </div>
      </div>

      {open && (
        <div className="px-6 pb-6">
          <p className="text-sm text-white/70 leading-relaxed mb-4">{cert.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="text-[11px] font-mono uppercase tracking-wide text-white/60 border border-white/15 px-2.5 py-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

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
          <span className="w-1.5 h-1.5 rounded-full bg-white/50 inline-block" /> Estudios y certificados
        </span>
        <h1 className="text-4xl md:text-5xl font-black mb-12">
          Mi formación <span className="text-white/40 font-normal">y credenciales</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-2">Estudios</h2>
            <div>
              {STUDIES.map((item) => (
                <TimelineItem key={item.title} item={item} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-2">Certificados</h2>
            <div className="space-y-3">
              {CERTIFICATES.map((cert) => (
                <CertificateCard key={cert.title} cert={cert} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default StudiesAndCertificates;