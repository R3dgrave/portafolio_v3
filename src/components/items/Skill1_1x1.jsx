import SquareGrid1x1 from "../template/SquareGrid1x1";

const Skill1_1x1 = () => {
  return (
    <SquareGrid1x1
      tooltipId="habilidades-frontend-tooltip"
      tooltipContent="Habilidades-FrontEnd"
    >
      <div className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-110">
        <a href="#" rel="noopener noreferrer" className="w-full h-full">
          <img
            src="./iconos/react.webp"
            aria-label="React"
            alt="React"
            className="w-full h-full mp:rounded-xl"
          />
        </a>
      </div>
      <div className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-110">
        <a href="#" rel="noopener noreferrer" className="w-full h-full">
          <img
            src="./iconos/Tailwindcss.webp"
            aria-label="Tailwindcss"
            alt="Tailwindcss"
            className="w-full h-full mp:rounded-xl"
          />
        </a>
      </div>
      <div className=""></div>
      <div className=""></div>
    </SquareGrid1x1>
  );
};

export default Skill1_1x1;
