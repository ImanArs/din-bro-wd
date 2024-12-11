export const Location = () => {
  return (
    <div className="relative text-white w-full">
      {/* Фон с затемнением */}
      <div className="relative w-full h-[90vh]">
        <img
          className="w-full h-[90vh] object-cover grayscale hover:grayscale-0 transition duration-300"
          src="https://www.boyarovweddings.ru/wp-content/uploads/2022/06/01.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Затемнение */}
      </div>

      {/* Контент поверх изображения */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-5 p-4">
        <div className="relative text-center">
          <h2 className="playfair text-[60px] tracking-[10px] !text-start">Location</h2>
          <p className="cursive-word text-[100px] tracking-[10px] absolute top-5 left-[50%] transform -translate-x-1/2">
            Location
          </p>
        </div>
        <div className="h-[150px] w-[3px] bg-white m-auto"></div>
        <div className="text-center flex flex-col gap-5">
          <p className="greatVibes text-[24px] tracking-[4px] leading-3">
            место роведения нашей свадьбы просто прекрасно!
          </p>
          <h2 className="playfair text-[50px]">Ресторан "Ата"</h2>
          <p className="greatVibes text-[24px] tracking-[4px] leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis quibusdam, minima eum cum unde error
            ducimus. Asperiores, sapiente pariatur?
          </p>
          <div className="h-[3px] w-[150px] m-auto bg-white"></div>
          <p className="playfair text-[50px]">Адрес свадьбы</p>
        </div>
      </div>
    </div>
  );
};
