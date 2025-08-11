import "../styles/globals.css";
import "../styles/theme.css";
import "../styles/scrollbar.css";

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
  title: "AL",
  description:
    "Portfolio of AL – showcasing projects, skills, and experience in web development and design.",
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
