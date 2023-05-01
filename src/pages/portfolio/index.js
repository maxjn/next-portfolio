import React from "react";
import Link from "next/link";
import { portfolio_data as portfolios } from "../../data";
import { IoIosArrowForward } from "react-icons/io";

import Image from "next/image";

export const getStaticProps = async () => {
  return {
    props: { portfolios },
  };
};

function Portfolios({ portfolios }) {
  return (
    <section id="portfolio" className="w-full py-16">
      <div className="max-w-screen-xl px-8 py-16 text-center md:text-left mx-auto">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          {" "}
          Portfolio
        </h2>
        <p className="py-4 max-w-lg mx-auto md:me-auto md:ms-0">
          Check out some of my works here
        </p>
        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto">
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
      </div>
    </section>
  );
}

export default Portfolios;
