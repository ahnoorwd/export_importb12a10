import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";

const Myimports = () => {
  const { user } = useContext(AuthContext);
  const [imports, setImports] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:1000/imports/${user.email}`)
      .then((res) => res.json())
      .then((data) => setImports(data));
  }, [user]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h3 className="text-3xl font-bold mb-6">My Imported Products</h3>

      {imports.length === 0 ? (
        <p className="text-gray-500">You have not imported any products yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {imports.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow p-4 space-y-3"
            >
              <img
                src={item.productImage}
                alt=""
                className="rounded-xl w-full h-48 object-cover"
              />

              <h3 className="text-xl font-semibold">{item.productName}</h3>
              <p className="text-blue-600 font-bold">${item.price}</p>
              <p>Imported Qty: {item.importedQuantity}</p>
              <p className="text-sm text-gray-500">
                Imported At: {new Date(item.importedAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Myimports;
