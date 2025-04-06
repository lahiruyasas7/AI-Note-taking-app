import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/themeProvider";
import { Toaster } from "sonner";
import Header from "@/components/Header";

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
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex flex-1 flex-col px-4 pt-10 xl:px-8">
              {children}
            </main>
          </div>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
