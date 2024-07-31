import React, { useState } from 'react';
import removeIcon from "../assets/removeIcon.svg"
import addIcon from "../assets/addIcon.svg"

const Counter = ({counter, setCounter}) => {
  return (
    <div className='bg-neutral-normal h-[35px] px-2 gap-4 justify-between items-center border-2 border-primary-normal rounded-lg flex'>
      <button onClick={()=>counter > 1 ? setCounter(counter - 1) : null}>
        <img src={removeIcon}/>
      </button>
      <p className='text-background font-bold'>{counter}</p>
      <button onClick={()=>setCounter(counter + 1)}>
        <img src={addIcon}/>
      </button>
    </div>
  );
}

export default Counter;
