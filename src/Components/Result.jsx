import React from 'react';

const Result = ({ medicine }) => {
  if (!medicine) return (
    <div className="text-center py-12">
      <p className="text-gray-500 text-lg">No results found. Try another search.</p>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{medicine.name}</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Usage:</h3>
        <p className="text-gray-600">{medicine.usage}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Side Effects:</h3>
        <p className="text-gray-600">{medicine.sideEffects}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Dosage (by age):</h3>
        <ul className="space-y-2">
          {medicine.dosage.map((item, index) => (
            <li key={index} className="flex justify-between bg-gray-50 p-3 rounded-lg">
              <span className="font-medium text-gray-700">{item.age}:</span>
              <span className="text-gray-600">{item.dose}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Result;