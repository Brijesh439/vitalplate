import React, { useState } from "react";
import HistoryForm from "../components/historyform";
import NutrientForm from "../components/nutrientForm";
import Button from "../components/button";
import PopupForm from "../components/popform";

const CustomerTabs = ({ customers, onSelectCustomer, onAddCustomer }) => (
  <div className="flex gap-4 overflow-x-auto pb-4 mb-6">
    {customers.map((customer) => (
      <Button
        key={customer.id}
        onClick={() => onSelectCustomer(customer)}
        className="bg-black hover:bg-white text-white hover:text-black p-2 rounded"
      >
        {customer.name}
      </Button>
    ))}
    <Button
      onClick={onAddCustomer}
      className="bg-black hover:bg-white text-white hover:text-black p-2 rounded"
    >
      + Add Customer Profile
    </Button>
  </div>
);

const FormPage = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [customers, setCustomers] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isHistorySaved, setIsHistorySaved] = useState(false);
  const [isHistoryEditable, setIsHistoryEditable] = useState(true);
  const [isNutritionEditable, setIsNutritionEditable] = useState(true);

  const handleAddCustomer = (newCustomer) => {
    const customerWithId = {
      id: customers.length + 1,
      ...newCustomer,
      historyData: {
        name: newCustomer.name,
        age: newCustomer.age,
        gender: newCustomer.gender,
        height: newCustomer.height,
        weight: newCustomer.weight,
      },
      nutritionData: null,
    };

    setCustomers([...customers, customerWithId]);
    setSelectedCustomer(customerWithId);
    setIsHistorySaved(false);
    setIsHistoryEditable(true);
    setIsNutritionEditable(true);
  };

  const handleSelectCustomer = (customer) => {
    setSelectedCustomer(customer);
    setIsHistorySaved(customer.historyData !== null);
    setIsHistoryEditable(customer.historyData === null);
    setIsNutritionEditable(customer.nutritionData === null);
  };

  const handleHistoryFormSubmit = (data) => {
    setCustomers(
      customers.map((c) =>
        c.id === selectedCustomer.id ? { ...c, historyData: data } : c
      )
    );
    setSelectedCustomer({ ...selectedCustomer, historyData: data });
    setIsHistorySaved(true);
    setIsHistoryEditable(false);
  };

  const handleNutritionFormSubmit = (data) => {
    setCustomers(
      customers.map((c) =>
        c.id === selectedCustomer.id ? { ...c, nutritionData: data } : c
      )
    );
    setSelectedCustomer({ ...selectedCustomer, nutritionData: data });
    setIsNutritionEditable(false);
  };

  const toggleHistoryEdit = () => {
    setIsHistoryEditable((prev) => !prev);
  };

  const toggleNutritionEdit = () => {
    setIsNutritionEditable((prev) => !prev);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-8 w-full overflow-y-auto">
        <CustomerTabs
          customers={customers}
          onSelectCustomer={handleSelectCustomer}
          onAddCustomer={() => setIsPopupOpen(true)}
        />
        {isPopupOpen && (
          <PopupForm
            onClose={() => setIsPopupOpen(false)}
            onAddCustomer={handleAddCustomer}
          />
        )}
        {selectedCustomer && (
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-start mt-8">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                History Form
              </h2>
              <HistoryForm
                onSubmit={handleHistoryFormSubmit}
                initialData={selectedCustomer.historyData}
                isEditable={isHistoryEditable}
                onToggleEdit={toggleHistoryEdit}
              />
            </div>
            {isHistorySaved && (
              <div className="bg-white p-8 rounded-lg shadow-lg w-full lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Nutrition Form
                </h2>
                <NutrientForm
                  onSubmit={handleNutritionFormSubmit}
                  initialData={selectedCustomer.nutritionData}
                  isEditable={isNutritionEditable}
                  onToggleEdit={toggleNutritionEdit}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormPage;
