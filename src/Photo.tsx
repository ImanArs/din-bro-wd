export const Photo = () => {
  return (
    <div className='relative w-full mb-[40px]'>
      <div className='bg-white w-full absolute top-[0] left-[0]'>
        <h1 className='p-2.5 text-center border text-2xl alistair tracking-[10px] text-[60px]'>D & A</h1>
      </div>
      <img className='w-full' src="https://i.pinimg.com/736x/8e/5e/4e/8e5e4e97d7f960f8cb048e863eac9c82.jpg" alt="" />
      <div className='absolute z-10 bottom-[20px] left-[50%] flex flex-col gap-5 w-[80%] translate-x-[-50%]'>
        <h2 className='flex flex-col gap-2.5 text-4xl text-center playfair'>
          Dinmukhamed 
          <span>&</span>
          Aizirek
        </h2>
        <p className="playfair">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quidem, obcaecati nam incidunt sapiente eveniet harum consectetur aliquam tenetur consequuntur!</p>
      </div>
      <div className="w-full absolute left-0 bottom-0 h-[60px] bg-gradient-to-b from-[#0000] to-white"></div>
    </div>
  )
}
