import SquareGrid1x1 from "../template/SquareGrid1x1";

const Skill3_1x1 = () => {
  return (
    <SquareGrid1x1
      tooltipId="herramientas-tooltip"
      tooltipContent="Herramientas"
    >
      <div className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-110">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full"
        >
          <img
            src="https://raw.githubusercontent.com/R3dgrave/portafolio-v3/refs/heads/main/src/assets/iconos/github.webp"
            alt="User"
            className="w-full h-full mp:rounded-xl"
          />
        </a>
      </div>
      <div className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-110">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full"
        >
          <img
            src="https://raw.githubusercontent.com/R3dgrave/portafolio-v3/refs/heads/main/src/assets/iconos/git.webp"
            alt="User"
            className="w-full h-full mp:rounded-xl"
          />
        </a>
      </div>
      <div className=""></div>
      <div className=""></div>
    </SquareGrid1x1>
  );
};

export default Skill3_1x1;
