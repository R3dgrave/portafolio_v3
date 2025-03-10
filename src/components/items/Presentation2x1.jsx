import { Rectangle2x1 } from "../template/Rectangle2x1";

const Presentation2x1 = () => {
  let content = (
    <div className="flex flex-col gap-y-2 text-center uppercase text-white relative z-30">
      <p className="mp:text-base">Hola</p>
      <p className="mp:text-base font-bold">Soy Diego</p>
      <p className="mp:text-base text-yellow-400 font-medium">
        Programador Front-End Junior
      </p>
    </div>
  );

  return <Rectangle2x1>{content}</Rectangle2x1>;
};

export default Presentation2x1;
