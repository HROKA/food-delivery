import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState();

  useEffect(() => {
    if (!time) {
      setInterval(() => {
        const date = new Date();
        setTime({
          h: date.getHours(),
          m: date.getMinutes(),
          s: date.getSeconds(),
        });
      }, 1000);
    }
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dashboard</h1>
        {time && (
          <div className="time">
            <h3>{time.h} : </h3>
            <h3> {time.m} : </h3>
            <h3> {time.s} </h3>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
