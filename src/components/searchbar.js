

// import React from 'react';
// import '../App.css'; // Import your CSS file

// const SearchForm = () => {
//   return (
//     <div className="search-form-container">
//       <div className="search-form">
//         <select style={{backgroundColor:" hsl(0, 17%, 95%)"}} className="form-select select-item">
//           <option  value="">I am a</option>
//         </select>

//         <select style={{backgroundColor:" hsl(0, 17%, 95%)"}} className="form-select select-item">
//        <option  value="">looking for a</option>
//         </select>

//         <input
//           type="text"
//           placeholder="Type a city name (required)"
//           className="form-input input-item"
//         />

//         <input
//           type="text"
//           placeholder="Specify, eg: blonde, asian, gfe..."
//           className="form-input input-item"
//         />

//         <button className="search-button">
//           <i className="fas fa-search"></i> {/* Search icon */}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SearchForm;


import React, { useState } from 'react';
import '../App.css'; // Import your CSS file

const SearchForm = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div className="search-form-container">
      {/* Show button only in mobile view */}
      <button 
        className="toggle-search-button" 
        onClick={toggleSearchVisibility}
      >
        {isSearchVisible ? 'Hide Search' : 'Search'}
      </button>

      {/* Conditionally show the search form based on screen size */}
      <div className={`search-form ${isSearchVisible ? 'show' : 'hide'}`}>
        <select style={{ backgroundColor: "hsl(0, 17%, 95%)" }} className="form-select select-item">
          <option value="">I am a</option>
        </select>

        <select style={{ backgroundColor: "hsl(0, 17%, 95%)" }} className="form-select select-item">
          <option value="">looking for a</option>
        </select>

        <input
          type="text"
          placeholder="Type a city name (required)"
          className="form-input input-item"
        />

        <input
          type="text"
          placeholder="Specify, eg: blonde, asian, gfe..."
          className="form-input input-item"
        />

        <button className="search-button">
          <i className="fas fa-search"></i> {/* Search icon */}
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
