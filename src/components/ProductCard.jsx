import Link from "next/link";
import Price from "./Price";

export default function ProductCard({
  title,
  id,
  price,
  discountPercentage = false,
  thumbnail,
}) {
  return (
    <div className="bg-white rounded-md shadow-md p-5 flex flex-col justify-between">
      <div>
        <div className="w-full h-52 bg-gray-200 rounded-xl">
          <img src={thumbnail} alt="" />
        </div>

        <h2 className="text-xl text-gray-700 font-bold mt-20">{title}</h2>

        <Price discountPercentage={discountPercentage} price={price} />
      </div>

      <div className="my-4 flex">
        <Link
          href={`/products/${id}`}
          className="bg-sky-500 text-white flex-1 text-center p-2 rounded"
        >
          Show
        </Link>
      </div>
    </div>
  );
}
