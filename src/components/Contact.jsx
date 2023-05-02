import Image from "next/image";
import Link from "next/link";
import React from "react";
import { socials_data as socials } from "@/data";

import ContactImg from "../assets/contact.jpg";

function Contact() {
  return (
    <section id="contact" className="w-full">
      <div className="max-w-screen-xl px-8 py-16 text-center md:text-left mx-auto">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          {" "}
          Contact
        </h2>
        <p className="py-4 max-w-lg mx-auto md:me-auto md:ms-0">
          Let's have a chat and discuss more about how I could make your
          products and projects stand out from competitors!
        </p>
      </div>
      {/*  */}
      <div className="shadow-xl shadow-blue-400 mx-8 py-8 flex flex-col md:flex-row gap-8">
        <div className=" w-full md:w-1/2 h-full rounded-xl p-4">
          <figure className="rounded-xl overflow-hidden w-fit mx-auto">
            <Image src={ContactImg} alt=" Contact me" />
          </figure>

          <p className="my-4">
            Let's have a chat and discuss more about how I could make your
            products and projects stand out from competitors!
          </p>
          <div className="grid grid-cols-2 w-4/5 gap-10 mx-auto mt-8">
            {socials.map(({ id, url, child }) => (
              <Link key={id} href={`${url}`} scroll={false}>
                <div className="flex items-center justify-center p-3 shadow-md shadow-blue-300 rounded-full hover:scale-110 duration-200">
                  {child}
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Form */}
        <div className=" w-full md:w-1/2 h-full rounded-xl p-4">
          <div className="py-4 text-left">
            <form
              action="https://getform.io/f/64fe657d-69cd-4ab9-a899-474226923272"
              method="Post"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="capitalize text-slate-600 py-2 "
                  >
                    name
                  </label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="border-2 border-blue-200 rounded-lg focus:outline-none p-3 "
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="capitalize text-slate-600 py-2 "
                  >
                    phone
                  </label>

                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="border-2 border-blue-200 rounded-lg focus:outline-none p-3 "
                  />
                </div>
                <div className="flex flex-col md:col-span-2">
                  <label
                    htmlFor="email"
                    className="capitalize text-slate-600 py-2 "
                  >
                    email
                  </label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border-2 border-blue-200 rounded-lg focus:outline-none p-3 "
                  />
                </div>
                <div className="flex flex-col md:col-span-2">
                  <label
                    htmlFor="message"
                    className="capitalize text-slate-600 py-2 "
                  >
                    message
                  </label>

                  <textarea
                    name="message"
                    id="message"
                    rows={10}
                    className="border-2 border-blue-200 rounded-lg focus:outline-none p-3 "
                  ></textarea>
                </div>
                <div className="flex items-center justify-center md:col-span-2">
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-blue-500 text-white font-bold uppercase hover:scale-105 duration-200 w-fit "
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
