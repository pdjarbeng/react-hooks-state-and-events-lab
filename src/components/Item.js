import React, {useState} from "react";

function Item({ name, category }) {
  const [Items, setItems] = useState(false)
  const handelAddItem = () => {
    setItems(!Items)
  }
  return (
    <li className={""+ (Items ? "in-cart": "remove-from-cart")}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handelAddItem} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;


