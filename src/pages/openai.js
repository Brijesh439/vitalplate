import React, { useState } from "react";

const NutritionSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openAIData, setOpenAIData] = useState(null);
  const [standardAPIData, setStandardAPIData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isAdjusting, setIsAdjusting] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    try {
      // Simulate API response
      const mockOpenAIData = {
        Protein: 5,
        Carbohydrates: 10,
        Fat: 2,
        Calories: 70,
      };
      setOpenAIData(mockOpenAIData);

      const mockStandardAPIData = {
        Protein: 4,
        Carbohydrates: 8,
        Fat: 3,
        Calories: 60,
      };
      setStandardAPIData(mockStandardAPIData);
    } catch (err) {
      setError("Failed to fetch nutrition data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenAIDataChange = (nutrient, value) => {
    setOpenAIData((prevData) => ({
      ...prevData,
      [nutrient]: value,
    }));
  };

  const handleAdjustNutrition = () => {
    setIsAdjusting(true);
  };

  const handleSubmitAdjustments = () => {
    console.log("Submitting adjusted data:", openAIData);
    setIsAdjusting(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Main Content */}
      <div className="w-3/4 p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Nutrition Search and Comparison</h1>

        {/* Search Bar */}
        <div className="flex mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for an ingredient or product"
            className="flex-grow p-3 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150 ease-in-out"
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-r-md transition duration-150 ease-in-out"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Nutrition Data Comparison */}
        {openAIData && standardAPIData && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* OpenAI Data */}
            <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 transition-transform duration-300 hover:shadow-xl">
              <h2 className="text-2xl font-semibold mb-4">
                OpenAI Data {isAdjusting && "(Editable)"}
              </h2>
              {Object.entries(openAIData).map(([nutrient, value]) => (
                <div key={nutrient} className="flex justify-between mb-2">
                  <span className="font-medium">{nutrient}:</span>
                  {isAdjusting ? (
                    <input
                      type="number"
                      value={value}
                      onChange={(e) =>
                        handleOpenAIDataChange(
                          nutrient,
                          parseFloat(e.target.value)
                        )
                      }
                      className="w-20 p-1 border border-gray-300 rounded-md shadow-sm"
                    />
                  ) : (
                    <span>{value}</span>
                  )}
                </div>
              ))}
              {!isAdjusting ? (
                <button
                  onClick={handleAdjustNutrition}
                  className="mt-4 bg-green-500 hover:bg-green-600 text-white p-2 rounded-md transition duration-150 ease-in-out"
                >
                  Adjust Nutrition
                </button>
              ) : (
                <button
                  onClick={handleSubmitAdjustments}
                  className="mt-4 bg-green-500 hover:bg-green-600 text-white p-2 rounded-md transition duration-150 ease-in-out"
                >
                  Submit Adjustments
                </button>
              )}
            </div>

            {/* Standard API Data */}
            <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 transition-transform duration-300 hover:shadow-xl">
              <h2 className="text-2xl font-semibold mb-4">Standard API Data</h2>
              {Object.entries(standardAPIData).map(([nutrient, value]) => (
                <div key={nutrient} className="flex justify-between mb-2">
                  <span className="font-medium">{nutrient}:</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NutritionSearch;
