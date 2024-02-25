import React, { useEffect, useState } from "react";

export default function Timer({ setTimeOut, questionNumber }) {
  const [timer, setTimer] = useState(30);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval;
    if (isActive) {
      if (timer === 0) {
        setTimeOut(true);
      } else {
        interval = setInterval(() => {
          setTimer((prev) => prev - 1);
        }, 1000);
      }
    }
    return () => clearInterval(interval);
  }, [timer, setTimeOut, isActive]);

  useEffect(() => {
    setTimer(30);
    setIsActive(true); // Start the timer whenever questionNumber changes
  }, [questionNumber]);



  return (
    <div>
      <div>{timer}</div>
    </div>
  );
}
