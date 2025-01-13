import { ReactNode, FC } from "react";

type BoxItemsProps = {
	title: string;
	items: ReactNode[] | string[];
	color?: boolean;
	separateTitle?: boolean;
	className?: string;
};
const BoxItems: FC<BoxItemsProps> = ({
	title,
	items,
	color,
	separateTitle,
	className,
}) => {
	const colorToApply = (apply: boolean | undefined) =>
		!!apply ? "border-secondary" : "border-gray-400";

	return (
		<div
			className={`${colorToApply(color)} 
            ${className}
                p-2 mb-8 border-2 h-fit break-inside-avoid 
            `}>
			<h4
				className={`
                    ${colorToApply(separateTitle)} 
                    ${separateTitle ? "border-b-2" : "border-none"} 
                        break-keep
                        text-base font-bold mb-4   
                    `}>
				{title}
			</h4>
			<ul>
				{items.map((item: ReactNode | string, index: number) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default BoxItems;
