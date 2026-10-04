import Link from "next/link";

export default function Button({
  children,
  text,
  variant,
  onClick = () => {},
  href = false,
}) {
  return href ? (
    <Link
      href={href}
      className={`px-4 py-2 rounded-md ${variant} font-semibold font-main`}
    >
      {text ?? children}
    </Link>
  ) : (
    <button
      type="button"
      className={`px-4 py-2 rounded-md ${variant} font-semibold font-main`}
      onClick={onClick}
    >
      {text ?? children}
    </button>
  );
}
