import { Tooltip } from "react-tooltip";

export function Square2x2({
  className = "",
  children,
  backgroundImage,
  tooltipId,
  tooltipContent,
}) {
  return (
    <>
      <div
        className={`col-span-2 row-span-2 ${className} transition-transform duration-300 ease-in-out hover:scale-110`}
        data-tooltip-id={tooltipId}
      >
        <div
          className="bg-[#212830] rounded-3xl h-full mp:px-4 mp:py-4"
          style={{
            backgroundImage: backgroundImage
              ? `url(${backgroundImage})`
              : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {children}
        </div>
      </div>
      {tooltipId && tooltipContent && (
        <Tooltip id={tooltipId} place="top" content={tooltipContent} />
      )}
    </>
  );
}
