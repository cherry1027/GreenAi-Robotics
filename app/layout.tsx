import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GreenAI Robotics",
  description: "Synthetic research demonstrator for environmental impact of AI-enabled robotics.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
