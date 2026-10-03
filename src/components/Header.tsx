"use client";

import { useState } from "react";
import {
  Box,
  Toolbar,
  Stack,
  Button,
  IconButton,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import CustomButton from "./ui/Button";

const navItems = [
  { label: "خانه", href: "#top" },
  { label: "سوئیت ها و اقامت", href: "#story" },
  { label: "درباره گیلمار", href: "#trips" },
  { label: "راهنمای مهمان‌ها", href: "#journal" },
  { label: "مجله گیلمار", href: "#faq" },
  { label: "تماس با ما", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Box
      component="header"
      sx={{
        position: "absolute",
        insetInline: 0,
        top: 0,
        zIndex: 30,
        px: 2,
        pt: { xs: 2.5, md: 3.5 },
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          mx: "auto",
          maxWidth: "lg",
          width: "100%",
          height: { xs: 64, md: 72 },
          borderRadius: 999,
          display: { xs: "flex", lg: "grid" },
          justifyContent: "space-between",
          gridTemplateColumns: "auto minmax(0,3fr) auto",
          alignItems: "center",
          gap: { xs: 1, lg: 8 },
          paddingX: { xs: 1.5, lg: 2 },
          bgcolor: "background.paper",
          boxShadow: 3,
          backdropFilter: "blur(10px)",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "6px",
            border: "1px solid #EEF3F6",
            borderRadius: "800px",
            pointerEvents: "none",
            zIndex: 10,
          },
        }}
      >
        <Box
          component="a"
          href="#top"
          sx={{
            display: "block",
            width: { xs: 110, sm: 140, lg: 169 },
            flexShrink: 0,
          }}
        >
          <Image
            src="/icons/icon-gilmar.png"
            alt="icon-gilmar"
            width={169}
            height={53}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </Box>
        <Stack
          component="nav"
          direction="row"
          spacing="40px"
          aria-label="ناوبری اصلی"
          sx={{
            display: { xs: "none", lg: "flex" },
            fontSize: 14,
            fontWeight: 600,
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {navItems.map((item) => (
            <Box
              key={item.label}
              component="a"
              href={item.href}
              sx={{
                color: "text.primary",
                textDecoration: "none",
                transition: "color .2s",
                "&:hover": { color: "primary.main" },
              }}
            >
              {item.label}
            </Box>
          ))}
        </Stack>

        {/* Actions */}
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <CustomButton
            href="#trips"
            title="ورود یا ثبت نام"
            sx={{ display: { xs: "none", lg: "inline-flex" } }}
            icon={
              <Image
                src="/icons/user-icon.png"
                alt="user-icon"
                width={24}
                height={24}
              />
            }
            iconPosition="left"
            onClick={() => setOpen(false)}
          />
          <IconButton
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            sx={{ display: { xs: "inline-flex", lg: "none" } }}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Stack>
      </Toolbar>

      {/* Mobile / Tablet menu */}
      <Collapse
        in={open}
        unmountOnExit
        sx={{
          display: { lg: "none" },
          mx: "auto",
          maxWidth: "lg",
          mt: 1,
        }}
      >
        <Box
          sx={{
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 4,
            boxShadow: 3,
            p: 3,
          }}
        >
          <Stack spacing={2.5} sx={{ fontSize: 14, fontWeight: 600 }}>
            {navItems.map((item) => (
              <Box
                key={item.label}
                component="a"
                href={item.href}
                onClick={() => setOpen(false)}
                sx={{ color: "text.primary", textDecoration: "none" }}
              >
                {item.label}
              </Box>
            ))}
            <CustomButton
              href="#trips"
              title="ورود یا ثبت نام"
              icon={
                <Image
                  src="/icons/user-icon.png"
                  alt="user-icon"
                  width={24}
                  height={24}
                />
              }
              iconPosition="left"
              onClick={() => setOpen(false)}
            />
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
}
