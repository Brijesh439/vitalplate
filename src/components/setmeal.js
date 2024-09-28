// src/components/SetMealPlan.js
import React, { useState } from "react";

const SetMealPlan = ({ onAddToCart }) => {
  const [productName, setProductName] = useState("");
  const [productGrams, setProductGrams] = useState("");
  const [setSelectedProduct] = useState("");  // const [selectedProduct, setSelectedProduct] = useState(""); if needed

  const handleAddProduct = () => {
    if (productName) {
      setSelectedProduct(productName); 
      onAddToCart(productName);
      setProductName("");
      setProductGrams("");  
    }
  };

  const nutrients = {
    Protein: 70, 
    Carbohydrates: 50, 
    Fats: 30, 
    VitaminA: 90, 
    Iron: 40, 
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Set Meal Plan</h2>
      {/* Input Fields */}
      <div className="mb-6">
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Enter product"
          className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition ease-in-out duration-150"
        />
      </div>
      <div className="mb-6">
        <input
          type="number"
          value={productGrams}
          onChange={(e) => setProductGrams(e.target.value)}
          placeholder="Enter grams"
          className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition ease-in-out duration-150"
        />
      </div>
      <button
        type="button"
        onClick={handleAddProduct}
        className="bg-green-500 text-white py-2 px-4 rounded-md"
      >
        Add Product
      </button>

      {/* Vertical Progress Bars */}
      <div className="mt-10">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Nutrient Progress</h3>
        <div className="flex space-x-6">
          {Object.entries(nutrients).map(([nutrient, value], index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-10 h-24 bg-gray-200 rounded-md overflow-hidden relative">
                <div
                  className="bg-green-500 absolute bottom-0 left-0 w-full"
                  style={{ height: `${value}%` }} // Vertical progress bar height
                >
                  <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white text-sm font-bold">
                    {value}%
                  </span>
                </div>
              </div>
              <div className="mt-2 text-center">
                <span className="text-sm font-medium text-gray-700">{nutrient}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SetMealPlan;