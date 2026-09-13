import ProductCard from "@/components/ProductCard";

// import { products } from "@/data/products";

// Fetch data from APIs

// First method: using await

// const response = await fetch("https://dummyjson.com/products");
// // console.log(response);
// const data = await response.json();
// console.log("data", data);

// Second Method: using then

// fetch("https://dummyjson.com/products")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log("data:", data);
//   });

// Third Method: using then and arrow funciton

const data = await fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => data);

console.log("🚗", data);

const products = data.products;

export default function Home() {
  //   const newArray = products.map(({ price, title, discounted }) => (
  //     <ProductCard price={price} title={title} discounted={discounted} />
  //   ));

  return (
    <main className="bg-gray-100 min-h-screen px-10 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900">Our Products</h1>

        <p className="text-gray-500 mt-3">Choose your favorite product</p>
      </div>

      {/* <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto">{newArray}</div> */}

      <div className="flex gap-8 max-w-6xl mx-auto flex-wrap">
        {products.map(({ id, price, title, discounted, thumbnail }) => (
          <ProductCard
            key={Math.random() * Math.random()}
            price={price}
            title={title}
            discounted={discounted}
            thumbnail={thumbnail}
            id={id}
          />
        ))}
      </div>
    </main>
  );
}
