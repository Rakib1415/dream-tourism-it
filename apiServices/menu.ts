import { GET_MENUS_ALL_NESTED, GET_SITESETTINGS } from "@/constant/constants";
export const getAllMenuItem = async () => {
  try {
    const res = await fetch(GET_MENUS_ALL_NESTED);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export const getLogoUrlPath = async () => {
  try {
    const res = await fetch(GET_SITESETTINGS);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
