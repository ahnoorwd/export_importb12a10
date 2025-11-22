import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import { Link } from "react-router";
import { Eye, Trash2, Globe, Star, Package } from "lucide-react";
import Swal from "sweetalert2";

const Myimports = () => {
  const { user } = useContext(AuthContext);
  const [imports, setImports] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://b12a10importexport.vercel.app/imports/${user.email}`)
      .then((res) => res.json())
      .then((data) => setImports(data));
  }, [user]);

  //  Remove imported product
const handleRemove = async (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "This product will be removed permanently!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, remove it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      // delete request
      const res = await fetch(`https://b12a10importexport.vercel.app/imports/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.deletedCount > 0) {
        // update UI
        setImports(imports.filter((item) => item._id !== id));

        Swal.fire({
          title: "Removed!",
          text: "Product has been removed successfully.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    }
  });
};


  return (
   <div className="max-w-6xl mx-auto p-6">
    <title>myimport</title>
  <h3 className="text-4xl font-extrabold mb-8 text-gray-800 tracking-tight">
    My Imported Products
  </h3>

  {imports.length === 0 ? (
    <p className="text-gray-500 bg-white p-6 rounded-xl shadow text-center">
      You have not imported any products yet.
    </p>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {imports.map((item) => (
        <div
          key={item._id}
          className="bg-white rounded-2xl shadow-lg p-5 
          hover:shadow-2xl transition-all border border-gray-100"
        >
          <img
            src={item.productImage}
            alt=""
            className="rounded-xl w-full h-48 object-cover shadow"
          />

          <h3 className="text-2xl font-semibold mt-4 text-gray-900">
            {item.productName}
          </h3>

          <div className="space-y-1 mt-3 text-gray-700">
            <p className="flex items-center gap-2 text-blue-600 font-bold">
              <Package size={18} /> Price: ${item.price}
            </p>

            <p className="flex items-center gap-2 text-yellow-500 font-semibold">
              <Star size={18} /> Rating: {item.rating}
            </p>

            <p className="flex items-center gap-2 text-green-700 font-semibold">
              <Globe size={18} /> Origin: {item.originCountry}
            </p>

            <p className="text-gray-800 font-medium">
              Imported Qty: {item.importedQuantity}
            </p>

            <p className="text-sm text-gray-500">
              Imported At: {new Date(item.importedAt).toLocaleString()}
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-between items-center mt-5">
            <Link
              to={`/products/${item.productId}`}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 
              text-white rounded-xl font-medium shadow hover:bg-blue-700 
              transition-all"
            >
              <Eye size={18} /> See Details
            </Link>

            <button
              onClick={() => handleRemove(item._id)}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 
              text-white rounded-xl font-medium shadow hover:bg-red-700 
              transition-all"
            >
              <Trash2 size={18} /> Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  )}
</div>
  );
};

export default Myimports;
