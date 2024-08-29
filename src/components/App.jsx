import React, { useState } from "react";

function App() {
  const [listItem, setListItem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setListItem(value);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, listItem];
    });
    setListItem(""); // Clear the input field after adding the item
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          name="item"
          onChange={handleChange}
          value={listItem}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
