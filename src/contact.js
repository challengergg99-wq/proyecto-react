import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Contact() {
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
    <div id="contact" className="w-full bg-black text-white">
      <main ref={mainRef} className="max-w-5xl mx-auto px-8 md:px-16 py-24 w-full">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50 font-mono mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-white/50 inline-block" /> Contacto
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <a
            href="mailto:bryanzxc2001@gmail.com"
            className="group flex flex-col gap-2 p-6 bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-colors"
          >
            <span className="text-xs uppercase tracking-widest text-white/40 font-mono">Email</span>
            <span className="text-sm font-semibold text-white break-all group-hover:text-orange-400 transition-colors">
              bryanzxc2001@gmail.com
            </span>
          </a>

          <a
            href="https://github.com/challengergg99-wq"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col gap-2 p-6 bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-colors"
          >
            <span className="text-xs uppercase tracking-widest text-white/40 font-mono">GitHub</span>
            <span className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors">
              @challengergg99-wq
            </span>
          </a>

          {/* TODO: reemplazar por tu URL real de LinkedIn */}
          <a
            href="https://www.linkedin.com/in/bryan-carre%C3%B1o-hidalgo-5a91123a3/"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col gap-2 p-6 bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-colors"
          >
            <span className="text-xs uppercase tracking-widest text-white/40 font-mono">LinkedIn</span>
            <span className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors">
              Conectemos
            </span>
          </a>
        </div>

        {/* TODO: subir tu CV como /public/cv-bryan-carreno.pdf */}
        <a
          href="/cv-bryan-carreno.pdf"
          download
          className="group relative inline-flex items-center gap-10 pb-2 text-[13px] font-bold text-white hover:text-orange-400 transition-colors duration-300"
        >
          <span>Descargar CV</span>
          <span className="text-xs transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↓</span>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30 group-hover:bg-orange-500/50 transition-colors" />
          <div className="absolute bottom-0 left-0 w-1/4 h-[1px] bg-white group-hover:bg-orange-500 transition-all duration-300 group-hover:w-full" />
        </a>
      </main>

      <footer className="bg-neutral-800 text-white">
        <div className="max-w-6xl mx-auto px-8 md:px-14 py-14 flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-xs space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-[2px]">
                <span className="bg-white w-2.5 h-2.5 block"></span>
                <span className="bg-white/60 w-1.5 h-1.5 block ml-1"></span>
              </div>
              <span className="font-extrabold tracking-wide text-lg uppercase">Bryan Carreño</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Ingeniero en Informática en búsqueda de mi primera práctica profesional.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/challengergg99-wq"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 flex items-center justify-center border border-white/15 hover:bg-white/10 transition-colors"
              >
                ⌥
              </a>
              <a
                href="https://www.linkedin.com/in/bryan-carre%C3%B1o-hidalgo-5a91123a3/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 flex items-center justify-center border border-white/15 hover:bg-white/10 transition-colors"
              >
                in
              </a>
              <a
                href="mailto:bryanzxc2001@gmail.com"
                aria-label="Email"
                className="w-8 h-8 flex items-center justify-center border border-white/15 hover:bg-white/10 transition-colors"
              >
                @
              </a>
            </div>

            <div className="flex items-center gap-2 pt-4 text-sm text-white/60">
              <span>Creado por</span>
              <img
                src="https://avatars.githubusercontent.com/u/227673845?v=4"
                alt="Bryan Carreño"
                className="w-6 h-6 rounded-full object-cover grayscale"
              />
              <span className="font-bold text-white">Bryan Carreño</span>
              <span>·</span>
              <span className="font-bold text-white">Ing. Informática</span>
              <span>·</span>
              <span className="font-bold text-white">Domicilio: El molino 1638</span>
              <span>2026</span>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-bold text-white">Navegación</p>
            <nav className="flex flex-col gap-2 text-sm text-white/60">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">Sobre mí</a>
              <a href="#portfolio" className="hover:text-white transition-colors">Proyectos</a>
              <a href="#estudios" className="hover:text-white transition-colors">Estudios</a>
              <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;