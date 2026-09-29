import { useState } from "react";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* ==================== NAVBAR ==================== */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold tracking-[0.2em]"
          >
            SABBIR<span className="text-amber-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#work"
              className="text-sm text-white/70 transition hover:text-white"
            >
              Work
            </a>

            <a
              href="#services"
              className="text-sm text-white/70 transition hover:text-white"
            >
              Services
            </a>

            <a
              href="#about"
              className="text-sm text-white/70 transition hover:text-white"
            >
              About
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm transition hover:border-amber-400 hover:bg-amber-400 hover:text-black"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
            <div className="flex flex-col gap-5">
              <a
                href="#work"
                onClick={() => setMenuOpen(false)}
              >
                Work
              </a>

              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ==================== HERO ==================== */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2000&auto=format&fit=crop')",
          }}
        />

        {/* Dark overlays */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-amber-400">
              Filmmaker
            </p>

            <h1 className="text-6xl font-bold leading-[0.9] tracking-tight sm:text-7xl lg:text-9xl">
              SABBIR
              <br />
              CHOWDHURY
              <span className="text-amber-400">.</span>
            </h1>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
              <p className="max-w-md text-base leading-7 text-white/70">
                Creating powerful visual stories through cinematography,
                editing, music videos, documentaries and commercials.
              </p>

              <a
                href="#work"
                className="group flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-amber-400"
              >
                Explore Work

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/50 lg:flex">
          <span>Scroll</span>

          <span className="h-px w-12 bg-white/30" />
        </div>
      </section>

{/* ==================== PROJECTS ==================== */}
<Projects />

{/* ==================== SERVICES ==================== */}
<Services />

{/* ==================== ABOUT ==================== */}
<About />

    </div>
  );
}

export default App;