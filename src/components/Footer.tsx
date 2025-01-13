import logo from "../resources/svg/logo-positive.svg";
import github from "../resources/svg/github-filled.svg";
import linkedin from "../resources/svg/linkedin.svg";
import Image from "next/image";
const Footer = () => {
	return (
		<footer className="mt-20 flex flex-col px-4 md:px-0 max-w-5xl mx-auto">
			<div className="flex justify-between  flex-col md:flex-row md:items-start ">
				<div className="flex flex-col md:flex-row md:items-end gap-4">
					<Image src={logo} alt="logo" width={120} height={120} />
					<a href="mailto:edu.vcortez@gmail.com" className="ml-2 text-right">
						edu.vcortez@gmail.com
					</a>
				</div>
				<div>
					<h3 className="font-semibold mt-4">Social Media</h3>
					<div className="flex gap-4 my-4">
						<a href="https://github.com/JoseCortez1">
							<Image src={github} alt="github" width={30} height={30} />
						</a>
						<a href="http://www.linkedin.com/in/jose-vazcortez">
							<Image src={linkedin} alt="linkedin" width={30} height={30} />
						</a>
					</div>
				</div>
			</div>

			<p className="text-sm py-10 md:py-5 text-center">
				© Copyright 2024. Made by{" "}
				<a href="https://github.com/JoseCortez1">JoseCortez1</a>
			</p>
		</footer>
	);
};

export default Footer;
