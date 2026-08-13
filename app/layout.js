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
  metadataBase: new URL("https://salman-ali-khan.vercel.app"),
  title: {
    default: "Salman Ali Khan — AI/ML Engineer & Odoo Developer",
    template: "%s",
  },
  description:
    "Portfolio of Salman Ali Khan, an AI/ML engineer and Odoo 19 developer, BCA Honours graduate (2022–2026), building custom Odoo modules and ML systems in Riyadh.",
  keywords: [
    "Salman Ali Khan",
    "Odoo developer",
    "Odoo 19",
    "AI ML engineer",
    "Odoo Riyadh",
    "Odoo real estate module",
    "Odoo CRM integration",
    "brain tumour detection",
    "YOLOv8 EfficientNet",
  ],
  authors: [{ name: "Salman Ali Khan" }],
  openGraph: {
    title: "Salman Ali Khan — AI/ML Engineer & Odoo Developer",
    description:
      "AI/ML engineer and Odoo 19 developer, BCA Honours graduate (2022–2026), building custom Odoo modules and ML systems in Riyadh.",
    url: "/",
    siteName: "Salman Ali Khan",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salman Ali Khan — AI/ML Engineer & Odoo Developer",
    description:
      "AI/ML engineer and Odoo 19 developer, BCA Honours graduate (2022–2026), building custom Odoo modules and ML systems in Riyadh.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var t = window.localStorage.getItem("theme");
    if (t === "journal" || t === "frost") {
      document.documentElement.dataset.theme = t;
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body
        className={`${cinzel.variable} ${spectral.variable} ${jetbrains.variable} ${amiri.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
