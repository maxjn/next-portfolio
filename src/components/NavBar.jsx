import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { socials_data as socials, links_data as links } from "@/data";

function NavBar() {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const sub = window.addEventListener("scroll", () => {
      setScroll(window.scrollY >= 90);
      console.log(scroll);
    });

    return sub;
  }, []);

  return (
    <header
      className={`w-full h-20 fixed z-10 duration-200 ease-in ${
        scroll ? " bg-black text-white " : " bg-white text-black"
      }`}
    >
      <div className="flex justify-between items-center max-w-screen-xl mx-auto p-4 ">
        <Link href="/#home">
          <h1 className="text-3xl lg:text-4xl underline underline-offset-2 font-bold uppercase  ">
            Maxjn
          </h1>
        </Link>
        <nav>
          <ul className="hidden md:flex ">
            {links.map(({ id, url }) => (
              <Link key={id} href={`/#${url}`} scroll={false}>
                <li className="uppercase ms-10 hover:scale-105 duration-300 transition ease-out text-sm tracking-wider ">
                  {url}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        <div className="md:hidden cursor-pointer" onClick={() => setNav(true)}>
          <FaBars size={30} />
        </div>
      </div>

      {/* offcanvas menu Startr*/}
      <div
        className={`offcanvas w-full h-full fixed top-0  bg-black/70 backdrop-blur ease-in ${
          nav ? "left-0" : " left-[-100%] "
        }`}
      >
        <div
          className={`w-4/5 h-full bg-gradient-to-r from-blue-600 to-cyan-600 p-10 duration-500 ease-in text-white fixed  top-0 ${
            nav ? "left-0" : " left-[-100%] "
          }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <Link href="/#home">
                <h1 className="text-3xl lg:text-4xl underline underline-offset-2 font-bold uppercase  ">
                  Maxjn
                </h1>
              </Link>
              <div className="p-5 cursor-pointer" onClick={() => setNav(false)}>
                <FaTimes size={30} />{" "}
              </div>
            </div>
          </div>
          {/* links */}
          <nav className="mt-24">
            <ul className="flex flex-col">
              {links.map(({ id, url }) => (
                <Link key={id} href={`/#${url}`} scroll={false}>
                  <li
                    className="uppercase py-4 text-2xl tracking-wider "
                    onClick={() => setNav(false)}
                  >
                    {url}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
          {/* Social Links */}
          <div className="grid grid-cols-2 gap-10 w-4/5 mx-auto mt-24">
            {socials.map(({ id, url, child }) => (
              <Link key={id} href={`${url}`}>
                <div className="flex items-center justify-center p-3 shadow-md shadow-white rounded-full">
                  {child}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* offcanvas menu Ends*/}
    </header>
  );
}

export default NavBar;
