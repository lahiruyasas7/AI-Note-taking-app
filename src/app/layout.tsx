import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lahiru's Notes",
  description: "Created by Lahiru for notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
