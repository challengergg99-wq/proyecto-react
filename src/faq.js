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
    place: '',
  },
];

const CERTIFICATES = [
  {
    year: '2026',
    title: 'Trayectoria profesional del Analista de Defensa de la Ciberseguridad',
    issuer: 'Cisco, en colaboración con Splunk',
    description:
      'Cisco, en colaboración con Splunk, verifica la finalización exitosa de la carrera de Analista de Defensa de la Ciberseguridad.',
    skills: [
      'Análisis de Big Data',
      'Cyber Kill Chain',
      'Riesgo cibernético',
      'Ciberseguridad',
      'Normas de ciberseguridad',
      'Monitoreo SOC',
      'Splunk',
      'Detección de amenazas',
      'Threat hunting',
    ],
  },
];

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
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center justify-between gap-4 px-6 py-5 hover:bg-white/[0.03] transition-colors"
      >
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400/90 font-mono">
            {cert.year} · {cert.issuer}
          </span>
          <h3 className="mt-1 text-base md:text-lg font-bold text-white">{cert.title}</h3>
        </div>
        <span className="text-white/60 text-lg leading-none shrink-0">{open ? '−' : '+'}</span>
      </button>

      {open && (
        <div className="px-6 pb-6">
          <p className="text-sm text-white/70 leading-relaxed mb-4">{cert.description}</p>
          <div className="flex flex-wrap gap-2">
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