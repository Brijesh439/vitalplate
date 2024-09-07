import React, { useState } from 'react';
import { nutrientFormConfig } from '../config/content';
import Button from '../components/button'; // Ensure this path is correct

const NutrientForm = ({ onSubmit, disabled }) => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const renderFields = (fields) => {
        return fields.map(field => (
            <div key={field.name} className="mb-6">
                <label className="block text-gray-800 text-sm font-medium mb-2" htmlFor={field.name}>
                    {field.label}
                </label>
                <input
                    type="number"
                    id={field.name}
                    name={field.name}
                    onChange={handleChange}
                    disabled={disabled} // Disable input fields if `disabled` prop is true
                    className={`block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition ease-in-out duration-150 ${disabled ? 'bg-gray-200 cursor-not-allowed' : ''}`}
                />
            </div>
        ));
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nutrient Form</h2>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }}>
                <div className="space-y-6">
                    <div className="border-t border-gray-300 pt-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Macronutrient Intake</h3>
                        {renderFields(nutrientFormConfig.macronutrients)}
                    </div>
                    <div className="border-t border-gray-300 pt-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Micronutrient Intake</h3>
                        {renderFields(nutrientFormConfig.micronutrients)}
                    </div>
                </div>
                <div className="mt-6">
                    <Button type="primary" onClick={() => onSubmit(formData)} disabled={disabled}>Submit</Button>
                </div>
            </form>
        </div>
    );
};

export default NutrientForm;
