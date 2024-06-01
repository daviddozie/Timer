import React, { useState } from 'react';

const TimerInput = ({ setTime }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => setInputValue(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        setTime(Number(inputValue));
    };

    return (
        <div className='mb-[30px]'>
            <form onSubmit={handleSubmit} className='flex'>
                <input
                    className='w-[100%] pl-[8px] rounded-tl-[8px] rounded-bl-[8px] py-3 border border-[#f8e084] bg-[transparent] text-[#f8e084]'
                    type="number"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Enter seconds"
                />
                <button type="submit" className='bg-[#ECCA6B] w-full text-[#272120] px-[20px] py-[px] font-[500] text-[15px] rounded-tr-[8px] rounded-br-[8px]'>Set Timer</button>
            </form>
        </div>
    );
};

export default TimerInput;
