export default function Text({ msg, extraCSS }) {
  return (
    <div className={`h-4 text-xs font-light text-gray-300 ${extraCSS}`}>
      {msg}
    </div>
  );
}
