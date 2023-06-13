import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./style.css";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 68,
  strokeWidth: 3
};

const renderTime = (dimension:any, time:any) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time:number) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time:number) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time:number) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time:number) => (time / daySeconds) | 0;

const Time = () => {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = 1690027200;

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <div className="time_wrapper">
      <CountdownCircleTimer
        {...timerProps}
        colors="#e29578"
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("күн", getTimeDays(daysDuration - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#E49F85"
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("сағат", getTimeHours(daySeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#E7AA93"
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("минут", getTimeMinutes(hourSeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#EAB4A0"
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > 0
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("секунд", getTimeSeconds(elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
    </div>
  );
}

export default Time;
