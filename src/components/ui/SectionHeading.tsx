"use client";

import { Box, Typography } from "@mui/material";
import SectionBadge from "./Badge";
import { SectionHeadingProps } from "@/types/types";

export default function SectionHeading({
  icon,
  title,
  description,
  align = "center", // "center" | "right"
  maxWidth,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <Box
      sx={{
        textAlign: align === "center" ? "center" : { xs: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: isCenter
            ? "center"
            : { xs: "center", md: "flex-start" },
        }}
      >
        <SectionBadge icon={icon} />
      </Box>
      <Typography
        component="h2"
        sx={{
          mt: 2,
          fontSize: { xs: "22px", md: "32px" },
          fontWeight: 800,
          color: "#1A1A1A",
        }}
      >
        {title}
      </Typography>
      {description && (
        <Typography
          sx={{
            mt: 1.5,
            fontSize: { xs: "12px", md: "14px" },
            fontWeight: 600,
            color: "#4C4C4D",
            maxWidth,
            lineHeight: "32px",
            mx: align === "center" ? "auto" : { xs: "auto", md: 0 },
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
}
