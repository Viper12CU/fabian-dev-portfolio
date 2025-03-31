
import { SpeedInsights } from '@vercel/speed-insights/next';
import theme from "@/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { Metadata, } from "next";

// Organisms
import ResponsiveAppBar from "@organisms/AppBarCustom";
import Footer from "@organisms/Footer/Footer";






export const metadata: Metadata = {
  title: "Mi Portafolio | Frontend Developer", // Título principal
  description: "Portafolio personal de Fabian Lemus. Desarrollador frontend con React, Next.js y Flutter", // Descripción SEO
  keywords: ["frontend", "portafolio", "react", "nextjs", "vue", "flutter", "desarrollador web"],
  authors: [{ name: "Fabian Lemus", url: "https://fabian-dev-portfolio.vercel.app/" }],
  icons: {
    icon: "/favicon.png",
  },
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
        <Footer/>
        <SpeedInsights/>
        </ThemeProvider>
      </body>
    </html>
  );
}
