"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import CustomButton from "./ui/Button";
import SectionHeading from "./ui/SectionHeading";
import GridPattern from "./ui/GridPattern";

const collageImages = [
  {
    src: "/images/img-story-02.png",
    alt: "نمای اقامتگاه",
    left: "23%",
    top: "0%",
    w: "64%",
    h: "64%",
    z: 1,
  },
  {
    src: "/images/img-story-03.png",
    alt: "ایوان چوبی",
    left: "6.6%",
    top: "36.5%",
    w: "44%",
    h: "52%",
    z: 3,
  },
  {
    src: "/images/img-story-01.png",
    alt: "پل چوبی در غروب",
    left: "56.5%",
    top: "35.7%",
    w: "44%",
    h: "64%",
    z: 0,
  },
];

const pills = [
  {
    label: "اقامتگاه بوم‌گردی گیلمار",
    icon: "/icons/pill-icon-1.png",
    left: "0%",
    top: "20%",
  },
  {
    label: "تجربه اقامت اصیل شمال",
    icon: "/icons/magic-Stick.png",
    left: "39.6%",
    top: "64%",
  },
];

const dots = [
  { color: "#FF6B81", size: 8, left: "3%", top: "-4%" },
  { color: "#5B8DEF", size: 5, left: "12%", top: "6%" },
  { color: "#B57BEE", size: 9, left: { xs: "102%", sm: "105%" }, top: "40%" },
  { color: "#5B8DEF", size: 6, left: { xs: "106%", sm: "112%" }, top: "56%" },
  { color: "#FFC83D", size: 6, left: "38%", top: "104%" },
];

export default function Story() {
  return (
    <Box
      component="section"
      id="story"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
      }}
    >
      <GridPattern
        horizontalAlign="start"
        verticalAlign="start"
        opacity={0.7}
      />
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "minmax(0, 1fr)",
              md: "repeat(2, minmax(0, 1fr))",
            },
            alignItems: "center",
            gap: { xs: 8, md: 6, lg: 10 },
          }}
        >
          <Box>
            <SectionHeading
              icon="/icons/icon-container.png"
              title=" گیلمار؛ آرامش ناب در آغوش طبیعت گیلان"
              description="یلمار با فضایی آرام، سرسبز و چشم‌اندازی زیبا از دریاچه‌ها، میزبان
              لحظاتی دلنشین و به‌یادماندنی برای شماست. طبیعت بکر تالابی، حضور
              پرندگان بومی و مهاجر، نزدیکی به جاذبه‌های گردشگری گیلان، مسیر
              دسترسی مناسب و انواع تفریحات و گشت‌های گیلان‌گردی، این اقامتگاه را
              به مقصدی متفاوت برای سفر تبدیل کرده است."
              maxWidth={520}
              align="left"
            />
            <Box sx={{ mt: 3 }}>
              <CustomButton
                title=" اقامت در گیلمار"
                iconBackground
                icon={
                  <Image
                    src={"/icons/arrow.svg"}
                    alt="icon-arrow"
                    width={17}
                    height={13}
                  />
                }
                href="#story"
                iconPosition="right"
              />
            </Box>
          </Box>

          <Box
            sx={{
              position: "relative",
              width: { xs: "min(86vw, 340px)", md: "100%" },
              maxWidth: { xs: 360, md: 480 },
              aspectRatio: "331 / 366",
              justifySelf: "center",
              mx: "auto",
            }}
          >
            {dots.map((d, i) => (
              <Box
                key={i}
                sx={{
                  position: "absolute",
                  insetInlineEnd: d.left,
                  top: d.top,
                  width: d.size,
                  height: d.size,
                  borderRadius: "50%",
                  bgcolor: d.color,
                }}
              />
            ))}

            {collageImages.map((img) => (
              <Box
                key={img.src}
                sx={{
                  position: "absolute",
                  insetInlineEnd: img.left,
                  top: img.top,
                  width: img.w,
                  height: img.h,
                  zIndex: img.z,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 900px) 40vw, 300px"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            ))}

            {pills.map((p) => (
              <Box
                key={p.label}
                sx={{
                  position: "absolute",
                  insetInlineEnd: p.left,
                  top: p.top,
                  zIndex: 5,
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 0.75, md: 1.25 },
                  bgcolor: "#fff",
                  borderRadius: 999,
                  py: { xs: "10px", md: "12px" },
                  paddingInlineStart: { xs: 0.5, md: 0.75 },
                  paddingInlineEnd: { xs: 1.25, md: 2.5 },
                  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                  whiteSpace: "nowrap",
                }}
              >
                <Image
                  src={p.icon}
                  alt=""
                  width={60}
                  height={60}
                  style={{
                    width: "35px",
                    height: "35px",
                    maxWidth: 36,
                    background:
                      "linear-gradient(to right top, #26E05A,#02ADF7)",
                    borderRadius: "50%",
                    padding: "6px",
                  }}
                />
                <Typography
                  sx={{ fontSize: { xs: 9, md: 14 }, fontWeight: 600 }}
                >
                  {p.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
