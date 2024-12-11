export const WeddingDay = () => {
  return (
    <div className='w-full py-5 flex flex-col gap-5 text-center text-lg relative'>
      <p className='cursive absolute top-[160px] right-0 leading-[0] z-[-1] text-[80px] rotate-[90deg] greatVibes text-yellow-100'>text cursive</p>
      <div className='flex flex-col gap-1 playfair text-[30px]'>
        <h2 className='relative flex flex-col gap-[60px] alistair tracking-[3px] text-[100px] font-[100] mb-[40px]'>
          <div className='w-[120px] h-1px bg-[#000] absolute top-0 left-0' />
            Дорогие друзья и родители!
          <div className='w-[120px] h-1px bg-[#000] absolute top-0 right-0' />
        </h2>
        <p>Сентябрь 24, 2023</p>
        <p>17:00</p>
      </div>
      {/* <p>Если Вы получили эту ссылку, значит мы от чистого сердца и с большой любовью приглашаем Вас на самое важное событие для нашей семьи - День свадьбы, которое пройдет в ресторане «Ата» 24 сентября 2023 года.</p> */}
      <p className="playfair">приглашаем вас на торжество по случаю нашей свадьбы</p>
      <h2 className="alistair text-[100px] font-[100] tracking-[6px]" >21 декабря 2024 года</h2>
      <p className="playfair">Мы будем счастливы видеть вас в числе наших гостей</p>
      <img src="https://cil.in.ua/wp-content/uploads/2024/03/erke-rysdauletov-QDr0_GRJ4Wc-unsplash-800x400.jpg" alt="" />
    </div>
  )
}
