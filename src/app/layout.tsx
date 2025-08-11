import "../styles/index.css";

import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Main from "./main";
import { Analytics } from "@vercel/analytics/next";

const fontJetBrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arnas Lebedevas",
  description:
    "Arnas Lebedevas – showcasing expertise in software development, innovative projects, and technical skills.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontJetBrains.variable}>
        <Main>{children}</Main>
        <Analytics />
      </body>
    </html>
  );
}
