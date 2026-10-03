"use client";

import { useRef, useState } from "react";

import { Box, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      await videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "700px" },
        maxWidth: 700,
        aspectRatio: "7 / 5",
        position: "relative",

        maskImage: 'url("/masks/Subtract.svg")',
        maskSize: "100% 100%",
        maskPosition: "center",
        maskRepeat: "no-repeat",

        WebkitMaskImage: 'url("/masks/Subtract.svg")',
        WebkitMaskSize: "100% 100%",
        WebkitMaskPosition: "center",
        WebkitMaskRepeat: "no-repeat",

        overflow: "hidden",
      }}
    >
      <Box
        component="video"
        ref={videoRef}
        src="/videos/gilmar.mp4"
        poster="/images/gilmar-video-poster.jpg"
        playsInline
        preload="metadata"
        sx={{
          width: "100%",
          height: "100%",
          display: "block",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {!isPlaying && (
        <Box
          sx={{
            position: "absolute",
            right: "25%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: {
              xs: 54,
              md: 70,
            },
            height: {
              xs: 54,
              md: 70,
            },
            borderRadius: "50%",
            // backgroundColor: "rgba(255, 255, 255, 0.3)",
            backgroundColor: "#FFFFFF4D",
          }}
        >
          <IconButton
            onClick={handlePlay}
            aria-label="پخش ویدیو"
            sx={{
              width: {
                xs: 40,
                md: 50,
              },
              height: {
                xs: 40,
                md: 50,
              },

              backgroundColor: "rgba(255,255,255,0.9)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.2)",

              "&:hover": {
                backgroundColor: "#fff",
              },
            }}
          >
            <PlayArrowIcon
              sx={{
                color: "#16c7b7",
                fontSize: {
                  xs: 30,
                  md: 40,
                },
              }}
            />
          </IconButton>
        </Box>
      )}
    </Box>
  );
}
