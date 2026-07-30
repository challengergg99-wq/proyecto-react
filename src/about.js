import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  createFireDataStructure,
  createFireSource,
  calculateFirePropagation,
  renderFire,
  fireColorsPalette,
} from './funciones_about';

function About() {
  const mainRef = useRef(null);
  const missionRef = useRef(null);
  const fireCanvasRef = useRef(null);

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

      gsap.from(missionRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: missionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => ctx.revert();
  }, []);
  useEffect(() => {
      const canvas = fireCanvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      const rect = canvas.getBoundingClientRect();
      const width = Math.max(2, Math.floor(rect.width));
      const height = Math.max(2, Math.floor(rect.height));

      canvas.width = width;
      canvas.height = height;

      const firePixelsArray = createFireDataStructure(width, height);
      let lastTime = performance.now();
      let frameCount = 1;
      let frames = 1000000;
      let animationFrameId = 0;

      function animate() {
        frames -= 1;
        const currentTime = performance.now();
        const deltaTime = currentTime - lastTime;
        lastTime = currentTime;

        calculateFirePropagation(firePixelsArray, width, height);
        renderFire(ctx, firePixelsArray, fireColorsPalette, width, height);
        // frameCount increment handled internally if needed

        if (frames > 0) {
          animationFrameId = requestAnimationFrame(animate);
        }
      }

      createFireSource(firePixelsArray, width, height);
      calculateFirePropagation(firePixelsArray, width, height);
      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }, []);

  return (
    <div id="about" className="relative min-h-screen w-full bg-black text-white flex items-center">
      {/* Fire Canvas - Esquina Superior Derecha del módulo About */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-3">
        <a
          href="#about03"
          className="hidden md:inline-block bg-white/10 px-4 py-2 text-[0.75rem] uppercase tracking-[0.35em] text-white transition hover:bg-white/15"
        >
          about03
        </a>
        <div className="relative w-20 h-10 rounded-3xl overflow-hidden border border-orange-400/25 bg-black/80">
          <canvas ref={fireCanvasRef} className="w-full h-full block" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-sm font-semibold text-white">2026</span>
          </div>
        </div>
      </div>

      <main ref={mainRef} className="max-w-5xl mx-auto px-8 md:px-16 py-24 w-full">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50 font-mono mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-white/50 inline-block" /> Sobre mí
        </span>
        <h1 className="text-4xl md:text-5xl font-black mb-6">
          Bryan Carreño <span className="text-white/40 font-normal">— Ingeniero en Informática</span>
        </h1>
        <p className="text-white/75 leading-relaxed mb-10 max-w-xl">
          Egresado de Ingeniería en Informática con fuerte orientación al orden, la planificación y el trabajo en equipo. Persona responsable, puntual y con gran capacidad para aprender procedimientos nuevos rápidamente. Mi formación técnica me permite manejar sistemas de ingreso de datos con facilidad, aportando precisión en el control de inventario y registro de información. Busco una oportunidad estable donde pueda demostrar mi compromiso y aportar valor desde el primer día.
        </p>

        <section
          ref={missionRef}
          className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-bold mb-2">Lo que busco</h2>
          <p className="text-white/80">
            Una práctica profesional donde pueda aportar, seguir aprendiendo y crecer como
            desarrollador, con foco en proyectos reales de software y/o ciberseguridad.
          </p>
        </section>
      </main>
    </div>
  );
}

export default About;