import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ordered, restocked} from '../icecream/IcecreamSlice'

function IcecreamView() {

  const numOfIcecream= useSelector((state)=>state.icecream.numOfIcecream)
 const dispatch = useDispatch()
  return (
    <div><h2>Total icecreams : {numOfIcecream}</h2>
        <div><button onClick={()=>dispatch(ordered())}>order icecreams</button> </div>
        <div><button onClick={()=>dispatch(restocked(2))}>restock icecreams</button></div>
    </div>
  )
}

export default IcecreamView