"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export interface Project {
	title: string;
	description: string;
	image: string;
	technologies: string[];
	liveUrl?: string;
	cacheUrl?: string;
}

export function ProjectCard({ project }: { project: Project }) {
	return (
		<Card className="bg-[#282C33] border-2 border-gray-600 rounded-none overflow-hidden p-0 grid grid-rows-[auto,1fr,auto]">
			<div className="relative h-48 w-full">
				<Image
					src={project.image}
					alt={project.title}
					fill
					className="object-cover"
				/>
			</div>

			<div className="p-8">
				<div className="flex flex-wrap gap-2 mb-4">
					{project.technologies.map((tech, techIndex) => (
						<Badge
							key={techIndex}
							variant="secondary"
							className="bg-transparent border border-gray-600 text-gray-400 rounded-none">
							{tech}
						</Badge>
					))}
				</div>
			</div>

			<div className="h-[2px] bg-gray-600" />

			<div className="p-4">
				<h3 className="text-xl font-bold mb-4 text-white truncate text-ellipsis w-full ">
					{project.title}
				</h3>
				<p className="text-gray-300 mb-4 truncate text-ellipsis w-[calc(100%-1rem)]">
					{project.description}
				</p>

				<div className="flex gap-3">
					{project.liveUrl && (
						<Button
							asChild
							variant="outline"
							className="bg-transparent border-secondary text-white hover:bg-secondary/10 rounded-none">
							<Link href={project.liveUrl}>Live {`<~>`}</Link>
						</Button>
					)}
					{project.cacheUrl && (
						<Button
							asChild
							variant="outline"
							className="bg-transparent border-gray-500 text-gray-500 hover:bg-gray-700/10 hover:text-gray-300 rounded-none">
							<Link href={project.cacheUrl}>Cached {`>=`}</Link>
						</Button>
					)}
				</div>
			</div>
		</Card>
	);
}
