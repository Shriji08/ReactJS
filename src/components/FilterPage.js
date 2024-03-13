import React, { useState } from "react";

const FilterPage = ({ name, onLogout }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Pineapple",
    "Watermelon",
    "Mango",
  ];

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
        <h1>Filter</h1>
      <label>
        Search:
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
      </label>
      <ul>
        {filteredItems.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </ul>
    </div>
  );
};

export default FilterPage;
