const TimerDisplay = ({ time }) => {
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return <div className="bg-[#4E402A] w-full h-[280px] rounded-full flex justify-center items-center">
        <span className='text-[50px] font-[300] text-[#ECCA6B]'>{formatTime(time)}</span>
    </div>;
};

export default TimerDisplay;
