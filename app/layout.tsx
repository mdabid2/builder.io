import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Builder.io + Next.js",
  description: "A Next.js app with Builder.io integration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
