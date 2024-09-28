import React, { useState, useEffect } from 'react';
import { nutrientFormConfig } from '../config/content';
import Button from '../components/button';

const NutrientForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || {});

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleReset = () => {
    setFormData(initialData || {}); // Reset to initialData or clear form fields
  };

  const renderFields = (fields) => {
    return fields.map((field) => (
      <div key={field.name} className="mb-6">
        <label
          className="block text-sm font-semibold text-gray-700 mb-2"
          htmlFor={field.name}
        >
          {field.label}
        </label>
        <input
          type="number"
          id={field.name}
          name={field.name}
          value={formData[field.name] || ''}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 p-2"
        />
      </div>
    ));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto h-[80vh]">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Nutrition Information</h2>
      <form onSubmit={handleSubmit} className="overflow-y-auto h-[65vh]">
        {Object.entries(nutrientFormConfig).map(([section, fields]) => (
          <div key={section} className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {section}
            </h3>
            {renderFields(fields)}
          </div>
        ))}
        <div className="flex justify-between">
          <Button
            type="button"
            onClick={handleReset}
            className="bg-black hover:bg-white text-white hover:text-black p-2 rounded"
          >
            Reset
          </Button>
          <Button
            type="submit"
            className="bg-black hover:bg-white text-white hover:text-black p-2 rounded"
          >
            Save Nutrition Info
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NutrientForm;
