import React, { useState } from "react";
import MealModal from "../components/mealModal";

const Cart = ({
  items,
  onSelectMeal,
  onAddMeal,
  onDeleteMeal,       // Receive handleDeleteMeal from props
  onDeleteProduct,    // Receive handleDeleteProduct from props
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectMeal = (mealName) => {
    onSelectMeal(mealName);
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

      {Object.keys(items).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        Object.entries(items).map(([meal, products], index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-center">
              <h3
                className="text-lg font-bold text-gray-800 cursor-pointer"
                onClick={() => handleSelectMeal(meal)}
              >
                {meal}
              </h3>
              <button
                onClick={() => onDeleteMeal(meal)} // Use the delete handler from props
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
                      onClick={() => onDeleteProduct(meal, productIndex)} // Use the delete product handler from props
                      className="text-red-500 hover:text-red-700 ml-4"
                    >
                      🗑️
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))
      )}

      {/* Modal component */}
      <MealModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddMeal={onAddMeal} // Use the add meal handler from props
      />
    </div>
  );
};

export default Cart;