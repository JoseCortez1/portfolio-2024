import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "JoseCortez1",
  description: "Portfolio of Jose Cortez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary w-full h-screen">
        <div className=" max-w-6xl mx-auto">
          <nav className="flex items-center justify-between  px-5 relative h-[50px]">
            <div>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.3098 5.03193C14.2302 3.393 12.3735 2.31132 10.2641 2.31132C6.92959 2.31132 4.22641 5.01451 4.22641 8.34906C4.22641 11.6836 6.92959 14.3868 10.2641 14.3868C12.4281 14.3868 14.3262 13.2484 15.3921 11.5378C14.1741 14.3127 11.402 16.2509 8.17732 16.2509C3.82783 16.2509 0.30188 12.7249 0.30188 8.37544C0.30188 4.02595 3.82783 0.5 8.17732 0.5C11.3314 0.5 14.0524 2.35415 15.3098 5.03193Z"
                  fill="white"
                />
              </svg>
              <span className=" font-bold text-sm">Edu</span>
            </div>
            <Navigation
              options={[
                { text: "home", link: "#home", key: "1", active: false },
                { text: "works", link: "#works", key: "2", active: false },
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
          {children}
        </div>
      </body>
    </html>
  );
}
