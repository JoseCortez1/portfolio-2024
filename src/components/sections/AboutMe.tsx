import Button from "../ui/button";
import TitleSection from "../TitleSection";
import Link from "next/link";
const AboutMe = () => {
	return (
		<section>
			<TitleSection prefix="#" text="about me" suffix={`View all ~~>`} />
			<div className="max-w-5xl">
				<p>[Hello, i&apos;m Eduardo]</p>
				<br />
				<br />
				<p>
					[I’m a self-taught front-end developer based Guadalajara, Jal. I can
					develop responsive websites from scratch and raise them into modern
					user-friendly web experiences.]
				</p>
				<br />
				<br />
				<p>
					[Transforming my creativity and knowledge into a websites has been my
					passion for over a year. I have been helping various clients to
					establish their presence online. I always strive to learn about the
					newest technologies and frameworks]
				</p>
			</div>

			<br />
			<br />
			<br />
			<br />
			<br />
			<Button type="primary">
				<Link href="/about">[Read more -&gt;]</Link>
			</Button>
		</section>
	);
};

export default AboutMe;
