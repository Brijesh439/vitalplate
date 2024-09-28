import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Login from "./pages/login";
import FormPage from "./pages/formpage";
import MealPlanner from "./pages/meal";
import DayNutritionPlan from "./pages/daynutritionplan";
// import Header from './components/header';
// import HeaderL from './components/headerlogin';
import NutritionSearch from "./pages/openai";
import Sidebar from "./components/sidebar";

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <Login /> */}
        {/* <FormPage /> */}
        {/* <DayNutritionPlan/> */}
        <MealPlanner />
        {/* <NutritionSearch/> */}
        {/* <Header/>
          <HeaderL/> */}
          {/* <Sidebar/> */}
      </div>
    </Router>
  );
};
export default App;
