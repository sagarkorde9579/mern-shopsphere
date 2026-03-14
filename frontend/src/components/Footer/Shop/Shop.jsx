import React from "react";
import assets from "../../../assets/assets";
import Category from "../Category/Category";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    desc: "Apple's latest flagship smartphone.",
    price: "$1099.00",
    image: assets.iphone13
  },
  {
    id: 2,
    name: "MacBook Air M2",
    desc: "Powerful and lightweight laptop from Apple.",
    price: "$1199.00",
    image: assets.laptop
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Headphones",
    desc: "Industry-leading noise-canceling headphones.",
    price: "$399.00",
    image: assets.watch
  }
];

const Shop = () => {
  return (
    <>
    <Category/>
    <div className="w-[80%] mx-auto -mt-36 mb-40">
      <div className="grid grid-cols-3 gap-8">

        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-sm p-6 hover:shadow-md transition"
          >

            <div className="flex justify-center items-center">
              <img
                src={product.image}
                alt={product.name}
                className="h-[240px] object-contain"
              />
            </div>

            <h2 className="text-xl font-medium mt-4">
              {product.name}
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              {product.desc}
            </p>

            <p className="text-lg font-semibold mt-2">
              {product.price}
            </p>

            <div className="flex justify-between mt-5 text-blue-600 text-sm font-medium">
              <button className="hover:underline">
                ADD TO CART
              </button>

              <button className="hover:underline">
                VIEW DETAILS
              </button>
            </div>

          </div>
        ))}

      </div>

    </div>
    </>
    
  );
};

export default Shop;
