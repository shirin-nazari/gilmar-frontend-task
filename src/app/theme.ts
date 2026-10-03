"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#26E05A",
    },
    success: {
      main: "#0d9488",
      light: "#d1e7dd",
      dark: "#0f766e",
    },
    background: {
      default: "#EEF3F6",
      paper: "#FCFDFD",
    },
    text: {
      primary: "#1f2937",
      secondary: "#4C4C4D",
    },
  },
  typography: {
    fontFamily: "var(--font-custom), Arial, sans-serif",
  },
  shape: {
    borderRadius: 16,
  },
});

export default theme;
