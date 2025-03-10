import { Tooltip } from "react-tooltip";
// Rectangle3x1.tsx (tablet y desktop)
export function Rectangle3x1({ className = "", children }) {
  return (
    <div
      className={`col-span-3 transition-transform duration-300 ease-in-out ${className}`}
      data-tooltip-id="presentacion-tooltip"
    >
      <div className="relative bg-[#10263f] rounded-3xl h-full flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 overflow-hidden">
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
      <Tooltip id="presentacion-tooltip" place="top" content="Presentación" />
    </div>
  );
}
