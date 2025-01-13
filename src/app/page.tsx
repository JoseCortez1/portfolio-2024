import AboutMe from "@/components/sections/AboutMe";
import Hero from "../components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contacts from "@/components/sections/Contacts";
export default function Home() {
	return (
		<div className="">
			<Hero />
			<Projects />
			<Skills />
			<AboutMe />
			<Contacts />
		</div>
	);
}
