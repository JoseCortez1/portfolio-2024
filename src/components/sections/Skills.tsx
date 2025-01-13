import Image from "next/image";
import TitleSection from "../TitleSection";

import boxes from "../../resources/svg/boxes.svg";

const Skills = () => {
	const skill = [
		{
			group: "Databases",
			id: 4,
			skills: ["MongoDB", "MySQL"],
		},
		{
			group: "Frontend",
			id: 2,
			skills: ["React", "Next.js", "Vue.js", "TailwindCSS", "CSS", "HTML"],
			color: true,
		},
		{
			group: "Backend",
			id: 3,
			skills: ["Node.js", "Express", "Laravel"],
		},
		{
			group: "Tools",
			id: 5,
			skills: ["Git", "GitHub", "VS Code"],
		},
		{
			group: "Languages ",
			id: 1,
			skills: ["Typescript", "Javascript"],
		},
	];
	const color = (apply: boolean | undefined) =>
		!!apply ? "border-secondary" : "border-gray-400";
	return (
		<section className="py-16  max-w-7xl mx-auto">
			<TitleSection prefix="#" text="skills" suffix={`View all ~~>`} />

			<div className="grid  md:grid-cols-[35%,auto] direction-[ltr] gap-8">
				<Image src={boxes} alt="boxes" className="hidden md:block" />
				<div className="columns-[178px] " dir="rtl">
					{skill.map((group) => (
						<div
							key={group.id}
							className={`${color(
								group?.color
							)} mb-8 border-2 h-fit break-inside-avoid `}>
							<h3
								className={`${color(
									group?.color
								)} text-base font-bold mb-4  ml-2 py-1 border-b-2 border-gray-400 text-left`}>
								{group.group}
							</h3>
							<div className="">
								{group.skills.map((skill, skillIndex) => (
									<p
										key={skillIndex}
										className=" text-white px-4 py-2 rounded-full text-left">
										{skill}
									</p>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
