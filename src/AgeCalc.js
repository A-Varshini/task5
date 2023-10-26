
import React, { useState } from 'react';
import { createRoot } from "https://esm.run/react-dom@18/client";
import confetti from "https://esm.run/canvas-confetti@1";

const AgeCalc = () => {

    const [birthDate, setBirthDate] = useState('');
    const [age, setAge] = useState('');
  
    const calculateAge = () => {
      const birthDateObj = new Date(birthDate);
      const currentDate = new Date();
      const ageInMilliseconds = currentDate - birthDateObj;
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
      setAge(Math.floor(ageInYears));
    };
    function onClick() {
        confetti({
          particleCount: 150,
          spread: 60
        });
      }
    
    return ( 
        <div>
            <h1>Age Calculator</h1>
      <div>
        <h2> Please Enter your date of birth!! </h2>
        <input
          type="date"
          theme='dark'
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>
      <pre></pre>
      <center>
      <button className='button' onClick={calculateAge} onClickCapture={onClick}>Calculate Age</button>
      </center>
      {age && <h4>Your are {age} years old🥳</h4>}
        </div>
     );
}
 
export default AgeCalc;