import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  initialMinutes?: number;
  initialSeconds?: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  initialMinutes = 30, 
  initialSeconds = 0 
}) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, [minutes, seconds]);
  
  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };
  
  // Calculate percentage for visual effect
  const totalSeconds = initialMinutes * 60 + initialSeconds;
  const remainingSeconds = minutes * 60 + seconds;
  const percentageRemaining = (remainingSeconds / totalSeconds) * 100;
  
  // Determine color based on time remaining
  let colorClass = "bg-green-500";
  if (percentageRemaining < 50) colorClass = "bg-orange-500";
  if (percentageRemaining < 20) colorClass = "bg-red-500";
  
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2 text-lg font-semibold mb-2">
        <Clock className="h-5 w-5 text-red-500" />
        <span>Esta oferta expira em:</span>
      </div>
      
      <div className="bg-gray-100 p-3 rounded-lg flex gap-1 items-center">
        <div className="bg-gray-800 text-white px-3 py-2 rounded font-mono text-xl font-bold">
          {formatTime(minutes)}
        </div>
        <span className="text-xl font-bold">:</span>
        <div className="bg-gray-800 text-white px-3 py-2 rounded font-mono text-xl font-bold">
          {formatTime(seconds)}
        </div>
      </div>
      
      <div className="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
        <div 
          className={`h-full ${colorClass} transition-all duration-1000 ease-linear`}
          style={{ width: `${percentageRemaining}%` }}
        ></div>
      </div>
    </div>
  );
};

export default CountdownTimer;