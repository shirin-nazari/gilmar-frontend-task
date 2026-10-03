"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";

/**
 * اسلایدر افقی با اسکرول‌اسنپ که همیشه یک لبه (چپ در RTL) تا انتهای صفحه بیرون می‌زنه
 * و کارتی که وسط دید کاربره، بزرگ‌تر نمایش داده میشه.
 *
 * items: [{ image, title }]
 * sizeSm / sizeLg: آبجکت responsive عرض کارت (مثل { xs, sm, md })
 */
export default function CardSlider({ items, sizeSm, sizeLg }) {
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);
  const wrapperRef = useRef(null);
  const middleIndex = Math.floor(items.length / 2);
  const [activeIndex, setActiveIndex] = useState(middleIndex);
  const [bleed, setBleed] = useState(0);

  const measureBleed = useCallback(() => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    setBleed(Math.max(0, rect.left));
  }, []);

  const updateActiveByCenter = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(cardCenter - containerCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });
    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    measureBleed();
    window.addEventListener("resize", measureBleed);
    return () => window.removeEventListener("resize", measureBleed);
  }, [measureBleed]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const middleCard = cardRefs.current[middleIndex];
    if (middleCard) {
      container.scrollLeft = middleCard.offsetLeft - container.offsetLeft;
    }
    updateActiveByCenter();

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveByCenter();
          ticking = false;
        });
        ticking = true;
      }
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [middleIndex, updateActiveByCenter]);

  const goNext = () => {
    const container = scrollRef.current;
    if (!container) return;
    const nextIndex = activeIndex + 1 >= items.length ? 0 : activeIndex + 1;
    const card = cardRefs.current[nextIndex];
    if (card) {
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      ref={wrapperRef}
      sx={{
        position: "relative",
        width: `calc(100% + ${bleed}px)`,
        marginInlineEnd: `-${bleed}px`,
        overflow: "hidden",
      }}
    >
      <Box
        ref={scrollRef}
        dir="rtl"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 1, md: 1.5 },
          overflowX: "auto",
          overflowY: "visible",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          pl: { xs: 2, md: 4 },
          pr: { xs: 2, md: 0 },
        }}
      >
        {items.map((item, i) => {
          const isActive = i === activeIndex;
          return (
            <Box
              key={`${item.title}-${i}`}
              ref={(el) => (cardRefs.current[i] = el)}
              data-index={i}
              sx={{
                position: "relative",
                flex: "0 0 auto",
                width: isActive ? sizeLg : sizeSm,
                aspectRatio: "3 / 4",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                scrollSnapAlign: "center",
                transition: "width 0.3s ease",
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 900px) 40vw, 200px"
                style={{ objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  insetInline: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.75), transparent)",
                  p: { xs: 1.25, md: 1.75 },
                  pt: 5,
                }}
              >
                <Box
                  component="p"
                  sx={{
                    m: 0,
                    color: "#fff",
                    fontSize: { xs: 11, md: 13 },
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>

      <IconButton
        onClick={goNext}
        aria-label="اسلاید بعدی"
        sx={{
          position: "absolute",
          top: "50%",
          insetInlineStart: { xs: "-4%", md: "-2%" },
          transform: "translate(50%, -50%)",
          zIndex: 2,
          width: { xs: 40, md: 48 },
          height: { xs: 40, md: 48 },
          color: "#fff",
          border: "3px #F5F8FA solid",
          background: "linear-gradient(135deg, #26E05A, #02ADF7)",
          boxShadow: "0 2px 2px rgba(2,173,247,0.35)",
          "&:hover": {
            background: "linear-gradient(135deg, #26E05A, #02ADF7)",
            opacity: 0.9,
          },
        }}
      >
        <ArrowForwardIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}
