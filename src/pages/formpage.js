import React, { useState } from 'react';
import HistoryForm from '../components/historyform';
import NutrientForm from '../components/nutrientForm';
import Button from '../components/button'; 

const FormPage = () => {
    const [showForms, setShowForms] = useState(false);
    const [historyFormSubmitted, setHistoryFormSubmitted] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);

    const handleAddCustomer = () => {
        setShowForms(true);
    };

    const handleHistoryFormSubmit = (data) => {
        // Store submitted data
        setSubmittedData(data);
        setHistoryFormSubmitted(true);
    };

    const handleHistoryFormReset = () => {
        setSubmittedData(null);
        setHistoryFormSubmitted(false);
    };

    const handleNutrientFormSubmit = (data) => {
        // Handle nutrient form submission logic here
    };

    return (
        <div className="p-6">
            <Button type="primary" onClick={handleAddCustomer}>Add Customer</Button>
            {showForms && (
                <div className="flex mt-6 gap-6">
                    <div className="w-1/2">
                        <HistoryForm 
                            onSubmit={handleHistoryFormSubmit} 
                            onReset={handleHistoryFormReset} 
                        />
                    </div>
                    <div className="w-1/2">
                        <NutrientForm 
                            onSubmit={handleNutrientFormSubmit}
                            disabled={!historyFormSubmitted} 
                        />
                    </div>
                </div>
            )}
            {submittedData && (
                <div className="mt-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Submitted Customer Data</h2>
                    <pre className="bg-gray-100 p-4 rounded-md border border-gray-300">
                        {JSON.stringify(submittedData, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
};

export default FormPage;
