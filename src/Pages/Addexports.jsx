import React, { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider"; // adjust path if needed

const AddProducts = () => {
  const { user } = useContext(AuthContext);

  const handleaddexport = (e) => {
    e.preventDefault();
    const exportformdata = {
      productName: e.target.productName.value,
      productImage: e.target.productImage.value,
      price: Number(e.target.price.value),
      originCountry: e.target.originCountry.value,
      rating: Number(e.target.rating.value),
      availableQuantity: Number(e.target.availableQuantity.value),
      createdAt: new Date(),
      userEmail: user?.email || "unknown@example.com", // store the owner
    };

    fetch("http://localhost:1000/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(exportformdata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("product added successfully");
          e.target.reset();
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-xl mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Add New Product</h2>

      <form onSubmit={handleaddexport} className="space-y-5">
        {/* Product Name */}
        <div>
          <label className="font-semibold block mb-1">Product Name</label>
          <input type="text" name="productName" placeholder="Enter product name" className="w-full p-3 border rounded-lg bg-gray-50" required />
        </div>

        {/* Product Image URL */}
        <div>
          <label className="font-semibold block mb-1">Product Image URL</label>
          <input type="text" name="productImage" placeholder="Enter image URL" className="w-full p-3 border rounded-lg bg-gray-50" />
        </div>

        {/* Price */}
        <div>
          <label className="font-semibold block mb-1">Price ($)</label>
          <input type="number" name="price" placeholder="Enter price" className="w-full p-3 border rounded-lg bg-gray-50" required />
        </div>

        {/* Origin Country */}
        <div>
          <label className="font-semibold block mb-1">Origin Country</label>
          <input type="text" name="originCountry" placeholder="Enter origin country" className="w-full p-3 border rounded-lg bg-gray-50" />
        </div>

        {/* Rating */}
        <div>
          <label className="font-semibold block mb-1">Rating <span className="text-gray-500">(Example: 4.8)</span></label>
          <input type="number" step="0.1" name="rating" placeholder="4.8" className="w-full p-3 border rounded-lg bg-gray-50" />
        </div>

        {/* Available Quantity */}
        <div>
          <label className="font-semibold block mb-1">Available Quantity</label>
          <input type="number" name="availableQuantity" placeholder="Enter quantity" className="w-full p-3 border rounded-lg bg-gray-50" required />
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold">
          Add Export
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
