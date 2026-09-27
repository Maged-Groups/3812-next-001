"use client";

import { useState } from "react";

export default function AddToCart() {
  const [quantity, setQuantity] = useState(0);

  const increase = () => {
    console.log("increase");
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    console.log("decrease");
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  };

  return (
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
  );
}
