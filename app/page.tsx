"use client";

import React from "react";
import { HoverEffect } from "@/components/ui/card-hover";
import ComputersCanvas from "@/components/canvas/Computers";
import AboutSection from "@/components/about/article";
import RobotCanvas from "@/components/canvas/Robot3d/Robot";
import Hero from "@/components/Hero/Hero";
import AboutPage from "@/components/jda/alan";

export default function Home() {

  return (
    <div className=" w-full  scroll-smooth  ">
   
      {/* HERO SECTION */}
      <section id="Home" >
        <Hero />
      </section>

      {/* ABOUT SECTION */}
      <section id="About" className="bg-black h-[100vh] -z-10">
      {/* <video 
        autoPlay 
        muted 
        loop 
        className="rotate-180 w-[80%] pl-60  items-center flex justify-center absolute z-10"><source src="/blackhole.webm" type="video/webm" /></video> */}
        <div> 
          <div className="absolute left-0 w-[30vw]">

            <AboutSection />
          </div>
          <div className="w-[30vw]">

            <ComputersCanvas data-aos="zoom-in-down" />
          </div>
        </div>
        {/* <AboutPage /> */}
      </section>

      {/* Card Section */}
        <section id="Card" className="bg-black h-[100vh] -z-10">
          <div className="max-w-5xl mx-auto px-8 pt-10">
            <HoverEffect items={projects} className="z-10" />
          </div>
        </section>
    </div>
  );
}

export const projects = [
  {
    title: "Fast",
    description:
      "AI can write and fix code quickly.",
    link: "https://fastapi.com",
  },
  {
    title: "Saving Time",
    description:
      "With AI we can save time in the development process",
    link: "https://netflix.com",
  },
  {
    title: "Troubleshoot",
    description:
      "AI can detect and identify problems quickly through log data analysis and real-time system monitoring.",
    link: "/",
  },
  {
    title: "SEO Optimization",
    description:
      "AI improves content for better SEO performance.",
    link: "/",
  },
  {
    title: "Security",
    description:
      "AI can detect and identify security vulnerabilities quickly through log data analysis and real-time system monitoring.",
    link: "/",

  },
  {
    title: "Data analysis",
    description:
      "AI can analyze data quickly through log data analysis and real-time system monitoring.",
    link: "/",
  }

 
];
