import React, { useState } from "react";
import SetMealPlan from "../components/setmeal";
import Cart from "../components/cart";

const MealPlanner = () => {
  const [cartItems, setCartItems] = useState({});
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("");

  const handleAddToCart = (productName) => {
    setSelectedProduct(productName);

    // Automatically add product to the selected meal
    if (selectedMeal) {
      setCartItems((prevItems) => ({
        ...prevItems,
        [selectedMeal]: [...(prevItems[selectedMeal] || []), productName],
      }));
    }
  };

  const handleSelectMeal = (mealName) => {
    setSelectedMeal(mealName);
  };

  return (
    <div className="p-6 flex space-x-6">
      <div className="w-1/4">
        <Cart
          items={cartItems}
          selectedProduct={selectedProduct}
          onSelectMeal={handleSelectMeal} 
        />
      </div>
      <div className="w-3/4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Meal Planner</h1>
        
        {/* Username Section */}
        <div className="mb-6 flex space-x-6">
          <div className="flex-1">
            <label className="text-xl font-bold text-gray-900 mb-6" htmlFor="username">
              Username
            </label>
          </div>
          <div className="flex-1">
            <label className="text-xl font-bold text-gray-900 mb-6" htmlFor="dra">
              DRA value
            </label>
          </div>
        </div>

        <SetMealPlan onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};

export default MealPlanner;
