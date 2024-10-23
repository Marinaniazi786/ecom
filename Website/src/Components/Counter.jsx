import React from "react";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "15px" }}>
        <span className="mr-4">{`Days`}</span><span className="mr-4">{'Hours'}</span><span className="mr-4">{'Minutes'}</span>
        <span className="mr-4">{'Seconds'}</span>
      </div>
      <div style={{ fontSize: "60px" }}>
        <span >{days}</span> :<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
    </div>
  );
}

export default MyTimer;
