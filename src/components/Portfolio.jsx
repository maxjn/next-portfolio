import React from "react";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import reduxTodolist from "../assets/portfolio/redux-todolist.png";
import starwars from "../assets/portfolio/starwars.png";
import memoryGame from "../assets/portfolio/memory-game.png";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

import Image from "next/image";

const portfolios = [
  {
    id: 1,
    title: "Weather Forcast App",
    imgSrc: reactWeather,
    url: "weather-forcast",
  },
  {
    id: 2,
    title: "Redux Todolist",
    imgSrc: reduxTodolist,
    url: "redux-todolist",
  },
  {
    id: 3,
    title: "Starwars Info App",
    imgSrc: starwars,
    url: "starwars-info",
  },
  {
    id: 4,
    title: "Memmory Game App",
    imgSrc: memoryGame,
    url: "memory-game",
  },
];
function Portfolio() {
  return (
    <section id="portfolio" className="w-full">
      <div className="max-w-screen-xl px-8 py-16 text-center md:text-left mx-auto">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          {" "}
          Portfolio
        </h2>
        <p className="py-4 max-w-lg mx-auto md:me-auto md:ms-0">
          Check out some of my works here
        </p>
        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {portfolios.map(({ id, title, url, imgSrc }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <article className="shadow-md shadow-gray-500 rounded-xl overflow-hidden group">
                <figure className="overflow-hidden rounded-xl ">
                  <Image
                    src={imgSrc}
                    alt={title}
                    className="group-hover:scale-110 duration-200 ease-out"
                  />
                </figure>
                <h3 className="text-center text-base font-light capitalize py-4 underline-offset-4 group-hover:underline ">
                  {title}
                </h3>
              </article>
            </Link>
          ))}
        </div>

        <Link
          href="/portfolio"
          className="mx-auto w-fit mt-12 group px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white uppercase font-bold tracking-wider flex items-center justify-center"
        >
          all projects
          <IoIosArrowForward
            size={20}
            className="group-hover:ms-3 group-hover:me-0 duration-200 ease-in ms-1 me-2"
          />
        </Link>
      </div>
    </section>
  );
}

export default Portfolio;
