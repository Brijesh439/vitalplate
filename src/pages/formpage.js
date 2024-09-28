import React, { useState } from "react";
import HistoryForm from "../components/historyform";
import NutrientForm from "../components/nutrientForm";

const CustomerTabs = ({ customers, onSelectCustomer, onAddCustomer }) => {
  const scrollableTabsStyle = {
    display: "flex",
    gap: "10px",
    overflowX: "auto",
    paddingBottom: "10px",
    whiteSpace: "nowrap",
  };

  const tabButtonStyle = {
    display: "inline-block",
    padding: "10px",
    backgroundColor: "white",
    border: "1px solid #d1d5db", // gray-300
    borderRadius: "8px",
    margin: "0 10px",
  };

  const addCustomerButtonStyle = {
    display: "inline-block",
    padding: "10px",
    backgroundColor: "#3b82f6", // blue-500
    color: "white",
    borderRadius: "8px",
    margin: "0 10px",
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div style={scrollableTabsStyle}>
        {customers.map((customer, index) => (
          <button
            key={index}
            style={tabButtonStyle}
            onClick={() => onSelectCustomer(customer)}
          >
            {customer.name}
          </button>
        ))}
        <button style={addCustomerButtonStyle} onClick={onAddCustomer}>
          + Add Customer Profile
        </button>
      </div>
    </div>
  );
};

const FormPage = () => {
  const containerStyle = {
    padding: "24px",
  };

  const formsContainerStyle = {
    display: "flex",
    marginTop: "24px",
    gap: "24px",
  };

  const halfWidthStyle = {
    width: "50%",
  };

  // States
  const [selectedCustomer, setSelectedCustomer] = useState(null); // Tracks the selected customer
  const [showForms, setShowForms] = useState(false); // Controls form visibility
  const [historyFormSubmitted, setHistoryFormSubmitted] = useState(false); // Tracks if history form is saved
  const [nutritionFormSubmitted, setNutritionFormSubmitted] = useState(false); // Tracks if nutrition info is generated
  const [submittedHistoryData, setSubmittedHistoryData] = useState(null); // Stores submitted data from history form
  const [submittedNutritionData, setSubmittedNutritionData] = useState(null); // Stores submitted data from history form
  const [mockCustomers, setMockCustomers] = useState([
    { id: 1, name: "John Doe", historySaved: false, nutritionSaved: false },
    {
      id: 2,
      name: "Jane Smith",
      historySaved: true,
      nutritionSaved: false,
      historyData: { name: "john doe", age: 23 },
    },
    {
      id: 3,
      name: "Mike Johnson",
      historySaved: true,
      nutritionSaved: true,
      historyData: { name: "john doe", age: 23 },
      nutritionData: { protein: 12, carbs: "256 Kcal" },
    },
  ]);

  // Handle adding a new customer
  const handleAddCustomer = () => {
    setSelectedCustomer(null); // Reset the selected customer
    setShowForms(true);
    setHistoryFormSubmitted(false); // Reset form status
    setNutritionFormSubmitted(false); // Reset nutrition info status
    setSubmittedHistoryData(null); // Clear the history data
    setSubmittedNutritionData(null); // Clear the nutrition data
  };

  // Handle selecting an existing customer
  const handleSelectCustomer = (customer) => {
    setSelectedCustomer(customer);
    setShowForms(true);

    // Check if history is already saved and set the state accordingly
    setHistoryFormSubmitted(customer.historySaved);
    setNutritionFormSubmitted(customer.nutritionSaved);

    // If history is saved, populate the form with the saved history data
    if (customer.historySaved) {
      setSubmittedHistoryData(customer.historyData);
    }

    // If nutrition is saved, populate the form with the saved nutrition data
    if (customer.nutritionSaved) {
      setSubmittedNutritionData(customer.nutritionData);
    }
  };

  // Handle history form submission
  const handleHistoryFormSubmit = (data) => {
    setSubmittedHistoryData(data); // Save submitted history data
    setHistoryFormSubmitted(true); // Mark history as saved

    // Update the selected customer and mock customers list
    setMockCustomers((customers) =>
      customers.map((customer) =>
        customer.id === selectedCustomer?.id
          ? { ...customer, historySaved: true, historyData: data }
          : customer
      )
    );
  };

  // Handle generating the nutrition information
  const handleGenerateNutrition = () => {
    const generatedNutritionData = {
      protein: 50, // Example generated data
      carbs: "300 Kcal",
    };

    setSubmittedNutritionData(generatedNutritionData);
    setNutritionFormSubmitted(true); // Mark nutrition info as generated

    // Update the selected customer and mock customers list
    setMockCustomers((customers) =>
      customers.map((customer) =>
        customer.id === selectedCustomer?.id
          ? {
              ...customer,
              nutritionSaved: true,
              nutritionData: generatedNutritionData,
            }
          : customer
      )
    );
  };

  // Handle nutrition form submission
  const handleNutritionFormSubmit = (data) => {
    setSubmittedNutritionData(data); // Save submitted nutrition data
    setNutritionFormSubmitted(true);

    // Update the selected customer and mock customers list
    setMockCustomers((customers) =>
      customers.map((customer) =>
        customer.id === selectedCustomer?.id
          ? { ...customer, nutritionSaved: true, nutritionData: data }
          : customer
      )
    );
  };

  // Handle resetting the history form
  const handleHistoryFormReset = () => {
    setSubmittedHistoryData(null);
    setHistoryFormSubmitted(false);
    setSubmittedNutritionData(null);
    setNutritionFormSubmitted(false);
  };

  return (
    <div style={containerStyle}>
      {/* Add Customer Tabs above the forms */}
      <CustomerTabs
        customers={mockCustomers}
        onSelectCustomer={handleSelectCustomer}
        onAddCustomer={handleAddCustomer}
      />

      {showForms && (
        <div style={formsContainerStyle}>
          <div style={halfWidthStyle}>
            {/* Render the History Form */}
            <HistoryForm
              onSubmit={handleHistoryFormSubmit}
              onReset={handleHistoryFormReset}
              isEditing={!historyFormSubmitted} // Editable if history not submitted
              isEditingfunction={setHistoryFormSubmitted}
              initialData={submittedHistoryData} // Populate form with saved data for editing
              onGenerateNutrition={handleGenerateNutrition} // Generates nutrition info
            />
          </div>

          <div style={halfWidthStyle}>
            {/* Render the Nutrition Form if history form is submitted */}
            {historyFormSubmitted && (
              <NutrientForm
                onSubmit={handleNutritionFormSubmit} // Handles saving the nutrition data
                isEditing={!nutritionFormSubmitted} // Disable fields if nutrition is not yet generated
                isEditingfunction={setNutritionFormSubmitted}
                initialData={submittedNutritionData} // Prepopulate with saved data if available
                onCreateMeals={() => {
                  /* Handle meal creation logic here */
                }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FormPage;
