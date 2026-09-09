export default function Price({ discounted, price }) {
  return (
    <div className="mt-2 text-end">
      {discounted ? (
        <div className="flex gap-2 justify-end">
          <span className="line-through text-orange-600 text-sm">${price}</span>
          <span className="font-bold text-green-600">${price * 0.9}</span>
        </div>
      ) : (
        <span className="font-bold text-green-600">${price}</span>
      )}
    </div>
  );
}
