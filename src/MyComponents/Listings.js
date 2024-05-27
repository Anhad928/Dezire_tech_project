import React from 'react'
import {Listing} from "../MyComponents/Listing";

export const Listings = (props) => {
  return (
    <div className='container'>
        <h3 className="text-center my-5">Some of the previous Projects</h3>
        {props.list.map((list)=>{
            return <Listing list={list}/>
        })}

    </div>
  ) 
}
