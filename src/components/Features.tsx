import { Box, Container, Stack, Typography } from "@mui/material";
import SectionHeading from "./ui/SectionHeading";
import GridPattern from "./ui/GridPattern";
import { FeatureCardProps } from "@/types/types";
const features = [
  {
    image: "/icons/icon-file.png",
    title: "مراقبت از وسایل اقامتگاه",
    text: "مهمانان عزیز مسئول نگهداری از تجهیزات و وسایل داخل اقامتگاه در طول مدت اقامت هستند.",
    rotate: -10,
    dy: 14,
  },
  {
    image: "/icons/icon-binoculars.png",
    title: "حفظ آرامش اقامتگاه",
    text: "برای حفظ فضای آرام و دلنشین گیلامار لطفاً از ایجاد سروصدای زیاد به‌ویژه در ساعات شب خودداری کنید.",
    rotate: 8,
    dy: 0,
  },
  {
    image: "/icons/icon-van.png",
    title: "حفظ طبیعت و محیط زیست",
    text: "گیلامار در دل طبیعت قرار دارد؛ لطفاً در حفظ محیط‌زیست، فضای سبز و منابع طبیعی همراه ما باشید.",
    rotate: -10,
    dy: 14,
  },
];

const dots = [
  { top: "8%", left: "5%", size: 6, color: "#f7b955", round: true },
  { top: "12%", right: "10%", size: 8, color: "#c9b8f5", round: false },
  { top: "34%", left: "36%", size: 6, color: "#8fa8f5", round: true },
  { top: "56%", right: "12%", size: 6, color: "#94c8ff", round: true },
  { top: "44%", left: "62%", size: 7, color: "#f4a5b5", round: true },
  { top: "70%", left: "8%", size: 8, color: "#c9b8f5", round: false },
];

function DottedCurve() {
  return (
    <Box
      component="svg"
      aria-hidden
      viewBox="0 0 900 120"
      preserveAspectRatio="none"
      sx={{
        display: { xs: "none", md: "block" },
        position: "absolute",
        top: 58,
        left: "12%",
        width: "76%",
        height: 100,
        pointerEvents: "none",
      }}
    >
      <path
        d="M0 40 C 120 100, 200 100, 300 50 S 480 -10, 600 50 S 800 110, 900 60"
        fill="none"
        stroke="#cdd6ea"
        strokeWidth="1.5"
        strokeDasharray="2 7"
        strokeLinecap="round"
      />
    </Box>
  );
}

function FeatureCard({
  emoji,
  image,
  title,
  text,
  rotate,
  dy,
}: FeatureCardProps) {
  return (
    <Stack
      component="article"
      sx={{
        position: "relative",
        px: { md: 3 },
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: "128px",
          height: "168px",
          mx: "auto",
          mb: "35px",
          mt: `${dy}px`,
          display: "grid",
          placeItems: "center",
          borderRadius: "26px",
          bgcolor: "#fff",
          transform: `rotate(${rotate}deg)`,
          boxShadow: "0 12px 30px rgba(120, 140, 190, 0.22)",
        }}
      >
        {image ? (
          <Box
            component="img"
            src={image}
            alt=""
            sx={{
              width: "96px",
              height: "96px",
              objectFit: "contain",
              transform: `rotate(${-rotate}deg)`,
            }}
          />
        ) : (
          <Box
            component="span"
            sx={{
              fontSize: 44,
              lineHeight: 1,
              transform: `rotate(${-rotate}deg)`,
            }}
          >
            {emoji}
          </Box>
        )}
      </Box>

      <Typography
        component="h3"
        sx={{ fontSize: 16, fontWeight: 800, color: "#1A1A1A", mx: "auto" }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          mt: 1.5,
          mx: "auto",
          maxWidth: 240,
          textAlign: "center",
          fontSize: 14,
          fontWeight: 600,
          lineHeight: 2.1,
          color: "#4C4C4D",
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
}

export default function Features() {
  return (
    <Box
      component="section"
      dir="rtl"
      sx={{
        position: "relative",
        overflow: "hidden",
        alignItems: "center",
        mx: "auto",
        py: { xs: 8, md: 10 },
      }}
    >
      <GridPattern horizontalAlign="end" verticalAlign="start" opacity={0.7} />
      {dots.map((d, i) => (
        <Box
          key={i}
          aria-hidden
          sx={{
            position: "absolute",
            top: d.top,
            left: d.left,
            right: d.right,
            width: d.size,
            height: d.size,
            bgcolor: d.color,
            borderRadius: d.round ? "50%" : "2px",
            transform: d.round ? "none" : "rotate(45deg)",
            display: { xs: "none", md: "block" },
          }}
        />
      ))}

      <Container
        maxWidth="md"
        sx={{ position: "relative", textAlign: "center" }}
      >
        {/* Heading */}

        <SectionHeading
          icon="/icons/icon-features.png"
          title="همراهی برای حفظ آرامش و طبیعت گیلمار"
          description="رای حفظ آرامش، نظم و تجربه‌ای دلنشین برای همه مهمانان، لطفاً قوانین
            اقامتگاه گیلمار را پیش از رزرو مطالعه و رعایت فرمایید."
          maxWidth={700}
        />
        {/* Cards */}
        <Box sx={{ position: "relative", mt: { xs: 6, md: 9 } }}>
          <DottedCurve />
          <Box
            sx={{
              position: "relative",
              display: "grid",
              gap: { xs: 6, md: 2 },
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            }}
          >
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
