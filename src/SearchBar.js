import React, { useState } from "react";
const SearchBar = ({ items }) => {
  const [query, setQuery] = useState("");
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        placeholder="pls enter input"
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
const App1 = () => {
  const items = ["apple", "banana", "mango", "pineApple", "Guava", "DryFruits"];
  return (
    <div>
      <SearchBar items={items} />
    </div>
  );
};
export default App1;
