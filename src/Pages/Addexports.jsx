import React, { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import { Package, Image, DollarSign, Globe, Star, Layers } from "lucide-react"; // adjust path if needed
import Swal from "sweetalert2";
import { useNavigate } from "react-router";


const AddProducts = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

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
          Swal.fire({
            title: "Exported Successfully!",
            showClass: {
              popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
            },
            hideClass: {
              popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
            },
          });
          e.target.reset();
        }
        navigate('/myexports')
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-10 bg-gradient-to-br from-white to-blue-50 shadow-2xl rounded-2xl mt-12 border border-gray-200">
      <title>Add Export</title>
      <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-700">
        Add New Product
      </h2>

      <form onSubmit={handleaddexport} className="space-y-6">
        {/* Product Name */}
        <div>
          <label className="font-semibold block mb-1 flex items-center gap-2 text-gray-700">
            <Package size={20} className="text-blue-600" /> Product Name
          </label>
          <input
            type="text"
            name="productName"
            placeholder="Enter product name"
            className="w-full p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-300 transition"
            required
          />
        </div>

        {/* Product Image */}
        <div>
          <label className="font-semibold block mb-1 flex items-center gap-2 text-gray-700">
            <Image size={20} className="text-blue-600" /> Product Image URL
          </label>
          <input
            type="text"
            name="productImage"
            placeholder="Enter image URL"
            className="w-full p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-300 transition"
          />
        </div>

        {/* Price */}
        <div>
          <label className="font-semibold block mb-1 flex items-center gap-2 text-gray-700">
            <DollarSign size={20} className="text-blue-600" /> Price ($)
          </label>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            className="w-full p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-300 transition"
            required
          />
        </div>

        {/* Origin Country */}
        <div>
          <label className="font-semibold block mb-1 flex items-center gap-2 text-gray-700">
            <Globe size={20} className="text-blue-600" /> Origin Country
          </label>
          <input
            type="text"
            name="originCountry"
            placeholder="Enter origin country"
            className="w-full p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-300 transition"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="font-semibold block mb-1 flex items-center gap-2 text-gray-700">
            <Star size={20} className="text-yellow-500" /> Rating
            <span className="text-gray-500 text-sm">(Example: 4.8)</span>
          </label>
          <input
            type="number"
            step="0.1"
            name="rating"
            placeholder="4.8"
            className="w-full p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-300 transition"
          />
        </div>

        {/* Available Quantity */}
        <div>
          <label className="font-semibold block mb-1 flex items-center gap-2 text-gray-700">
            <Layers size={20} className="text-blue-600" /> Available Quantity
          </label>
          <input
            type="number"
            name="availableQuantity"
            placeholder="Enter quantity"
            className="w-full p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-300 transition"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-bold shadow-md hover:shadow-lg transition"
        >
          Add Export
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
