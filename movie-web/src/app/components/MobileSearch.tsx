import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

type MobileSearchType = {
  handleClick: () => void;
};

const genres = [
  {
    name: "Action",
  },
  {
    name: "Adventure",
  },
  {
    name: "Animation",
  },
  {
    name: "Biography",
  },
  {
    name: "Comedy",
  },
  {
    name: "Crime",
  },
  {
    name: "Documentary",
  },
  {
    name: "Drama",
  },
  {
    name: "Family",
  },
  {
    name: "Fantasy",
  },
  {
    name: "Film-Noir",
  },
  {
    name: "Game-Show",
  },
  {
    name: "History",
  },
  {
    name: "Horror",
  },
  {
    name: "Music",
  },
  {
    name: "Musical",
  },
  {
    name: "Mystery",
  },
  {
    name: "News",
  },
  {
    name: "Reality-TV",
  },
  {
    name: "Romance",
  },
  {
    name: "Sci-Fi",
  },
  {
    name: "Short",
  },
  {
    name: "Sport",
  },
  {
    name: "Talk-Show",
  },
  {
    name: "Thriller",
  },
  {
    name: "War",
  },
  {
    name: "Western ",
  },
];
export const MobileSearch = ({ handleClick }: MobileSearchType) => {
  return (
    <div className="lg:hidden flex w-[229px] h-[44px] gap-14 justify-center items-center ">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger></NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <div className=" lg:w-[577px] lg:h-[333px] lg:p-5 rounded-[8px] bg-white lg:flex lg:flex-col lg:gap-[33px] w-[335px] h-[513px] p-5 ">
                  <div className="lg:w-[213px] lg:h-[60px]">
                    <p className="text-[24px] font-semibold">Genres</p>
                    <p>See lists of movies by genre</p>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-[33px]">
                    {genres.map((genre, index) => (
                      <div key={index}>
                        <button className="border border-gray-400 w-fit lg:h-[20px] flex justify-center items-center rounded-[9999px] px-[4px] py-[4px]">
                          {genre.name} &gt;
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <input className="w-[251px] h-[44px]" placeholder="Search"></input>
      <button
        className="w-[36px] h-[36px] flex justify-center items-center"
        onClick={handleClick}
      >
        &#10005;
      </button>
    </div>
  );
};
