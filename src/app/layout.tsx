import type { Metadata } from "next";
import "./globals.css";
import { Fira_Code } from "next/font/google";
import Navbar from "@/components/Navbar";
import SocialMedia from "@/components/SocialMedia";

export const metadata: Metadata = {
	title: "JoseCortez1",
	description: "Portfolio of Jose Cortez",
};

const fira_code = Fira_Code({
	subsets: ["latin"],
	variable: "--font-fira-code",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`relative bg-primary w-full h-screen ${fira_code.variable} font-sans`}
			>
				<Navbar />
				<SocialMedia />
				<div className='container'>{children}</div>
			</body>
		</html>
	);
}
