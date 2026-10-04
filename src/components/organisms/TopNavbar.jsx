"use client";

import Link from "next/link";
import Field from "@c/molecules/Field";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Icon from "@c/atoms/Icon";
import MainBtn from "@c/atoms/Button";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { logout } from "@/lib/redux/userSlice";

export default function TopNavbar() {
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const searchRef = useRef();
  const router = useRouter();
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cartSlice.cartItems);

  // const {firstName,lastName,image,loggedin} = useSelector(state=>state.userData)

  const userData = useSelector((state) => {
    return {
      firstName: state.userSlice.firstName,
      lastName: state.userSlice.lastName,
      image: state.userSlice.image,
      loggedin: state.userSlice.loggedin,
    };
  }, shallowEqual);

  const { firstName, lastName, image, loggedin } = userData;

  console.log({ cartItems });
  console.log({ userData });

  const cartCount = cartItems.length;
  console.log({ cartCount });

  const handelSearch = () => {
    const searchValue = searchRef.current.value;
    router.push(`/search/${searchValue}`);
  };

  const handelInputChange = (e) => {
    if (e.nativeEvent.key == "Enter") {
      handelSearch();
    }
  };

  const handleLogout = () => {
    console.log("handleLogout fired");
    dispatch(logout());
    setShowAccountMenu(false);
    localStorage.removeItem("user");
    localStorage.clear();
    router.replace("/");
  };

  return (
    <nav className="bg-gray-500 text-white flex justify-between items-center gap-3 p-4 sticky top-0">
      {/* Branding */}
      <div>Logo</div>

      {/* Links */}
      <div className="flex gap-3">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
        <Link href="/contacts">Contact us</Link>
      </div>

      {/* Left: Search - icons - account */}
      <div className="flex items-center gap-3">
        {/* Saerching */}
        <div>
          <Field
            placeholder="Seaarch anything"
            iconName="search"
            iconColor="white"
            hasText={false}
            hasIcon={true}
            iconStyle="cursor-pointer"
            iconAction={handelSearch}
            inputRef={searchRef}
            inputChange={handelInputChange}
          />
        </div>

        {/* Icons */}
        <div>
          <div className="flex gap-4">
            <div className="relative inline-flex">
              <Icon name="cart" size={30} />
              <span className="rounded-full w-7 h-7 text-xs absolute -top-2 -right-2 bg-green-700/90 text-green-100 flex items-center justify-center">
                {cartCount}
              </span>
            </div>
            <div className="relative inline-flex">
              <Icon name="heart" size={30} />
              <span className="rounded-full w-7 h-7 text-xs absolute -top-2 -right-2 bg-green-700/90 text-green-100 flex items-center justify-center">
                7
              </span>
            </div>
          </div>
        </div>

        {/* Accoutn */}

        {loggedin ? (
          <div>
            {/* Name and avatar */}
            <div
              className="flex items-center justify-end gap-3 cursor-pointer"
              onClick={() => setShowAccountMenu(!showAccountMenu)}
            >
              <h3>
                {firstName} {lastName}
              </h3>
              <img className="w-10 rounded-full" src={image} alt="" />
            </div>
            {/* Account Menu */}
            {showAccountMenu && (
              <div className="flex flex-col gap-3 justify-between fixed top-0 right-0 w-80 bg-gray-600 h-screen">
                <div className="flex flex-col ">
                  <div className="flex justify-end p-3 cursor-pointer">
                    <Icon
                      extraCSS="hover:animate-spin hover:text-red-300!"
                      color="white"
                      name="close"
                      iconAction={() => setShowAccountMenu(!showAccountMenu)}
                    />
                  </div>

                  <button className="px-3 py-1 text-start hover:bg-gray-300 hover:text-gray-900">
                    Link
                  </button>
                  <button className="px-3 py-1 text-start hover:bg-gray-300 hover:text-gray-900">
                    Link
                  </button>
                  <button className="px-3 py-1 text-start hover:bg-gray-300 hover:text-gray-900">
                    Link
                  </button>
                  <button className="px-3 py-1 text-start hover:bg-gray-300 hover:text-gray-900">
                    Link
                  </button>
                  <button className="px-3 py-1 text-start hover:bg-gray-300 hover:text-gray-900">
                    Link
                  </button>
                </div>

                <MainBtn
                  onClick={handleLogout}
                  text="Logout"
                  variant="bg-red-600"
                />
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <MainBtn href="/login" text="Login" variant="bg-green-600" />
            <MainBtn text="Register" variant="bg-sky-600" />
          </div>
        )}
      </div>
    </nav>
  );
}
