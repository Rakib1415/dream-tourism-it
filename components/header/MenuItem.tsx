"use client";
import { ImenuItem } from "@/features/menu/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActiveLink } from "../../utils/linkActiveChecker";

const MenuItem = ({ menu }: { menu: ImenuItem }) => {
  const pathname = usePathname();
  const currentPathName =
    pathname.split("/")[1] === "destinations"
      ? "/destinations"
      : pathname.split("/")[1] === "blog-details"
      ? "/blog"
      : pathname;
  return (
    <li
      className={`${
        isActiveLink(menu?.routePath, currentPathName) ? "current" : ""
      } menu-item-has-children`}
    >
      {menu?.children?.length > 0 ? (
        <a href="#">
          <span className="mr-10">{menu.name}</span>
          <i className="icon icon-chevron-sm-down" />
        </a>
      ) : (
        <Link href={menu?.routePath}>
          <span className="mr-10">{menu.name}</span>
        </Link>
      )}
      {menu.children.length > 0 && (
        <ul className="subnav">
          {menu.children.map((item: ImenuItem) => (
            <li
              key={item.id}
              className={`${
                isActiveLink(item.routePath, pathname) ? "current" : ""
              } menu-item-has-children`}
            >
              <Link href={item.routePath}>{item.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
