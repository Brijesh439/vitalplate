import React, { useState, useEffect } from "react";
import { nutrientFormConfig } from "../config/content";
import Button from "../components/button";

const scrollableStyle = {
  maxHeight: "400px",
  overflowY: "auto",
  paddingRight: "10px",
  scrollbarWidth: "thin",
};

const NutrientForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || {});

  // Populate the form with initial data if it changes (e.g., when switching between customers)
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass data to parent component
  };

  const renderFields = (fields) => {
    return fields.map((field) => (
      <div key={field.name} className="mb-6">
        <label className="block text-gray-800 text-sm font-medium mb-2" htmlFor={field.name}>
          {field.label}
        </label>
        <input
          type="number"
          id={field.name}
          name={field.name}
          value={formData[field.name] || ""}
          onChange={handleChange}
          className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition ease-in-out duration-150"
        />
      </div>
    ));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Nutrition Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div style={scrollableStyle} className="space-y-6">
          {/* Render Macronutrients */}
          <div className="border-t border-gray-300 pt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Macronutrient Intake</h3>
            {renderFields(nutrientFormConfig.macronutrients)}
          </div>
          {/* Render Micronutrients */}
          <div className="border-t border-gray-300 pt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Micronutrient Intake</h3>
            {renderFields(nutrientFormConfig.micronutrients)}
          </div>
        </div>
        <div className="mt-6 flex gap-4">
          <Button type="primary" onClick={handleFormSubmit}>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NutrientForm;