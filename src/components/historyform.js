import React, { useState, useEffect } from 'react';
import { historyFormConfig } from '../config/content';
import Button from '../components/button';

const scrollableStyle = {
    maxHeight: '400px',
    overflowY: 'auto',
    paddingRight: '10px',
    scrollbarWidth: 'thin',
};

const HistoryForm = ({
    onSubmit,
    onReset,
    isEditing,
    isEditingfunction,
    initialData,
    onGenerateNutrition,
}) => {
    const [formData, setFormData] = useState(initialData || {}); // Use initial data if available

    // Populate form fields with initial data if it changes
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

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData); // Pass the form data when submitting
    };

    const renderFields = (fields) => {
        return fields.map((field) => (
            <div key={field.name} className="mb-6">
                <label className="block text-gray-800 text-sm font-medium mb-2" htmlFor={field.name}>
                    {field.label}
                </label>
                {field.type === 'select' ? (
                    <select
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        disabled={!isEditing} // Disable field if not in editing mode
                        className={`block w-full p-3 border border-gray-300 rounded-md shadow-sm 
                          ${!isEditing ? 'bg-gray-100 cursor-not-allowed' : 'focus:ring-2 focus:ring-green-400 transition ease-in-out duration-150'}`}
                    >
                    <option value="">Select an option</option>
                    {field.options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                    </select>
                ) : field.type === 'textarea' ? (
                    <textarea
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        disabled={!isEditing} // Disable field if not in editing mode
                        className={`block w-full p-3 border border-gray-300 rounded-md shadow-sm 
                          ${!isEditing ? 'bg-gray-100 cursor-not-allowed' : 'focus:ring-2 focus:ring-green-400 transition ease-in-out duration-150'}`}
                        rows="4"
                    ></textarea>
                ) : (
                    <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        disabled={!isEditing} // Disable field if not in editing mode
                        className={`block w-full p-3 border border-gray-300 rounded-md shadow-sm 
                          ${!isEditing ? 'bg-gray-100 cursor-not-allowed' : 'focus:ring-2 focus:ring-green-400 transition ease-in-out duration-150'}`}
                    />
                )}
            </div>
        ));
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">History Form</h2>
            <form onSubmit={handleFormSubmit}>
                <div style={scrollableStyle} className="space-y-6">
                    {/* Render the form sections */}
                    <div className="border-t border-gray-300 pt-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h3>
                        {renderFields(historyFormConfig.personalInformation)}
                    </div>
                    <div className="border-t border-gray-300 pt-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Medical History</h3>
                        {renderFields(historyFormConfig.medicalHistory)}
                    </div>
                    <div className="border-t border-gray-300 pt-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Lifestyle Factors</h3>
                        {renderFields(historyFormConfig.lifestyleFactors)}
                    </div>
                    <div className="border-t border-gray-300 pt-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Goals and Preferences</h3>
                        {renderFields(historyFormConfig.goalsPreferences)}
                    </div>
                    <div className="border-t border-gray-300 pt-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Psychosocial Factors</h3>
                        {renderFields(historyFormConfig.psychosocialFactors)}
                    </div>
                </div>
                <div className="mt-6 flex gap-4">
                    {/* Conditionally render buttons based on the state */}
                    {isEditing ? (
                        <Button type="primary" onClick={handleFormSubmit}>
                            Save
                        </Button>
                    ) : (
                        <Button type="secondary" onClick={() => {isEditingfunction(false)}}>
                            Edit
                        </Button>
                    )}
                    <Button type="secondary" onClick={onReset}>
                            Reset
                    </Button>
                    <Button
                        type="primary"
                        onClick={onGenerateNutrition}
                        disabled={isEditing} // Disabled until the form is submitted
                    >
                        Generate Nutrition Info
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default HistoryForm;