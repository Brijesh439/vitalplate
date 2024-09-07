import React, { useState } from "react";
import SetMealPlan from "../components/setmeal";
import Cart from "../components/cart";

const MealPlanner = () => {
  const [cartItems, setCartItems] = useState({});
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(""); 

  const handleAddToCart = (productName) => {
    setSelectedProduct(productName);

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

  const handleAddMeal = (mealName) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [mealName]: prevItems[mealName] || [], 
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
    <div className="p-6 flex space-x-6">
      <div className="w-1/4">
        <Cart
          items={cartItems}
          selectedProduct={selectedProduct}
          onSelectMeal={handleSelectMeal}
          onAddMeal={handleAddMeal}         
          onDeleteMeal={handleDeleteMeal}   
          onDeleteProduct={handleDeleteProduct} 
        />
      </div>
      <div className="w-3/4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Meal Planner</h1>
        <SetMealPlan onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};

export default MealPlanner;
