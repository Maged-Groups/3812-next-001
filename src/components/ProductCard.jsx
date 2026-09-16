import Price from "./Price";

export default function ProductCard({
  title,
  id,
  price,
  discounted = false,
  thumbnail,
}) {
  return (
    <div className="bg-white rounded-md shadow-md p-5 flex flex-col justify-between">
      <div>
        <div className="w-full h-52 bg-gray-200 rounded-xl">
          <img src={thumbnail} alt="" />
        </div>

        <h2 className="text-xl text-gray-700 font-bold mt-20">{title}</h2>

        <Price discounted={discounted} price={price} />
      </div>

      {/* Add to Cart */}
      <div className="flex gap-3 items-center">
        <button className="text-white bg-green-700 px-2 py-3 rounded w-8 h-8 flex justify-center items-center">
          +
        </button>
        <span className="text-xl">0</span>
        <button className="text-white bg-red-700 px-2 py-3 rounded w-8 h-8 flex justify-center items-center">
          -
        </button>
      </div>

      <div className="my-4 flex">
        <a
          href={`/products/${id}`}
          className="bg-sky-500 text-white flex-1 text-center p-2 rounded"
        >
          Show
        </a>
      </div>
    </div>
  );
}
