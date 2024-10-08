import React, { useState, useMemo, useEffect } from "react";

import {
  PlusCircle,
  Trash2,
  ChevronDown,
  ChevronUp,
  Search,
} from "lucide-react";

const MealsComponent = ({
  meals,
  onAddMeal,
  onDeleteMeal,
  onToggleMeal,
  onSelectMeal,
  selectedMealId,
  onDeleteIngredient,
}) => {
  const [newMealName, setNewMealName] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddMeal = () => {
    if (newMealName) {
      onAddMeal(newMealName);
      setNewMealName("");
      setIsDialogOpen(false);
    }
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md h-[calc(100vh-2rem)]">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Meals
        </h3>
      </div>
      <div className="p-6 pt-0">
        <div className="overflow-auto h-[calc(100vh-10rem)] px-4">
          <div className="space-y-4 pr-4">
            {meals.map((meal) => (
              <div
                key={meal.id}
                className={`rounded-lg border bg-card text-card-foreground shadow-sm cursor-pointer ${
                  selectedMealId === meal.id ? "border-primary" : ""
                }`}
                onClick={() => onSelectMeal(meal.id)}
              >
                <div className="flex flex-col space-y-1.5 p-6 flex items-center justify-between p-4 hover:shadow-md">
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight text-lg">
                      {meal.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <button
                        className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-gray-800 text-black border-black hover:text-white h-12 w-12"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleMeal(meal.id);
                        }}
                      >
                        {meal.isExpanded ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                      <button
                        className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-gray-800 text-black border-black hover:text-white h-12 w-12"
                        onClick={(e) => {
                          e.stopPropagation();
                          onDeleteMeal(meal.id);
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {meal.isExpanded && (
                  <div className="p-6 pt-0">
                    {meal.ingredients.map((ingredient) => (
                      <div
                        key={ingredient.id}
                        className="flex justify-between items-center py-2"
                      >
                        <span>
                          {ingredient.name} - {ingredient.weight}g
                        </span>
                        <button
                          className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-gray-800 text-black border-black hover:text-white h-12 w-12"
                          onClick={() =>
                            onDeleteIngredient(meal.id, ingredient.id)
                          }
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="p-4">
          <button
            className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-black text-white hover:bg-white hover:text-black h-12 px-6 py-3 w-full"
            onClick={() => setIsDialogOpen(true)}
          >
            <PlusCircle className="mr-2 h-4 w-4" /> Add Meal
          </button>
          {isDialogOpen && (
            <div
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsDialogOpen(false)}
            >
              <div
                className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="grid gap-4">
                  <div className="flex flex-col space-y-1.5 text-center sm:text-left">
                    <h3 className="text-lg font-semibold leading-none tracking-tight">
                      Add New Meal
                    </h3>
                  </div>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter meal name"
                    value={newMealName}
                    onChange={(e) => setNewMealName(e.target.value)}
                  />
                  <button
                    className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-black text-white hover:bg-white hover:text-black h-12 px-6 py-3"
                    onClick={handleAddMeal}
                  >
                    Add Meal
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const NutrientBar = ({ name, value, max }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium">{name}</span>
      <span className="text-sm font-medium">
        {value.toFixed(1)}/{max}
      </span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${Math.min((value / max) * 100, 100)}%` }}
      ></div>
    </div>
  </div>
);

const NutrientProfile = ({ nutrients }) => (
  <div className="overflow-auto h-60 w-full">
    <div className="pr-4">
      <NutrientBar name="Calories" value={nutrients.calories} max={2000} />
      <NutrientBar name="Protein (g)" value={nutrients.protein} max={50} />
      <NutrientBar name="Carbs (g)" value={nutrients.carbs} max={300} />
      <NutrientBar name="Fat (g)" value={nutrients.fat} max={65} />
      <NutrientBar name="Fiber (g)" value={nutrients.fiber} max={30} />
      <NutrientBar
        name="Vitamin A (mcg)"
        value={nutrients.vitaminA}
        max={900}
      />
      <NutrientBar name="Vitamin C (mg)" value={nutrients.vitaminC} max={90} />
      <NutrientBar name="Calcium (mg)" value={nutrients.calcium} max={1000} />
      <NutrientBar name="Iron (mg)" value={nutrients.iron} max={18} />
    </div>
  </div>
);

const ProgressBar = ({ progress }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
    <div
      className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);

const IngredientsComponent = ({
  onAddIngredient,
  selectedMealId,
  selectedMeal,
}) => {
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientWeight, setIngredientWeight] = useState("");
  const [nutrients, setNutrients] = useState({
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    vitaminA: 0,
    vitaminC: 0,
    calcium: 0,
    iron: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const fetchNutritionData = async () => {
    if (!ingredientName) return;

    setIsLoading(true);
    setProgress(0);

    // Fake API call
    const fakeApiCall = () => {
      return new Promise((resolve) => {
        let progress = 0;
        const interval = setInterval(() => {
          progress += 10;
          setProgress(progress);
          if (progress >= 100) {
            clearInterval(interval);
            resolve({
              calories: Math.random() * 500,
              protein: Math.random() * 50,
              carbs: Math.random() * 100,
              fat: Math.random() * 50,
              fiber: Math.random() * 15,
              vitaminA: Math.random() * 1000,
              vitaminC: Math.random() * 100,
              calcium: Math.random() * 500,
              iron: Math.random() * 20,
            });
          }
        }, 200);
      });
    };

    try {
      const result = await fakeApiCall();
      setNutrients(result);
    } catch (error) {
      console.error("Error fetching nutrition data:", error);
      alert("Failed to fetch nutrition data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddIngredient = () => {
    if (!selectedMealId) {
      alert("Please select a meal first");
      return;
    }

    if (!ingredientName || !ingredientWeight) return;

    onAddIngredient(selectedMealId, {
      id: Math.random().toString(36).substring(7),
      name: ingredientName,
      weight: parseFloat(ingredientWeight),
      nutrients: nutrients,
    });
    setIngredientName("");
    setIngredientWeight("");
    setNutrients({
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0,
      vitaminA: 0,
      vitaminC: 0,
      calcium: 0,
      iron: 0,
    });
  };

  const handleNutrientChange = (nutrient, value) => {
    setNutrients(prev => ({ ...prev, [nutrient]: parseFloat(value) }));
  };

  return (
    <div className="flex flex-col space-y-4 w-full max-w-md h-[calc(100vh-2rem)]">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Meal Planner
        </h3>
      </div>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Ingredient name"
        value={ingredientName}
        onChange={(e) => setIngredientName(e.target.value)}
      />
      <input
        className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        type="number"
        placeholder="Weight in grams"
        value={ingredientWeight}
        onChange={(e) => setIngredientWeight(e.target.value)}
      />
      <span className="flex justify-evenly">
        <button
          className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-black text-white hover:bg-white hover:text-black h-12 px-6 py-3"
          onClick={fetchNutritionData}
          disabled={isLoading}
        >
          <Search className="mr-2 h-4 w-4" /> {isLoading ? "Searching..." : "Search"}
        </button>
        <button
          className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-black text-white hover:bg-white hover:text-black h-12 px-6 py-3"
          onClick={handleAddIngredient}
        >
          Add Ingredient
        </button>
      </span>
      <h3 className="text-2xl font-semibold leading-none tracking-tight">
        Ingredients nutrient information
      </h3>
      {isLoading && <ProgressBar progress={progress} />}
      {!isLoading && (
        <div className="overflow-auto h-60 w-full">
          <div className="pr-4">
            {Object.entries(nutrients).map(([nutrient, value]) => (
              <div key={nutrient} className="mb-4">
                <label className="block text-sm font-medium mb-1">{nutrient}</label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  type="number"
                  value={value.toFixed(2)}
                  onChange={(e) => handleNutrientChange(nutrient, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MealPlanner = () => {
  const [meals, setMeals] = useState([]);
  const [selectedMealId, setSelectedMealId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const addMeal = (name) => {
    setMeals((prevMeals) => [
      ...prevMeals,
      {
        id: Math.random().toString(36).substring(7),
        name,
        ingredients: [],
        isExpanded: false,
      },
    ]);
  };

  const deleteMeal = (id) => {
    setMeals((prevMeals) => prevMeals.filter((meal) => meal.id !== id));
    if (selectedMealId === id) setSelectedMealId(null);
  };

  const toggleMeal = (id) => {
    setMeals((prevMeals) =>
      prevMeals.map((meal) =>
        meal.id === id ? { ...meal, isExpanded: !meal.isExpanded } : meal
      )
    );
  };

  const selectMeal = (id) => {
    setSelectedMealId(id);
  };

  const deleteIngredient = (mealId, ingredientId) => {
    setMeals((prevMeals) =>
      prevMeals.map((meal) =>
        meal.id === mealId
          ? {
              ...meal,
              ingredients: meal.ingredients.filter(
                (ingredient) => ingredient.id !== ingredientId
              ),
            }
          : meal
      )
    );
  };

  const addIngredient = (mealId, ingredient) => {
    setMeals((prevMeals) =>
      prevMeals.map((meal) =>
        meal.id === mealId
          ? { ...meal, ingredients: [...meal.ingredients, ingredient] }
          : meal
      )
    );
  };

  const selectedMeal = useMemo(
    () => meals.find((meal) => meal.id === selectedMealId),
    [meals, selectedMealId]
  );

  const calculateMealNutrients = (meal) => {
    return meal.ingredients.reduce(
      (acc, ingredient) => {
        Object.keys(acc).forEach((nutrient) => {
          acc[nutrient] += ingredient.nutrients[nutrient];
        });
        return acc;
      },
      {
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
        fiber: 0,
        vitaminA: 0,
        vitaminC: 0,
        calcium: 0,
        iron: 0,
      }
    );
  };

  const fetchMealNutrition = async () => {
    if (!selectedMeal) return;

    setIsLoading(true);
    setProgress(0);

    // Fake API call
    const fakeApiCall = () => {
      return new Promise((resolve) => {
        let progress = 0;
        const interval = setInterval(() => {
          progress += 10;
          setProgress(progress);
          if (progress >= 100) {
            clearInterval(interval);
            resolve(calculateMealNutrients(selectedMeal));
          }
        }, 200);
      });
    };

    try {
      const result = await fakeApiCall();
      setMeals((prevMeals) =>
        prevMeals.map((meal) =>
          meal.id === selectedMealId ? { ...meal, nutrients: result } : meal
        )
      );
    } catch (error) {
      console.error("Error fetching meal nutrition data:", error);
      alert("Failed to fetch meal nutrition data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (selectedMeal && !selectedMeal.nutrients) {
      fetchMealNutrition();
    }
  }, [selectedMeal]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <MealsComponent
        meals={meals}
        onAddMeal={addMeal}
        onDeleteMeal={deleteMeal}
        onToggleMeal={toggleMeal}
        onSelectMeal={selectMeal}
        selectedMealId={selectedMealId}
        onDeleteIngredient={deleteIngredient}
      />
      <IngredientsComponent
        onAddIngredient={addIngredient}
        selectedMealId={selectedMealId}
        selectedMeal={selectedMeal}
      />
      <div className="flex flex-col space-y-4 w-full max-w-md h-[calc(100vh-2rem)]">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">
            Meal Nutrition Profile
          </h3>
        </div>
        {isLoading && <ProgressBar progress={progress} />}
        {!isLoading && selectedMeal && selectedMeal.nutrients && (
          <NutrientProfile nutrients={selectedMeal.nutrients} />
        )}
        {!selectedMeal && (
          <div className="text-center text-gray-500">Select a meal to view its nutrition profile</div>
        )}
      </div>
    </div>
  );
};

export default MealPlanner;