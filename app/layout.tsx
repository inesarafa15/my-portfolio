import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ines Arafa | Software Engineer",
  description: "Portfolio of Ines Arafa — Software Engineer and Full-Stack Developer."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
