"use client";
import React, { FC, useEffect, useState } from "react";
import HeaderItem from "./HeaderItem";
import { NavigationProps } from "../../types";

const Navigation: FC<{ options: NavigationProps[] }> = ({ options }) => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (window) {
      const handleResize = () => {
        const windowWidth = window.innerWidth;
        console.log("Window width: ", typeof windowWidth, windowWidth);
        if (windowWidth < 649) {
        }
      };
      window.addEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="">
      <div
        className="block sm:hidden relative w-5 h-5 cursor-pointer "
        onClick={() => setOpenModal((prev) => !prev)}
      >
        <div
          className={`h-0.5 w-full absolute left-1/2  -translate-x-1/2 -translate-y-1/2  bg-secondary transition-all duration-500 ${
            openModal ? " top-1/2 rotate-45" : " top-1/4 rotate-0"
          }`}
        ></div>
        <div
          className={`h-0.5 w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  bg-secondary transition-all ${
            openModal ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`h-0.5 w-full absolute left-1/2 -translate-x-1/2 -translate-y-1/2  bg-secondary transition-all duration-500 ${
            openModal ? " top-1/2 rotate-[-45deg]" : " top-3/4 rotate-0"
          }`}
        ></div>
      </div>
      <div
        className={`sm:block sm:static sm:w-fit sm:h-auto ${
          openModal
            ? "absolute top-[50px] left-0 w-screen h-[calc(100vh-_50px)] bg-blue-300"
            : "hidden "
        } `}
      >
        <ul className="flex flex-col justify-center sm:flex-row ">
          {options.map((option: NavigationProps) => (
            <li className="flex gap-4 " key={option.key}>
              <HeaderItem {...option} />
            </li>
          ))}
          {/* 
                    <li>
                    Todo, list lang 
                    </li>
                    */}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
