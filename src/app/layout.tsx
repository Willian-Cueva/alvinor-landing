import type { Metadata } from "next";

import "./globals.css";
import { inter } from "@/config/fonts";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Footer, TopMenu } from "@/components";

export const metadata: Metadata = {
  title: "Alvinor",
  description:
    "Página de presentación de productos relacionados con materiales de construcción y arquitectura, específicamente: Vidrio, Planchas de Policarbonato, Láminas de Aluminio Compuesto, Láminas Acrílicas de Baño, Planchas de Tumbado. Puedes encontrar catálogos de productos o tiendas en línea que ofrecen estos materiales para uso en proyectos de construcción, decoración o renovación.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TopMenu />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
