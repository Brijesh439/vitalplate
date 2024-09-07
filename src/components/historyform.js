import React, { useState } from 'react';
import { historyFormConfig } from '../config/content';
import Button from '../components/button';

const HistoryForm = ({ onSubmit, onReset }) => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData); // Pass the form data when submitting
        setFormData({}); // Clear the form data after submission
    };

    // const handleFormReset = () => {
    //     setFormData({});
    //     onReset();
    // };

    const renderFields = (fields) => {
        return fields.map(field => (
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
                        className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition ease-in-out duration-150"
                    >
                        <option value="">Select an option</option>
                        {field.options.map(option => (
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
                        className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition ease-in-out duration-150"
                        rows="4"
                    ></textarea>
                ) : (
                    <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition ease-in-out duration-150"
                    />
                )}
            </div>
        ));
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">History Form</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="space-y-6">
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
                    {/* Use an anonymous function to correctly handle the form submission and reset */}
                    <Button type="primary" onClick={handleFormSubmit}>Submit</Button>
                    {/* <Button type="secondary" onClick={handleFormReset}>Reset</Button> */}
                </div>
            </form>
        </div>
    );
};

export default HistoryForm;
