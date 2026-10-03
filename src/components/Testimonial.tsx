"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";

const avatars = [
  {
    src: "/images/avatar1.png",
    top: "20%",
    left: "14%",
    size: 52,
    ring: "#fff",
  },
  {
    src: "/images/user1.png",
    top: "0%",
    left: "44%",
    size: 72,
    ring: "#fff",
  },
  {
    src: "/images/user2.png",
    top: "38%",
    left: "0%",
    size: 42,
    ring: "#fff",
  },
  {
    src: "/images/user1.png",
    top: "30%",
    left: "85%",
    size: 40,
    ring: "#fff",
  },
  {
    src: "/images/user4.png",
    top: "5%",
    left: "90%",
    size: 52,
    ring: "#fff",
  },
  {
    src: "/images/user5.png",
    top: "62%",
    left: "10%",
    size: 52,
    ring: "#fff",
  },
  {
    src: "/images/user5.png",
    top: "40%",
    left: "95%",
    size: 52,
    ring: "#fff",
  },
  {
    src: "/images/avatar1.png",
    top: "69%",
    left: "79%",
    size: 52,
    ring: "#fff",
  },
];

export default function Testimonial() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        py: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <SectionHeading
          icon="/icons/icon-guest.svg"
          title="گیلمار از نگاه مهمانان"
          description="
            تجربه واقعی مهمانان، بهترین روایت از آرامش، طبیعت و حال خوب گیلمار
            است."
          maxWidth={600}
        />
        {/* Map , Avatar , Card */}
        <Box
          sx={{
            position: "relative",
            mt: { xs: 6, md: 8 },
            width: "100%",
            maxWidth: 900,
            mx: "auto",
            aspectRatio: { xs: "1 / 1.1", md: "16 / 9" },
          }}
        >
          {/* background  */}
          <Box
            component="img"
            src="/images/backTesti.png"
            alt=""
            aria-hidden
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              opacity: 0.6,
              pointerEvents: "none",
            }}
          />

          {/* avatar */}
          {avatars.map((a, i) => (
            <Box
              key={i}
              sx={{
                position: "absolute",
                top: a.top,
                insetInlineStart: a.left,
                width: a.size,
                height: a.size,
                borderRadius: "50%",
                border: `3px solid ${a.ring}`,
                overflow: "hidden",
                boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                zIndex: 2,
                display: { xs: i > 3 ? "none" : "block", md: "block" },
              }}
            >
              <Image src={a.src} alt="" fill style={{ objectFit: "cover" }} />
            </Box>
          ))}

          {/* comment card */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 3,
              height: { xs: "72%", md: "264px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "92%", sm: 420, md: 480 },
              bgcolor: "Light Blue/99",
              border: "1px solid #EEF3F6",
              borderRadius: "16px",
              boxShadow: "0 10px 10px rgba(0, 0, 0, 0.06)",
              px: { xs: 3, md: 5 },
              py: { xs: 3.5, md: 4.5 },
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 3,
                width: { xs: "92%", sm: 415, md: 475 },
                bgcolor: "#FCFDFD",
                border: "1px solid #EEF3F6",
                borderRadius: "16px",

                px: { xs: "12px", md: "24px" },
                py: { xs: 3.5, md: 4.5 },
                textAlign: "center",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: "40px",
                  fontWeight: 900,
                  background:
                    "linear-gradient(229.52deg, #02ADF7 -18.98%, #26E05A 121.29%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  pt: 1,
                  color: "transparent !important",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1,
                  display: "block",
                }}
              >
                ”
              </Typography>

              <Typography
                component="blockquote"
                sx={{
                  m: 0,

                  fontSize: { xs: 12.5, md: "14px" },
                  lineHeight: 2,
                  color: "#4C4C4D",
                  fontWeight: 600,
                }}
              >
                اقامت در گیلمار یکی از بهترین تجربه‌های سفر من بود. فضای کاملاً
                آرام، طبیعت بکر و مهمان‌نوازی صمیمی باعث شد چند روزی که اینجا
                بودم واقعاً از هیاهوی شهر دور بشم.{" "}
              </Typography>

              <Typography
                sx={{
                  mt: 2.5,
                  fontSize: "14px",
                  fontWeight: 800,
                  color: "#1A1A1A",
                }}
              >
                احسان عبدی پور
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "#4C4C4D", fontWeight: 600 }}
              >
                مهمان
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* { Add button slider} */}
        <Box
          sx={{ display: "flex", justifyContent: "center", gap: 1, mt: -12 }}
        >
          {[0, 1, 2].map((i) => (
            <Box
              key={i}
              sx={{
                width: i === 0 ? 6 : 6,
                height: 6,
                borderRadius: 999,
                bgcolor: i === 0 ? "#19b986" : "#d9dee8",
                transition: "all .25s",
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
