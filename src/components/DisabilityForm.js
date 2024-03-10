import React, { useState } from 'react';

export default function Component() {
    const initialHashtags = [
        'learn', 'meet', 'games', 'connect', 'study','explore','collaborate','play','engage','educate','compete','interact','train'
      ];
    
      const [availableTags, setAvailableTags] = useState(initialHashtags);
      const [selectedTags, setSelectedTags] = useState([]);
      const [disabilityType, setDisabilityType] = useState('');
    
      const disabilityOptions = [
        "Physical Disabilities",
        "Sensory Disabilities",
        "Intellectual Disabilities",
        "Learning Disabilities",
        "Psychiatric Disabilities",
        "Neurological Disabilities",
        "Chronic Illnesses",
        "Invisible Disabilities",
      ];
    
      const handleSelectTag = (tag) => {
        setSelectedTags([...selectedTags, tag]);
        setAvailableTags(availableTags.filter(t => t !== tag));
      };
    
      const handleRemoveTag = (tag) => {
        setAvailableTags([...availableTags, tag]);
        setSelectedTags(selectedTags.filter(t => t !== tag));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted:", { disabilityType, selectedTags });
    
        // Wait for two seconds before redirecting
        setTimeout(() => {
          window.location.href = '/groups'; // Redirect to /groups path
        }, 2000);
      };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-[#0F0F0F] shadow-md mt-5 rounded border border-white">
      <form  onSubmit={handleSubmit}>
        <div className="px-6 py-4">
          <h2 className="text-3xl font-bold text-white">Get Groups</h2>
       
          <div className="mt-4">
            <label htmlFor="disabilityType" className="block text-sm font-medium text-white">Disability Type:</label>
            <select
              id="disabilityType"
              value={disabilityType}
              onChange={(e) => setDisabilityType(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
             
              {disabilityOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {availableTags.map((tag) => (
              <button 
                key={tag} 
                type="button"
                className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                onClick={() => handleSelectTag(tag)}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-gray-200 mt-4">
          <h3 className="text-lg font-bold mb-2 text-white">Selected Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {selectedTags.length > 0 ? selectedTags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 text-sm font-medium bg-[#FFD23F] text-black rounded-lg cursor-pointer"
                onClick={() => handleRemoveTag(tag)}
              >
                #{tag}
              </span>
            )) : <p className="text-sm text-white">No hashtags selected.</p>}
          </div>
        </div>

        <div className="px-6 py-4">
          <button 
            type="submit" 
            className="text-lg bg-white font-bold hover:bg-[#EEEEEE] text-black py-3 px-6 border hover:border-transparent rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Submit
          </button>
        </div>
      </form>
    </div>

  );
}

