import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Result from './Result';
import medicines from './data/medicines.json';

// Log medicines to debug import
console.log('Medicines data:', medicines);

const MedicineSearch = () => {
  const [medicine, setMedicine] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    if (!query) {
      setMedicine(null);
      setError(null);
      return;
    }

    const formattedQuery = query.charAt(0).toUpperCase() + query.slice(1).toLowerCase();
    setLoading(true);
    setError(null);

    try {
      // Validate medicines data
      if (!Array.isArray(medicines)) {
        throw new Error('Invalid medicine data format');
      }

      // Filter medicines from JSON
      const matchedMedicine = medicines.find(
        (med) => med.name.toLowerCase() === formattedQuery.toLowerCase()
      );

      if (!matchedMedicine) {
        throw new Error('No results found. Try another search.');
      }

      setMedicine(matchedMedicine);
    } catch (err) {
      console.error('Error details:', err);
      setError(err.message);
      setMedicine(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Medicine Information</h1>
        <p className="text-gray-600 mt-2">Search for details about your medication</p>
      </div>
      <SearchBar onSearch={handleSearch} />
      {loading && <p className="text-center text-gray-600 mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}
      <Result medicine={medicine} />
    </div>
  );
};

export default MedicineSearch;