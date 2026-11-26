"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  palette: { primary: { main: "#4F46E5" }, background: { default: "red" } },
});

export default theme;
