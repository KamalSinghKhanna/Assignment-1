import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./timer.css";

function Timer() {
  const [start, setStart] = useState(false);

  const [seconds, setSeconds] = useState(0);

  const [minutes, setMinutes] = useState(25);
  const [displayMsg, setDisplayMsg] = useState(false);

  let interval;
  useEffect(() => {
    if (start) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            let newMinutes = minutes - 1;
            setMinutes(newMinutes);
          } else {
            let minutes = displayMsg ? 24 : 4;
            let seconds = 59;
            setMinutes(minutes);
            setSeconds(seconds);
            setDisplayMsg(!displayMsg);
          }
        } else {
          let newSeconds = seconds - 1;
          setSeconds(newSeconds);
        }
      }, 1000);
    }
  }, [start, seconds]);

  const reStart = () => {
    setSeconds(0);
    setMinutes(25);
  };

  const stop = () => {
    clearInterval(interval);
  };

  const toggleStart = () => {
    setStart(!start);
  };
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="timer">
      <div className="box">
        {displayMsg && <h3 className="second-timer">5 minutes Timer</h3>}
        <div className="timer-box">
          <h1>Timer</h1>
          <h1>
            {timerMinutes}:{timerSeconds}
          </h1>

          <button
            className={!start ? "btn start" : "btn stop"}
            onClick={toggleStart}
          >
            {!start ? "START" : "STOP"}
          </button>
          <button className="btn  restart" onClick={reStart}>
            restart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
