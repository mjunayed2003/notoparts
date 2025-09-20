import { useEffect, useState, useMemo } from "react";

const getTimeLeft = (target: number) => {
  const now = Date.now();
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
};

export const CountdownTimer: React.FC<{ targetDate?: Date }> = ({ targetDate }) => {

  const defaultTarget = useMemo(
    () => (targetDate ? targetDate.getTime() : Date.now() + 3 * 24 * 60 * 60 * 1000),
    [targetDate]
  );

  const [timeLeft, setTimeLeft] = useState(getTimeLeft(defaultTarget));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(defaultTarget)), 1000);
    return () => clearInterval(id);
  }, [defaultTarget]);

  const Box = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white text-gray-900 font-bold text-2xl px-4 py-2 rounded-md">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-xs text-gray-700 mt-1 uppercase">{label}</div>
    </div>
  );

  return (
    <div className="flex items-center gap-4">
      <Box value={timeLeft.days} label="Days" />
      <div className="text-2xl">:</div>
      <Box value={timeLeft.hours} label="Hrs" />
      <div className="text-2xl">:</div>
      <Box value={timeLeft.minutes} label="Mins" />
      <div className="text-2xl ">:</div>
      <Box value={timeLeft.seconds} label="Secs" />
    </div>
  );
};
