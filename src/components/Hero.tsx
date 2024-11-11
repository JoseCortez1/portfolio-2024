import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoOutline from "../resources/svg/logo-outline.svg";
import dottedBox from "../resources/svg/dotted-box.svg";
import { CURRENT_PROYECT } from "@/utils/globals";
import Button from "./Button";

const Hero = () => {
	return (
		<div className='relative grid grid-cols-1 lg:grid-cols-2 lg:items-center min-h-[calc(100dvh-_var(--h-header))] '>
			<div className='self-end  lg:self-center pb-8 mt-4  lg:mt-[40%] lg:mb-auto lg:w-[150%] z-[1] '>
				<h2 className='text-lg sm:text-2xl md:text-4xl text-white font-semibold mb-4 lg:mb-8 leading-normal'>
					[Eduardo |
					<strong className='text-secondary '>
						Next.js & Nuxt.js
					</strong>{" "}
					Frontend Developer]
				</h2>
				<p className='text-gray-300 text-xs md:text-base  '>
					[ develop modern and high-performance web applications using
					the best tools from React and Vue ecosystems. My expertise
					with Next.js and Nuxt.js more...
					{/*  allows me to create dynamic and
					SEO-optimized web experiences, always focused on maintaining
					the highest standards of quality and performance."] */}
				</p>
				<Button className='my-4 lg:my-8'>Contact me!!</Button>
			</div>
			<div className='relative flex flex-col justify-end min-h-[40vh] lg:mb-[30%] mt-auto'>
				<Image
					src={logoOutline}
					alt='Logo outline'
					className='absolute bottom-10 left-1/2 w-[14rem] sm:w-[23rem] -translate-x-1/2 '
				/>
				<Image
					src={dottedBox}
					alt='Dotted box'
					className='absolute bottom-[10rem] right-[4rem] w-[4rem] sm:w-[8rem] '
				/>

				<p className='border absolute bottom-10 w-full border-gray-500 flex justify-center  items-center z-[1] bg-primary/70  text-sm py-10'>
					<span className='bg-secondary inline-block w-4 h-4 mx-2 flex-shrink-0'></span>
					[Current working on{" "}
					<Link
						href={CURRENT_PROYECT.LINK}
						className='ml-1 font-bold text-white hover:text-gray-300 transition-all'
					>
						{CURRENT_PROYECT.LABEL}
					</Link>
					]
				</p>
			</div>
		</div>
	);
};

export default Hero;
