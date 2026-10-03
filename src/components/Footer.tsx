"use client";

import { Box, Container, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import MaskedImage from "./ui/MaskedImage";

const exploreLinks = [
  { label: "سوئیت‌ها و اقامت", href: "#" },
  { label: "راهنمای مهمان‌ها", href: "#" },
  { label: "درباره گیلمار", href: "#" },
  { label: "مجله گیلمار", href: "#" },
];

const contactLinks = [
  { label: "تلفن پشتیبانی: ۰۳۳۶۴۷۷۵۰۰ - ۰۱۳۳۴۷۷۵۴۱۱", href: "tel:01334775411" },
  {
    label: "ایمیل: Info@Gilmar-Gilan.Com",
    href: "mailto:Info@Gilmar-Gilan.Com",
  },
  {
    label:
      "موقعیت: گیلان، جاده رشت به فومن، روستای ملاسرا، خیابان کوزه‌گران، اقامتگاه گیلمار",
    href: "#",
  },
];

const socials = [
  { icon: "/icons/icon-linkdin.svg", href: "#" },
  { icon: "/icons/icon-telegram.svg", href: "#" },
  { icon: "/icons/icon-youtube.svg", href: "#" },
  { icon: "/icons/icon-x.svg", href: "#" },
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: { xs: 5, md: 6 } }}>
      <Container maxWidth="lg" dir="rtl">
        {/* Main footer card */}
        <Box
          sx={{
            position: "relative",
            borderRadius: "20px",
            bgcolor: "#FCFDFD",

            "&::before": {
              content: '""',
              position: "absolute",
              inset: "6px",
              border: "1px solid #E1E5EA",
              borderRadius: "20px",
              pointerEvents: "none",
              zIndex: 10,
            },
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "grid",

              // دسکتاپ:
              // راست = لوگو
              // وسط = لینک‌ها
              // چپ = نقشه
              gridTemplateColumns: {
                xs: "1fr",
                md: "0.85fr 1.3fr 1fr",
              },

              alignItems: "stretch",
              minHeight: {
                md: 145,
              },
            }}
          >
            {/* LOGO / DESCRIPTION */}
            <Box
              sx={{
                p: {
                  xs: 3,
                  md: 3,
                },

                textAlign: {
                  xs: "center",
                  md: "left",
                },
              }}
            >
              <Box
                sx={{
                  width: 150,
                  mx: {
                    xs: "auto",
                    md: 0,
                  },
                }}
              >
                <Image
                  src="/icons/icon-gilmar.png"
                  alt="گیلمار"
                  width={169}
                  height={53}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  mt: 1.5,
                  fontSize: {
                    xs: "12px",
                    md: "14px",
                  },
                  fontWeight: 600,
                  lineHeight: 2,
                  color: "#4C4C4D",
                }}
              >
                اقامتگاه بوم‌گردی گیلمار، بزرگ‌ترین مجموعه اکولوژ شمال کشور با
                امکانات رفاهی و تفریحی متنوع، در فضایی منحصربه‌فرد و با مجوز
                رسمی میراث فرهنگی گیلان فعالیت می‌کند.
              </Typography>
            </Box>

            {/* LINKS */}
            <Box
              sx={{
                pt: {
                  xs: 3,
                  md: 5,
                },

                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "0.5fr 1fr" },

                gap: 1,
              }}
            >
              {/* Explore */}
              <Box
                sx={{
                  mx: { xs: "auto", md: 0 },
                  width: { xs: "fit-content", md: "auto" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 800,
                    color: "#1A1A1A",
                    mb: 2.5,
                  }}
                >
                  کاوش در گیلمار
                </Typography>

                <Box
                  component="ul"
                  sx={{
                    listStyle: "none",
                    // p: 1,
                    m: 0,

                    display: "flex",
                    flexDirection: "column",
                    gap: 0.7,
                  }}
                >
                  {exploreLinks.map((link) => (
                    <Box key={link.label} component="li">
                      <Typography
                        component="a"
                        href={link.href}
                        sx={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#4C4C4D",
                          textDecoration: "none",

                          "&:hover": {
                            color: "#1A1A1A",
                          },
                        }}
                      >
                        • {link.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Contact */}
              <Box
                sx={{
                  mx: { xs: "auto", md: 0 },
                  width: { xs: "fit-content", md: "auto" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 800,
                    color: "#1A1A1A",
                    mb: 2.5,
                  }}
                >
                  راه‌های ارتباط با گیلمار
                </Typography>

                <Box
                  component="ul"
                  sx={{
                    listStyle: "none",
                    p: 0,
                    m: 0,

                    display: "flex",
                    flexDirection: "column",
                    gap: 0.7,
                  }}
                >
                  {contactLinks.map((link) => (
                    <Box key={link.label} component="li">
                      <Typography
                        component="a"
                        href={link.href}
                        sx={{
                          fontSize: "14px",
                          lineHeight: 1.8,
                          fontWeight: 600,
                          color: "#4C4C4D",
                          textDecoration: "none",

                          "&:hover": {
                            color: "#1A1A1A",
                          },
                        }}
                      >
                        {link.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* MAP */}
            <Box
              sx={{
                minHeight: {
                  xs: 200,
                  md: 145,
                },
                // mr: -12,
                ml: { xs: "-6px", md: "-8px" },
                py: "6px",
                overflow: "hidden",
                borderRadius: "20px",
              }}
            >
              <MaskedImage
                src="/images/map-image-container.png"
                alt="موقعیت اقامتگاه گیلمار روی نقشه"
                maskSrc="/masks/Subtract.svg"
              />
            </Box>
          </Box>
        </Box>

        {/* Bottom bar */}
        <Box
          sx={{
            mt: 0.7,
            position: "relative",
            // minHeight: 38,
            borderRadius: "80px",
            bgcolor: "#FCFDFD",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: "6px",
              border: "1px solid #EEF3F6",
              borderRadius: "800px",
              pointerEvents: "none",
              zIndex: 10,
            },
            px: {
              xs: 2,
              md: 3,
            },
            py: "14px",
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#4C4C4D",
            }}
          >
            © تمامی حقوق برای اقامتگاه بوم‌گردی گیلمار محفوظ است.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 0.8,
            }}
          >
            {socials.map((s, i) => (
              <IconButton
                key={i}
                component="a"
                href={s.href}
                sx={{
                  width: "40px",
                  height: "40px",
                  background:
                    "linear-gradient(229.52deg, #02ADF7 -18.98%, #26E05A 121.29%),radial-gradient(27.92% 100% at 50% 0%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%),radial-gradient(27.92% 100% at 50% 0%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)",
                  border: "1px solid #E3E8F0",
                  p: "10px",
                }}
              >
                <Image src={s.icon} alt="" width={18} height={16} />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
