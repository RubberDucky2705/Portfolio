export default function PortfolioWebsite() {
  const currentProjects = [
    {
      title: "ICLR Pluto Rocket Team — EUROC",
      role: "Carbon Fibre Tank Filament Winder Design Engineer",
      image:
        "https://images.unsplash.com/photo-1516849841032-87cbac4d88f?q=80&w=1200&auto=format&fit=crop",
      shortDescription:
        "Designing a filament winding system for carbon fibre pressure vessels.",
      details:
        "Producing CAD assemblies, shaft–pulley mechanisms, and manufacturing layouts. Applying composite material and structural principles for safe load transfer.",
      gallery: [
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517976487492-576ea6b2936d?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    {
      title: "Formula Student UK",
      role: "Vehicle Subsystem Design",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
      shortDescription:
        "Contributed to lightweight subsystem design and analysis.",
      details:
        "Used CAD and FEA under strict weight, cost, and performance constraints.",
      gallery: [
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
      ],
    },
  ];

  const pastProjects = [
    {
      title: "Medical Drone — TDI Challenge",
      role: "UAV Design Project",
      image:
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200&auto=format&fit=crop",
      shortDescription:
        "Designed a UAV concept for medical payload delivery.",
      details:
        "Performed system-level trade studies and structural layout optimisation.",
      gallery: [
        "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    {
      title: "Model Wind Turbine",
      role: "Imperial College First-Year Project",
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop",
      shortDescription:
        "Manufacture and structural analysis of turbine blades.",
      details:
        "Conducted MATLAB and Abaqus analysis to assess stress, deformation, and failure modes.",
      gallery: [
        "https://images.unsplash.com/photo-1497436072909-f5e4be5584d2?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    {
      title: "Paparazzi Rover — Furtim Panthera",
      role: "CAD Design",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
      shortDescription:
        "Produced industry-standard CAD models within a structured engineering team.",
      details:
        "Awarded Project of the Year (EDT Industrial Cadets + CREST Gold).",
      gallery: [
        "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1200&auto=format&fit=crop",
      ],
    },
  ];

  function ProjectCard({ project }) {
    return (
      <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-72 object-cover"
        />

        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              {project.title}
            </h3>
            <p className="text-blue-400 mt-1">{project.role}</p>
          </div>

          <p className="text-zinc-300 leading-relaxed">
            {project.shortDescription}
          </p>

          <details className="group bg-zinc-800/60 rounded-2xl p-4 transition-all duration-300">
            <summary className="cursor-pointer text-white font-medium list-none flex items-center justify-between">
              More Details
              <span className="group-open:rotate-180 transition-transform duration-300">
                ▼
              </span>
            </summary>

            <div className="mt-4 space-y-4 text-zinc-300 leading-relaxed">
              <p>{project.details}</p>

              <div>
                <h4 className="text-white font-medium mb-3">
                  Technical Drawings / Graphs / Additional Images
                </h4>

                <div className="grid md:grid-cols-2 gap-4">
                  {project.gallery.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt="Project Detail"
                      className="rounded-2xl w-full h-52 object-cover border border-zinc-700"
                    />
                  ))}
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />

        <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="uppercase tracking-[0.3em] text-zinc-400 text-sm">
                  Engineering Portfolio
                </p>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Shabaa Alam
                </h1>

                <p className="text-2xl text-blue-400 font-medium">
                  MEng Aeronautical Engineering Student
                </p>
              </div>

              <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl">
                Second-year Aeronautical Engineering student at Imperial College
                London with interests in engineering design, manufacturing,
                composites, structural analysis, and rapid prototyping.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://linkedin.com"
                  className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition-transform"
                >
                  LinkedIn
                </a>

                <a
                  href="mailto:your@email.com"
                  className="border border-zinc-700 px-6 py-3 rounded-2xl font-semibold hover:bg-zinc-900 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                alt="Engineering"
                className="rounded-[2rem] shadow-2xl border border-zinc-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT PROJECTS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-14">
          <p className="uppercase tracking-[0.25em] text-zinc-500 text-sm mb-4">
            Active Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Current Projects
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* PAST PROJECTS */}
      <section className="bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-14">
            <p className="uppercase tracking-[0.25em] text-zinc-500 text-sm mb-4">
              Previous Engineering Work
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Past Projects
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {pastProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-14">
          <p className="uppercase tracking-[0.25em] text-zinc-500 text-sm mb-4">
            Technical Toolkit
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Programming",
              items: ["MATLAB", "Python", "C++"],
            },
            {
              title: "CAD",
              items: ["SolidWorks", "Fusion 360", "3DEXPERIENCE"],
            },
            {
              title: "Simulation",
              items: ["Abaqus", "STAR-CCM+", "FEA", "CFD"],
            },
            {
              title: "Manufacturing",
              items: [
                "3D Printing",
                "Lathes",
                "Milling",
                "Composite Work",
              ],
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-zinc-800 px-3 py-2 rounded-xl text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Shabaa Alam</h3>
            <p className="text-zinc-400 mt-2">
              Aeronautical Engineering Portfolio
            </p>
          </div>

          <div className="text-zinc-400 space-y-2">
            <p>Imperial College London</p>
            <p>Southend-On-Sea, UK</p>
            <p>your@email.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/*
====================================================
HOW TO ADD A NEW PROJECT
====================================================

1. Copy one of the project blocks inside either:
   - currentProjects
   - pastProjects

2. Replace the information:

{
  title: "Project Name",
  role: "Your Role",
  image: "Main image URL",
  shortDescription: "Short caption under image.",
  details: "Longer expandable description.",
  gallery: [
    "image1",
    "image2",
    "image3"
  ]
}

3. Add technical drawings, CFD plots, CAD renders,
   structural analysis graphs, etc. into the gallery array.

====================================================
IMAGE RECOMMENDATIONS
====================================================

For best appearance:
- Use landscape images
- Resolution around 1600x900+
- PNG for diagrams
- JPG for photos/renders

====================================================
HOSTING ON GITHUB PAGES
====================================================

1. Create a GitHub repository
2. Upload project files
3. Push code to GitHub
4. Go to:
   Settings -> Pages
5. Select branch = main
6. Save
7. Your site will appear at:
   https://yourusername.github.io/repository-name/

====================================================
RECOMMENDED STACK
====================================================

- React + Vite
- TailwindCSS
- GitHub Pages hosting

====================================================
FOLDER STRUCTURE
====================================================

src/
 ├── assets/
 │    ├── project-images/
 │    ├── cad-renders/
 │    ├── graphs/
 │    └── drawings/
 │
 ├── data/
 │    └── projects.js
 │
 ├── components/
 │    ├── ProjectCard.jsx
 │    ├── Navbar.jsx
 │    └── Footer.jsx
 │
 ├── App.jsx
 │
 └── main.jsx

====================================================
NEXT IMPROVEMENTS YOU CAN ADD
====================================================

- Animated transitions using Framer Motion
- Dark/light mode toggle
- Embedded PDF reports
- Downloadable CV button
- Interactive CAD viewers
- CFD/FEA image sliders
- Search/filter by category
- Mobile navigation menu
- Blog/dev log section
- Timeline view for projects
- Embedded YouTube videos

*/
