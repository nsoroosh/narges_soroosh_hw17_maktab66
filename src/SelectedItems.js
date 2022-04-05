import React from 'react'
import List from './List'
import  { useContext } from "react";
import { Context } from "./App";
export default function SelectedItems() {
  const [context, setContext] = useContext(Context);
  return (
    <>
    <h1>selected items</h1>
     <List items={context} />
    </>
  )
}