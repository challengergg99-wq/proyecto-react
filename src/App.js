import { useEffect, useRef } from 'react';
import './App.css';
import './index.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import About from './about.js';
import Portfolio from './portfolio.js';
import StudiesAndCertificates from './faq.js';
import Contact from './contact.js';

gsap.registerPlugin(ScrollTrigger);

function Nav() {
  return (
    <header className="absolute top-0 left-0 z-30 flex items-center justify-between w-full max-w-[1440px] mx-auto px-8 md:px-16 py-8">
      <a href="#home" className="flex items-center gap-2 cursor-pointer group">
        <div className="flex flex-col gap-[2px]">
          <span className="bg-white w-2.5 h-2.5 block"></span>
          <span className="bg-white/60 w-1.5 h-1.5 block ml-1"></span>
        </div>
        <span className="font-extrabold tracking-wide text-lg uppercase">Bryan Carreño</span>
      </a>

      <nav className="hidden md:flex absolute left-1/2 transform -translate-x-2/2 items-center gap-16 text-[13px] font-semibold text-white/85">
        <a href="#home" className="flex items-baseline gap-0.5 hover:text-white transition-colors duration-300">
          Home<sup className="text-[9px] text-white/40 font-bold">01</sup>
        </a>
        <a href="#about" className="flex items-baseline gap-0.5 hover:text-white transition-colors duration-300">
          Sobre mí<sup className="text-[9px] text-white/40 font-bold">02</sup>
        </a>
        <a href="#portfolio" className="flex items-baseline gap-0.5 hover:text-white transition-colors duration-300">
          Proyectos<sup className="text-[9px] text-white/40 font-bold">03</sup>
        </a>
        <a href="#estudios" className="flex items-baseline gap-0.5 hover:text-white transition-colors duration-300">
          Estudios<sup className="text-[9px] text-white/40 font-bold">04</sup>
        </a>
        <a href="#contact" className="flex items-baseline gap-0.5 hover:text-white transition-colors duration-300">
          Contacto<sup className="text-[9px] text-white/40 font-bold">05</sup>
        </a>
      </nav>

      <a
        href="#about"
        className="fixed top-4 right-4 z-50 flex items-center gap-3 bg-black/50 backdrop-blur-md border border-white/10 p-3 pr-6 text-left max-w-[260px] cursor-pointer hover:bg-white/5 hover:border-white/20 transition-all duration-300"
      >
        <img
          className="w-12 h-12 object-cover grayscale contrast-125 saturate-50 rounded-full"
          src="https://avatars.githubusercontent.com/u/227673845?v=4"
          alt="Bryan Carreño"
        />
        <div className="relative">
          <div className="flex items-left gap-2">
            <span className="text-sm font-bold text-white/95">Conóceme</span>
            <span className="text-xs text-white/60">⤢</span>
          </div>
          <p className="text-sm font-medium text-white/70 mt-0.5">Bryan Carreño</p>
          <p className="text-[10px] text-white/40 uppercase font-mono mt-0.5">Ing. Informática</p>
        </div>
      </a>
    </header>
  );
}

function HomeSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <main ref={heroRef} className="relative z-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center flex-1 w-full px-8 md:px-16">
      <div className="md:col-span-4 flex flex-col items-start space-y-6">
        <p className="text-sm md:text-[15px] text-white/80 leading-relaxed font-light max-w-[270px] tracking-normal">
          Ingeniero en Informática.
        </p>

        <a href="#portfolio" className="group relative inline-flex items-center gap-10 pb-2 text-[13px] font-bold text-white hover:text-orange-400 transition-colors duration-300">
          <span>Ver proyectos</span>
          <span className="text-xs transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30 group-hover:bg-orange-500/50 transition-colors" />
          <div className="absolute bottom-0 left-0 w-1/4 h-[1px] bg-white group-hover:bg-orange-500 transition-all duration-300 group-hover:w-full" />
        </a>
      </div>

      <div className="hidden md:block md:col-span-4"></div>

      <div className="md:col-span-4 flex flex-col md:items-start text-left space-y-2 self-end md:mb-12">
        <span className="text-[11px] font-semibold text-white/40 font-mono">01 / Enfoque</span>
        <h3 className="text-lg font-semibold text-white">Ciberseguridad</h3>
        <h3 className="text-lg font-semibold text-white/40 hover:text-white/80 transition-colors cursor-pointer">Desarrollo de software</h3>
      </div>
    </main>
  );
}

