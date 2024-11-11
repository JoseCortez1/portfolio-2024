import React from "react";

const SocialMedia = () => {
	return (
		<div className='absolute -top-[var(--h-header)] left-2 z-50  flex-col items-center hidden md:flex '>
			<div className='w-[2px] h-80 bg-complementary'></div>
			<a href='https://github.com/JoseCortez1'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='w-8 h-8'
					viewBox='0 0 24 24'
				>
					<mask
						id='IconifyId19318f7ec0551d6e31'
						width='24'
						height='24'
						x='0'
						y='0'
					>
						<g className='stroke-complementary'>
							<ellipse cx='9.5' cy='9' rx='1.5' ry='1' />
							<ellipse cx='14.5' cy='9' rx='1.5' ry='1' />
						</g>
					</mask>
					<g
						fill='none'
						className='stroke-complementary'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
					>
						<path
							strokeDasharray='32'
							strokeDashoffset='32'
							d='M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3'
						>
							<animate
								fill='freeze'
								attributeName='stroke-dashoffset'
								dur='0.7s'
								values='32;0'
							/>
						</path>
						<path
							strokeDasharray='10'
							strokeDashoffset='10'
							d='M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5'
						>
							<animate
								attributeName='d'
								dur='3s'
								repeatCount='indefinite'
								values='M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5'
							/>
							<animate
								fill='freeze'
								attributeName='stroke-dashoffset'
								begin='0.8s'
								dur='0.2s'
								values='10;0'
							/>
						</path>
					</g>
				</svg>
			</a>
			<a href='mailto:jose.vazcortez@gmail.com'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='w-8 h-8'
					viewBox='0 0 24 24'
				>
					<g
						fill='none'
						className='stroke-complementary'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
					>
						<path
							strokeDasharray='64'
							strokeDashoffset='64'
							d='M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z'
						>
							<animate
								fill='freeze'
								attributeName='stroke-dashoffset'
								dur='0.6s'
								values='64;0'
							/>
						</path>
						<path
							strokeDasharray='24'
							strokeDashoffset='24'
							d='M3 6.5l9 5.5l9 -5.5'
						>
							<animate
								fill='freeze'
								attributeName='stroke-dashoffset'
								begin='0.6s'
								dur='0.2s'
								values='24;0'
							/>
						</path>
					</g>
				</svg>
			</a>
			<a href='mailto:3329330193'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='w-8 h-8'
					viewBox='0 0 24 24'
				>
					<path
						fill='none'
						className='stroke-complementary'
						strokeDasharray='64'
						strokeDashoffset='64'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z'
					>
						<animate
							fill='freeze'
							attributeName='stroke-dashoffset'
							dur='0.6s'
							values='64;0'
						/>
					</path>
				</svg>
			</a>
		</div>
	);
};

export default SocialMedia;
