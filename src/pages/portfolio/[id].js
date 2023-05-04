import Link from "next/link";
import Image from "next/image";
import React from "react";
import { portfolio_data } from "@/data";

import {
  IoIosArrowBack,
  IoMdArrowDropright,
  IoLogoGithub,
} from "react-icons/io";

export const getStaticPaths = async () => {
  const paths = await portfolio_data.map((p) => {
    return {
      params: { id: p.url },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = await params.id;
  const data = await portfolio_data.filter((p) => p.url === id)[0];

  return {
    props: { portfolio: data },
  };
};

function PortfolioSingle({ portfolio }) {
  return (
    <section className="flex w-full h-fit">
      <div className="p-8 pt-24 w-full max-w-screen-xl mx-auto ">
        <Link
          href="/portfolio"
          className="flex items-center justify-start text-blue-500 capitalize font-bold text-lg"
        >
          <IoIosArrowBack size={18} className="me-1" />
          back
        </Link>
        <h1 className="text-center md:text-left  text-blue-500 capitalize font-bold text-5xl md:text-7xl pt-8">
          {portfolio.title}
        </h1>
        <figure className="my-8 w-96 h-56 mx-auto rounded-xl overflow-hidden shadow-2xl">
          <Image
            src={portfolio.imgSrc}
            alt="alt"
            className="object-cover h-full w-full"
          />
        </figure>
        <h2 className="text-center md:text-left text-2xl font-bold capitalize py-4">
          Description
        </h2>
        <p>{portfolio.description}</p>
        <div className="flex gap-10 items-center justify-center my-8">
          <Link
            href={portfolio.demo}
            className="flex bg-blue-500 py-3 px-6 rounded-md font-bold items-center justify-center text-white hover:scale-105 duration-200"
          >
            Demo
            <IoMdArrowDropright size={20} className="ml-1" />
          </Link>
          <Link
            href={portfolio.repo}
            className="flex bg-blue-500 py-3 px-6 rounded-md font-bold items-center justify-center text-white hover:scale-105 duration-200"
          >
            Repo
            <IoLogoGithub size={20} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSingle;
