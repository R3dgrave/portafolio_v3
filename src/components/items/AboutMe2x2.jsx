import { Square2x2 } from "../template/Square2x2";

const AboutMe2x2 = () => {
  return (
    <Square2x2
      backgroundImage="https://raw.githubusercontent.com/R3dgrave/portafolio-v3/refs/heads/main/src/assets/backgrounds/fondo-mac2.webp"
      tooltipId="sobre-mi-tooltip"
      tooltipContent="Sobre-Mi"
    >
      <p className="text-white bg-black/80 rounded-3xl mp:text-xs px-3 py-4 mx-2">
        Mi nombre es Diego Abanto, tengo 26 años y estudié la carrera de
        Analista Programador. Tengo experiencia en hardware (armando,
        diagnosticando y reparando ordenadores) y software. Durante mi formación
        descubrí mi pasión por el desarrollo web conforme fui adentrándome más
        en el tema y mientras realizaba proyectos personales y académicos. Mis
        pasatiempos e intereses son ver series, jugar videojuegos y la
        programación y desarrollo web en general. Actualmente, busco empleo como
        desarrollador web Front-End. A la Front-End. A la par, sigo formándome
        día a día de manera autónoma sobre las tecnologías actuales y mas
        demandadas del mercado para siempre estar a la vanguardia.
      </p>
    </Square2x2>
  );
};

export default AboutMe2x2;
