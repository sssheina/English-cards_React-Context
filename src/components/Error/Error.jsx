import React from 'react';
import { motion } from 'framer-motion';

import './Error.css';

import imgerror from '../../assets/images/error.png';

export default function Error() {
  
  return (
    <div className="errorContainer"> 
    <motion.img 
      className="errorContainer__img" 
      src={imgerror } 
      alt="Error" 
      animate={{rotate: 360}}
      transition={{duration: 1,
        repeatDelay: 0.5,
        repeatType: 'reverse',
        type: 'tween',
        ease: 'linear'}}
    />
  </div>
  );
}