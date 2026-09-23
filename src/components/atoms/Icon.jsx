import { Bs1Circle } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { LuAirplay } from "react-icons/lu";

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
        />
      );
    case "air":
      return (
        <LuAirplay
          color={color}
          className={`${extraCSS}`}
          onClick={iconAction}
        />
      );
    case "home":
      return (
        <FaHome color={color} className={`${extraCSS}`} onClick={iconAction} />
      );
    case "circle":
      return (
        <Bs1Circle
          color={color}
          className={`${extraCSS}`}
          onClick={iconAction}
        />
      );
    default:
      return "";
  }
}
