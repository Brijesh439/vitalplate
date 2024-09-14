// src/components/Cart.js
import React, { useState } from "react";
import MealModal from "../components/mealModal";

const Cart = ({ items, selectedProduct }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState(items || {});

  const handleAddMeal = (mealName) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [mealName]: prevItems[mealName] || [], 
    }));
  };

  const handleAddProduct = (mealName) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [mealName]: [...(prevItems[mealName] || []), selectedProduct],
    }));
  };

  const handleDeleteMeal = (mealName) => {
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      delete updatedItems[mealName];
      return updatedItems;
    });
  };

  const handleDeleteProduct = (mealName, productIndex) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [mealName]: prevItems[mealName].filter(
        (_, index) => index !== productIndex
      ), 
    }));
  };

  return (
    <div className="bg-gray-100 p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Cart</h2>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="bg-green-500 text-white py-2 px-4 rounded-md mb-4"
      >
        Add Meal
      </button>

      {Object.keys(cartItems).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        Object.entries(cartItems).map(([meal, products], index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-800">{meal}</h3>
              <button
                onClick={() => handleDeleteMeal(meal)}
                className="bg-red-500 text-white py-1 px-3 rounded-md"
              >
                Delete
              </button>
            </div>
            {products.length === 0 ? (
              <p className="text-gray-600">No products added.</p>
            ) : (
              <ul>
                {products.map((product, productIndex) => (
                  <li
                    key={productIndex}
                    className="flex justify-between items-center text-gray-800"
                  >
                    {product}
                    <button
                      onClick={() => handleDeleteProduct(meal, productIndex)}
                      className="text-red-500 hover:text-red-700 ml-4"
                    >
                      🗑️
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <button
              onClick={() => handleAddProduct(meal)}
              className="bg-blue-500 text-white py-1 px-3 rounded-md mt-2"
            >
              Add Product to {meal}
            </button>
          </div>
        ))
      )}

      {/* Modal component */}
      <MealModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddMeal={handleAddMeal}
      />
    </div>
  );
};

export default Cart;