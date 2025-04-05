import { Square1x1 } from "../template/Square1x1";

const User = () => {
  return (
    <Square1x1 tooltipId="perfil-tooltip" tooltipContent="Perfil">
      <img
        src="./iconos/photo-me.webp"
        aria-label="Foto de perfil"
        alt="User"
        className="w-full h-full rounded-3xl"
      />
    </Square1x1>
  );
};

export default User;
