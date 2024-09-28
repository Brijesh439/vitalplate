import React, { useState } from 'react';
import HistoryForm from '../components/historyform';
import NutrientForm from '../components/nutrientForm';
import Button from '../components/button';

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
  const [customers, setCustomers] = useState([]); // Start with an empty array for user-added customers.

  const handleAddCustomer = () => {
    const newCustomer = {
      id: customers.length + 1,
      name: `Customer ${customers.length + 1}`,
      historyData: null,
      nutritionData: null
    };
    setCustomers([...customers, newCustomer]);
    setSelectedCustomer(newCustomer);
  };

  const handleSelectCustomer = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleHistoryFormSubmit = (data) => {
    setCustomers(customers.map(c =>
      c.id === selectedCustomer.id ? { ...c, historyData: data } : c
    ));
    setSelectedCustomer({ ...selectedCustomer, historyData: data });
  };

  const handleNutritionFormSubmit = (data) => {
    setCustomers(customers.map(c =>
      c.id === selectedCustomer.id ? { ...c, nutritionData: data } : c
    ));
    setSelectedCustomer({ ...selectedCustomer, nutritionData: data });
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <CustomerTabs
        customers={customers}
        onSelectCustomer={handleSelectCustomer}
        onAddCustomer={handleAddCustomer}
      />
      {selectedCustomer && (
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
          <div className="bg-white p-6 shadow-lg rounded-lg w-full lg:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">History Form</h2>
            <HistoryForm
              onSubmit={handleHistoryFormSubmit}
              initialData={selectedCustomer.historyData}
            />
          </div>
          {selectedCustomer.historyData && (
            <div className="bg-white p-6 shadow-lg rounded-lg w-full lg:w-1/2">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Nutrition Form</h2>
              <NutrientForm
                onSubmit={handleNutritionFormSubmit}
                initialData={selectedCustomer.nutritionData}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FormPage;
