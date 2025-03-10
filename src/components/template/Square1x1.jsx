import { Tooltip } from "react-tooltip";

export function Square1x1({
  className = "",
  children,
  tooltipId,
  tooltipContent,
}) {
  return (
    <>
      <div
        className="grid col-span-1 row-span-1 rounded-3xl cursor-pointer transition-transform duration-300 ease-in-out"
        data-tooltip-id={tooltipId} // Asigna el ID al div principal
      >
        <div
          className={`${className} rounded-3xl h-full flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110`}
        >
          {children}
        </div>
      </div>

      {/* Solo renderiza el tooltip si se proporciona un ID y contenido */}
      {tooltipId && tooltipContent && (
        <Tooltip id={tooltipId} place="top" content={tooltipContent} />
      )}
    </>
  );
}
