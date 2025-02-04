import ScrollColumn from "./ScrollColumn"
export default function Schedule() {
    const schedule = {
        day1: [
          { hour: "10:00", title: "Opening Ceremony", description: "Welcome to Hack Puebla! Meet the organizers and get ready for the event." },
          { hour: "11:00", title: "AI Workshop", description: "Learn how to build machine learning models from scratch." },
          { hour: "13:00", title: "Lunch Break", description: "Take a break and enjoy some delicious food." },
          { hour: "15:00", title: "Startup Talk", description: "Hear from successful startup founders about their journey." },
          { hour: "17:00", title: "Coding Challenge", description: "Compete with other participants in an exciting coding challenge." }
        ],
        day2: [
          { hour: "09:00", title: "Morning Coffee & Networking", description: "Start the day with coffee and networking with fellow participants." },
          { hour: "10:30", title: "Cybersecurity Workshop", description: "Explore the world of ethical hacking and cybersecurity techniques." },
          { hour: "12:00", title: "Lunch Break", description: "Take a break and refuel for the final sessions." },
          { hour: "14:00", title: "Panel Discussion", description: "Industry experts discuss the future of tech and innovation." },
          { hour: "16:30", title: "Closing Ceremony", description: "Wrap up Hack Puebla with awards and final remarks." }
        ]
    };
    return (
        <section
            id="schedule"
            className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 py-16 bg-gray-50"
        >
            {/* <h2 className="text-3xl font-bold text-gray-800 mb-6">Schedule</h2> */}
            <div className="mt-2"></div>
            {/* Two Columns for Schedule */}
            <div className="relative w-full max-w-6xl flex gap-6">
                <ScrollColumn title={`Day 1 - 10:00 to 18:00`} data={schedule.day1} />
                <ScrollColumn title={`Day 2 - 09:00 to 18:00`} data={schedule.day2} />
            </div>
        </section>
    )
}
