import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import "./Watch.css";
import facebookImg from "../asset/facebook.png";
import instagramImg from "../asset/instagram.png";

export default function Watch() {
  const targetDate = new Date("2023-09-15T00:00:00").getTime();
  const [timeRemaining, setTimeRemaining] = useState(targetDate - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setTimeRemaining(targetDate - now);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  const formatTime1 = (time) => {
    if (parseInt(time.toString()) < 10) {
      return 0;
    }
    if (parseInt(time.toString().slice(0, 1)) <= 0) {
      return 0;
    }
    return time.toString().slice(0, 1);
  };
  const formatTime2 = (time) => {
    if (parseInt(time.toString()) < 10) {
      return time.toString().slice(0, 1);
    }

    if (parseInt(time.toString().slice(1, 2)) <= 0) {
      // console.log(time.toString().slice(1,2))
      return 0;
    }

    return time.toString().slice(1, 2);
  };

  return (
    <>
      <div className=" flex flex-col items-center justify-center pt-8">
        <div className="maindiv p-6 md:p-6 lg:p-6 rounded-lg  text-white text-center">
          <h2 className="app__watch-title text-3xl md:text-4xl lg:text-5xl text-black  mb-8 leading-none font-sans">
            We'll See you After
          </h2>
          <div className="flex flex-warp justify-center items-center mb-6">
            <Counter
              timeRemaining={timeRemaining}
              formatTime1={formatTime1}
              formatTime2={formatTime2}
              count={days}
              label="Days"
              shortLabel="Days"
            />
            <Counter
              timeRemaining={timeRemaining}
              formatTime1={formatTime1}
              formatTime2={formatTime2}
              count={hours}
              label="Hours"
              shortLabel="Hrs"
            />
            <Counter
              timeRemaining={timeRemaining}
              formatTime1={formatTime1}
              formatTime2={formatTime2}
              count={minutes}
              label="Minutes"
              shortLabel="Mins"
            />
            <Counter
              timeRemaining={timeRemaining}
              formatTime1={formatTime1}
              formatTime2={formatTime2}
              count={seconds}
              label="Seconds"
              shortLabel="Secs"
            />
          </div>
          

          </div>
          <hr width="100%" color="#A9A9A9" />
          <div className="flex items-self-end justify-center items-center my-16">
            <a href="" className="w-9 h-9 mr-6 lg:mr-10">
              <img className="w-full h-full" src={facebookImg} />
            </a>
            <a href="" className="w-9 h-9 scale-110">
              <img className="w-full h-full" src={instagramImg} />
            </a>
          </div>
      </div>
    </>
  );
}
