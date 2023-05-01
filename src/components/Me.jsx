import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

function Me() {
  return (
    <section id="me" className="w-full">
      <div className="max-w-screen-xl px-8 py-16 text-center md:text-left mx-auto">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          {" "}
          Me
        </h2>
        <div className="shadow-xl shadow-blue-400 mx-8 py-8">
          <p className=" text-gray-600 text-left max-w-2xl mx-auto py-3 px-6 ">
            Hi I am Muhammad Haghnegahdar(Maxjn), a Front-end developer.
            <br></br>I like to learn when I have some free time for myself. I
            have a particular sensitivity to standard and clean coding.
            <br></br>
            <br></br>
            <b>
              {" "}
              My main service is:<br></br>● Front-end web development
            </b>
            <br></br>
            <br></br>
            You can view samples of my work on my GitHub and portfolio website.
            <br></br>
          </p>
        </div>
        {/* buttons */}
        <dir className="flex items-center justify-center gap-10 p-0 mt-8 ">
          <Link
            href="/resume.pdf"
            className=" group px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white uppercase font-bold tracking-wider flex items-center justify-center"
          >
            Resume
            <IoIosArrowForward
              size={20}
              download={true}
              className="group-hover:ms-3 group-hover:me-0 duration-200 ease-in ms-1 me-2"
            />
          </Link>
          <Link
            scroll={false}
            href="/#portfolio"
            className="group px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white uppercase font-bold tracking-wider flex items-center justify-center"
          >
            Portfolio
            <IoIosArrowForward
              size={20}
              className="group-hover:-rotate-90 duration-200 ease-in ms-1"
            />
          </Link>
        </dir>
      </div>
    </section>
  );
}

export default Me;
