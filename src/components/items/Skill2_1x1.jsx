import SquareGrid1x1 from "../template/SquareGrid1x1";

const Skill2_1x1 = () => {
  return (
    <SquareGrid1x1
      tooltipId="habilidades-backend-tooltip"
      tooltipContent="Habilidades-BackEnd"
    >
      <div className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-110">
        <a
          href="https://www.linkedin.com/in/tu-perfil"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full"
        >
          <img
            src="src/assets/nodejs.png"
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
            src="src/assets/mongodb.png"
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

export default Skill2_1x1;
