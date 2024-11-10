import React, { FC, ReactNode } from "react";

type ButtonProps = {
	children: ReactNode;
	icon?: string;
	type?: "primary" | "secondary";
	extraClassName?: string;
};

const Button: FC<ButtonProps> = ({
	children,
	icon,
	type = "primary",
	extraClassName,
}) => {
	return (
		<button
			className={`
                ${extraClassName}
                border-2 py-2 px-4 transition-all
                ${icon ? "" : ""}
                ${
					type === "primary"
						? "border-secondary hover:bg-secondary/70 active:bg-secondary/90"
						: "border-complementary hover:bg-complementary/70 active:bg-complementary/90"
				}
                ${type === "secondary" ? "" : ""}
        `}
		>
			{children}
		</button>
	);
};

export default Button;
