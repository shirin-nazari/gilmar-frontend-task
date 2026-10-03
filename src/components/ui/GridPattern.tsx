"use client";

import { GridPatternProps } from "@/types/types";
import { Box } from "@mui/material";

export default function GridPattern({
  src = "/images/grid-pattern.svg",
  opacity = 1,
  verticalAlign = "start",
  horizontalAlign = "start",
  size = "cover",
  repeat = "no-repeat",
  width = "50%",
  height = "50%",
}: GridPatternProps) {
  const bgPositionX =
    horizontalAlign === "start"
      ? "right"
      : horizontalAlign === "end"
        ? "left"
        : "center";
  const bgPositionY =
    verticalAlign === "start"
      ? "top"
      : verticalAlign === "end"
        ? "bottom"
        : "center";

  return (
    <Box
      aria-hidden
      sx={{
        position: "absolute",
        width,
        height,
        insetBlockStart: verticalAlign === "start" ? 0 : undefined,
        insetBlockEnd: verticalAlign === "end" ? 0 : undefined,
        insetInlineStart: horizontalAlign === "start" ? 0 : undefined,
        insetInlineEnd: horizontalAlign === "end" ? 0 : undefined,
        backgroundImage: `url(${src})`,
        backgroundSize: size,
        backgroundPosition: `${bgPositionX} ${bgPositionY}`,
        backgroundRepeat: repeat,
        opacity,
        pointerEvents: "none",
      }}
    />
  );
}
