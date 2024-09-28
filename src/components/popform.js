import React, { useState } from "react";
import Button from "../components/button";

const PopupForm = ({ onClose, onAddCustomer }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    // gender: "",
    height: "",
    weight: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCustomer(formData);
    onClose(); // Close the popup after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">Add Customer Profile</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <div key={key} className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
              <input
                type={
                  key === "age" || key === "height" || key === "weight"
                    ? "number"
                    : "text"
                }
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 p-2"
                required
              />
            </div>
          ))}
          <div className="flex justify-between">
            <Button
              type="button"
              onClick={onClose}
              className="bg-black hover:bg-white text-white hover:text-black p-2 rounded"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-black hover:bg-white text-white hover:text-black p-2 rounded"
            >
              Add Customer
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
