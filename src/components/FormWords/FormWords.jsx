import React, { useState } from 'react';
import './FormWords.css';

import save_pink from '../../assets/images/save_pink-pink.png';
import delete_pink from '../../assets/images/delete_pink.png';

export default function FormWords() {


const [ userName, setLastName ] = useState('');

  return (
    <div className='inputContainer'>
      <span className='inputLable'> ADD WORD:
      </span>
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
      
      <div className='card-buttons'>
        <div className="inputSaveButton">
              <img src={save_pink} className='inputIcon icon' alt='Save'></img>
      </div>
      <div className="inputDeleteButton">
              <img src={delete_pink} className='inputIcon icon' alt='Delete'></img>
      </div>
      </div>
    </div>
  );
}