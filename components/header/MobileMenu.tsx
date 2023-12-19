import Image from "next/image";
import Link from "next/link";

import { BASE_URL } from "@/constant/constants";

import { getAllMenuItem, getLogoUrlPath } from "@/apiServices/menu";
import { Menu as MenuType } from "@/features/menu/types";
import useMenus from "@/hooks/useMenus";
import { Menu, Sidebar } from "react-pro-sidebar";
import Social from "../common/social/Social";
import ContactInfo from "./ContactInfo";
import MobileMenuItem from "./MobileMenuItem";

const MobileMenu = async () => {
  const { menus }: { menus: Array<MenuType> } = await getAllMenuItem();
  const menuItems = useMenus(menus);
  const data = await getLogoUrlPath();

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link href="/">
          <Image
            style={{ width: "60px", height: "60px" }}
            src={`${BASE_URL}/${data?.general_settings[0].favicon}`}
            width={128}
            height={128}
            alt="logo"
          />
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

      <Sidebar width="400" backgroundColor="#fff">
        <Menu>
          {menuItems?.map((menu) => (
            <MobileMenuItem key={menu.id} menu={menu} />
          ))}

          {/* <MenuItem
             data-bs-dismiss="offcanvas"
             onClick={()=>router.push("/contact")}
             className={
              pathname === "/contact" ? "menu-active-link" : ""
            }
             
            >
              Contact
            </MenuItem> */}
          {/* End Contact  Menu */}
        </Menu>
      </Sidebar>

      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer">
        <ContactInfo />
        <div className="mt-10">
          <h5 className="text-16 fw-500 mb-10">Follow us on social media</h5>
          <div className="d-flex x-gap-20 items-center">
            <Social />
          </div>
        </div>
        {/* <div className="mt-20">
          <Link
            className=" button -dark-1 px-30 fw-400 text-14 bg-blue-1 h-50 text-white"
            href="/login"
          >
            Become An Expert
          </Link>
        </div> */}
      </div>
      {/* End pro-footer */}
    </>
  );
};

export default MobileMenu;
