import { useState, useRef } from 'react';
import styled from 'styled-components';

function TimerComponent() {
  const timer = useRef();

  const [time, setTime] = useState(0);

  return (
    <div>
      <div>Timer</div>
      <div>{time.toFixed(2)}</div>
      <div
        onClick={() => {
          timer.current = setInterval(() => {
            setTime((prev) => (prev += 0.1));
          }, 100);
        }}
      >
        START
      </div>
      <div
        onClick={() => {
          clearInterval(timer.current);
          setTime(0);
        }}
      >
        RESET
      </div>
      <div
        onClick={() => {
          clearInterval(timer.current);
        }}
      >
        STOP
      </div>
    </div>
  );
}
export default TimerComponent;
