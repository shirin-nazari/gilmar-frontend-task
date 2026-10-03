"use client";

import { MaskedImageProps } from "@/types/types";
import { Box } from "@mui/material";
import Image from "next/image";

export default function MaskedImage({
  src,
  alt,
  maskSrc,
  width = "364px",
  height = "276px",
}: MaskedImageProps) {
  return (
    <Box
      sx={{
        position: "relative",
        width,
        height,
        WebkitMaskImage: `url(${maskSrc})`,
        maskImage: `url(${maskSrc})`,
        WebkitMaskRepeat: "no-repeat",
        borderRadius: "20px",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    >
      <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
    </Box>
  );
}
