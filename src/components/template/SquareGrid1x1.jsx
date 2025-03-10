import React from "react";
import { Tooltip } from "react-tooltip";

const SquareGrid1x1 = ({
  className = "",
  children,
  tooltipId,
  tooltipContent,
}) => {
  return (
    <>
      <div
        className={`bg-black/50 mp:p-2 grid col-span-1 row-span-1 rounded-3xl cursor-pointer`}
        data-tooltip-id={tooltipId}
      >
        <div className={`grid grid-cols-2 grid-rows-2 gap-2`}>{children}</div>
      </div>
      {tooltipId && tooltipContent && (
        <Tooltip id={tooltipId} place="top" content={tooltipContent} />
      )}
    </>
  );
};

export default SquareGrid1x1;
