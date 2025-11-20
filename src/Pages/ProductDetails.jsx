import { useLoaderData } from "react-router";
import { AuthContext } from "../Authprovider/AuthProvider";
import { use, useState } from "react";


const ProductDetails = () => {
  const { user } = use(AuthContext);
  const product = useLoaderData();

  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState("");

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
    userEmail: user?.email, // ⭐ send email
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

    alert("Product imported successfully!");

    setQuantity("");
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div
        className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8
      grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Image */}
        <div>
          <img
            src={product.productImage}
            alt="product"
            className="rounded-xl shadow-lg w-full"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">{product.productName}</h2>

          <p className="text-xl text-blue-600 font-semibold">
            ${product.price}
          </p>

          <p className="text-yellow-500 text-lg">⭐ {product.rating}</p>

          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Origin:</span>{" "}
            {product.originCountry}
          </p>

          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Available Quantity:</span>{" "}
            {product.availableQuantity}
          </p>

          <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold"
          >
            Import Now
          </button>
        </div>
      </div>

      {/* ========= Import Modal ========= */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-96 shadow-xl">
            <h3 className="text-xl font-bold mb-3">Import Quantity</h3>

            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full border p-2 rounded-md"
              placeholder={`Enter quantity (max ${available})`}
            />

            {/* Error Message */}
            {isInvalid && quantity !== "" && (
              <p className="text-red-500 mt-2 text-sm">
                Quantity must be between 1 and {available}.
              </p>
            )}

            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>

              <button
                disabled={isInvalid}
                onClick={handleImport}
                className={`px-4 py-2 rounded-lg text-white 
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
