import React from "react";
import { portfolio_data as portfolios } from "../data";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

import Image from "next/image";

const lastPortfolios = portfolios.slice(0, 4);

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
          {lastPortfolios.map(({ id, title, url, imgSrc }) => (
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
