export default function MainBtn({ text, variant }) {
  return (
    <button
      className={`px-4 py-2 rounded-md ${variant} font-semibold font-main`}
    >
      {text}
    </button>
  );
}
