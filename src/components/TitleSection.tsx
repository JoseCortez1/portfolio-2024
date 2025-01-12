import React, { ReactNode, FC } from "react";
import Link from "next/link";
type TitleSectionProps = {
	prefix: string;
	text: string;
	suffix: ReactNode;
	className: string;
};

const TitleSection: FC<Partial<TitleSectionProps>> = ({
	prefix = null,
	text = "example",
	suffix = null,
	className,
}) => {
	return (
		<div className={`flex items-center justify-between mb-12 ${className}`}>
			<div className="flex items-center gap-4">
				<h2 className="text-3xl font-bold text-white">
					<span className="text-secondary">{prefix}</span>
					{text}
				</h2>
				<div className="h-[1px] bg-secondary w-[50vw]"></div>
			</div>
			<Link
				href="/projects"
				className="text-white hover:text-secondary transition-colors flex items-center gap-2">
				{suffix}
			</Link>
		</div>
	);
};

export default TitleSection;
