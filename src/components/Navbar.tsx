import React from "react";
import Navigation from "./Navigation";
import logo from "../resources/svg/logo-positive.svg";
import Image from "next/image";
const Navbar = () => {
	return (
		<nav className="container flex items-center justify-between  relative h-[var(--h-header)] bg-primary/80 z-50 pt-4 p-4">
			<div className="flex gap-2">
				<Image src={logo} alt="logo" width={186} height={56} />
			</div>
			<Navigation
				options={[
					{
						text: "home",
						link: "#home",
						key: "1",
						active: true,
					},
					{
						text: "works",
						link: "#works",
						key: "2",
						active: false,
					},
					{
						text: "about me",
						link: "#about-me",
						key: "3",
						active: false,
					},
					{
						text: "contacts",
						link: "#contacts",
						key: "4",
						active: false,
					},
				]}
			/>
		</nav>
	);
};

export default Navbar;
