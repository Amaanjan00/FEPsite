import { Factory, LocateFixedIcon, Mail, Phone } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div className="xl:p-10">
      <div className="bg-white flex justify-between items-start mx-5 px-10 pt-10 border-black shadow-[6px_6px_0px_-1px_#000000] border-2 rounded-2xl">

        <div className="w-full flex flex-col">

          <div className="flex flex-col-reverse gap-10 xl:gap-0 xl:flex-row justify-between items-start mb-8">

            <div className="flex flex-col w-100">
              <div className="flex flex-col gap-4">
                <div className="w-full flex xl:justify-start items-center">
                  <img
                    src="/logo-main.png"
                    className="w-30 object-contain"
                    alt=""
                  />
                </div>

                <p className="flex w-fit text-xl font-bold text-black p-4 border-2 border-black bg-red-300 rounded-2xl">
                  Knowledge Inspires Soul!
                </p>
              </div>

              <div className="flex flex-col gap-3 py-4">
                <div className="flex gap-2 justify-start items-center">
                  <div className="bg-amber-100 p-2 border-2 border-black rounded-2xl">
                    <Phone />
                  </div>
                  <p>+91 9999999999</p>
                </div>

                <div className="flex gap-2 justify-start items-center">
                  <div className="bg-amber-100 p-2 border-2 border-black rounded-2xl">
                    <Mail />
                  </div>
                  <p>hellow@gmail.com</p>
                </div>

                <div className="flex gap-2 justify-start items-center">
                  <div className="bg-amber-100 p-2 border-2 border-black rounded-2xl">
                    <LocateFixedIcon />
                  </div>
                  <p>329/23 Asansol Road, Sitarampur Somewhere in the world</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-20 text-lg">
              <nav className="flex flex-col gap-3">
                <h3 className="font-bold">Home</h3>
                <ul className="list-disc">
                  <a href="">
                    <li>Features</li>
                  </a>
                  <a href="">
                    <li>Our Testimonials</li>
                  </a>
                  <a href="">
                    <li>FAQ</li>
                  </a>
                </ul>
              </nav>

              <nav className="flex flex-col gap-3">
                <h3 className="font-bold">About Us</h3>
                <ul className="list-disc">
                  <a href="">
                    <li>Our Mission</li>
                  </a>
                  <a href="">
                    <li>Our Vision</li>
                  </a>
                  <a href="">
                    <li>Awards and Recognition</li>
                  </a>
                  <a href="">
                    <li>History</li>
                  </a>
                  <a href="">
                    <li>Teachers</li>
                  </a>
                </ul>
              </nav>

              <nav className="flex flex-col gap-3">
                <h3 className="font-bold">Academics</h3>
                <ul className="list-disc">
                  <a href="">
                    <li>Special Features</li>
                  </a>
                  <a href="">
                    <li>Gallery</li>
                  </a>
                </ul>
              </nav>

              <nav className="flex flex-col gap-3">
                <h3 className="font-bold">Contact Us</h3>
                <ul className="list-disc">
                  <a href="">
                    <li>Information</li>
                  </a>
                  <a href="">
                    <li>Map & Direction</li>
                  </a>
                </ul>
              </nav>
            </div>

          </div>

          <div className="flex flex-col gap-5 w-full">

            <hr className="border-1 border-gray-400" />

            <div className="px-5 flex flex-col xl:flex-row gap-5 xl:gap-0 justify-between items-center">
                <nav>
                    <ul className="flex flex-col xl:flex-row text-gray-400 text-center xl:text-left">
                        <a className="p-2" href=""><li>Terms of Service</li></a>
                        <a className="p-2" href=""><li>Privacy Policy</li></a>
                        <a className="p-2" href=""><li>Cookie Policy</li></a>
                    </ul>
                </nav>

                <div className="flex gap-5">
                    <div className="bg-amber-700 border-2 border-black rounded-2xl p-4">
                        <Factory color="white" />
                    </div>
                    <div className="bg-amber-700 border-2 border-black rounded-2xl p-4">
                        <Factory color="white" />
                    </div>
                    <div className="bg-amber-700 border-2 border-black rounded-2xl p-4">
                        <Factory color="white" />
                    </div>
                    <div className="bg-amber-700 border-2 border-black rounded-2xl p-4">
                        <Factory color="white" />
                    </div>
                </div>
            </div>

            <hr className="border-1 border-gray-400" />

          </div>

          <div className="flex justify-center items-center p-5 text-sm text-gray-400 text-center">
            Copyright @ Fair Education Point School, Asansol
          </div>

        </div>

      </div>
    </div>
  );
}
