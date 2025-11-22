import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ProductCards from "../components/ProductCards";

const Allproducts = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);

  const HandleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;

    fetch(`https://b12a10importexport.vercel.app/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data); // ✅ update UI
      });
  };

  return (
    <div>
        <title>All Products</title>
      <form onSubmit={HandleSearch}>
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-12 my-4 space-y-4">
          
          <h3 className="font-bold text-2xl text-center mt-4">
            All Available Products
          </h3>

          <div className="join">
            <div>
              <label className="input validator join-item">
                {/* Search Icon */}
                <svg
                  className="h-[1.2em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>

                <input
                  type="search"
                  name="search"
                  placeholder="product name"
                />
              </label>

              <div className="validator-hint hidden">
                Enter name of the product
              </div>
            </div>

            <button className="btn btn-secondary join-item">Search</button>
          </div>
        </div>
      </form>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 md:px-8 lg:px-12">
        {products.map((product) => (
          <ProductCards key={product._id} singleproduct={product} />
        ))}
      </div>
    </div>
  );
};

export default Allproducts;
