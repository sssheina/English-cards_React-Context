import React, { useState } from 'react';
import './FormWords.css';

import save_pink from '../../assets/images/save_pink.png';

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
      <div className="inputSaveButton">
              <img src={save_pink} className='inputIcon icon' alt='Save'></img>
            </div>
    </div>
  );
}