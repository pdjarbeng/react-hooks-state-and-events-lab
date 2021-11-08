import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [value, setValue]= useState('all')

  const handelClick = (e) => {
    setValue(e.target.value)
  }

  const categoryItems = items.filter(item => {
    if (value === "all") {
      return true
    }
    else {
      return item.category === value
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handelClick} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {categoryItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
