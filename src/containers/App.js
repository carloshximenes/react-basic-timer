import React, { useState, useEffect } from 'react';
import './App.css';
import Display from '../components/Display/Display';
import Header from '../components/Header/Header';
import Buttons from '../components/Buttons/Buttons';

export default function App() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const ButtonClick = () => {
    setIsActive(!isActive);
  }

  const ResetTimer = () => {
    setIsActive(false);
    setTimer(0);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer(timer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer, isActive]);

  return (
    <div className="App">
      <Header>Basic Timer</Header>
      <Display>{timer}</Display>
      <Buttons clicked={ButtonClick} active={isActive} reset={ResetTimer}></Buttons>
    </div>
  );
}
