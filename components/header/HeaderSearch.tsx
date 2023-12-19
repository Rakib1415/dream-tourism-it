"use client";

import { getAllMenuItem } from "@/apiServices/menu";
import { ImenuItem, Menu } from "@/features/menu/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const HeaderSearch = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    "use server";
    const { menus }: { menus: Array<Menu> } = await getAllMenuItem();
    const destinations: ImenuItem[] =
      menus.find((item: Menu) => item.name === "Destinations")?.children || [];

    if (searchText) {
      const isLocation = destinations.find((item) =>
        item.name.toLowerCase().includes(searchText)
      );
      if (isLocation) {
        router.push(`/destinations/${isLocation?.name?.toLowerCase()}`);
      } else {
        toast("Your Location is not found!", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  return (
    <div className="single-field relative d-flex items-center xl:d-none mr-20">
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <input
        value={searchText}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
        onChange={(e) => setSearchText(e.target.value)}
        className="pl-50 border-light text-dark-1 h-50 rounded-8"
        type="text"
        required
        placeholder="Destination, attraction, hotel, etc"
      />
      <button
        onClick={handleSubmit}
        type="submit"
        className="absolute d-flex items-center h-full"
      >
        <i className="icon-search text-20 px-15 text-dark-1" />
      </button>
    </div>
  );
};

export default HeaderSearch;
