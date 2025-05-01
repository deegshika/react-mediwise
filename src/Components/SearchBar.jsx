import React, { useState } from 'react';
import medicines from './data/medicines.json';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      const matches = medicines
        .filter((med) => med.name.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 5); // Limit to 5 suggestions
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.name);
    setSuggestions([]);
    onSearch(suggestion.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    setSuggestions([]);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto my-8">
      <div className="relative flex items-center shadow-lg rounded-full overflow-hidden">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for medicine (e.g., Paracetamol)..."
          className="w-full py-4 px-6 text-gray-700 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="absolute right-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
      {suggestions.length > 0 && (
        <ul className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg mt-2 absolute z-10">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.name}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-6 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default SearchBar;