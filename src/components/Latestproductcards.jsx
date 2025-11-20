import React from "react";
import { Link } from "react-router";

const Latestproductcards = ({ singlelatestproduct }) => {
  return (
    <div>
      <div className="  mb-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 border">
        {/* Product Image */}
        <div className="w-full h-48 overflow-hidden rounded-lg">
          <img
            src={singlelatestproduct.productImage}
            alt={singlelatestproduct.productName}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="mt-4 space-y-1">
          <h2 className="text-xl font-semibold text-gray-800">
            {singlelatestproduct.productName}
          </h2>

          <p className="text-lg font-bold text-green-600">
            Price :${singlelatestproduct.price}
          </p>

          <p className="text-sm text-gray-500">
            Origin Country:{" "}
            <span className="font-medium">
              {singlelatestproduct.originCountry}
            </span>
          </p>

          <p className="text-sm text-gray-500">
            Rating: ⭐ {singlelatestproduct.rating}
          </p>

          <p className="text-sm text-gray-500">
            Available Quantity:
            <span className="font-medium ml-1">
              {singlelatestproduct.availableQuantity}
            </span>
          </p>
        </div>

        {/* Button */}
        <Link to={`/products/${singlelatestproduct._id}`}>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-200">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Latestproductcards;
