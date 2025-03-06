"use client";
import React, { FC, useRef, useEffect, useState } from "react";
import HeaderItem from "./HeaderItem";
import { NavigationProps } from "../../types";

const Navigation: FC<{ options: NavigationProps[] }> = ({ options }) => {
	const [openModal, setOpenModal] = useState(false);
	const openModalRef = useRef(false);

	const handleResize = () => {
		const windowWidth = window.innerWidth;
		const body = document.querySelector("body");
		if (body) {
			if (windowWidth < 649 && openModalRef.current) {
				body.style.overflow = "hidden";
			} else {
				body.style.overflow = "auto";
			}
		}
	};

	useEffect(() => {
		if (window) {
			window.addEventListener("resize", handleResize);
			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}
	}, []);

	useEffect(() => {
		if (window) {
			openModalRef.current = openModal;
			handleResize();
		}
	}, [openModal]);

	return (
		<>
			<div
				className='block md:hidden relative w-5 h-5 cursor-pointer '
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
						openModal
							? " top-1/2 rotate-[-45deg]"
							: " top-3/4 rotate-0"
					}`}
				></div>
			</div>
			<div
				className={`md:block md:static md:w-fit md:h-auto ${
					openModal
						? "container md:mx-0 absolute  top-[var(--h-header)] left-0 w-screen h-[calc(100vh-var(--h-header))] bg-primary"
						: "hidden "
				} `}
			>
				<ul className='flex flex-col justify-center md:flex-row  md:gap-4'>
					{options.map((option: NavigationProps) => (
						<li className='flex gap-4 ' key={option.key}>
							<a href={option.link} className={`py-2 text-2xl ${option.active ? 'text-white' : ' text-gray-500 '} `}>
								<span className='text-secondary font-bold pr-1'>#</span>
								{option.text}
							</a>
						</li>
					))}
					{/* 
                    <li>
                    Todo, list lang 
                    </li>
                    */}
				</ul>
			</div>
		</>
	);
};

export default Navigation;
