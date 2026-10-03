"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";

type CabinCardProps = {
  image: string;
  title: string;
  description: string;
  aspectRatio?: string;
};

export default function CabinCard({
  image,
  title,
  description,
  aspectRatio = "1 / 1",
}: CabinCardProps) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        aspectRatio,
        overflow: "hidden",
        borderRadius: "20px",
      }}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="
          (max-width: 600px) 45vw,
          (max-width: 900px) 45vw,
          25vw
        "
        style={{
          objectFit: "cover",
        }}
      />

      {/* dark gradient */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0) 55%)",
        }}
      />

      {/* text */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          px: { xs: 1.5, md: 2 },
          pb: { xs: 1.5, md: 2 },
          color: "#fff",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "12px",
              sm: "14px",
              md: "16px",
            },
            fontWeight: 800,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            mt: 0.5,
            fontSize: {
              xs: "10px",
              sm: "12px",
              md: "14px",
            },
            fontWeight: 600,
            opacity: 0.6,
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
