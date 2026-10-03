"use client";

import { Box, Container } from "@mui/material";
import CardSlider from "./ui/CardSlider";
import SectionHeading from "./ui/SectionHeading";
import GridPattern from "./ui/GridPattern";

const trips = [
  { image: "/images/trip-bird.png", title: "پرنده نگری" },
  { image: "/images/trip-boat.png", title: "قایق سواری" },
  { image: "/images/trip-bike.png", title: "دوچرخه سواری" },
];

const SIZE_SM = { xs: 120, sm: 150, md: 170, lg: 200 };
const SIZE_LG = { xs: 140, sm: 175, md: 200, lg: 230 };

export default function Trips() {
  return (
    <Box
      component="section"
      id="trips"
      sx={{
        position: "relative",
        overflowX: "hidden",
        py: { xs: 8, md: 10 },
      }}
    >
      <GridPattern
        horizontalAlign="start"
        verticalAlign="start"
        opacity={0.7}
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.15fr 0.85fr" },
          alignItems: "center",
          gap: { xs: 4, md: 0 },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <SectionHeading
            icon="/icons/icon-trip.png"
            title="خدمات رفاهی گیلمار برای اقامتی دلنشین"
            description="ر گیلمار، آرامش طبیعت را در کنار خدمات رفاهی کامل تجربه می‌کنید؛
              فضایی دنج و صمیمی که برای ساختن لحظاتی آرام، خوش و به‌یادماندنی
              آماده شده است."
            maxWidth={600}
            align="left"
          />
        </Container>

        <CardSlider items={trips} sizeSm={SIZE_SM} sizeLg={SIZE_LG} />
      </Box>
    </Box>
  );
}
