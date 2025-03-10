import { Tooltip } from "react-tooltip";
export function Rectangle2x1({ className = "", children }) {
  return (
    <div
      className={`col-span-2 transition-transform duration-300 ease-in-out ${className}`}
      data-tooltip-id="presentacion-tooltip"
    >
      <div className="relative bg-[#10263f] rounded-3xl h-full flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 overflow-hidden">
        {/* Imagen de fondo con hover */}
        <div
          className="absolute  bottom-0 left-0 w-full h-full bg-no-repeat bg-bottom bg-cover transition-transform duration-500 ease-in-out hover:scale-110 z-20"
          style={{ backgroundImage: `url("/src/assets/particles.png")` }}
        />

        {/* Gradiente azul oscuro */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-[#28313a] to-transparent z-10"></div>

        {/* Contenido */}
        <div className="relative z-30 transition-transform duration-500 ease-in-out hover:scale-110">
          {children}
        </div>
      </div>
      <Tooltip id="presentacion-tooltip" place="top" content="Presentación" />
    </div>
  );
}
