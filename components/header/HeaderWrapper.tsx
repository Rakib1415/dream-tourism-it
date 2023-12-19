"use client";
import { useEffect, useState } from "react";

const HeaderWrapper = (WrappedComponent: any) => {
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
  return <WrappedComponent navbar={navbar} />;
};

export default HeaderWrapper;
