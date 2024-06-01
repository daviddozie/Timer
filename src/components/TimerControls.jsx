import React from 'react';

const TimerControls = ({ isRunning, onStart, onPause, onReset }) => {
  return (
    <div className="flex justify-between items-center gap-7 mt-[30px]">
      {isRunning ? (
        <button onClick={onPause} className='bg-[#ECCA6B] w-full text-[#272120] px-[20px] py-[8px] font-[500] text-[15px] rounded-[8px]'>Pause</button>
      ) : (
        <button onClick={onStart} className='bg-[#ECCA6B] w-full text-[#272120] px-[20px] py-[8px] font-[500] text-[15px] rounded-[8px]'>Start</button>
      )}
      <button onClick={onReset} className='bg-[#ECCA6B] w-full text-[#272120] px-[20px] py-[8px] font-[500] text-[15px] rounded-[8px]'>Reset</button>
    </div>
  );
};

export default TimerControls;
