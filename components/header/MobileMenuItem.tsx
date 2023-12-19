"use client";
import { ImenuItem } from "@/features/menu/types";
import { usePathname, useRouter } from "next/navigation";
import { MenuItem, SubMenu } from "react-pro-sidebar";
import { isActiveLink } from "../../utils/linkActiveChecker";

const MobileMenuItem = ({ menu }: { menu: ImenuItem }) => {
  const pathname = usePathname();
  const router = useRouter();

  const currentPathName =
    pathname.split("/")[1] === "destinations"
      ? "/destinations"
      : pathname.split("/")[1] === "blog-details"
      ? "/blog"
      : pathname;

  return menu?.children.length === 0 ? (
    <MenuItem
      key={menu.id}
      onClick={() => router.push(menu?.routePath)}
      data-bs-dismiss="offcanvas"
      className={pathname === menu?.routePath ? "menu-active-link" : ""}
    >
      {menu.name}
    </MenuItem>
  ) : (
    <SubMenu
      key={menu.id}
      label={menu?.name}
      className={
        menu?.children?.some(
          (item) =>
            item.routePath?.split("/")[1] == currentPathName.split("/")[1]
        )
          ? "menu-active-link"
          : ""
      }
    >
      {menu?.children?.map((item, i) => (
        <MenuItem
          data-bs-dismiss="offcanvas"
          key={item.id}
          onClick={() => router.push(item.routePath)}
          className={
            isActiveLink(item.routePath, pathname)
              ? "menu-active-link"
              : "inactive-menu"
          }
        >
          {item.name}
        </MenuItem>
      ))}
    </SubMenu>
  );
};

export default MobileMenuItem;
