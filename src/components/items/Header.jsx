const Header = () => {
  return (
    <header className="w-full md:w-full mx-auto font-normal flex flex-row items-center justify-between pt-6 px-6">
      {/* Icono en móviles centrado y en escritorio alineado a la izquierda */}
      <div className="w-10 md:w-20 flex justify-center md:justify-start transition-transform duration-300 ease-in-out hover:scale-110">
        <img
          className="w-full h-full rounded-full object-cover"
          src="https://raw.githubusercontent.com/R3dgrave/portafolio-v3/refs/heads/main/src/assets/iconos/logo.webp"
          alt="Logo de mi portafolio"
        />
      </div>

      {/* Contenedor del perfil */}
      <div className="flex items-center gap-2 mt-4 md:mt-0">
        <p className="text-white text-base">diego.abantomendoza@gmail.com</p>
        <div className="w-12 md:w-14 transition-transform duration-300 ease-in-out hover:scale-110">
          <img
            className="w-full h-full rounded-full object-cover"
            src="https://raw.githubusercontent.com/R3dgrave/portafolio-v3/refs/heads/main/src/assets/iconos/logo.webp"
            alt="Foto del header"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
