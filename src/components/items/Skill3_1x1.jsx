import SquareGrid1x1 from "../template/SquareGrid1x1";

const Skill3_1x1 = () => {
  return (
    <SquareGrid1x1
      tooltipId="herramientas-tooltip"
      tooltipContent="Herramientas"
    >
      <div className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-110">
        <a
          href="https://www.linkedin.com/in/tu-perfil"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full"
        >
          <img
            src="src/assets/github.webp"
            alt="User"
            className="w-full h-full mp:rounded-xl"
          />
        </a>
      </div>
      <div className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-110">
        <a
          href="https://www.linkedin.com/in/tu-perfil"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full"
        >
          <img
            src="src/assets/git.png"
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
