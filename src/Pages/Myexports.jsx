import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider/AuthProvider"; // adjust path
import Swal from "sweetalert2";

const Myexports = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    if (!user?.email) return;
    fetch(
      `https://b12a10importexport.vercel.app/products/user/${encodeURIComponent(
        user.email
      )}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, [user]);

  // Delete product
 const handleDelete = async (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then(async (result) => {
    if (result.isConfirmed) {
      const res = await fetch(
        `https://b12a10importexport.vercel.app/products/${id}`,
        { method: "DELETE" }
      );

      const data = await res.json();

      if (data.deletedCount > 0) {
        setProducts((prev) => prev.filter((p) => p._id !== id));

        Swal.fire({
          title: "Deleted!",
          text: "Product deleted successfully!",
          icon: "success"
        });
      } else {
        Swal.fire({
          title: "Failed!",
          text: "Delete failed, try again.",
          icon: "error"
        });
      }
    }
  });
};


  // Open modal to edit
  const openModal = (item) => setEditItem(item);
  const closeModal = () => setEditItem(null);

  // Handle update submit
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const updated = {
      productName: form.get("productName"),
      productImage: form.get("productImage"),
      price: Number(form.get("price")),
      originCountry: form.get("originCountry"),
      rating: Number(form.get("rating")),
      availableQuantity: Number(form.get("availableQuantity")),
    };

    const res = await fetch(
      `https://b12a10importexport.vercel.app/products/${editItem._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      }
    );
    const data = await res.json();

    // update UI if success
    if (data.modifiedCount > 0 || data.matchedCount > 0) {
      setProducts((prev) =>
        prev.map((p) => (p._id === editItem._id ? { ...p, ...updated } : p))
      );
      closeModal();
      Swal.fire({
        title: "Saved Chnages!",
        icon: "success",
        draggable: true,
      });
    } else {
      // sometimes update returns acknowledged even if no changes; still update UI
      setProducts((prev) =>
        prev.map((p) => (p._id === editItem._id ? { ...p, ...updated } : p))
      );
      closeModal();
      alert("Update applied (server returned no modifiedCount)");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <title>myexport</title>
      <h3 className="text-3xl font-bold mb-6">My Exports</h3>

      {products.length === 0 ? (
        <p className="text-gray-500">You have not added any products yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow p-4 space-y-3"
            >
              <img
                src={item.productImage}
                alt={item.productName}
                className="rounded-xl w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold">{item.productName}</h3>
              <p className="font-bold">Price: ${item.price}</p>
              <p className="font-bold">Rating: ⭐ {item.rating}</p>
              <p>Available Qty: {item.availableQuantity}</p>

              <div className="flex gap-3 mt-3">
                <button
                  onClick={() => openModal(item)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Update Modal */}
      {editItem && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="text-xl font-bold mb-4">Update Product</h2>
            <form onSubmit={handleUpdate} className="space-y-3">
              <input
                name="productName"
                defaultValue={editItem.productName}
                className="w-full border p-2 rounded"
              />
              <input
                name="productImage"
                defaultValue={editItem.productImage}
                className="w-full border p-2 rounded"
              />
              <input
                name="price"
                defaultValue={editItem.price}
                type="number"
                className="w-full border p-2 rounded"
              />
              <input
                name="originCountry"
                defaultValue={editItem.originCountry}
                className="w-full border p-2 rounded"
              />
              <input
                name="rating"
                defaultValue={editItem.rating}
                type="number"
                step="0.1"
                className="w-full border p-2 rounded"
              />
              <input
                name="availableQuantity"
                defaultValue={editItem.availableQuantity}
                type="number"
                className="w-full border p-2 rounded"
              />

              <div className="flex gap-3 mt-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Myexports;
