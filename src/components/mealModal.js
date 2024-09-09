// src/components/MealModal.js
import React, { useState } from "react";

const MealModal = ({ isOpen, onClose, onAddMeal }) => {
  const [mealName, setMealName] = useState("");

  const handleSubmit = () => {
    if (mealName) {
      onAddMeal(mealName); // Call onAddMeal with the mealName
      setMealName("");
      onClose(); // Close the modal after adding the meal
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add Meal</h2>
        <input
          type="text"
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
          placeholder="Enter meal name"
          className="block w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-green-500 text-white py-2 px-4 rounded-md"
        >
          Add Meal
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-500 text-white py-2 px-4 rounded-md ml-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default MealModal;
