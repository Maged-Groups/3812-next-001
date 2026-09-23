"use client";

export default function Input({
  placeholder,
  value,
  type,
  id,
  extraCSS,
  ref,
  onChange,
}) {
  return (
    <input
      ref={ref}
      id={id}
      type={type}
      placeholder={placeholder}
      className={`px-2 py-1 outline-0 ${extraCSS}`}
      value={value}
      onKeyUp={onChange}
    />
  );
}
