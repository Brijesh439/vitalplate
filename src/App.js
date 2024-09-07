import React from 'react';
// import Header from './components/header'
// import './index.css'; // global styles
// import Footer from './components/footer';
// import Buttonshow from './components/showbutton';
import Login from './pages/login';
import FormPage from './pages/formpage';
import MealPlanner from './pages/mealplan';
// import HistoryForm from './components/historyform';
// import NutrientForm from './components/nutrientForm';

const App = () => {
    return (
        <div className="App">
            <Login/>
            <FormPage/>
            <MealPlanner/>
            {/* <Header />
            <main className="container mx-auto p-4">
            <Footer />
            <Buttonshow/>
            </main> 
            <HistoryForm/>
            <NutrientForm/> */}
        </div>
    );
};

export default App;
