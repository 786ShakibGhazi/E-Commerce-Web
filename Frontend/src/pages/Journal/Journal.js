import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [formData, setFormData] = useState({
    _id: "",
    img: "",
    productName: "",
    price: "",
    color: "",
    badge: false,
    brand: "",
    des: "",
    cat: "",
    pdf: "",
    ficheTech: [],
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0] ? URL.createObjectURL(files[0]) : "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic, e.g., updating the database or state
    console.log("Submitted Data:", formData);
    // Optionally navigate or show a success message
    navigate("/success"); // Redirect to a success page or similar
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Add New Item</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">ID:</label>
          <input
            type="text"
            name="_id"
            value={formData._id}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label className="block mb-1">Image URL:</label>
          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label className="block mb-1">Product Name:</label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label className="block mb-1">Price:</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label className="block mb-1">Color:</label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label className="block mb-1">Badge:</label>
          <input
            type="checkbox"
            name="badge"
            checked={formData.badge}
            onChange={handleChange}
            className="mr-2"
          />
        </div>
        <div>
          <label className="block mb-1">Brand:</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label className="block mb-1">Description:</label>
          <textarea
            name="des"
            value={formData.des}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label className="block mb-1">Category:</label>
          <input
            type="text"
            name="cat"
            value={formData.cat}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label className="block mb-1">PDF:</label>
          <input
            type="file"
            name="pdf"
            accept=".pdf"
            onChange={handleFileChange}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div>
          <label className="block mb-1">Technical File(s):</label>
          <input
            type="file"
            name="ficheTech"
            accept=".pdf"
            multiple
            onChange={(e) => {
              const files = Array.from(e.target.files).map(file =>
                URL.createObjectURL(file)
              );
              setFormData((prevData) => ({
                ...prevData,
                ficheTech: files,
              }));
            }}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
