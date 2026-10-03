"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import PuzzleFrame from "./ui/PuzzleFrame";
import CustomButton from "./ui/Button";
import SectionHeading from "./ui/SectionHeading";
import GridPattern from "./ui/GridPattern";

const services = [
  { icon: "/icons/icon-file.png", label: "۱ شب اقامت" },
  { icon: "/icons/pkg-breakfast.png", label: "صبحانه" },
  { icon: "/icons/pkg-boat.png", label: "قایق سواری" },
  { icon: "/icons/pkg-forest.png", label: "تور جنگل‌نوردی" },
];

export default function Package() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 10 },
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
            gridTemplateColumns: { xs: "1fr", md: "1fr 1.1fr" },
            alignItems: "center",

            gap: { xs: 5, md: 10 },
          }}
        >
          {/* Right */}
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <SectionHeading
              icon="/icons/icon-package.png"
              align="left"
              title=" پکیج‌های ویژه اقامت در گیلمار"
              description="پکیج‌های ویژه ما ترکیبی از اقامت آرام، غذاهای محلی و تفریحات
              هیجان‌انگیز در دل طبیعت است."
              maxWidth={600}
            />
            {/* border  */}
            <Box sx={{ borderBottom: "1px dashed #4C4C4D1F", mt: 2 }}></Box>
            <Typography
              sx={{
                mt: 3,
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 800,
                color: "#1A1A1A",
              }}
            >
              پکیج رمانتیک دو نفره
            </Typography>
            <Typography sx={{ mt: 0.5, fontSize: "14px", color: "#4C4C4D" }}>
              شامل: ۱ شب اقامت + صبحانه + تور جنگل‌نوردی + قایق‌سواری
            </Typography>

            {/* card icon */}
            <Box
              sx={{
                mt: 3,
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: { xs: 1, md: 3 },
              }}
            >
              {services.map((s) => (
                <Box
                  key={s.label}
                  sx={{
                    // bgcolor: "#fff",
                    background: "#FCFDFD",

                    borderRadius: 2,
                    border: "1px solid #EEF3F6",
                    boxShadow: "0px 24px 48px 0px #002E251F",

                    py: 2,
                    px: 1,
                    textAlign: "center",
                  }}
                >
                  <Box sx={{ width: 52, height: 52, mx: "auto" }}>
                    <Image
                      src={s.icon}
                      alt=""
                      width={52}
                      height={52}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      mt: 1,
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#4C4C4D",
                    }}
                  >
                    {s.label}
                  </Typography>
                </Box>
              ))}
            </Box>
            {/* border  */}
            <Box sx={{ borderBottom: "1px dashed #4C4C4D1F", mt: 2 }}></Box>
            {/* Price and button */}
            <Box
              sx={{
                mt: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "space-between" },
                gap: 3,
                flexWrap: "wrap",
              }}
            >
              <Typography
                sx={{ fontSize: 13, fontWeight: 700, color: "#43A047" }}
              >
                قیمت: ۲۳۰۰۰۰۰ تومان
              </Typography>
              <Box sx={{ mt: 2 }}>
                <CustomButton
                  title="همین حالا رزرو کن"
                  iconBackground
                  icon={
                    <Image
                      src={"/icons/arrow.svg"}
                      alt="icon-arrow"
                      width={17}
                      height={13}
                    />
                  }
                  href="#package"
                  iconPosition="right"
                />
              </Box>
            </Box>
          </Box>

          {/* Left pic */}
          <Box>
            <Box
              // sx={{
              //   position: "relative",
              //   width: "100%",
              //   maxWidth: 360,
              //   mx: { xs: "auto", md: 0 },
              // }}
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: { xs: 360, md: 602 },
                mx: "auto",
              }}
            >
              <PuzzleFrame
                src="/images/package3.jpg"
                alt="کلبه اقامتی گیلمار"
              />
              {/* caption pic */}
              <Box
                sx={{
                  position: "absolute",
                  top: "12%",
                  insetInlineEnd: "-1%",

                  maxWidth: 140,
                  px: 1.5,
                  py: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 10,
                    lineHeight: 1.8,
                    fontWeight: 700,
                    color: "#1a1d29",
                  }}
                >
                  تجربه اقامتی اصیل در دل طبیعت شمال
                </Typography>
              </Box>
              {/* dot slide */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: "4%",
                  insetInlineEnd: "2%",
                  display: "flex",
                  justifyContent: "center",
                  gap: 0.75,
                  mt: 2,
                }}
              >
                {[0, 1, 2, 3].map((i) => (
                  <Box
                    key={i}
                    sx={{
                      width: { xs: "20px", md: "68px" },
                      height: 6,
                      borderRadius: 999,
                      bgcolor: i === 0 ? "#fff" : "#ffffff8f",
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
