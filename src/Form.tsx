import React, { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Имя:", name);
    console.log("Телефон:", phone);
    // Здесь можно добавить отправку данных на сервер
  };

  return (
    <div className="w-full rounded-lg">
      <h2 className="text-[38px] font-bold mb-4 text-center">Регистрация</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 text-[24px] border-b-2 border-[#C8A784] outline-none bg-[#0000]"
          placeholder="Введите ваше имя..."
          required
        />
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-3 py-2 text-[24px] border-b-2 border-[#C8A784] outline-none bg-[#0000]"
          placeholder="Введите ваш телефон..."
          required
        />
        <button
          type="submit"
          className="w-full bg-[#C8A784] text-[24px] text-white px-4 py-2 hover:bg-[#c8a784d5] transition"
        >
          Приду
        </button>
      </form>
    </div>
  );
};
