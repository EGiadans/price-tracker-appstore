import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Funnel_Display } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "theme";
import { PropsWithChildren } from "react";
import { CustomAppBar } from "@/components/CustomAppBar";

const funnel = Funnel_Display({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  // variable: "--font-funnel-display",
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={funnel.className}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CustomAppBar />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
