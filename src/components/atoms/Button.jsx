export default function MainBtn({ text, variant, onClick = () => {} }) {
  return (
    <button
      className={`px-4 py-2 rounded-md ${variant} font-semibold font-main`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
