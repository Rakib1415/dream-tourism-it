import { ImenuItem, Menu } from "@/features/menu/types";

const useMenus = (menuItems: Menu[]): ImenuItem[] => {
  const filteredMenus = menuItems?.filter((item) => {
    if (
      item.name === "About" ||
      item.name === "Contact" ||
      item.name === "Tour" ||
      item.name === "Blog"
    ) {
      return false;
    }
    return true;
  });

  filteredMenus.sort((a, b) => a.position - b.position);

  const modifiedMenuItems = filteredMenus?.map((item) => {
    if (item.name === "Ziarah") {
      return {
        ...item,
        routePath: "/",
        children:
          item?.children?.length > 0
            ? item.children.map((subItem) => ({
                ...subItem,
                routePath: `/${item.name.toLowerCase()}/${subItem.name.toLowerCase()}`,
              }))
            : [],
      };
    }
    return {
      ...item,
      routePath: `/${item?.name?.toLowerCase()}`,
      children:
        item?.children?.length > 0
          ? item.children.map((subItem) => ({
              ...subItem,
              routePath: `/${item.name.toLowerCase()}/${subItem.name.toLowerCase()}`,
            }))
          : [],
    };
  });
  return modifiedMenuItems;
};

export default useMenus;
