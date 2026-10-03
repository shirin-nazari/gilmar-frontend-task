"use client";

import { Box, Container, Typography, Avatar } from "@mui/material";
import Image from "next/image";
import CustomButton from "./ui/Button";

const avatars = [
  "/images/avatar1.png",
  "/images/avatar2.png",
  "/images/avatar3.png",
];
export default function Hero() {
  return (
    <Box
      component="section"
      id="top"
      sx={{
        position: "relative",
        overflow: "hidden",

        pt: { xs: 16, md: 20 }, // 128px / 160px
        pb: { xs: 5, md: 7 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          textJustify: "",
        }}
      >
        {/* تیتر */}
        <Typography
          component="h1"
          sx={{
            mx: "auto",
            maxWidth: 896,
            fontWeight: 800,
            lineHeight: 1.6,
            fontSize: { xs: "20px", md: "30px", lg: "40px" },
            color: "#1E293B",
          }}
        >
          اقامتگاه بوم‌گردی گیلمار جایی که طبیعت خانه است
        </Typography>

        <Typography
          sx={{
            mx: "auto",
            mt: 2,
            fontWeight: "semibold",
            maxWidth: 768,
            fontSize: { xs: 12, md: 14 },
            lineHeight: { xs: "28px", md: "32px" },
            color: "text.secondary",
            mb: 1.5,
          }}
        >
          اقامتگاه بومگردی گیلمار بزرگ ترین مجموعه اکولوژ شمال کشور دارای
          امکانات رفاهی و تفریحی در فضایی منحصر به فرد با مجوز رسمی از اداره
          میراث فرهنگی، صنایع دستی و گردشگری گیلان فعالیت دارد.
        </Typography>
        <CustomButton
          title=" مهمان گیلمار شو"
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

        <Box sx={{ position: "relative" }}>
          <Image
            src="/images/image-hero.png"
            alt="نمای اقامتگاه بوم‌گردی گیلمار در میان طبیعت شمال"
            width={1280}
            height={581}
            priority
            style={{ width: "100%", height: "auto", display: "block" }}
          />

          <Box
            sx={{
              position: "absolute",
              insetInlineStart: 0,
              bottom: { xs: 0, sm: "1%", md: "2%" },
              width: { xs: "25%", md: "24%" },
              textAlign: "start",
              px: { xs: 1, md: 3 },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 8, md: 14 },
                lineHeight: { xs: 1.2, md: 2.2 },
                fontWeight: 600,
              }}
            >
              فرار از شلوغی شهر و تجربه‌ی اقامتی اصیل در دل طبیعت شمال{" "}
            </Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",
              insetInlineEnd: { xs: 1, md: "0.5%" },
              bottom: { xs: 1, md: "3%" },
              display: "flex",
              alignItems: "center",
              gap: { xs: 0, md: 1 },
              bgcolor: "#fff",
              borderRadius: 999,
              px: { xs: 0.5, md: 2 },
              py: { xs: 0.5, md: 1.25 },
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {avatars.map((src, i) => (
                <Avatar
                  key={src}
                  src={src}
                  sx={{
                    width: { xs: "15px", md: "26px" },
                    height: { xs: "15px", md: "26px" },
                    border: "2px solid #fff",
                    marginInlineStart: i === 0 ? 0 : { xs: -1.1, md: -1.5 },
                    zIndex: avatars.length - i,
                  }}
                />
              ))}
            </Box>

            <Typography
              sx={{
                fontSize: { xs: 9, md: 14 },
                fontWeight: 600,
                whiteSpace: "nowrap",
                color: "#1E293B",
              }}
            >
              +۱۲۰ رزرو موفق
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
