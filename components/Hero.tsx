import React from "react";
import ParticleBackground from "./Particle"; // Ensure correct import path
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { socialMedia } from "@/data";

const Hero = () => {

  const openResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section id="home">
    <div className="relative pb-20 pt-36 mt-20">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Background Grid */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Particles Background */}
        <div className="absolute">
          <ParticleBackground />
        </div>
        {/* Radial gradient for the container */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Main Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-start justify-center">
          <p className="uppercase tracking-widest text-xs text-blue-100 mt-4 ml-1">
            Hello! 👋 I&apos;m
          </p>

          <TextGenerateEffect
            words="Himaja Chinnam"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-left md:tracking-wider mb-4 text-xs md:text-xs lg:text-lg max-w-full">
            Front End Developer
          </p>

          <div className="flex ml-1 mt-10 items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={
                  info.id === 1
                    ? "https://github.com/Himaja9876"
                    : info.id === 2
                    ? "https://www.linkedin.com/in/himaja-chinnam-064208193/"
                    : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            ))}
            <a>
            <MagicButton
              title="Resume"
              icon={<FaLocationArrow />}
              position="right"
              handleClick={openResume}
            />
          </a>
          </div>

          
        </div>
      </div>
    </div>
    </section>
  );
};

export default Hero;
