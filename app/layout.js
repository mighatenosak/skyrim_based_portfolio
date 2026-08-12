import { Cinzel, Spectral, JetBrains_Mono, Amiri } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata = {
  title: "Salman Ali Khan — AI/ML Engineer & Odoo Developer",
  description:
    "Portfolio of Salman Ali Khan, an AI/ML engineer and Odoo 19 developer, BCA Honours graduate (2022–2026), building custom Odoo modules and ML systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${spectral.variable} ${jetbrains.variable} ${amiri.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
