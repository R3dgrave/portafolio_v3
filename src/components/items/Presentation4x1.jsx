import { Rectangle4x1 } from "../template/Rectangle4x1";

const Presentation4x1 = () => {
  return (
    <Rectangle4x1
      tooltipId="reproductor-youtube-tooltip"
      tooltipContent="Reproductor-Youtube"
    >
      <div className="flex flex-col gap-y-2 text-center uppercase text-white relative z-30"></div>
    </Rectangle4x1>
  );
};

export default Presentation4x1;
