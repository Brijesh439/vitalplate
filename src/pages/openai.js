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
      // Mocking OpenAI API response
      const openAIResponse = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1", // Mock API endpoint
        {
          method: "GET",
        }
      );
      const openAIResult = await openAIResponse.json();
      const mockOpenAIData = {
        Protein: 5,
        Carbohydrates: 10,
        Fat: 2,
        Calories: 70,
      };
      setOpenAIData(mockOpenAIData);

      // Mocking Standard API response
      const standardAPIResponse = await fetch(
        "https://jsonplaceholder.typicode.com/posts/2", // Mock API endpoint
        {
          method: "GET",
        }
      );
      const standardAPIResult = await standardAPIResponse.json();
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
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Nutrition Search and Comparison
      </h1>

      <div className="mb-4 flex space-x-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for an ingredient or product"
          className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="bg-black hover:bg-white text-white hover:text-black p-2 rounded"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {openAIData && standardAPIData && (
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-gray-300 rounded-md p-4">
            <h2 className="text-xl font-semibold mb-2">
              OpenAI Data {isAdjusting && "(Editable)"}
            </h2>
            {Object.entries(openAIData).map(([nutrient, value]) => (
              <div key={nutrient} className="mb-2 flex items-center">
                <span className="flex-grow">{nutrient}:</span>
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
                    className="w-20 p-1 border border-gray-300 rounded-md"
                  />
                ) : (
                  <span>{value}</span>
                )}
              </div>
            ))}
            {!isAdjusting && (
              <button
                onClick={handleAdjustNutrition}
                className="bg-black hover:bg-white text-white hover:text-black p-2 rounded"
              >
                Adjust Nutrition
              </button>
            )}
            {isAdjusting && (
              <button
                onClick={handleSubmitAdjustments}
                className="bg-black hover:bg-white text-white hover:text-black p-2 rounded"
              >
                Submit
              </button>
            )}
          </div>
          <div className="border border-gray-300 rounded-md p-4">
            <h2 className="text-xl font-semibold mb-2">Standard API Data</h2>
            {Object.entries(standardAPIData).map(([nutrient, value]) => (
              <div key={nutrient} className="mb-2">
                <span>
                  {nutrient}: {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NutritionSearch;
