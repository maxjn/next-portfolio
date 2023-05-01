import Image from "next/image";
import React from "react";
import ProfileImg from "../assets/hero.jpg";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function HomeSection() {
  return (
    <section id="home" className="w-full h-screen text-center">
      <div className="container max-w-screen-xl  mx-auto pt-24 p-4 flex flex-col justify-around items-center w-full h-full">
        <figure className="rounded-xl overflow-hidden h-64 w-64 mx-auto">
          <Image src={ProfileImg} alt="me" />
        </figure>
        <h1 className="capitalize text-gray-700 text-7xl font-bold">
          Front-end Developer
        </h1>
        <p className=" text-gray-600 text-left max-w-screen-sm ">
          Hi I am Muhammad Haghnegahdar(Maxjn), a Front-end developer.
          <br></br>I like to learn when I have some free time for myself. I have
          a particular sensitivity to standard and clean coding.
          <br></br>
          <br></br>
          <b>
            {" "}
            My main service is:<br></br>● Front-end web development
          </b>
          <br></br>
          You can view samples of my work on my GitHub and portfolio website.
          <br></br>
        </p>
        <Link
          scroll={false}
          href="/#me"
          className="group px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white uppercase font-bold tracking-wider flex items-center justify-center"
        >
          Know More
          <IoIosArrowForward
            size={20}
            className="group-hover:rotate-90 duration-200 ease-in ms-1"
          />
        </Link>
      </div>
    </section>
  );
}
