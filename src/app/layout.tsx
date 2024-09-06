import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CircularGradientScrollUpButton from '../components/CircularGradientScrollUpButton'
import FloatingCardScrollUpButton from "../components/FloatingCardScrollUpButton";
import AnimatedArrowScrollUpButton from "../components/AnimatedArrowScrollUpButton";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CENFI CIA. LTDA.",
  description: "Página del preuniversitario CENFI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={inter.className}>{children}
      <FloatingCardScrollUpButton />
      </body>
    </html>
  );
}
