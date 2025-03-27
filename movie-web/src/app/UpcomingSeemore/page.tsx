import { Footer } from "../components/Footer";
import { Searchbar } from "../components/Searchbar";

const movies = [
  {
    title: "Dear Santa",
    image: "/Upcoming/DearSanta.png",
    rating: "6.9/10",
    star: "/carousel/StarMovie.png",
  },
  {
    title: "How To Train Your Dragon Live Action",
    image: "/Upcoming/howtotrain.png",
    rating: "6.9/10",
    star: "/carousel/StarMovie.png",
  },
  {
    title: "Alien Romulus",
    image: "/Upcoming/alien.png",
    rating: "6.9/10",
    star: "/carousel/StarMovie.png",
  },
  {
    title: "From the Ashes",
    image: "/Upcoming/ashes.png",
    rating: "6.9/10",
    star: "/carousel/StarMovie.png",
  },
  {
    title: "Space Dogg",
    image: "/Upcoming/psacedogg.png",
    rating: "6.9/10",
    star: "/carousel/StarMovie.png",
  },
  {
    title: "Dear Santa",
    image: "/Upcoming/DearSanta.png",
    rating: "6.9/10",
    star: "/carousel/StarMovie.png",
  },
  {
    title: "How To Train Your Dragon Live Action",
    image: "/Upcoming/howtotrain.png",
    rating: "6.9/10",
    star: "/carousel/StarMovie.png",
  },
  {
    title: "Alien Romulus",
    image: "/Upcoming/alien.png",
    rating: "6.9/10",
    star: "/carousel/StarMovie.png",
  },
  {
    title: "From the Ashes",
    image: "/Upcoming/ashes.png",
    rating: "6.9/10",
    star: "/carousel/StarMovie.png",
  },
  {
    title: "Space Dogg",
    image: "/Upcoming/psacedogg.png",
    rating: "6.9/10",
    star: "/carousel/StarMovie.png",
  },
];
export default function Home() {
  return (
    <div className=" w-full flex  flex-col items-center">
      <div className="w-[335px] lg:w-[1440px] lg:flex lg:flex-col lg:gap-8 lg:px-20 lg:mt-[52px]">
        <Searchbar />
        <div className="flex justify-between items-center">
          <p className="text-[24px] font-semibold">Upcoming</p>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-[40px] lg:grid lg:grid-cols-5 lg:gap-8 ">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="bg-[#f4f4f5] p-4 rounded-md flex flex-col gap-2"
            >
              <img
                src={movie.image}
                alt={movie.title}
                width={200}
                height={300}
              />
              <div className="h-[23px] flex items-center">
                <img src={movie.star} width={16} height={16} />
                <p className=" text-3">{movie.rating}</p>
              </div>
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
