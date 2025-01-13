"use client";
import { ProjectCard, type Project } from "../ProjectCard";
import TitleSection from "../TitleSection";

const projects: Project[] = [
	{
		title: "ChertNodes",
		description: "Minecraft servers hosting",
		image:
			"https://images.unsplash.com/photo-1627856014754-2907e2355d54?q=80&w=1600&auto=format&fit=crop",
		technologies: ["HTML", "SCSS", "Python", "Flask"],
		liveUrl: "#",
		cacheUrl: "#",
	},
	{
		title: "ProtectX",
		description: "Discord anti-crash bot",
		image:
			"https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1600&auto=format&fit=crop",
		technologies: [
			"React",
			"Express",
			"Discord.js",
			"Node.js",
			"HTML",
			"SCSS",
			"Python",
			"Flask",
		],
		liveUrl: "#",
	},
	{
		title: "Kahoot Answers Viewer",
		description: "Get answers to your kahoot quiz",
		image:
			"https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=1600&auto=format&fit=crop",
		technologies: ["CSS", "Express", "Node.js"],
		liveUrl: "#",
	},
];

export default function Projects() {
	return (
		<section className="py-16 max-w-7xl mx-auto">
			<TitleSection prefix="#" text="projects" suffix={`View all ~~>`} />

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</div>
		</section>
	);
}
