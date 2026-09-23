export default function Label({ htmlFor, text, extraCSS }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`font-cairo text-sm text-gray-400 ${extraCSS}`}
    >
      {text}
    </label>
  );
}
