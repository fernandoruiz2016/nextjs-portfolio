import { Inter } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import FirefliesBackground from "@/components/FirefliesBackground";
import Sound from "@/components/sound";

const inter = Inter({ subsets: ["latin"],
variable: "--font-inter" });

export const metadata = {
  title: "Fernando Ruiz - Portfolio",
  description: "Personal portfolio created using nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-background text-foreground font-inter")}>{children}
        <FirefliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
