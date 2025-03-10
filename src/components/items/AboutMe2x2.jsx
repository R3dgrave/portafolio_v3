import { Square2x2 } from "../template/Square2x2";

const AboutMe2x2 = () => {
  return (
    <Square2x2
      backgroundImage="src/assets/bg-mountain.jpeg"
      tooltipId="sobre-mi-tooltip"
      tooltipContent="Sobre-Mi"
    >
      <p className="text-white bg-black/80 rounded-3xl mp:text-xs px-3 py-4 mx-2">
        Soy Diego, Analista Programador titulado. Durante mi formación, adquirí
        experiencia trabajando en equipo para desarrollar aplicaciones web
        completas, participando activamente en todas las etapas del proyecto:
        análisis, planificación, desarrollo y pruebas. Esto me permitió manejar
        tecnologías actuales y altamente demandadas en el mercado. Mi objetivo
        profesional es mejorar continuamente mis habilidades para desempeñarme
        de manera autónoma y aportar soluciones innovadoras en cada proyecto en
        el que participe.
      </p>
    </Square2x2>
  );
};

export default AboutMe2x2;
