import React, { useState } from 'react';

const Checklist = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (option) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [option]: !prevCheckedItems[option],
    }));
  };

  return (
    <div>
      <h2>Checklist</h2>
      <ul>
        <li>
          <label>
            <input
              type="checkbox"
              value="option1"
              checked={checkedItems.option1 || false}
              onChange={() => handleCheckboxChange('option1')}
            />
            Option 1
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              value="option2"
              checked={checkedItems.option2 || false}
              onChange={() => handleCheckboxChange('option2')}
            />
            Option 2
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              value="option3"
              checked={checkedItems.option3 || false}
              onChange={() => handleCheckboxChange('option3')}
            />
            Option 3
          </label>
        </li>
      </ul>

      <h3>Selected Options:</h3>
      <ul>
        {Object.entries(checkedItems).map(([option, isChecked]) => (
          isChecked && <li key={option}>{option}</li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
