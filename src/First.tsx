import React from "react";

const images = [
  "https://i.pinimg.com/736x/5c/51/95/5c51955f898cf0f46136a6f31411e010.jpg",
  "https://i.pinimg.com/736x/ef/c5/ec/efc5ec6af755df26d67bd271c4fa63b6.jpg",
  "https://i.pinimg.com/736x/cf/44/7f/cf447f24b67f4941eb9e5c01359aed27.jpg",
  // 'https://i.pinimg.com/736x/a1/d7/a3/a1d7a3c2be0123cf4c5c90355a5753e2.jpg'
];

const First = () => {
  return (
    <div>
      <p className="text-[24px] mb-4">01</p>
      <h2 className="text-[38px] ">Наша история</h2>
      <div className="flex flex-wrap gap-4">
        {images.map((img, index) => (
          <div key={index} className="flex-[150px] h-[300px] overflow-hidden">
          <img
            src={img}
            className="rounded-lg min-h-[300px] object-cover"
            alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-lg">
        Мы приглашаем вас разделить с нами этот особенный день. Две души, две жизни,
        соединенные в одну историю. Пожалуйста, присоединяйтесь к нам 12.21.2025, чтобы 
        стать частью нашей новой главы.
      </p>

    </div>
  );
};

export default First;
