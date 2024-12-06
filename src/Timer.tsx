import { useState, useEffect } from 'react';

export const Timer = () => {
  // Стартовая дата - 21 декабря 2024 года
  const targetDate = new Date('2024-12-21T00:00:00');

  // Состояние для оставшегося времени
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  // Функция для вычисления оставшегося времени
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference: number = targetDate.getTime() - now.getTime();  // Explicitly cast to number
    
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      
      setTimeLeft({ days, hours, minutes });
    }
  };

  // Эффект для обновления времени каждую секунду
  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-4 py-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Осталось до важного события</h2>
      <div className="text-xl font-semibold bg-[#C8A784] py-6 rounded shadow">
        {timeLeft.days} Дней, {timeLeft.hours} Часов, {timeLeft.minutes} Минут
      </div>
    </section>
  );
};
