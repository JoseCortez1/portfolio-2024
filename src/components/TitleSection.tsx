import React, { ReactNode, FC } from "react";

type TitleSectionProps = {
	prefix: string;
	text: string;
	sufix: ReactNode;
	className: string;
};

const TitleSection: FC<Partial<TitleSectionProps>> = ({
	prefix = null,
	text = "example",
	sufix = null,
	className,
}) => {
	return (
		<h2 className={`${className}`}>
			<span className='text-secondary '>{prefix}</span>
			{text}
			<span className='inline-block h-2 w-full bg-secondary'></span>
			{sufix}
		</h2>
	);
};

export default TitleSection;
