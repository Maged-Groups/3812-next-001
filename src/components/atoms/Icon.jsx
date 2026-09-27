import { Bs1Circle, BsCart2 } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { LuAirplay, LuHeart } from "react-icons/lu";

export default function Icon({
  name,
  color = "black",
  size,
  extraCSS,
  iconAction,
}) {
  switch (name) {
    case "search":
      return (
        <FaMagnifyingGlass
          color={color}
          className={`${extraCSS}`}
          onClick={iconAction}
          size={size}
        />
      );
    case "air":
      return (
        <LuAirplay
          color={color}
          className={`${extraCSS}`}
          onClick={iconAction}
          size={size}
        />
      );
    case "home":
      return (
        <FaHome
          color={color}
          className={`${extraCSS}`}
          onClick={iconAction}
          size={size}
        />
      );
    case "circle":
      return (
        <Bs1Circle
          color={color}
          className={`${extraCSS}`}
          onClick={iconAction}
          size={size}
        />
      );
    case "heart":
      return (
        <LuHeart
          color={color}
          className={`${extraCSS}`}
          onClick={iconAction}
          size={size}
        />
      );
    case "cart":
      return (
        <BsCart2
          color={color}
          className={`${extraCSS}`}
          onClick={iconAction}
          size={size}
        />
      );
    default:
      return "";
  }
}
