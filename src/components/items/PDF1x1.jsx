import { Tooltip } from "react-tooltip";
import { Square1x1 } from "../template/Square1x1";

const PDF1x1 = () => {
  return (
    <Square1x1>
      <a
        href="https://drive.google.com/file/d/12nsTDJ3ytLC5da6SNnWMzdZDkY7jJFe4/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full block"
        data-tooltip-id="pdf-tooltip"
      >
        <img
          src="https://raw.githubusercontent.com/R3dgrave/portafolio-v3/refs/heads/main/src/assets/iconos/Pdf.webp"
          alt="User"
          className="w-full h-full rounded-3xl"
        />
      </a>
      <Tooltip id="pdf-tooltip" place="top" content="Ver Curriculum en PDF" />
    </Square1x1>
  );
};

export default PDF1x1;
