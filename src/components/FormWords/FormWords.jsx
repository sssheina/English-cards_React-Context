import React, { useState, useContext, useEffect } from 'react';
import { CollectionWordsContext } from "../../context/CollectionWordsContext";

import { motion } from "framer-motion";

import './FormWords.css';

import save_pink from '../../assets/images/save_pink-pink.png';
import delete_pink from '../../assets/images/delete_pink.png';

export default function FormWords() {
  const { addWord } = useContext(CollectionWordsContext);
  const [inputText, setInputText] = useState(props);
  const [isEmpty, setIsEmpty] = useState(true);

  const handleChangeInput = (event) => {
    setInputText({
      ...inputText,
      [event.target.name]: event.target.value,
    });

    if (event.target.value.match(/[0-9]/)) {
      alert("Пожалуйста, вводите только буквы");
    } else if (event.target.value === "") {
      alert("Пожалуйста, заполните все поля");
    }
  };

  useEffect(() => {
    if (
      inputText.english === "" ||
      inputText.transcription === "" ||
      inputText.russian === "" ||
      inputText.tags === ""
    ) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [inputText]);

  function onSubmit() {
    if (
      inputText.english === "" ||
      inputText.transcription === "" ||
      inputText.russian === "" ||
      inputText.tags === ""
    ) {
      alert("Error: Please fill in all the fields");
    } else {
      console.log("Form parameters:", inputText);
      addWord(inputText);
      setIsEmpty();
    }
  }

  const clearForm = () => {
    setIsEmpty();
  };

  return (
    <motion.div className='inputContainer'
    initial={{ opacity: 0, scale: 3 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}>

      <span className='inputLable'> ADD WORD:
      </span>

      <input className={`inputEnter ${inputText.english}`} type='text' placeholder="english"
            name="english"
            value={inputText.english || ""}
            onChange={handleChangeInput}
      >
      </input>
      <input className={`inputEnter${inputText.transcription}`} type='text' placeholder="transcription"
            name="transcription"
            value={inputText.transcription || ""}
            onChange={handleChangeInput}
      >
      </input>
      <input className={`inputEnter ${inputText.russian}`} type='text' placeholder="russian"
            name="russian"
            value={inputText.russian || ""}
            onChange={handleChangeInput}
      >
      </input>
      <input className={`inputEnter ${inputText.tags}`} type='text' placeholder="tags"
            name="tags"
            value={inputText.tags || ""}
            onChange={handleChangeInput}
      >
      </input>
      
      <div className='card-buttons'>
        <div className="inputSaveButton">
              <img src={save_pink} className={`inputIcon icon ${isEmpty ? "disabled" : ""}`} alt='Save'onClick={onSubmit}
              ></img>
      </div>
      <div className="inputDeleteButton">
              <img src={delete_pink} className='inputIcon icon' alt='Delete' onClick={clearForm}></img>
      </div>
      </div>
    </motion.div>
  );
}