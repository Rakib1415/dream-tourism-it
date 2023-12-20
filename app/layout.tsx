"use client";
import ScrollToTop from "@/components/common/ScrollToTop";
import Footer from "@/components/footer";
import Header from "@/components/header";
import store from "@/store/store";
import "@/styles/index.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <Header navbar={navbar} />
          {children}
          <Footer />
          <ScrollToTop />
        </Provider>
      </body>
    </html>
  );
}
