export default function Price({ discountPercentage, price }) {
  return (
    <div className="mt-2 text-end">
      {discountPercentage > 1 ? (
        <div className="flex gap-2 justify-end">
          <span className="line-through text-orange-600 text-sm">${price}</span>
          <span className="font-bold text-green-600">
            ${(price - (price * discountPercentage) / 100).toFixed(2)}
          </span>
        </div>
      ) : (
        <span className="font-bold text-green-600">${price}</span>
      )}
    </div>
  );
}
