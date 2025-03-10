import { Tooltip } from "react-tooltip";
import { Square1x1 } from "../template/Square1x1";

const Linkedin1x1 = () => {
  return (
    <Square1x1>
      <a
        href="https://www.linkedin.com/in/diego-abanto-b42b81289/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full block"
        data-tooltip-id="linkedin-tooltip"
      >
        <img
          src="https://raw.githubusercontent.com/R3dgrave/portafolio-v3/refs/heads/main/src/assets/iconos/linkedin.webp"
          alt="LinkedIn"
          className="w-full h-full rounded-3xl bg-white"
        />
      </a>

      <Tooltip id="linkedin-tooltip" place="top" content="Perfil de LinkedIn" />
    </Square1x1>
  );
};

export default Linkedin1x1;
