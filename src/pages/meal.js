import React, { useState, useMemo } from "react";


import {
  PlusCircle,
  Trash2,
  ChevronDown,
  ChevronUp,
  Search,
} from "lucide-react";

const Button = ({
  children,
  onClick,
  className = "",
  variant = "default",
  size = "default",
}) => {
  const baseClass =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

  const variantClass =
    variant === "ghost"
      ? "hover:bg-gray-800 text-black border-black hover:text-white"
      : "bg-black text-white hover:bg-white hover:text-black";

  const sizeClass = size === "icon" ? "h-12 w-12" : "h-12 px-6 py-3";

  return (
    <button
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Input = ({ placeholder, value, onChange }) => (
  <input
    className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

const Card = ({ children, className = "", onClick = null }) => (
  <div
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
    onClick={onClick}
  >
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3
    className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
  >
    {children}
  </h3>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

const ScrollArea = ({ children, className = "" }) => (
  <div className={`overflow-auto ${className}`}>{children}</div>
);

const Dialog = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

const DialogContent = ({ children }) => (
  <div className="grid gap-4">{children}</div>
);

const DialogHeader = ({ children }) => (
  <div className="flex flex-col space-y-1.5 text-center sm:text-left">
    {children}
  </div>
);

const DialogTitle = ({ children }) => (
  <h3 className="text-lg font-semibold leading-none tracking-tight">
    {children}
  </h3>
);

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
    <Card className="w-full max-w-md h-[calc(100vh-2rem)]">
      <CardHeader>
        <CardTitle>Meals</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[calc(100vh-10rem)] px-4">
          <div className="space-y-4 pr-4">
            {meals.map((meal) => (
              <Card
                key={meal.id}
                className={`cursor-pointer ${
                  selectedMealId === meal.id ? "border-primary" : ""
                }`}
                onClick={() => onSelectMeal(meal.id)}
              >
                <CardHeader className="flex items-center justify-between p-4 hover:shadow-md">
                  <div className="flex items-center justify-between w-full">
                    <CardTitle className="text-lg">{meal.name}</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
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
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          onDeleteMeal(meal.id);
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {meal.isExpanded && (
                  <CardContent className="p-4 pt-0">
                    {meal.ingredients.map((ingredient) => (
                      <div
                        key={ingredient.id}
                        className="flex justify-between items-center py-2"
                      >
                        <span>
                          {ingredient.name} - {ingredient.weight}g
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            onDeleteIngredient(meal.id, ingredient.id)
                          }
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </ScrollArea>
        <div className="p-4">
          <Button className="w-full" onClick={() => setIsDialogOpen(true)}>
            <PlusCircle className="mr-2 h-4 w-4" /> Add Meal
          </Button>
          <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Meal</DialogTitle>
              </DialogHeader>
              <Input
                placeholder="Enter meal name"
                value={newMealName}
                onChange={(e) => setNewMealName(e.target.value)}
              />
              <Button onClick={handleAddMeal}>Add</Button>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
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
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: `${Math.min((value / max) * 100, 100)}%` }}
      ></div>
    </div>
  </div>
);

const NutrientProfile = ({ nutrients }) => (
  <ScrollArea className="h-60 w-full">
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
  </ScrollArea>
);

const IngredientsComponent = ({
  onAddIngredient,
  selectedMealId,
  selectedMeal,
}) => {
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientWeight, setIngredientWeight] = useState("");
  const [nutrients] = useState({
    //const [nutrients, setNutrients] = useState({ if needed
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
    });
    setIngredientName("");
    setIngredientWeight("");
  };

  return (
    <div className="flex flex-col space-y-4 w-full max-w-md h-[calc(100vh-2rem)] ">
      <CardHeader>
        <CardTitle>Meal Planner</CardTitle>
      </CardHeader>
      <Input
        placeholder="Enter ingredient name"
        value={ingredientName}
        onChange={(e) => setIngredientName(e.target.value)}
      />
      <Input
        placeholder="Enter weight (g)"
        value={ingredientWeight}
        onChange={(e) => setIngredientWeight(e.target.value)}
      />
      <span className="flex justify-evenly">
        <Button variant="primary">
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
        <Button onClick={handleAddIngredient}>Add Ingredient</Button>
      </span>
      {selectedMeal && <NutrientProfile nutrients={nutrients} />}
    </div>
  );
};

const MealPlanner = () => {
  const [meals, setMeals] = useState([]);
  const [selectedMealId, setSelectedMealId] = useState(null);

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
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
    </div>
  );
};

export default MealPlanner;
