import { useState } from "react";
import { projects } from "../data/projects";

function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    "All",
    "Music Video",
    "Commercial",
    "Documentary",
    "Drone / Aerial",
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section
        id="work"
        className="bg-[#080808] px-6 py-28 lg:px-10 lg:py-40"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <p className="mb-5 text-sm uppercase tracking-[0.3em] text-amber-400">
                Selected Work
              </p>

              <h2 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
                Stories
                <br />
                <span className="text-white/30">in Motion.</span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-white/50">
              A selection of music videos, commercials, documentaries and
              cinematic aerial work created through visual storytelling.
            </p>
          </div>

          {/* Filters */}
          <div className="mt-16 flex flex-wrap gap-3 border-y border-white/10 py-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-full px-5 py-2.5 text-sm transition ${
                  filter === category
                    ? "bg-white text-black"
                    : "border border-white/10 text-white/50 hover:border-white/30 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className={`group cursor-pointer ${
                  index % 3 === 0 ? "md:col-span-2" : ""
                }`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden bg-zinc-900 ${
                    index % 3 === 0
                      ? "aspect-[16/8]"
                      : "aspect-[4/3]"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-80" />

                  {/* Open button */}
                  <div className="absolute right-6 top-6 flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-white text-xl text-black opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    ↗
                  </div>

                  {/* Image information */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <p className="mb-2 text-xs uppercase tracking-[0.25em] text-amber-400">
                      {project.category}
                    </p>

                    <h3 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Meta */}
                <div className="flex items-start justify-between gap-6 py-5">
                  <p className="max-w-lg text-sm leading-6 text-white/40">
                    {project.description}
                  </p>

                  <div className="shrink-0 text-right text-xs uppercase tracking-wider text-white/30">
                    <p>{project.year}</p>
                    <p>{project.location}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 flex justify-center">
            <button className="group flex items-center gap-3 rounded-full border border-white/20 px-7 py-3 text-sm transition hover:border-amber-400 hover:bg-amber-400 hover:text-black">
              View All Projects

              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ==================== PROJECT MODAL ==================== */}

      {selectedProject && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/95 backdrop-blur-xl">
          {/* Close Button */}
          <button
            onClick={closeProject}
            className="fixed right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/50 text-2xl text-white transition hover:border-amber-400 hover:bg-amber-400 hover:text-black"
            aria-label="Close project"
          >
            ×
          </button>

          <div className="mx-auto min-h-screen max-w-7xl px-6 py-24 lg:px-10">
            {/* Project Header */}
            <div className="mb-12 max-w-4xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-400">
                {selectedProject.category}
              </p>

              <h2 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
                {selectedProject.title}
              </h2>

              <div className="mt-6 flex flex-wrap gap-6 text-sm text-white/40">
                <span>{selectedProject.year}</span>
                <span>{selectedProject.location}</span>
                <span>Directed & Edited by Sabbir Chowdhury</span>
              </div>
            </div>

            {/* Video Area */}
            <div className="relative aspect-video overflow-hidden bg-zinc-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="h-full w-full object-cover"
              />

              {/* Play Button */}
              <button className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl text-black transition hover:scale-110 hover:bg-amber-400">
                ▶
              </button>

              <div className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.25em] text-white/50">
                Showreel / Project Film
              </div>
            </div>

            {/* Project Information */}
            <div className="mt-16 grid gap-12 lg:grid-cols-3">
              {/* Description */}
              <div className="lg:col-span-2">
                <p className="mb-5 text-sm uppercase tracking-[0.25em] text-amber-400">
                  About The Project
                </p>

                <p className="max-w-3xl text-xl leading-9 text-white/70">
                  {selectedProject.description}
                </p>
              </div>

              {/* Details */}
              <div className="border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="mb-6 text-sm uppercase tracking-[0.25em] text-white/40">
                  Credits
                </p>

                <div className="space-y-5 text-sm">
                  <div>
                    <p className="text-white/30">Creative Direction</p>
                    <p className="mt-1 text-white">
                      Sabbir Chowdhury
                    </p>
                  </div>

                  <div>
                    <p className="text-white/30">Cinematography</p>
                    <p className="mt-1 text-white">
                      Sabbir Chowdhury
                    </p>
                  </div>

                  <div>
                    <p className="text-white/30">Editing</p>
                    <p className="mt-1 text-white">
                      Sabbir Chowdhury
                    </p>
                  </div>

                  <div>
                    <p className="text-white/30">Production</p>
                    <p className="mt-1 text-white">
                      Abir Records
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Close / Back */}
            <div className="mt-20 border-t border-white/10 pt-8">
              <button
                onClick={closeProject}
                className="group flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white/50 transition hover:text-white"
              >
                <span className="transition-transform group-hover:-translate-x-1">
                  ←
                </span>

                Back to projects
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
    