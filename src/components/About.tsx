import PathDrawBox from "./PathDrawBox";
import MemberCard from "./MemberCard";
import { useState } from "react";
import DecryptedText from "./utils/DecryptedText";

export default function About() {
  const [selectedTab, setSelectedTab] =
    useState<"info" | "tecbytes">("info");
  const textDecryptTime = 20;
  const titleDecryptTime = 100;
  const boardMembers = [
    {
      name: "Armando Mac Beath",
      role: "President",
      image_name: `members/armandPres.jpg`,
      description:
        "Provides strategic leadership for TecBytes, defines vision and goals, and represents the organization in external partnerships and events.",
      linkedin: "https://www.linkedin.com/in/armando-mac-beath-430648250",
    },
    {
      name: "Maria Jose Croche",
      role: "Vice President",
      image_name: `members/majoVIce.jpg`,
      description:
        "Assists the President in decision-making, coordinates club initiatives, and ensures seamless execution of outreach programs.",
      linkedin: "https://www.linkedin.com/in/majosecroche/",
    },
    {
      name: "Oriana Cañizales",
      role: "Finance Lead",
      image_name: `members/oriFin.jpg`,
      description:
        "Oversees financial planning, budgeting, and sponsorship management to ensure TecBytes' fiscal health and sustainability.",
      linkedin:
        "https://www.linkedin.com/in/oriana-isabella-ca%C3%B1izales-hern%C3%A1ndez-7a8882291/",
    },
    {
      name: "Ximena Ortiz",
      role: "Social Responsibility Lead",
      image_name: `members/ximeResp.jpg`,
      description:
        "Designs and implements community engagement and CSR projects, fostering social impact and volunteer initiatives.",
      linkedin: "https://www.linkedin.com/in/ximena-ortiz-g%C3%B3mez/",
    },
    {
      name: "Luis Antonio Salinas",
      role: "Projects Lead",
      image_name: `members/luisProyectos.jpg`,
      description:
        "Plans, oversees, and delivers technical and social projects, coordinating teams to achieve project milestones.",
      linkedin: "https://www.linkedin.com/in/luis-antonio-salinas/",
    },
    {
      name: "Amir Rodriguez",
      role: "Youth Outreach Lead",
      image_name: `members/youth.jpg`,
      description:
        "Develops mentorship and recruitment programs, building relationships with youth to expand TecBytes' community impact.",
      linkedin:
        "https://www.linkedin.com/in/santiago-amir-rodriguez-gonzalez/",
    },
    {
      name: "Luis Montes",
      role: "Senior Advisor",
      image_name: `members/montesAdvisor.jpg`,
      description:
        "Provides strategic counsel and mentorship to the executive team, leveraging experience to guide long-term growth.",
      linkedin: "https://www.linkedin.com/in/luismontess/",
    },
  ];

  return (
    <section
      id="about"
      className={`
        flex flex-col items-center text-center
        px-4 sm:px-8 py-16
        bg-slate-800
        ${selectedTab === "info"
          ? "min-h-screen justify-center"
          : ""
        }
      `}
    >
      {/* Tab Switch */}
      <div className="mb-6 space-x-4">
        <button
          onClick={() => setSelectedTab("info")}
          className={`px-6 py-2 rounded-lg transition-all ${
            selectedTab === "info"
              ? "bg-blue-500 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          Info
        </button>
        <button
          onClick={() => setSelectedTab("tecbytes")}
          className={`px-6 py-2 rounded-lg transition-all ${
            selectedTab === "tecbytes"
              ? "bg-blue-500 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          TecBytes
        </button>
      </div>

      {selectedTab === "info" && (
        <PathDrawBox strokeColor="white" strokeWidth={10} duration={2}>
          <div className="p-10 max-w-[800px]">
            <h2 className="text-4xl font-bold text-white mb-6">
            <DecryptedText
              text="What is Hack Puebla?"
              animateOn="view"
              sequential
              speed={titleDecryptTime}
              encryptedClassName="text-4xl font-bold text-white mb-6"
            />
            </h2>
            <p className="text-lg pt-10 max-w-2xl text-gray-50">
              <DecryptedText
              text=" Hack Puebla is a programming and entrepreneurship competition where "
              animateOn="view"
              sequential
              speed={textDecryptTime}
              encryptedClassName="text-lg max-w-2xl text-gray-50"
            />
              <DecryptedText
              text="students, professionals, and technology enthusiasts come together to create "
              animateOn="view"
              sequential
              speed={textDecryptTime}
              encryptedClassName="text-lg max-w-2xl text-gray-50"
            />
              <DecryptedText
              text="innovative solutions to today's most pressing problems. Join us and put your creativity to the test!"
              animateOn="view"
              sequential
              speed={textDecryptTime}
              encryptedClassName="text-lg max-w-2xl text-gray-50"
            />
              
            </p>
          </div>
        </PathDrawBox>
      )}

      {selectedTab === "tecbytes" && (
        <div className="w-full max-w-6xl">
          <h3 className="text-2xl font-semibold text-white mb-4">
            TecBytes Board Members
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {boardMembers.map((m, i) => (
              <MemberCard
                key={i}
                name={m.name}
                role={m.role}
                image_name={m.image_name}
                description={m.description}
                linkedin={m.linkedin}
              />
            ))}
          </div>

          {/* — Group Photo Below — */}
          <img
            src="members/groupPic.jpg"
            alt="TecBytes Group Photo"
            className="mt-8 w-full max-w-4xl rounded-lg shadow-lg mx-auto"
          />
        </div>
      )}
    </section>
  );
}