function App() {
  return (
    <div className="relative bg-black text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden overflow-y-visible">
      {/* ---------- GRANO / TEXTURA GLOBAL ---------- */}
      <div
        className="fixed inset-0 z-[100] pointer-events-none grain-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='1200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.4' numOctaves='5' stitchTiles='stitch' seed='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='1' /></svg>\")",
          opacity: 0.16,
          mixBlendMode: 'screen',
          transform: 'translateZ(0)',
          animation: 'grainShift 12s linear infinite',
        }}
      />

      {/* ---------- HOME ---------- */}
      <section id="home" className="relative h-screen w-full overflow-hidden flex flex-col">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 motion-safe:animate-[slowzoom_20s_ease-in-out_infinite]"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1714128470010-553f4e5a1e1a?auto=format&fit=crop&q=80&w=1920')",
            filter: 'grayscale(0.6) contrast(1.1) brightness(0.75)',
            mixBlendMode: 'luminosity',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(45,70,75,0.9) 0%, rgba(25,45,50,0.85) 45%, rgba(5,12,14,0.95) 100%)',
            mixBlendMode: 'color',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 55%, rgba(150,190,190,0.35), transparent 40%)',
            mixBlendMode: 'soft-light',
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/60 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30 pointer-events-none z-10" />

        {/* Elementos decorativos (+) */}
        <div className="absolute top-[22%] left-[22%] z-20 text-white/40 text-5xl font-light pointer-events-none select-none">+</div>
        <div className="absolute top-[43%] right-[16%] z-20 text-white/40 text-5xl font-light pointer-events-none select-none">+</div>
        <div className="absolute bottom-[42%] left-[44%] z-20 text-white/40 text-4xl font-light pointer-events-none select-none">+</div>
        <div className="absolute bottom-[50%] left-[64%] z-20 text-white/40 text-4xl font-light pointer-events-none select-none">+</div>

        <Nav />

        <div className="relative z-20 flex flex-col justify-between h-full w-full max-w-[1440px] mx-auto py-8 md:py-12 pt-28">
          <HomeSection />

          <footer className="w-full flex flex-col justify-end relative pt-4 px-8 md:px-16">
            <div className="flex justify-between items-center text-[11px] text-white/40 mb-2 z-10 font-mono">
              <span>© 2025 Bryan Carreño</span>
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-12 bg-white/20"></span>
                <span>Ing. Informática</span>
              </div>
            </div>

            {/* <div className="w-full select-none overflow-hidden">
              <h2 className="text-[15vw] font-black tracking-tighter leading-[0.8] flex items-baseline justify-between select-none font-sans">
                <span className="bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">BRYAN</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-cyan-100 to-cyan-300 pr-4 select-none">C.</span>
              </h2>
            </div> */}
          </footer>
        </div>
      </section>

      {/* ---------- SOBRE MÍ ---------- */}
      <About />

      {/* ---------- PROYECTOS ---------- */}
      <Portfolio />

      {/* ---------- ESTUDIOS Y CERTIFICADOS ---------- */}
      <StudiesAndCertificates />

      {/* ---------- CONTACTO ---------- */}
      <Contact />

      <style>{`
        @keyframes slowzoom {
          0%, 100% { transform: scale(1.05); }
          50% { transform: scale(1.1); }
        }
        @keyframes grainShift {
          0% { transform: translate3d(0,0,0); }
          50% { transform: translate3d(6px,4px,0); }
          100% { transform: translate3d(0,0,0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .grain-overlay { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

export default App;