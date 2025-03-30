import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/themeProvider";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
