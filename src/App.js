import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/login"; // Assuming Login is at this path
import FormPage from "./pages/formpage";
import MealPlanner from "./pages/meal";
import DayNutritionPlan from "./pages/daynutritionplan";
import NutritionSearch from "./pages/openai";
import Sidebar from "./components/sidebar"; // Assuming Sidebar is at this path

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar /> {/* Sidebar Component */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Login />} /> {/* Home or Login Page */}
            <Route path="/form" element={<FormPage />} /> {/* Form Page */}
            <Route path="/daynutritionplan" element={<DayNutritionPlan />} /> {/* Day Nutrition Plan Page */}
            <Route path="/meal" element={<MealPlanner />} /> {/* Meal Planner Page */}
            <Route path="/nutritionsearch" element={<NutritionSearch />} /> {/* Nutrition Search Page */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
