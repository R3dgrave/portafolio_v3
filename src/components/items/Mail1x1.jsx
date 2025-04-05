import { Tooltip } from "react-tooltip";
import { Square1x1 } from "../template/Square1x1";

const Mail1x1 = () => {
  return (
    <Square1x1>
      <a
        href="mailto:diego.abantomendoza@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full block"
        data-tooltip-id="Gmail-tooltip"
      >
        <img
          src="./iconos/gmailred.webp"
          aria-label="Correo electrónico"
          alt="Correo electrónico"
          className="w-full h-full rounded-3xl"
        />
      </a>
      <Tooltip id="Gmail-tooltip" place="top" content="Enviar correo" />
    </Square1x1>
  );
};

export default Mail1x1;
