import React, { useState } from 'react';

const Accordion = () => {
  const accordionData = [
    { id: 1, title: 'Fruits', content: 'Apple, Banana, Orange, Grape, Pineapple' },
    { id: 2, title: 'Vegetables', content: 'Carrot, Broccoli, Tomato, Spinach, Potato' },
    { id: 3, title: 'Animals', content: 'Dog, Cat, Elephant, Lion, Giraffe' },
    { id: 4, title: 'Colors', content: 'Red, Blue, Green, Yellow, Purple' },
  ];

  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      {accordionData.map((item) => (
        <div key={item.id} className={`accordion-item ${activeAccordion === item.id ? 'active' : ''}`}>
          <div
            className="accordion-header"
            onClick={() => toggleAccordion(item.id)}
          >
            {item.title}
          </div>
          {activeAccordion === item.id && (
            <div className="accordion-body">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
