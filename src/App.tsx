import { Calendar } from "./Calendar";
import { Location } from "./Location";
import { Photo } from "./Photo";
import { Rsvp } from "./Rsvp";
import { Timer } from "./Timer";
import { WeddingDay } from "./WeddingDay";

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
