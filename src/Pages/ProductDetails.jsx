import { Link, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../Authprovider/AuthProvider";
import { use, useState } from "react";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { user } = use(AuthContext);
  const product = useLoaderData();

  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState("");

  const navigate = useNavigate()

  // Correct field name
  const available = product.availableQuantity;

  // Validation
  const isInvalid =
    Number(quantity) > available || Number(quantity) <= 0 || quantity === "";

  const handleImport = async () => {
    // Step 1: Save import record
    await fetch("http://localhost:1000/import", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId: product._id,
        quantity: Number(quantity),
        userEmail: user?.email,
      }),
    });

    // Step 2: Reduce product quantity
    const updateRes = await fetch(
      `http://localhost:1000/products/${product._id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quantity: Number(quantity),
        }),
      }
    );

    const updateData = await updateRes.json();

    // Update UI with new available quantity
    product.availableQuantity = updateData.updatedProduct.availableQuantity;

    Swal.fire({
      title: "Imported Product Successfully!",
      text: "Most enjoy Your new product.",
      icon: "success",
    });

    setQuantity("");
    setOpen(false);
    navigate('/myimports')
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4">
      <div
        className="max-w-5xl mx-auto bg-white/90 backdrop-blur shadow-2xl 
    rounded-3xl p-10 grid grid-cols-1 md:grid-cols-2 gap-12 border border-gray-200"
      >
        {/* Image */}
        <div className="flex items-center justify-center">
          <img
            src={product.productImage}
            alt="product"
            className="rounded-2xl shadow-xl w-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-5">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            {product.productName}
          </h2>

          <p className="text-2xl text-blue-700 font-bold">
            Price: <span className="text-blue-600">${product.price}</span>
          </p>

          <p className="text-yellow-500 text-lg font-medium">
            Rating: ⭐⭐⭐ {product.rating}
          </p>

          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Origin:</span>{" "}
            {product.originCountry}
          </p>

          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Available Quantity:</span>{" "}
            {product.availableQuantity}
          </p>

          <div className="flex gap-4 pt-4">
            <button
              onClick={() => setOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 
          rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Import Now
            </button>

            <Link to={`/allproducts`}>
              <button
                className="bg-gray-800 hover:bg-black text-white px-6 py-3 
            rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Back to Products
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ========= Modal ========= */}
      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl p-7 shadow-2xl w-full max-w-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Import Quantity
            </h3>

            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 
          focus:ring-blue-500 outline-none transition-all"
              placeholder={`Enter quantity (max ${available})`}
            />

            {/* Error */}
            {isInvalid && quantity !== "" && (
              <p className="text-red-500 mt-2 text-sm">
                Quantity must be between 1 and {available}.
              </p>
            )}

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setOpen(false)}
                className="px-5 py-2.5 bg-gray-300 hover:bg-gray-400 rounded-lg transition-all"
              >
                Cancel
              </button>

              <button
                disabled={isInvalid}
                onClick={handleImport}
                className={`px-5 py-2.5 rounded-lg text-white transition-all shadow
              ${
                isInvalid
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
