import ProductCard from "@/features/products/components/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen px-10 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900">Our Products</h1>

        <p className="text-gray-500 mt-3">Choose your favorite product</p>
      </div>

      <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto">
        <ProductCard price="20" title="Product One" discounted={true} />
        <ProductCard price="25" title="Product Two" />
        <ProductCard price="30" title="Product Three" discounted={true} />
        <ProductCard price="35" title="Product Four" />
        <ProductCard price="25" title="Product Five" />
        <ProductCard price="20" title="Product Six" discounted={true} />
        <ProductCard price="15" title="Product Seven" />
        <ProductCard price="105" title="Product Eight" />
        <ProductCard price="35" title="Product Nine" discounted={true} />
        <ProductCard price="39" title="Product Ten" />
        <ProductCard price="27" title="Product Eleven" />
      </div>
    </main>
  );
}
