"use client";
import { ArrowBigLeft, ArrowBigRight, Flag } from "lucide-react";
import React, { useRef } from "react";

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  const testimonials = [
    {
      name: "Amaan",
      image: "/logo-main.png",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam excepturi et enim doloribus voluptatum aliquid eius distinctio! Fuga quis corporis amet, possimus pariatur, perspiciatis consequatur beatae fugit sequi, non reiciendis.",
    },
    {
      name: "Amaan",
      image: "/logo-main.png",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam excepturi et enim doloribus voluptatum aliquid eius distinctio! Fuga quis corporis amet, possimus pariatur, perspiciatis consequatur beatae fugit sequi, non reiciendis.",
    },
    {
      name: "Amaan",
      image: "/logo-main.png",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam excepturi et enim doloribus voluptatum aliquid eius distinctio! Fuga quis corporis amet, possimus pariatur, perspiciatis consequatur beatae fugit sequi, non reiciendis.",
    },
    {
      name: "Amaan",
      image: "/logo-main.png",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam excepturi et enim doloribus voluptatum aliquid eius distinctio! Fuga quis corporis amet, possimus pariatur, perspiciatis consequatur beatae fugit sequi, non reiciendis.",
    },
    {
      name: "Amaan",
      image: "/logo-main.png",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam excepturi et enim doloribus voluptatum aliquid eius distinctio! Fuga quis corporis amet, possimus pariatur, perspiciatis consequatur beatae fugit sequi, non reiciendis.",
    },
    {
      name: "Amaan",
      image: "/logo-main.png",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam excepturi et enim doloribus voluptatum aliquid eius distinctio! Fuga quis corporis amet, possimus pariatur, perspiciatis consequatur beatae fugit sequi, non reiciendis.",
    },
  ];

  return (
    <div className="my-20 relative">
      <div className="flex flex-col gap-5 w-full justify-center items-center">
        <h1 className="font-extrabold text-5xl">Testimonials</h1>
        <p className="xl:px-70 px-10 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
          quasi aspernatur minus, nisi a, reprehenderit vitae facilis id quos
          beatae voluptatem optio ea nesciunt! Deleniti praesentium asperiores
          est quos quibusdam.
        </p>
      </div>

      <button
        onClick={() => scroll("left")}
        className="bg-red-400 h-10 w-10 rounded-full absolute flex justify-center items-center xl:left-20 left-0 bottom-70 ml-5"
      >
        <ArrowBigLeft />
      </button>

      <div className="xl:px-50 px-10 py-10">
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll p-5 gap-8 snap-x snap-mandatory scrollbar-hide"
        >

          {testimonials.map((t, index) => (
            <div key={index} className="bg-white border-2 min-w-sm border-black shadow-[6px_6px_0px_-1px_#000000] p-10 rounded-2xl">
              <div className="flex w-full justify-center items-center mb-10">
                <div className="bg-amber-200 p-4 rounded-full">
                  <img
                    src={t.image}
                    className="size-20 rounded-full"
                    alt=""
                  />
                </div>
              </div>
              <h1 className="font-bold">{t.name}</h1>
              <p>
                {t.testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => scroll("right")}
        className="bg-red-400 h-10 w-10 rounded-full absolute xl:right-20 right-0 bottom-70 mr-5 flex justify-center items-center"
      >
        <ArrowBigRight />
      </button>
    </div>
  );
}
