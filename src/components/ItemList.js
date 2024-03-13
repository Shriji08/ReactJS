import React from 'react';

const ItemList = () => {
  const items = [
    { id: 1, type: 'Book', title: 'The Great Gatsby' },
    { id: 2, type: 'Movie', title: 'Inception' },
    { id: 3, type: 'Song', title: 'Bohemian Rhapsody' },
    { id: 4, type: 'Game', title: 'The Legend of Zelda: Breath of the Wild' },
    { id: 5, type: 'Food', title: 'Pizza' },
  ];

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.type}:</strong> {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
