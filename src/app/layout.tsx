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
    "Passionate software developer focused on building scalable, efficient applications with clean code and modern best practices.",
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL("https://arnaslebedevas.vercel.app"),
  openGraph: {
    title: "Arnas Lebedevas",
    description:
      "Passionate software developer focused on building scalable, efficient applications with clean code and modern best practices.",
    url: "https://arnaslebedevas.vercel.app",
    siteName: "Arnas Lebedevas",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnas Lebedevas",
    description:
      "Passionate software developer focused on building scalable, efficient applications with clean code and modern best practices.",
    creator: "@trustmycode",
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
