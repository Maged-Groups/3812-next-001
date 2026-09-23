"use client";

import Link from "next/link";
import Field from "@c/molecules/Field";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function TopNavbar() {
  const searchRef = useRef();
  const router = useRouter();

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
    <nav className="bg-sky-900 text-white flex gap-3 p-4 sticky top-0">
      <div></div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
        <Link href="/contacts">Contact us</Link>
      </div>
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
      <div></div>
    </nav>
  );
}
