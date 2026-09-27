"use client";

import Link from "next/link";
import Field from "@c/molecules/Field";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Icon from "@c/atoms/Icon";

export default function TopNavbar() {
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const searchRef = useRef();
  const router = useRouter();

  let cartItmes = 10;

  const handelSearch = () => {
    const searchValue = searchRef.current.value;
    router.push(`/search/${searchValue}`);
  };

  const handelInputChange = (e) => {
    if (e.nativeEvent.key == "Enter") {
      handelSearch();
    }
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
                {cartItmes}
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
        <div>
          {/* Name and avatar */}
          <div
            className="flex items-center justify-end gap-3 cursor-pointer"
            onClick={() => setShowAccountMenu(!showAccountMenu)}
          >
            <h3>My Name</h3>
            <img
              className="w-10 rounded-full"
              src="https://assets.about.me/background/users/m/a/g/magedyaseen_1702270532_101.jpg"
              alt=""
            />
          </div>
          {/* Account Menu */}
          {showAccountMenu && (
            <div className="flex flex-col gap-3 absolute bg-gray-600 min-w-30 right-0">
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
          )}
        </div>
      </div>
    </nav>
  );
}
