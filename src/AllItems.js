import React, { useState,useEffect } from 'react'
import { useContext } from "react";
import { Context } from "./App";

export default function AllItems() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [cont, setcont] = useState([])
  const [context, setContext] = useContext(Context);

 
  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        }
      )
  }, [])
  const clickedbox = (e) => {
    const checked = e.target.checked;
    if (checked) {
        setContext( [...context, e.target.value]);
       
      }
    
  };
 
 
    return (
      <>
        <h1>all items</h1>
      <ul>
        {items.map(item => (
          
          <li key={item.id} >
        <input type="checkbox" onChange={e=>clickedbox(e)} value={item.title}/>

            {item.title} 
          </li>
        ))}
      </ul>
      
      </>
    );
  
}
