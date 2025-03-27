"use client";
import { Moon } from "@/app/components/Moonsvg";
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
import { useState } from "react";
import { MobileSearch } from "./MobileSearch";
import Link from "next/link";
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
export const Searchbar = () => {
  const [search, setSearch] = useState(false);

  const handleClick = () => {
    setSearch((prev) => !prev);
  };
  return (
    <>
      {!search ? (
        <div className="w-full h-[59px] p-4 flex justify-between items-center  ">
          <Link href={"/"}>
            <img src="movieZ.png"></img>
          </Link>
          <div className="w-[] lg:h-[36px] lg:flex lg:gap-3 lg:items-center hidden">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Genre</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>
                      <div className=" lg:w-[577px] lg:h-[333px] lg:p-5 rounded-[8px] bg-white lg:flex lg:flex-col lg:gap-[33px]">
                        <div className="lg:w-[213px] lg:h-[60px]">
                          <p className="lg:text-[24px] lg:font-semibold">
                            Genres
                          </p>
                          <p>See lists of movies by genre</p>
                        </div>
                        <div className="lg:flex lg:flex-wrap lg:gap-4">
                          {genres.map((genre, index) => (
                            <div key={index}>
                              <button className="lg:border lg:border-gray-400 w-fit lg:h-[30px] flex justify-center items-center rounded-[9999px] px-[4px] py-[4px]">
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
            <input
              className="w-[379px] h-[36px] p-3 border border-gray-400 rounded-[8px] hidden lg:flex"
              placeholder="Search..."
              type="text"
            ></input>
          </div>
          <div className="flex gap-3 ">
            <button
              className="w-[36px] h-[36px] border border-gray-400 rounded-[10px] flex justify-center items-center lg:hidden"
              onClick={handleClick}
            >
              <img src="/MovieVector.png"></img>
            </button>
            <div className="w-[36px] h-[36px] border border-gray-400 rounded-[10px] flex justify-center items-center">
              <Moon />
            </div>
          </div>
        </div>
      ) : (
        <MobileSearch handleClick={handleClick} />
      )}
    </>
  );
};
