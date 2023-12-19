export type Menu = {
  id: number;
  name: string;
  position: number;
  parent: null | string;
  children: Array<ImenuItem>;
};
export interface ImenuItem extends Menu {
  routePath: string;
}
