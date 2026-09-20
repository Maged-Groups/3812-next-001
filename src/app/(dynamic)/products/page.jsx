import ProductCard from "@/components/ProductCard";

const data = await fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => data);

const products = data.products;

export default function ProductsPage() {
  return (
    <main className="bg-gray-100 min-h-screen px-10 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900">Our Products</h1>

        <p className="text-gray-500 mt-3">Choose your favorite product</p>
      </div>

      {/* <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto">{newArray}</div> */}

      <div className="flex gap-8 max-w-6xl mx-auto flex-wrap">
        {products.map(({ id, price, title, discountPercentage, thumbnail }) => (
          <ProductCard
            key={Math.random() * Math.random()}
            price={price}
            title={title}
            discountPercentage={discountPercentage}
            thumbnail={thumbnail}
            id={id}
          />
        ))}
      </div>
    </main>
  );
}
