import React, { useState } from 'react';
import './FormWords.css';

export default function FormWords() {


const [ userName, setLastName ] = useState('');

  return (
    <div className='inputContainer'>
      <input className='inputEnter' type='text' value={1} 
      // onChange={() => set(e.targer.value)}
      >
      </input>
      <input className='inputEnter' type='text' value={1} 
      // onChange={() => set(e.targer.value)}
      >
      </input>
      <input className='inputEnter' type='text' value={1} 
      // onChange={() => set(e.targer.value)}
      >
      </input>
      <input className='inputEnter' type='text' value={1} 
      // onChange={() => set(e.targer.value)}
      >
      </input>
      <input className='inputEnter' type='text' value={1} 
      // onChange={() => set(e.targer.value)}
      >
      </input>
      <button></button>
    </div>
  );
}