import { Tooltip } from "react-tooltip";
import { Square1x1 } from "../template/Square1x1";

const Github1x1 = () => {
  return (
    <Square1x1>
      <a
        href="https://github.com/R3dgrave"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full block"
        data-tooltip-id="github-tooltip"
      >
        <img
          src="https://raw.githubusercontent.com/R3dgrave/portafolio-v3/refs/heads/main/src/assets/iconos/github.webp"
          alt="User"
          className="w-full h-full rounded-3xl"
        />
      </a>
      <Tooltip id="github-tooltip" place="top" content="Perfil de GitHub" />
    </Square1x1>
  );
};

export default Github1x1;
