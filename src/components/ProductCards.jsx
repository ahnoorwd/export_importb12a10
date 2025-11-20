import React from "react";
import { Link } from "react-router";

const ProductCards = ({ singleproduct }) => {
  return (
    <div className="  mb-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 border">
      {/* Product Image */}
      <div className="w-full h-48 overflow-hidden rounded-lg">
        <img
          src={singleproduct.productImage}
          alt={singleproduct.productName}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="mt-4 space-y-1">
        <h2 className="text-xl font-semibold text-gray-800">
          {singleproduct.productName}
        </h2>

        <p className="text-lg font-bold text-green-600">
          Price :${singleproduct.price}
        </p>

        <p className="text-sm text-gray-500">
          Origin Country:{" "}
          <span className="font-medium">{singleproduct.originCountry}</span>
        </p>

        <p className="text-sm text-gray-500">
          Rating: ⭐ {singleproduct.rating}
        </p>

        <p className="text-sm text-gray-500">
          Available Quantity:
          <span className="font-medium ml-1">
            {singleproduct.availableQuantity}
          </span>
        </p>
      </div>

      {/* Button */}
      <Link to={`/products/${singleproduct._id}`}>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-200">
          See Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCards;
