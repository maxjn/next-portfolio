import React from "react";
import Image from "next/image";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import sass from "../assets/sass.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
const techs = [
  {
    id: 1,
    src: html,
    title: "HTML",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
  },
  {
    id: 3,
    src: javascript,
    title: "JavaScript",
  },
  {
    id: 4,
    src: reactImage,
    title: "React",
  },
  {
    id: 5,
    src: tailwind,
    title: "Tailwind",
  },
  {
    id: 6,
    src: nextjs,
    title: "Next JS",
  },
  {
    id: 7,
    src: sass,
    title: "Sass",
  },
  {
    id: 8,
    src: github,
    title: "GitHub",
  },
];

function Experience() {
  return (
    <section id="experience" className="w-full">
      <div className="max-w-screen-xl px-8 py-16 text-center md:text-left mx-auto">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          {" "}
          Experience
        </h2>
        <p className="py-4 max-w-lg mx-auto md:me-auto md:ms-0">
          These are the technologies I've worked with{" "}
        </p>
        {/* Techs Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {techs.map(({ id, title, src }) => (
            <div
              key={id}
              className="p-6 gap-10 lg:gap-0 shadow-lg odd:shadow-rose-400 even:shadow-blue-400 rounded-xl  group flex flex-col lg:flex-row items-center justify-between "
            >
              <Image
                src={src}
                alt={title}
                className="group-hover:scale-110 duration-200 ease-in w-20 h-20"
              />
              <h3 className="text-center text-base font-light capitalize py-4 underline-offset-4 group-hover:underline ">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
