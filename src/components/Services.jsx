const services = [
  {
    number: "01",
    title: "Video Editing",
    description:
      "Professional editing that transforms raw footage into engaging cinematic stories with rhythm, emotion and visual consistency.",
    tags: ["Premiere Pro", "DaVinci Resolve", "Color Grading"],
  },
  {
    number: "02",
    title: "Cinematography",
    description:
      "Cinematic camera work focused on composition, lighting, movement and visual storytelling for productions of every scale.",
    tags: ["Camera", "Lighting", "Composition"],
  },
  {
    number: "03",
    title: "Music Videos",
    description:
      "Creative music-video production combining performance, narrative, cinematography and editing into a distinctive visual identity.",
    tags: ["Concept", "Production", "Editing"],
  },
  {
    number: "04",
    title: "Commercials",
    description:
      "High-quality commercial films designed to communicate a brand's message through strong visuals and memorable storytelling.",
    tags: ["Brand Films", "Product", "Advertising"],
  },
  {
    number: "05",
    title: "Documentaries",
    description:
      "Authentic visual storytelling that captures real people, real places and meaningful stories with a cinematic approach.",
    tags: ["Interview", "Storytelling", "Production"],
  },
  {
    number: "06",
    title: "Drone / Aerial",
    description:
      "Dynamic aerial cinematography that gives productions a larger perspective and adds scale, movement and cinematic impact.",
    tags: ["Aerial", "Drone", "4K"],
  },
];

function Services() {
  return (
    <section
      id="services"
      className="border-t border-white/10 bg-[#080808] px-6 py-28 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-amber-400">
              What I Do
            </p>

            <h2 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
              Visuals
              <br />
              <span className="text-white/30">with purpose.</span>
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-xl text-lg leading-8 text-white/50">
              From the first frame to the final cut, every project is built
              around strong visual storytelling. I work across production,
              cinematography, editing and aerial filmmaking.
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className="mt-20 border-t border-white/10">
          {services.map((service) => (
            <div
              key={service.number}
              className="group grid gap-8 border-b border-white/10 py-10 transition-colors hover:bg-white/[0.02] lg:grid-cols-[100px_1fr_1fr]"
            >
              {/* Number */}
              <div className="text-sm text-white/30">
                {service.number}
              </div>

              {/* Title */}
              <div>
                <h3 className="text-3xl font-semibold tracking-tight transition-colors group-hover:text-amber-400 sm:text-4xl lg:text-5xl">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <div>
                <p className="max-w-lg text-sm leading-7 text-white/40">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/30 transition group-hover:border-white/20 group-hover:text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 flex flex-col justify-between gap-8 border-b border-white/10 pb-12 sm:flex-row sm:items-end">
          <p className="max-w-2xl text-2xl font-light leading-relaxed text-white/60 sm:text-3xl">
            Every project starts with an idea.
            <br />
            <span className="text-white">
              Let's turn it into something people remember.
            </span>
          </p>

          <a
            href="#contact"
            className="group flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-amber-400"
          >
            Start a Project

            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
