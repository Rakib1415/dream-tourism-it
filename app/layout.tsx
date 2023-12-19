"use client";
import store from "@/store/store";
import Aos from "aos";
import "aos/dist/aos.css";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { Provider } from "react-redux";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../styles/index.scss";

const inter = Inter({ subsets: ["latin"] });

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
