import { Carousel } from "./components/Carousel";
import { Searchbar } from "./components/Searchbar";
import { Upcoming } from "./components/Upcoming";
import { Popular } from "./components/Popular";
import { TopRated } from "./components/TopRated";
import { Footer } from "./components/Footer";
export default function Home() {
  return (
    <div className=" w-full flex  items-center justify-center">
      <div className=" w-[375px] lg:w-[1440px] flex flex-col items-center justify-center">
        <Searchbar />
        <Carousel />
        <Upcoming />
        <Popular />
        <TopRated />
        <Footer />
      </div>
    </div>
  );
}
