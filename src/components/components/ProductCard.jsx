import Price from "./Price";

export default function ProductCard({ title, price, discounted = false }) {
  return (
    <div className="bg-white rounded-md shadow-md p-5">
      <div className="w-full h-52 bg-gray-200 rounded-xl"></div>

      <h2 className="text-xl text-gray-700 font-bold mt-5">{title}</h2>

      <Price discounted={discounted} price={price} />
    </div>
  );
}
