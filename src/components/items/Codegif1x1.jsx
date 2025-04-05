import { Square1x1 } from "../template/Square1x1";

const Codegif1x1 = () => {
  return (
    <Square1x1 className="overflow-hidden">
      <img
        src="./backgrounds/code_gif.gif"
        alt="GIF animado"
        className="w-full h-full object-cover rounded-xl"
      />
    </Square1x1>
  );
};

export default Codegif1x1;
