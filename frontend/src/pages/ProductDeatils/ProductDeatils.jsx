import React from "react";
import assets from "../../assets/assets";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    desc: "Apple's latest flagship smartphone.",
    price: "$1099",
    image: assets.iphone14
  }
];

const ProductDetails = () => {
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto mt-16 mb-40">

      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col md:flex-row gap-8 bg-white p-6 md:p-8 rounded-lg shadow-md"
        >

          <div className="flex justify-center items-center md:w-[40%]">
            <img
              src={product.image}
              alt={product.name}
              className="h-[260px] md:h-[360px] object-contain"
            />
          </div>

        
          <div className="md:w-[60%]">

            <h2 className="text-2xl md:text-3xl font-semibold">
              {product.name}
            </h2>

            <p className="text-gray-600 mt-3 text-sm md:text-base">
              <span className="font-medium">Brand:</span> Apple
            </p>

            <p className="text-gray-600 mt-1 text-sm md:text-base">
              <span className="font-medium">Category:</span> electronics
            </p>

            <p className="text-blue-500 text-lg md:text-xl font-semibold mt-3">
              {product.price}
            </p>

            <p className="text-gray-600 mt-3 text-sm md:text-base">
              {product.desc}
            </p>

            {/* Stock */}
            <div className="flex items-center mt-4">
              <span className="mr-3 text-gray-700 text-sm md:text-base">
                In Stock:
              </span>

              <span className="bg-green-600 text-white text-xs md:text-sm px-3 py-1 rounded-full">
                100 Available
              </span>
            </div>

      
            <div className="flex items-center mt-4 text-yellow-500 text-lg">
              ★ ★ ★ ☆ ☆
              <span className="text-gray-500 text-sm ml-2">
                (11 Reviews)
              </span>
            </div>

        
            <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
              ADD TO CART
            </button>

          </div>

        </div>
      ))}

    </div>
  );
};

export default ProductDetails;
