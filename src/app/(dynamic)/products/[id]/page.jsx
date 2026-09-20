"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Price from "@/components/Price";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(0);

  const [product, setProduct] = useState(null);

  const [randomProducts, setRandomProducts] = useState([]);

  const [monthly, setMonthly] = useState(0);

  const [plan, setPlan] = useState(0);

  const installmentsPlans = [0, 3, 6, 12];

  console.log("randomProducts", randomProducts);
  console.log("ProductPage rendered");

  console.log("Before useEffect");

  useEffect(() => {
    console.log("Inside useEffect");

    const getProduct = async () => {
      console.log("getProduct called");
      const data = await fetch("https://dummyjson.com/products/" + id)
        .then((res) => res.json())
        .then((data) => data);

      setProduct(data);
    };

    getProduct();
  }, []);

  console.log("After useEffect");

  useEffect(() => {
    const getRandomProducts = async () => {
      const skip = Math.floor(Math.random() * 150);

      const data = await fetch(
        "https://dummyjson.com/products?limit=10&skip=" + skip,
      )
        .then((res) => res.json())
        .then((data) => data);

      setRandomProducts(data.products);
    };

    getRandomProducts();
  }, []);

  const increase = () => {
    console.log("increase");
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    console.log("decrease");
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  };

  const changeInstallmentPlan = (planPeriod) => {
    console.log("changeInstallmentPlan called");
    console.log(planPeriod);
    setPlan(planPeriod);

    if (planPeriod === 0) {
      setMonthly(0);
      setPlan(0);
      return;
    }

    const perMonth = (price / planPeriod).toFixed(2);

    setMonthly(perMonth);
  };

  const { id } = useParams();
  console.log("id", id);

  if (!product)
    return (
      <div className="h-screen flex justify-center items-center text-center text-5xl">
        Loading...
      </div>
    );

  const { thumbnail, title, price, discountPercentage } = product;

  return (
    <div className="p-4 flex flex-col gap-7">
      <div className="flex items-center gap-3">
        <div className="w-32 h-32">
          <img src={thumbnail} alt="" />
        </div>

        <h2 className="text-3xl">{title}</h2>
      </div>

      <Price discountPercentage={discountPercentage} price={price} />

      {/* installments */}
      <div className="p-4 flex gap-3 flex-wrap">
        {installmentsPlans.map((plan) => (
          <div onClick={() => changeInstallmentPlan(plan)} className="p-3">
            {plan} Months
          </div>
        ))}
      </div>

      {/* Monthly installments */}
      <div className="p-4 text-2xl font-black">
        {plan === 0 ? "No installments" : `${monthly} / ${plan} Months`}
      </div>

      {/* Add to Cart */}
      <div className="flex gap-3 items-center">
        <button
          onClick={increase}
          className="text-white bg-green-700 px-2 py-3 rounded w-8 h-8 flex justify-center items-center"
        >
          +
        </button>
        <span className="text-xl">{quantity}</span>
        <button
          onClick={decrease}
          className="text-white bg-red-700 px-2 py-3 rounded w-8 h-8 flex justify-center items-center"
        >
          -
        </button>
      </div>

      <div className="border p-5">
        <h3 className="text-3xl mb-4">You may like</h3>

        <div className="flex flex-wrap gap-4 items-center">
          {randomProducts.map(({ thumbnail, id: randId }) => (
            <Link href={`/products/${randId}`} className="border p-2 w-32 h-32">
              <img src={thumbnail}></img>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
