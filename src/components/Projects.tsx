"use client";

import Link from "next/link";
import { ProjectCard, type Project } from "./ProjectCard";

const projects: Project[] = [
    {
        title: "ChertNodes",
        description: "Minecraft servers hosting",
        image: "https://images.unsplash.com/photo-1627856014754-2907e2355d54?q=80&w=1600&auto=format&fit=crop",
        technologies: ["HTML", "SCSS", "Python", "Flask"],
        liveUrl: "#",
        cacheUrl: "#"
    },
    {
        title: "ProtectX",
        description: "Discord anti-crash bot",
        image: "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1600&auto=format&fit=crop",
        technologies: ["React", "Express", "Discord.js", "Node.js", "HTML", "SCSS", "Python", "Flask"],
        liveUrl: "#"
    },
    {
        title: "Kahoot Answers Viewer",
        description: "Get answers to your kahoot quiz",
        image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=1600&auto=format&fit=crop",
        technologies: ["CSS", "Express", "Node.js"],
        liveUrl: "#"
    }
];

export default function Projects() {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-4">
                    <h2 className="text-3xl font-bold text-white">
                        <span className="text-[#C778DD]">#</span>projects
                    </h2>
                    <div className="h-[1px] bg-[#C778DD] w-[50vw]"></div>
                </div>
                <Link
                    href="/projects"
                    className="text-white hover:text-[#C778DD] transition-colors flex items-center gap-2"
                >
                    View all {`~~ >`}
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
}