import { Tooltip } from "react-tooltip";
import { Square1x1 } from "../template/Square1x1";

const PDF1x1 = () => {
  return (
    <Square1x1>
      <a
        href="https://drive.google.com/file/d/1NCw4PSy_QHCeYWtBP8JtSn6_5OEsymrx/view?usp=sharing"
        target="_blank"
        aria-label="Curriculum en PDF"
        rel="noopener noreferrer"
        className="w-full h-full block"
        data-tooltip-id="pdf-tooltip"
      >
        <img
          src="./iconos/Pdf.webp"
          aria-label="Curriculum en PDF"
          alt="Curriculum en PDF"
          className="w-full h-full rounded-3xl"
        />
      </a>
      <Tooltip id="pdf-tooltip" place="top" content="Ver Curriculum en PDF" />
    </Square1x1>
  );
};

export default PDF1x1;
