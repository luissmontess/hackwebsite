import PathDrawBox from "./PathDrawBox"
import MemberCard from "./MemberCard";
import { useState } from "react"

export default function About() {
    const [selectedTab, setSelectedTab] = useState<"info" | "tecbytes">("info");
    const boardMembers = [
        {
          name: "Luis Montes",
          role: "President",
          image_name: "/luismontes_member.png",
          description: "Leader of TecBytes, responsible for organizing events and managing the team."
        },
        {
          name: "Joselyn Espinoza",
          role: "Vice President",
          image_name: "/luismontes_member.png",
          description: "Supports the president and oversees club initiatives and outreach."
        },
        {
          name: "Alejandro Zurita",
          role: "Treasurer",
          image_name: "/luismontes_member.png",
          description: "Manages the financial aspects of TecBytes, including sponsorships and budgeting."
        },
        {
          name: "Antonieta Rodriguez",
          role: "Social Responsiblity Lead",
          image_name: "/luismontes_member.png",
          description: "Handles social media, branding, and promotional campaigns for TecBytes."
        },
        {
          name: "Ivonne Hernández",
          role: "Public Relations",
          image_name: "/luismontes_member.png",
          description: "Oversees software development and technical projects within TecBytes."
        }
    ];
    
    return (
        <section
            id="about"
            className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 py-16 bg-slate-800"
        >
            {/* Buttons to Switch Content (Now Outside the PathDrawBox) */}
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
                    <div className="p-10">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        What is Hack Puebla?
                    </h2>
                    <p className="text-lg max-w-2xl text-gray-50">
                    Hack Puebla is a programming and entrepreneurship competition where students, 
                    professionals, and technology enthusiasts come together to create innovative 
                    solutions to today's most pressing problems. Join us and put your creativity to the test!</p>
                    </div>
                </PathDrawBox>
            )}

            {selectedTab === "tecbytes" && (
                <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">TecBytes Board Members</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {boardMembers.map((member, index) => (
                        <MemberCard key={index} 
                            name={member.name}
                            role={member.role}
                            image_name={member.image_name}
                            description={member.description}
                        />
                    ))}
                    </div>
                </div>
            )}

            
        </section>
    )
}
