import { Square1x1 } from "../template/Square1x1";

const User = () => {
  return (
    <Square1x1 tooltipId="perfil-tooltip" tooltipContent="Perfil">
      <img
        src="https://raw.githubusercontent.com/R3dgrave/portafolio-v3/refs/heads/main/src/assets/iconos/photo-me.webp"
        alt="User"
        className="w-full h-full rounded-3xl"
      />
    </Square1x1>
  );
};

export default User;
