import { Calendar } from "./Calendar";
import { Location } from "./Location";
import { Photo } from "./Photo";
import { Rsvp } from "./rsvp";
import { Timer } from "./Timer";
import { WeddingDay } from "./WeddingDay";

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
    <main className="max-w-[525px] w-full overflow-hidden m-auto flex flex-col gap-6">
      <Photo />
      <Timer />
      <WeddingDay />
      <Rsvp />
      <Location />
      <Calendar />
    </main>
  );
}

export default App;
