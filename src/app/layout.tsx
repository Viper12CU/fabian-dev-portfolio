

import theme from "@/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";

// Organisms
import ResponsiveAppBar from "@organisms/AppBarCustom";






export const metadata: Metadata = {
  title: "My Dev Portfolio",
  description: "Mi portafolio como desarrollador",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body>
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <ResponsiveAppBar />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
