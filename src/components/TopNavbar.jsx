import Link from "next/link";

export default function TopNavbar() {
  return (
    <nav className="bg-sky-900 text-white flex gap-3 p-4 sticky top-0">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>
      <Link href="/contacts">Contact us</Link>
    </nav>
  );
}
