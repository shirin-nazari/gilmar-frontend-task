"use client";

import { Box, Container } from "@mui/material";
import CabinCard from "./ui/Card";
import SectionHeading from "./ui/SectionHeading";
import GridPattern from "./ui/GridPattern";

const articles = [
  {
    image: "/images/journal.png",
    title: "۱0 تجربه‌ای که نباید در طبیعت شمال از دست بدهید",
    description:
      "از قدم‌زدن در جنگل‌های مه‌آلود تا نوشیدن چای کنار شالیزار، در این مقاله با لذت‌های ساده و آرامش‌بخش طبیعت...",
  },
  {
    image: "/images/journal.png",
    title: "۱0 تجربه‌ای که نباید در طبیعت شمال از دست بدهید",
    description:
      "از قدم‌زدن در جنگل‌های مه‌آلود تا نوشیدن چای کنار شالیزار، در این مقاله با لذت‌های ساده و آرامش‌بخش طبیعت...",
  },
  {
    image: "/images/journal.png",
    title: "۱0 تجربه‌ای که نباید در طبیعت شمال از دست بدهید",
    description:
      "از قدم‌زدن در جنگل‌های مه‌آلود تا نوشیدن چای کنار شالیزار، در این مقاله با لذت‌های ساده و آرامش‌بخش طبیعت...",
  },
];

export default function Journal() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 10 },
      }}
    >
      <GridPattern horizontalAlign="end" verticalAlign="start" opacity={0.7} />
      <Container maxWidth="lg">
        {/* Title */}
        <SectionHeading
          icon="/icons/icon-journal.png"
          title="مجله و مقالات گیلمار؛ روایت سفر، طبیعت و آرامش"
          description="ر مجله گیلمار، خواندنی‌هایی درباره سفر، طبیعت، فرهنگ محلی و تجربه
            اقامتی دلنشین را دنبال کنید."
          maxWidth={600}
        />

        {/* Cards */}
        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 2.5, md: 3 },
          }}
        >
          {articles.map((article, i) => (
            <CabinCard
              key={i}
              image={article.image}
              title={article.title}
              description={article.description}
              aspectRatio="1 / 1.15"
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
