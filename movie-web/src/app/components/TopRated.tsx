const movies = [
  {
    title: "Pulp Fiction",
    image: "/toprated/Pulpfiction.png",
    rating: "6.9/10",
    star: "/carousel/StarMovie.png",
  },
  {
    title: "The Lord of the Rings: Fellowship of the Kings",
    image: "/toprated/lordoftherings.png",
    rating: "6.9/10",
    star: "/carousel/StarMovie.png",
  },
  {
    title: "The Good, the Bad and the Ugly",
    image: "/toprated/Goodbadugly.png",
    rating: "6.9/10",
    star: "/carousel/StarMovie.png",
  },
  {
    title: "Forrest Gump",
    image: "/toprated/forrestgump.png",
    rating: "6.9/10",
    star: "/carousel/StarMovie.png",
  },
  {
    title: "Fight Club",
    image: "/toprated/fightclub.png",
    rating: "6.9/10",
    star: "/carousel/StarMovie.png",
  },
  {
    title: "Pulp Fiction",
    image: "/toprated/Pulpfiction.png",
    rating: "6.9/10",
    star: "/carousel/StarMovie.png",
  },
  {
    title: "The Lord of the Rings: Fellowship of the Kings",
    image: "/toprated/lordoftherings.png",
    rating: "6.9/10",
    star: "/carousel/StarMovie.png",
  },
  {
    title: "The Good, the Bad and the Ugly",
    image: "/toprated/Goodbadugly.png",
    rating: "6.9/10",
    star: "/carousel/StarMovie.png",
  },
  {
    title: "Forrest Gump",
    image: "/toprated/forrestgump.png",
    rating: "6.9/10",
    star: "/carousel/StarMovie.png",
  },
  {
    title: "Fight Club",
    image: "/toprated/fightclub.png",
    rating: "6.9/10",
    star: "/carousel/StarMovie.png",
  },
];
export const TopRated = () => {
  return (
    <div className="w-[335px] lg:w-[1440px] mt-[52px] lg:flex lg:flex-col lg:gap-8 lg:px-20 lg:mt-[52px]">
      <div className="flex justify-between items-center">
        <p className="text-[24px] font-semibold">Top rated</p>
        <button className="w-[120px] h-[36px] flex gap-2 px-4 bg-[#ffff] ">
          See more &#8594;
        </button>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-[40px] lg:grid lg:grid-cols-5 lg:gap-8 ">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bg-[#f4f4f5] p-4 rounded-md flex flex-col gap-2"
          >
            <img src={movie.image} alt={movie.title} width={200} height={300} />
            <div className="h-[23px] flex items-center">
              <img src={movie.star} width={16} height={16} />
              <p className=" text-3">{movie.rating}</p>
            </div>
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
