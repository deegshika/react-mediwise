import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Result from './Result';

const mockMedicineData = {
  // ... (keep your existing mock data)
  'Paracetamol': {
    name: 'Paracetamol',
    usage: 'Pain relief and fever reduction.',
    sideEffects: 'Rare: skin rash, liver damage if overdosed.',
    dosage: [
      { age: 'Adults', dose: '500mg every 6 hours' },
      { age: 'Children (6-12)', dose: '250mg every 6 hours' },
    ],
  },
  'Ibuprofen': {
    name: 'Ibuprofen',
    usage: 'Anti-inflammatory and pain relief.',
    sideEffects: 'Stomach irritation, kidney issues with prolonged use.',
    dosage: [
      { age: 'Adults', dose: '200-400mg every 4-6 hours' },
      { age: 'Children', dose: 'Consult a doctor' },
    ],
  },
};

const MedicineSearch = () => {
  const [medicine, setMedicine] = useState(null);

  const handleSearch = (query) => {
    const formattedQuery = query.charAt(0).toUpperCase() + query.slice(1).toLowerCase();
    const result = mockMedicineData[formattedQuery];
    setMedicine(result || null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Medicine Information</h1>
        <p className="text-gray-600 mt-2">Search for details about your medication</p>
      </div>
      <SearchBar onSearch={handleSearch} />
      <Result medicine={medicine} />
    </div>
  );
};

export default MedicineSearch;