"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";
import GridPattern from "./ui/GridPattern";

const faqs = [
  {
    question: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد!",
    answer:
      "در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود. لطفاً برای بررسی دقیق شرایط و هماهنگی بهتر قبل از تاریخ اقامت با پشتیبانی در ارتباط باشید.",
  },
  {
    question: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد!",
    answer:
      "در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود.",
  },
  {
    question: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد!",
    answer:
      "در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود.",
  },
  {
    question: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد!",
    answer:
      "در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود.",
  },
  {
    question: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد!",
    answer:
      "در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود.",
  },
];

export default function Faq() {
  const [expanded, setExpanded] = useState<number | false>(0);

  const handleChange =
    (index: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? index : false);
    };

  return (
    <Box
      component="section"
      sx={{ py: { xs: 8, md: 10 }, position: "relative", overflow: "hidden" }}
    >
      <GridPattern
        horizontalAlign="start"
        verticalAlign="start"
        opacity={0.7}
      />
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr" },
            gap: { xs: 5, md: 8 },
            alignItems: "start",
          }}
        >
          {/* Title and description and pic */}
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <SectionHeading
              icon="/icons/icon-faq.png"
              title=" سوالات متداول مهمانان گیلمار"
              description="پاسخ رایج‌ترین سوالات درباره رزرو، اقامت و امکانات گیلمار را اینجا
              پیدا کنید تا با خیال راحت سفر خود را برنامه‌ریزی کنید."
              maxWidth={550}
              align="left"
            />
            <Box
              sx={{
                mt: { xs: 4, md: 5 },
                width: { xs: 220, md: 280 },
                mx: { xs: "auto", md: 0 },
              }}
            >
              <Image
                src="/icons/icon-binoculars.svg"
                alt=""
                width={420}
                height={382}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Box>
          {/* question list */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 1.5, md: 2 },
            }}
          >
            {faqs.map((faq, i) => (
              <Accordion
                key={i}
                expanded={expanded === i}
                onChange={handleChange(i)}
                disableGutters
                elevation={0}
                sx={{
                  position: "relative",
                  bgcolor: "#fff",
                  borderRadius:
                    expanded === i ? "20px !important" : "9999px !important",
                  "&::before": {
                    display: "none",
                  },

                  overflow: "hidden",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 6,
                    right: 6,
                    bottom: 6,
                    left: 6,
                    border: "1px solid #EEF3F6",
                    borderRadius: expanded === i ? "14px" : "999px",
                    pointerEvents: "none",
                    zIndex: 2,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <IconButton
                      size="small"
                      sx={{
                        width: 36,
                        height: 36,
                        color: "#fff",
                        background:
                          " linear-gradient(229.52deg, #02ADF7 -18.98%, #26E05A 121.29%)",
                        "&:hover": { bgcolor: "#19b986" },
                      }}
                      component="span"
                      disableRipple
                    >
                      {expanded === i ? (
                        <RemoveIcon sx={{ fontSize: 18 }} />
                      ) : (
                        <AddIcon sx={{ fontSize: 18 }} />
                      )}
                    </IconButton>
                  }
                  sx={{
                    px: { xs: 2.5, md: 3.5 },
                    py: { xs: 1.5, md: 2.5 },
                    minHeight: { xs: 64, md: 76 },

                    justifyContent: "space-between",
                    transition: "border-radius 0.2s",
                    "&.Mui-expanded": {
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      minHeight: { xs: 64, md: 76 },
                    },
                    "& .MuiAccordionSummary-content": {
                      flexGrow: 0,
                      margin: 0,
                      "&.Mui-expanded": {
                        margin: 0,
                      },
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "13px", md: "14px" },
                      fontWeight: 800,
                      color: "#1A1A1A",
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ px: { xs: 2.5, md: 3.5 }, pb: 3, pt: 0 }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "12px", md: "14px" },
                      fontWeight: 600,
                      lineHeight: 2.1,
                      color: "#4C4C4D",
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
