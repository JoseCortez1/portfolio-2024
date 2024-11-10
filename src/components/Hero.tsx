import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoOutline from "../resources/svg/logo-outline.svg";
import { CURRENT_PROYECT } from "@/utils/globals";
const Hero = () => {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center min-h-[calc(100dvh-_var(--h-header))]'>
			<div className='self-end lg:self-center pb-8'>
				<h2 className='text-2xl sm:text-4xl text-white font-semibold mb-8 leading-normal'>
					[Eduardo |
					<strong className='text-secondary '>
						Next.js & Nuxt.js
					</strong>{" "}
					Frontend Developer]
				</h2>
				<p className='text-gray-400 '>
					[ develop modern and high-performance web applications using
					the best tools from React and Vue ecosystems. My expertise
					with Next.js and Nuxt.js more...
					{/*  allows me to create dynamic and
					SEO-optimized web experiences, always focused on maintaining
					the highest standards of quality and performance."] */}
				</p>
			</div>
			<div className='relative flex flex-col justify-end min-h-[40vh]'>
				<Image
					src={logoOutline}
					alt='Logo outline'
					className='absolute bottom-10 left-1/2 w-[23rem] -translate-x-1/2 '
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
