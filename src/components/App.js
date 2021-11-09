// replace 'false' with a state variable that can be toggled between true and false
// this will be used for the Dark Mode Toggle feature

import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const[darkMode, setToDark] = useState(false)

  const appClass = darkMode ? "App dark" : "App light"
  const handelClcik = ()=>{
    setToDark(prev => !prev)
    //setToDak((darkMode) => !darkMode)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handelClcik}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
