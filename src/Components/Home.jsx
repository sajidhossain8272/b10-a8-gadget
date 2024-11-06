import { useState } from "react";
import Product from "./Product";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Product");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h1 className='flex justify-center sora-bold lg:text-4xl text-xl pt-16 pb-4'>
        Explore Cutting-Edge Gadgets
      </h1>
      <div className='lg:flex lg:pl-56 lg:pr-56'>
        <div>
          <div className='drawer lg:drawer-open'>
            <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
            <div className='drawer-content flex flex-col items-center justify-center'>
              <label
                htmlFor='my-drawer-2'
                className='btn btn-primary drawer-button lg:hidden'
              >
                Sort By Categories
              </label>
            </div>
            <div className='drawer-side'>
              <label
                htmlFor='my-drawer-2'
                aria-label='close sidebar'
                className='drawer-overlay'
              ></label>
              <ul className='menu bg-white text-base-content min-h-max p-4 rounded-2xl shadow-2xl'>
                <div className='p-2'>
                  {[
                    "All Product",
                    "Laptops",
                    "Phones",
                    "Accessories",
                    "Smart Watches",
                    "MacBook",
                    "iPhone",
                  ].map((category) => (
                    <li className='p-2' key={category}>
                      <button
                        className={`btn rounded-lg btn-special shadow-xl ${
                          selectedCategory === category
                            ? "bg-black text-white"
                            : "bg-gray-200 text-black"
                        }`}
                        onClick={() => handleCategoryClick(category)}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className='lg:pt-0 p-4'>
          <Product category={selectedCategory} />
        </div>
      </div>
    </div>
  );
};

export default Home;
