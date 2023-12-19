import { getAllMenuItem } from "@/apiServices/menu";
import { ImenuItem, Menu } from "@/features/menu/types";
import useMenus from "@/hooks/useMenus";
import MenuItem from "./MenuItem";

const MainMenu = async ({ style = "" }: { style: string }) => {
  const { menus }: { menus: Array<Menu> } = await getAllMenuItem();
  const menuItems = useMenus(menus);

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        {menuItems?.map((menu: ImenuItem) => (
          <MenuItem key={menu.id} menu={menu} />
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
