"use client";

import { Box, Container } from "@mui/material";
import CabinCard from "./ui/Card";
import SectionHeading from "./ui/SectionHeading";
import GridPattern from "./ui/GridPattern";
const cabins = [
  {
    id: 1,
    image: "/images/package3.jpg",
    title: "کلبه چوبی گیلمار",
    description: "در دل جنگل‌های سرسبز و آرام",
  },
  {
    id: 2,
    image: "/images/package1.jpg",
    title: "کلبه چوبی گیلمار",
    description: "اقامتی آرام در دل طبیعت",
  },
  {
    id: 3,
    image: "/images/package2.jpg",
    title: "کلبه چوبی گیلمار",
    description: "تجربه‌ای متفاوت از طبیعت",
  },
  {
    id: 4,
    image: "/images/package4.jpg",
    title: "کلبه چوبی گیلمار",
    description: "آرامش در میان جنگل",
  },
];

export default function Cabins() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        py: {
          xs: 6,
          md: 8,
        },
      }}
    >
      <GridPattern horizontalAlign="end" verticalAlign="start" opacity={0.7} />
      <Container maxWidth="lg">
        <SectionHeading
          icon="/icons/icon-cabins.png"
          title=" انواع اتاق‌های اقامتگاه گیلمار"
          description="
            اتاق‌های گیلمار با فضایی دنج و امکانات مناسب، برای اقامتی آرام در دل
            طبیعت آماده شده‌اند."
          maxWidth={600}
        />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, minmax(0, 1fr))",
              md: "repeat(4, minmax(0, 1fr))",
            },
            mt: 2,
            gap: {
              xs: 1.5,
              md: 2,
            },
          }}
        >
          {cabins.map((cabin) => (
            <CabinCard
              key={cabin.id}
              image={cabin.image}
              title={cabin.title}
              description={cabin.description}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
