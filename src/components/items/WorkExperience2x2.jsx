import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Square2x2 } from "../template/Square2x2";

const experiences = [
  {
    company: "🏢 Latam Trade Capital Chile",
    position: "💼 Practicante Área Transformación Digital",
    date: "📅 Junio 2024 - Agosto 2024",
    description:
      "Contribuí como parte del equipo de soporte TI. Colaboré de manera efectiva con el equipo de desarrolladores de la empresa, donde implementé mejoras visuales en la interfaz, añadí funcionalidades como un editor de texto usando Quill Text Editor, trabajé con tecnologías como Angular, TypeScript y Bootstrap.",
  },
  {
    company: "🪛 Independiente servicio Tecnico",
    position: "💼 Servicio Tecnico y armado de computadoras",
    date: "📅 Enero 2022 - Actualmente…",
    description:
      "Trabajo independiente en mi tiempo libre dando servicio de reparación, diagnóstico a ordenadores de sobremesa y portátiles.",
  },
];

const WorkExperience2x2 = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  return (
    <>
      <Square2x2
        backgroundImage="src/assets/bg-mountain.jpeg"
        tooltipId="experiencia-laboral-tooltip"
        tooltipContent="Experiencia-Laboral"
      >
        <div className="grid grid-cols-1 grid-rows-2">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-black/80 mp:p-1 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110`}
            >
              <div className="rounded-3xl flex flex-col h-auto m-2 p-2 relative">
                <p className="text-white mp:text-xs font-semibold">
                  {exp.company}
                </p>
                <p className="text-white mp:text-xs font-semibold">
                  {exp.position}
                </p>
                <p className="text-white mp:text-xs font-semibold">
                  {exp.date}
                </p>
                <p className="text-white mp:text-xs stp:text-{} font-normal">
                  {exp.description.slice(0, exp.description.length / 4)}...
                </p>

                {/* Botón para abrir el modal */}
                <button
                  onClick={() => setSelectedExperience(exp)}
                  className="absolute bottom-0 right-0 bg-white text-black p-1 rounded-full hover:bg-gray-300 transition"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Square2x2>

      {/* Modal (fuera de Square2x2 para ocupar toda la pantalla) */}
      {selectedExperience && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50 mp:px-2">
          <div className="bg-white p-6 rounded-3xl max-w-lg w-full text-black relative">
            <button
              onClick={() => setSelectedExperience(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              ✖
            </button>
            <h2 className="mp:text-xs font-bold">
              {selectedExperience.company}
            </h2>
            <p className="mp:text-xs font-semibold">
              {selectedExperience.position}
            </p>
            <p className="mp:text-xs">{selectedExperience.date}</p>
            <p className="mp:text-xs mt-2">{selectedExperience.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkExperience2x2;
