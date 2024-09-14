// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';

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

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
