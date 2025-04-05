import SquareGrid1x1 from "../template/SquareGrid1x1";

const Skill2_1x1 = () => {
  return (
    <SquareGrid1x1
      tooltipId="habilidades-backend-tooltip"
      tooltipContent="Habilidades-BackEnd"
    >
      <div className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-110">
        <a href="#" rel="noopener noreferrer" className="w-full h-full">
          <img
            src="./iconos/nodejs.webp"
            aria-label="Nodejs"
            alt="Nodejs"
            className="w-full h-full mp:rounded-xl"
          />
        </a>
      </div>
      <div className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-110">
        <a href="#" rel="noopener noreferrer" className="w-full h-full">
          <img
            src="./iconos/mongodb.webp"
            aria-label="Mongodb"
            alt="Mongodb"
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
