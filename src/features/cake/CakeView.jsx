import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ordered, restocked} from "../cake/cakeSlice"

 function CakeView (){
const [value, setvalue] = useState(1)
const numOfCakes = useSelector((state)=>state.cake.numOfCakes)
const dispatch = useDispatch()

  return (
    <div><h2>Total cakes : {numOfCakes}</h2>
        <div><button onClick={()=>dispatch(ordered())}>order cakes</button> </div>
        <input type="text"  onChange={(e)=>setvalue(parseInt(e.target.value))}></input>
        <div><button onClick={()=> dispatch(restocked(value))}>restock cakes</button></div>
    </div>
  )
} 

export default CakeView