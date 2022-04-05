import React from 'react'
import PropTypes from 'prop-types'
import { Context } from "./App";
import { useContext } from "react";



export default function List({items}) {

  return (
    <>
      
      <ul>
          {items.map(res=><li key={res}>{res}</li>)}
      </ul>
           
    </>
  )
}
List.propTypes={
    items: PropTypes.array
}