import { DressCode } from "./DressCode";
import { Location } from "./Location";
import { Photo } from "./Photo";
import { Rsvp } from "./Rsvp";
import { Timer } from "./Timer";
import { WeddingDay } from "./WeddingDay";

function App() {
  return (
    <main className="max-w-[525px] w-full overflow-hidden m-auto flex flex-col gap-6 mb-[80px]">
      <Photo />
      <Timer />
      <WeddingDay />
      <Rsvp />
      <Location />
      <DressCode />
      {/* <Calendar /> */}
    </main>
  );
}

export default App;
