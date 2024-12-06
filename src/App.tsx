import { Description } from "./Description";
import First from "./First";
import { Form } from "./Form";
import { LoaderScreen } from "./LoaderScreen";
import { Location } from "./Location";
import { Timer } from "./Timer";

const photos = [
  'https://i.pinimg.com/236x/52/b2/a0/52b2a06a53fc8e98c3573d70be2b5a86.jpg',
  'https://i.pinimg.com/236x/25/8a/45/258a4502dbce71c96181bfc3e2b9a0ec.jpg',
  'https://i.pinimg.com/236x/59/8d/3e/598d3eab84fd3365bbb2c18cb01fb2e4.jpg',
  'https://i.pinimg.com/236x/ef/48/e7/ef48e7d06e667ea4001c47554dde0a6d.jpg',
  'https://i.pinimg.com/236x/6a/1b/31/6a1b3153e2473d59824196a53d61f99d.jpg',
  'https://i.pinimg.com/236x/50/ff/d6/50ffd6414226e133cb5628ea341e13a6.jpg',
  'https://i.pinimg.com/236x/b0/ce/02/b0ce02e97e50c1de8b54a38ccbb0e607.jpg',
  'https://i.pinimg.com/236x/f8/8e/a4/f88ea4016ced8e5ba3800dc046c1e449.jpg',
]

function App() {
  return (
    <main>
    <div className="min-h-screen max-w-[420px] p-5 w-full m-auto text-white relative">
      {/* Floating Icons */}
      {/* <div>
        {[...Array(12)].map((_, index) => (
          <img
            key={index}
            src="https://cdn-icons-png.flaticon.com/512/2920/2920589.png"
            alt="icon"
            className={`absolute w-6 h-6 opacity-60 animate-float ${
              index % 2 === 0 ? "top-[10%]" : "top-[70%]"
            } ${index % 3 === 0 ? "left-[20%]" : "left-[80%]"}`}
          />
        ))}
      </div> */}

      <LoaderScreen />
      <First />

      {/* Description */}
      <Description />

      {/* Timer */}
      <Timer />

      {/* Registration Form */}
      <Form />

      {/* Photos */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Wedding Memories</h2>
        <div className="flex flex-wrap gap-4">
          {photos.map((img, index) => (
            <div
              key={index} // Используем index вместо img
              className={`overflow-hidden rounded-lg ${
                index % 3 === 0
                  ? "flex-[400px] h-[400px]" // Специальный стиль для элемента с индексом 2
                  : "flex-[150px] h-[200px]"
              }`}
            >
              <img
                src={img}
                className="w-full h-full object-cover" // Исправлено для адаптивности
                alt={`Image ${index + 1}`} // Уникальный alt
              />
            </div>
          ))}
        </div>
      </div>

      {/* Invitation Text */}
      <section className="max-w-4xl mx-auto px-4 py-8 text-center relative">
        <h2 className="text-3xl font-bold mb-4">Invitation</h2>
        <p className="text-lg">
          Если Вы получили эту ссылку, значит мы от чистого сердца и с большой любовью приглашаем Вас на самое важное событие для нашей семьи - День свадьбы, которое пройдет в ресторане «Ата» 21 декабря 2024 года.
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2375/2375694.png"
          alt="Ring"
          className="absolute bottom-[20%] left-[5%] w-6 h-6 opacity-70"
        />
      </section>

      {/* Location */}
      <Location />

      
    </div>
    </main>
  );
}

export default App;
