import React from "react";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    desc: "Apple's latest flagship smartphone.",
    price: "$1099.00",
    image: "/images/iphone15.png"
  },
  {
    id: 2,
    name: "MacBook Air M2",
    desc: "Powerful and lightweight laptop from Apple.",
    price: "$1199.00",
    image: "/images/macbook.png"
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Headphones",
    desc: "Industry-leading noise-canceling headphones.",
    price: "$399.00",
    image: "/images/headphones.png"
  }
];

const Category = () => {
  return (
    <div className="w-[80%] mx-auto mt-8 mb-40">

      <h1 className="text-3xl  mb-2">Shop</h1>

  
      <fieldset className="border border-gray-600 rounded-md  mb-8">
        <legend className="text-gray-600 text-sm ">
          Filter by Category
        </legend>

        <select className="w-full text-sm p-1  outline-none mb-2">
          <option>All Categories</option>
          <option>Phones</option>
          <option>Watches</option>
          <option>Headphones</option>
          <option>Laptops</option>
        </select>
      </fieldset>


    </div>
  );
};

export default Category;
