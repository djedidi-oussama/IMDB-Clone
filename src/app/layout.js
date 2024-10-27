import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "IMDB Clone",
  description: "This is a IMDB Clone , movies and tv shows , made with next.js 15 and tailwindcss",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
        <Header />
        <Navbar />
        <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
