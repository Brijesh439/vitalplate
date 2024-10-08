import React, { useEffect, useState } from "react";
import { nutrientFormConfig } from "../config/content";
import Button from "../components/button";
import { Lock, Unlock } from "lucide-react";
import ReactDOM from "react-dom";

const DayNutritionPlan = () => {
  const initialNutritionData = {
    carbohydrates: 300,
    proteins: 120,
    fats: 90,
    fiber: 30,
    water: 3000,
    vitaminA: 900,
    vitaminB: 1.3,
    vitaminC: 75,
    vitaminD: 20,
    vitaminE: 15,
    vitaminK: 120,
    calcium: 1000,
    iron: 18,
    magnesium: 420,
    potassium: 4700,
    sodium: 2300,
    zinc: 11,
  };

  const Modal = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null;

    return ReactDOM.createPortal(
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative">
          <div className="absolute top-2 right-2">
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-900"
            >
              ✖
            </button>
          </div>
          {children}
        </div>
      </div>,
      document.body
    );
  };

  const [nutritionData, setNutritionData] = useState(initialNutritionData);
  const [mealPlans, setMealPlans] = useState({
    breakfast: {},
    lunch: {},
    dinner: {},
  });
  const [adjustedMealPlans, setAdjustedMealPlans] = useState({
    breakfast: {},
    lunch: {},
    dinner: {},
  });
  const [isAdjusting, setIsAdjusting] = useState(false);
  const [adjustingMeal, setAdjustingMeal] = useState("");
  const [imbalances, setImbalances] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [lockedMeals, setLockedMeals] = useState({
    breakfast: false,
    lunch: false,
    dinner: false,
  });
  const [isModalVisible, setModalVisible] = useState(false);
  const [wellBalancedNutrients, setWellBalancedNutrients] = useState("");

  useEffect(() => {
    const dividedNutrition = Object.keys(nutritionData).reduce((acc, key) => {
      acc[key] = (nutritionData[key] / 3).toFixed(2);
      return acc;
    }, {});

    setMealPlans({
      breakfast: dividedNutrition,
      lunch: dividedNutrition,
      dinner: dividedNutrition,
    });

    setAdjustedMealPlans({
      breakfast: dividedNutrition,
      lunch: dividedNutrition,
      dinner: dividedNutrition,
    });
  }, [nutritionData]);

  const handleAdjustNutrition = (meal) => {
    setIsAdjusting(true);
    setAdjustingMeal(meal);
    setShowAlert(false);
  };

  const handleNutritionChange = (nutrient, value, meal) => {
    const newValue = parseFloat(value);
    const oldValue = parseFloat(adjustedMealPlans[meal][nutrient]);
    const difference = newValue - oldValue;

    setAdjustedMealPlans((prev) => ({
      ...prev,
      [meal]: {
        ...prev[meal],
        [nutrient]: newValue,
      },
    }));

    const unlockedMeals = ["breakfast", "lunch", "dinner"].filter(
      (m) => m !== meal && !lockedMeals[m]
    );

    if (unlockedMeals.length > 0) {
      const adjustmentPerMeal = difference / unlockedMeals.length;

      unlockedMeals.forEach((otherMeal) => {
        setAdjustedMealPlans((prev) => ({
          ...prev,
          [otherMeal]: {
            ...prev[otherMeal],
            [nutrient]: (
              parseFloat(prev[otherMeal][nutrient]) - adjustmentPerMeal
            ).toFixed(2),
          },
        }));
      });
    } else {
      setAdjustedMealPlans((prev) => ({
        ...prev,
        [meal]: {
          ...prev[meal],
          [nutrient]: oldValue,
        },
      }));
    }
  };

  const validateChanges = () => {
    const newImbalances = {};
    Object.keys(nutritionData).forEach((nutrient) => {
      const totalAdjusted =
        parseFloat(adjustedMealPlans.breakfast[nutrient]) +
        parseFloat(adjustedMealPlans.lunch[nutrient]) +
        parseFloat(adjustedMealPlans.dinner[nutrient]);
      const difference = (totalAdjusted - nutritionData[nutrient]).toFixed(2);
      if (Math.abs(difference) > 0.01) {
        newImbalances[nutrient] = difference;
      }
    });
    setImbalances(newImbalances);
    return Object.keys(newImbalances).length === 0;
  };

  const handleSubmitChanges = () => {
    if (validateChanges()) {
      setMealPlans(adjustedMealPlans);
      setIsAdjusting(false);
      setAdjustingMeal("");
      setShowAlert(false);

      const nutrients = Object.entries(nutritionData)
        .map(([nutrient, value]) => {
          return `${
            nutrientFormConfig.macronutrients.find((n) => n.name === nutrient)
              ?.label ||
            nutrientFormConfig.micronutrients.find((n) => n.name === nutrient)
              ?.label
          }: ${value}`;
        })
        .join("\n");

      setWellBalancedNutrients(nutrients);
      setModalVisible(true);
    } else {
      setShowAlert(true);
    }
  };

  const handleLockToggle = (meal) => {
    setLockedMeals((prev) => ({
      ...prev,
      [meal]: !prev[meal],
    }));
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-grow p-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center">Day Nutrition Plan</h2>
        <div className="p-6 flex justify-center space-x-10">
          <div className="bg-white shadow-xl rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Day Nutrition Need
            </h3>
            <ul className="space-y-2">
              {Object.entries(nutritionData).map(([key, value]) => (
                <li key={key} className="text-gray-700">
                  {nutrientFormConfig.macronutrients.find((n) => n.name === key)
                    ?.label ||
                    nutrientFormConfig.micronutrients.find((n) => n.name === key)
                      ?.label}
                  : {value}
                </li>
              ))}
            </ul>
          </div>

          {["breakfast", "lunch", "dinner"].map((meal) => (
            <div key={meal} className="bg-white shadow-xl rounded-lg p-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {meal.charAt(0).toUpperCase() + meal.slice(1)} Nutrition
                </h3>
              </div>
              <ul className="space-y-2">
                {Object.entries(
                  isAdjusting ? adjustedMealPlans[meal] : mealPlans[meal]
                ).map(([key, value]) => (
                  <li key={key} className="text-gray-700">
                    {nutrientFormConfig.macronutrients.find((n) => n.name === key)
                      ?.label ||
                      nutrientFormConfig.micronutrients.find(
                        (n) => n.name === key
                      )?.label}
                    : {value}
                    {isAdjusting &&
                      adjustingMeal === meal &&
                      !lockedMeals[meal] && (
                        <input
                          type="number"
                          value={value}
                          onChange={(e) =>
                            handleNutritionChange(key, e.target.value, meal)
                          }
                          className="ml-2 w-20 border rounded-md p-1"
                        />
                      )}
                  </li>
                ))}
              </ul>
              <div className="space-x-4 mt-4">
                <Button
                  variant="primary"
                  className="bg-gray-800 hover:bg-gray-900 text-white p-2"
                  onClick={() => handleAdjustNutrition(meal)}
                  disabled={lockedMeals[meal]}
                >
                  Adjust
                </Button>
                <Button
                  variant="primary"
                  onClick={() => handleLockToggle(meal)}
                  className="bg-gray-800 hover:bg-gray-900 text-white p-2"
                >
                  {lockedMeals[meal] ? <Lock size={16} /> : <Unlock size={16} />}
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <Button
            onClick={handleSubmitChanges}
            className="bg-gray-800 hover:bg-gray-900 text-white p-2"
          >
            Submit Changes
          </Button>
        </div>

        {/* Modal Component */}
        <Modal isVisible={isModalVisible} onClose={() => setModalVisible(false)}>
          <h3 className="text-lg font-semibold mb-4 text-center">
            Well-Balanced Nutrients, Changes submitted
          </h3>
          <pre className="text-sm">{wellBalancedNutrients}</pre>
        </Modal>
      </div>
    </div>
  );
};

export default DayNutritionPlan;
