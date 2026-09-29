function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 bg-[#080808] px-6 py-28 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        {/* ==================== ABOUT HEADER ==================== */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-amber-400">
              About Sabbir
            </p>

            <h2 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
              Behind
              <br />
              <span className="text-white/30">the camera.</span>
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-white/50">
            Sabbir Chowdhury is a professional filmmaker, cinematographer and
            video editor focused on creating visual stories that connect with
            audiences. His work spans music videos, documentaries, commercial
            films and aerial cinematography.
          </p>
        </div>

        {/* ==================== IMAGE + STORY ==================== */}
        <div className="mt-20 grid gap-8 lg:grid-cols-12">
          {/* Image */}
          <div className="group relative overflow-hidden lg:col-span-7">
            <div className="aspect-[4/5] bg-zinc-900 sm:aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1600&auto=format&fit=crop"
                alt="Filmmaker"
                className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>

            <div className="absolute bottom-6 left-6">
              <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                Sabbir Chowdhury
              </p>
            </div>
          </div>

          {/* Story */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="text-2xl font-light leading-relaxed text-white/70 sm:text-3xl">
                "Every frame has a story. My job is to make people feel it."
              </p>

              <div className="mt-10 space-y-6 text-sm leading-7 text-white/40">
                <p>
                  From concept development and camera work to editing and
                  final delivery, Sabbir approaches every production as a
                  complete visual experience.
                </p>

                <p>
                  His work combines cinematic composition, movement, lighting
                  and sound to create films that are both visually striking and
                  emotionally engaging.
                </p>
              </div>
            </div>

            {/* Signature */}
            <div className="mt-16 border-t border-white/10 pt-6">
              <p className="font-serif text-2xl italic text-white/70">
                Sabbir Chowdhury
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/30">
                Filmmaker · Cinematographer · Editor
              </p>
            </div>
          </div>
        </div>

        {/* ==================== STATS ==================== */}
        <div className="mt-24 grid grid-cols-2 border-y border-white/10 sm:grid-cols-4">
          <div className="border-r border-white/10 px-5 py-8 sm:px-8">
            <p className="text-4xl font-bold sm:text-5xl">50+</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/30">
              Projects
            </p>
          </div>

          <div className="px-5 py-8 sm:border-r sm:border-white/10 sm:px-8">
            <p className="text-4xl font-bold sm:text-5xl">4+</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/30">
              Years Experience
            </p>
          </div>

          <div className="border-r border-white/10 px-5 py-8 sm:px-8">
            <p className="text-4xl font-bold sm:text-5xl">6</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/30">
              Services
            </p>
          </div>

          <div className="px-5 py-8 sm:px-8">
            <p className="text-4xl font-bold sm:text-5xl">01</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/30">
              Production House
            </p>
          </div>
        </div>

        {/* ==================== ABIR RECORDS ==================== */}
        <div className="mt-32 overflow-hidden border border-white/10 bg-white/[0.02]">
          <div className="grid lg:grid-cols-2">
            {/* Abir Records Image */}
            <div className="relative min-h-[400px] overflow-hidden bg-zinc-900 lg:min-h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1800&auto=format&fit=crop"
                alt="Music production studio"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-8 left-8">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Production House
                </p>

                <p className="mt-2 text-3xl font-bold">
                  ABIR<span className="text-amber-400">.</span> RECORDS
                </p>
              </div>
            </div>

            {/* Abir Records Content */}
            <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-16">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
                  CEO & Founder
                </p>

                <h3 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                  Abir Records
                </h3>

                <p className="mt-8 text-base leading-8 text-white/50">
                  Abir Records is a creative production platform led by
                  Sabbir Chowdhury, bringing together music, visual
                  storytelling and film production under one creative
                  direction.
                </p>

                <p className="mt-5 text-base leading-8 text-white/50">
                  Through the production house, Sabbir works with artists,
                  brands and creative teams to develop and produce original
                  visual content.
                </p>
              </div>

              <div className="mt-12">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 border-b border-white/30 pb-2 text-sm transition hover:border-amber-400 hover:text-amber-400"
                >
                  Work with Abir Records

                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== FINAL STATEMENT ==================== */}
        <div className="mt-32 max-w-5xl">
          <p className="text-3xl font-light leading-tight text-white/40 sm:text-5xl lg:text-6xl">
            Film is more than what you see.
            <br />
            <span className="text-white">
              It's what you remember.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
