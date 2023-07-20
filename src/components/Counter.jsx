import React from "react";
import "./Counter.css";

const Counter = ({ timeRemaining, count, formatTime1, formatTime2, label, shortLabel }) => {
  return (
    <>
      <div className="hidden md:block lg:block">
        <div className="flex m-1 justify-center items-center">
          <div className="bold_text text1 bg-black m-1 px-4 py-2 text-4xl text-center">
            {timeRemaining <= 0 ? "0" : formatTime1(count)}
          </div>
          <div className="bold_text text1 bg-black m-1 px-4 py-2 text-4xl text-center">
            {timeRemaining <= 0 ? "0" : formatTime2(count)}
          </div>
        </div>

        <span className="counter_label text-black font-light ">{label}</span>
      </div>
      <div className="md:hidden lg:hidden block m-1">
        <div className="bold_text flex flex-col justify-center items-center text-2xl bg-black py-2 px-3">
          <p className="leading-none">{timeRemaining <= 0 ? "0" : formatTime1(count) + formatTime2(count)}</p>
          <p className="block text-white text-xs leading-none mt-2 text-white font-normal">{shortLabel}</p>
        </div>
      </div>
    </>
  );
};

export default Counter;
