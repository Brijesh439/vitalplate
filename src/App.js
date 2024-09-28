import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Login from "./pages/login";
import FormPage from "./pages/formpage";
import MealPlanner from "./pages/meal";
// import Header from './components/header';
// import HeaderL from './components/headerlogin';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Login />
        <FormPage />
        <MealPlanner />
        {/* <Header/>
          <HeaderL/> */}
      </div>
    </Router>
  );
};
export default App;
