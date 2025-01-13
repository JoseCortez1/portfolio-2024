"use client";
import BoxItems from "../BoxItems";
import TitleSection from "../TitleSection";
const Contacts = () => {
	return (
		<section>
			<div className="flex justify-between">
				<div>
					<TitleSection prefix="#" text="contacts" />
					<br />
					<br />
					<p>
						[I’m interested in freelance opportunities. However, if you have
						other request or question, don’t hesitate to contact me]
					</p>
				</div>
				<div className="w-6/12">
					<BoxItems
						title="Message me here"
						className="mx-auto w-max"
						items={[
							<div key={"phone"}>
								<a
									href="tel:+523329330193"
									className="flex items-center gap-2 ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 24 24">
										<path
											fill="currentColor"
											d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
										/>
									</svg>
									+52 33 2933 0193
								</a>
							</div>,
							<div key={"phone"}>
								<a
									href="mailto:edu.vcortez@gmail.com"
									className="flex items-center gap-2 ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 24 24">
										<path
											fill="currentColor"
											d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
										/>
									</svg>
									edu.vcortez@gmail.com
								</a>
							</div>,
						]}
					/>
				</div>
			</div>
		</section>
	);
};

export default Contacts;
