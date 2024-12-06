import React from 'react';

export const Location = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-semibold my-8">Местоположение</h2>
      <div className="relative w-full h-[500px]">
        <img
          src="https://strg2.restoran.kg/neofiles/serve-image/66ec3cc318ee630007b82765/1280x720/q70"
          alt="Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-[#0006] opacity-70 flex items-center justify-center">
          <p className="text-white text-4xl font-bold text-center shadow-lg p-4">
            Приглашаем вас в наш ресторан!
          </p>
        </div>
      </div>
    </div>
  );
};
