import { useEffect, useState } from "react";
import { Square2x2 } from "../template/Square2x2";

const dataProjects = [
  {
    name: "YourNotebook",
    description:
      "App para administrar notas, con editor de texto incorporado para más personalización de las notas",
    technologies: [{ name: "React/ " }, { name: "TailwindCss" }],
    enlaces: {
      frontend: "https://github.com/R3dgrave/YourNotebook",
      demo: "https://r3dgrave.github.io/YourNotebook/",
    },
    image:
      "https://raw.githubusercontent.com/R3dgrave/portafolio-v3/refs/heads/main/src/assets/projects-img/YourNotebook.webp",
  },
];

const Project4_2x2 = () => {
  const [hovered, setHovered] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const [maxChars, setMaxChars] = useState(100);

  useEffect(() => {
    const updateMaxChars = () => {
      if (window.innerWidth < 640) {
        setMaxChars(200); // Móviles
      } else if (window.innerWidth < 900) {
        setMaxChars(50); // Tablets
      } else if (window.innerWidth < 1920) {
        setMaxChars(100); // Escritorio
      }
    };

    updateMaxChars(); // Llamar al inicio
    window.addEventListener("resize", updateMaxChars);

    return () => window.removeEventListener("resize", updateMaxChars);
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <Square2x2 tooltipId="proyecto4-tooltip" tooltipContent="Proyecto-4">
      <div className="relative w-full h-full">
        {dataProjects.map((project, index) => (
          <div
            key={index}
            className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Imagen de fondo */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
            />

            {/* Capa de información (hover) */}
            <div
              className={`absolute inset-0 bg-black/80 grid grid-cols-4 grid-rows-[auto_auto_1fr_auto] gap-3 p-4 text-white opacity-0 transition-opacity duration-300 ${
                hovered === index ? "opacity-100" : ""
              }`}
            >
              {/* Título del Proyecto */}
              <div className="bg-black/70 rounded-xl p-2 col-span-4 inline-flex items-start">
                <h3 className="mp:text-xs font-bold text-start">
                  {project.name}
                </h3>
              </div>

              {/* Fila de nombres de tecnologia */}
              <div className="bg-black/70 rounded-xl p-2 col-span-4 flex items-center justify-start flex-wrap">
                {project.technologies.map((tech, i) => (
                  <p className="mp:text-xs mr-2" key={i}>
                    {tech.name}
                  </p>
                ))}
              </div>

              {/* Descripción con botón "Ver más" */}
              <div className="bg-black/70 rounded-xl p-2 col-span-4 flex flex-col items-center justify-start">
                <p className="mp:text-xs text-start">
                  {project.description.length > maxChars
                    ? `${project.description.substring(0, maxChars)}...`
                    : project.description}
                </p>
                {project.description.length > maxChars && (
                  <button
                    onClick={() => openModal(project)}
                    className="text-blue-400 mp:text-xs mt-1 underline hover:text-blue-300 transition"
                  >
                    Ver más
                  </button>
                )}
              </div>

              {/* Botones de enlaces */}
              <div className="rounded-xl col-span-4 flex justify-center gap-2 flex-wrap">
                <a
                  href={project.enlaces.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#121212] text-white px-4 py-2 rounded-lg mp:text-xs font-semibold hover:bg-[#252525] transition"
                >
                  Front-end
                </a>
                <a
                  href={project.enlaces.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg mp:text-xs font-semibold hover:bg-blue-600 transition"
                >
                  Ver Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 z-50">
          <div className="bg-white p-6 rounded-xl max-w-md w-full">
            <h2 className="mp:text-sm font-bold text-black">
              {selectedProject.name}
            </h2>
            <p className="text-gray-700 mt-2 mp:text-xs">
              {selectedProject.description}
            </p>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg mp:text-xs font-semibold hover:bg-blue-600 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </Square2x2>
  );
};

export default Project4_2x2;
