import { Tooltip } from "react-tooltip";

export function Rectangle4x1({
  className = "",
  children,
  tooltipId,
  tooltipContent,
}) {
  return (
    <>
      <div
        className={`col-span-4 transition-transform duration-300 ease-in-out ${className}`}
        data-tooltip-id={tooltipId}
      >
        <div className="relative bg-[#08121f] rounded-3xl h-full flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 overflow-hidden">
          {/* Imagen de fondo con hover */}
          <div
            className="absolute bottom-0 left-0 w-full h-1/2 bg-no-repeat bg-bottom bg-cover transition-transform duration-500 ease-in-out hover:scale-110 "
            style={{ backgroundImage: `url("/src/assets/fondo-ciudad.png")` }}
          />

          {/* Gradiente azul oscuro */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#010102] via-[#06080a] to-transparent"></div>

          {/* Contenido */}
          <div className="relative z-30 transition-transform duration-500 ease-in-out hover:scale-110">
            {children}
          </div>
        </div>
      </div>
      {tooltipId && tooltipContent && (
        <Tooltip id={tooltipId} place="top" content={tooltipContent} />
      )}
    </>
  );
}
