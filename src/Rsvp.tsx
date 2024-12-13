import React, { useState } from 'react';

export const Rsvp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Добавьте логику для отправки данных на сервер или обработки
    console.log('Form Data Submitted:', formData);

    setFormSubmitted(true);
  };

  return (
    <div className="w-full bg-[#202020] text-white text-center py-10 px-5 playfair pb-[200px] relative">
      <h2 className="uppercase text-4xl font-bold mb-4 felidae tracking-[4px]">Registration</h2>
      <p className="mb-8 text-[22px] tracking-[1px] snellBold font-[100]">Подтвердите свое присутствие</p>

      {formSubmitted ? (
        <div className="text-xl text-green-400">
          Thank you for your response! We’re excited to celebrate with you.
        </div>
      ) : (
        <form className="max-w-md mx-auto flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Name Input */}
            <input
              className="p-3 rounded-[2px]  bg-[#202020] text-white placeholder-gray-400 border"
              type="text"
              id="name"
              name="name"
              placeholder="Ваше имя и фамилия"
              value={formData.name}
              onChange={handleChange}
              required
              />

          {/* Email Input */}
            <input
              className="p-3 rounded-[2px]  bg-[#202020] text-white placeholder-gray-400 border"
              type="text"
              id="text"
              name="text"
              placeholder="Ваш номер телефона"
              value={formData.email}
              onChange={handleChange}
              required
            />

          {/* Attendance Radio Buttons */}
          {/* <label className="flex items-center gap-2 mb-2">
            <input
              className="appearance-none w-5 h-5 border border-gray-400 rounded-full checked:bg-white"
              type="radio"
              name="attendance"
              value="yes"
              checked={formData.attendance === 'yes'}
              onChange={handleChange}
              required
              />
            Я могу прийти
          </label>
          <label className="flex items-center gap-2">
            <input
              className="appearance-none w-5 h-5 border border-gray-400 rounded-full checked:bg-white"
              type="radio"
              name="attendance"
              value="no"
              checked={formData.attendance === 'no'}
              onChange={handleChange}
              required
            />
            Я не могу прийти
          </label> */}


          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="uppercase bg-transparent border text-[#c6c6c6] py-3 px-6 rounded-md font-medium transition-all max-w-[200px] w-full"
              >
              отправить
            </button>
          </div>
        </form>
      )}
      <h2 className="absolute bottom-[10%] z-[0] right-[-70px] text-[#fff8] rotate-[90deg] uppercase felidae text-[100px] tracking-[4px]">RSVP</h2>
    </div>
  );
};
