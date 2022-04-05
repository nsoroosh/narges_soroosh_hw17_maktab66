import AllItems from "./AllItems";
import "./App.css";
import SelectedItems from "./SelectedItems";
import React, { useState } from 'react'

export const Context = React.createContext([]);

function App() {
  const [context, setContext] = useState([])
  return (
    <>
      <Context.Provider value={[context, setContext]}>
        <AllItems />
      <SelectedItems />
      </Context.Provider>
    </>
  );
}

export default App;
