import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Login from "./pages/login";
import FormPage from "./pages/formpage";
import MealPlanner from "./pages/meal";
import DayNutritionPlan from "./pages/daynutritionplan";
// import Header from './components/header';
// import HeaderL from './components/headerlogin';
import NutritionSearch from "./pages/openai";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Login />
        <FormPage />
        <MealPlanner />
        {/* <Header/>
          <HeaderL/> */}
        <DayNutritionPlan/>
        <NutritionSearch/>
      </div>
    </Router>
  );
};
export default App;
