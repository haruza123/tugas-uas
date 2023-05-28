import { BsFillHouseFill } from "react-icons/bs";
import { FaPodcast } from "react-icons/fa";

const MenuList = [
  {
    id: 1,
    icon: <BsFillHouseFill />,
    name: "Home",
    route: "/"
  },
  {
    id: 6,
    icon: <FaPodcast />,
    name: "About Us",
    route: "/about-us"
  }
];

export { MenuList };
