import React from 'react';
import { BrowserRouter as Router}  from 'react-router-dom';

import Login from './pages/login';
import MealPlanner from './pages/meal';
import FormPage from './pages/formpage';


const App = () => {
  return (
    <Router>
      <div className="App">
          <Login/>
          <FormPage/>
          <MealPlanner/>
      </div>
    </Router> 
  );
};
export default App;
