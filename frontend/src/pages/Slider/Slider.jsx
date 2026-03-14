import React, { useState } from "react";
import assets from "../../assets/assets";

const slides = [
  {
image:"https://image.slidesdocs.com/responsive-images/background/fashionable-clothing-arrangement-on-shelf-and-rack-with-beige-and-pastel-3d-render-for-your-online-shop-powerpoint-background_b70817d552__960_540.jpg",    title: "Trending Fashion",
    desc: "Discover the newest fashion trends for this season."
  },
  {
    image: "https://img.freepik.com/free-photo/stylish-happy-girl-shopping-portrait-modern-woman-with-shop-bag-laughing-smiling-satisfied_1258-119361.jpg?semt=ais_hybrid&w=740&q=80",
    title: "New Arrivals",
    desc: "Check out the latest products in our store."
  },
  {
    image: "https://img.freepik.com/free-photo/shopping-discounts-concept-young-stylish-modern-girl-posing-with-credit-card-looking-happy-smiling-standing-beige-background_1258-122540.jpg?semt=ais_hybrid&w=740&q=80",
    title: "Best Deals",
    desc: "Grab the best deals before they are gone."
  }
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <>
    <div className="w-[80%] mx-auto">
         <div className=" mt-8 relative rounded-xl overflow-hidden shadow-lg">

    
      <img
        src={slides[current].image}
        alt="slider"
        className="w-full h-[420px] object-cover object-center"
      />

      <div className="absolute bottom-6 pb-4 w-full  border-b-4 border-gray-700 bg-black/50 text-white p-10 rounded-md">
        <h2 className="text-3xl font-semibold">{slides[current].title}</h2>
        <p className="text-sm mt-1">{slides[current].desc}</p>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white px-3 py-2 p-10 rounded-md hover:bg-black"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-md p-10 hover:bg-black"
      >
        ❯
      </button>

   
      <div className="flex justify-center gap-6 pb-3  py-2">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              current === index ? "bg-black" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>





    </div>


    <div className="text-center">
        <div className="py-10">
 <h1 className="text-3xl font-bold">Featured Projcts</h1>
        </div>
      <div className="grid grid-cols-3 gap-6 w-full mb-28">
  <img src={assets.iphone14} className="w-full h-72 object-contain rounded-md" />
  <img src={assets.laptop} className="w-full h-72 object-contain rounded-md" />
  <img src={assets.watch} className="w-full h-72 object-contain rounded-md" />
</div>
    </div>
    </div>
    </>
   
  );
};

export default Slider;
