// components/ui/SectionBadge.jsx
"use client";

import { SectionBadgeProps } from "@/types/types";
import { Box } from "@mui/material";
import Image from "next/image";

export default function SectionBadge({ icon, size = 44 }: SectionBadgeProps) {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        display: "grid",
        placeItems: "center",

        mb: 2,
      }}
    >
      <Image src={icon} alt="" width={84} height={52} />
    </Box>
  );
}
