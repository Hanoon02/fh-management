import React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

const Tooltip = ({ children, content, side = "top", align = "center" }) => {
  return (
    <TooltipPrimitive.Provider delayDuration={100}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            align={align}
            className="bg-gray-800 text-white text-xs py-1 px-2 rounded-md shadow-md"
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-gray-800" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export default Tooltip;
