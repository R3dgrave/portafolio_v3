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
            className="absolute bottom-0 left-0 w-full h-full bg-no-repeat bg-bottom bg-cover transition-transform duration-500 ease-in-out hover:scale-110"
            style={{
              backgroundImage: `url("https://raw.githubusercontent.com/R3dgrave/portafolio-v3/refs/heads/main/src/assets/backgrounds/particles.webp")`,
            }}
          />
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
