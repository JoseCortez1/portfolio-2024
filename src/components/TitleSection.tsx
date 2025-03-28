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
		<div
			className={`flex items-center justify-between mb-12 ${className} w-full`}>
			<div className="flex items-center gap-4 w-full">
				<Link href="/projects">
					<h2 className="text-3xl font-bold text-white">
						<span className="text-secondary">{prefix}</span>
						{text}
					</h2>
				</Link>
				<div className="hidden md:block h-[1px] bg-secondary w-full max-w-[50vw]"></div>
			</div>
			<Link
				href="/projects"
				className="hidden text-white hover:text-secondary transition-colors md:flex items-center gap-2 flex-shrink-0 pl-4">
				{suffix}
			</Link>
		</div>
	);
};

export default TitleSection;
