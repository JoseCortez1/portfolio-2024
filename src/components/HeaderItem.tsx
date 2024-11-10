import React, { FC } from "react";

const HeaderItem: FC<{
	text: string;
	link: string;
}> = ({ text, link }) => {
	return (
		<a href={link} className='py-2 text-2xl '>
			<span className='text-secondary font-bold pr-1'>#</span>
			{text}
		</a>
	);
};
export default HeaderItem;
