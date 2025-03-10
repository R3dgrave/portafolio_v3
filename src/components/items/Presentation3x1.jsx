import { Rectangle3x1 } from "../template/Rectangle3x1";

const Presentation3x1 = () => {
  return (
    <Rectangle3x1>
      <div className="flex flex-col text-center uppercase text-white relative z-30">
        <p className="text-lg">Hola, Soy Diego</p>
        <p className="text-lg text-cyan-500 font-bold">
          Programador Front-End Junior
        </p>
      </div>
    </Rectangle3x1>
  );
};

export default Presentation3x1;
