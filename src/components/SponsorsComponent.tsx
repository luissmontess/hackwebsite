
export default function SponsorsComponent() {
    const sponsors = [
        { name: "Logo 1", image: "logo1.png" },
        { name: "Logo 2", image: "logo2.png" },
        { name: "Logo 3", image: "logo3.png" },
        { name: "Logo 4", image: "logo4.png" },
        { name: "Logo 5", image: "logo5.png" },
        { name: "Logo 6", image: "logo6.png" }
    ];

    return (
        <section
            id="sponsors"
            className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 py-16"
        >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Patrocinadores</h2>
            <p className="text-lg max-w-2xl text-gray-600 mb-8">
                Gracias a nuestros patrocinadores que hacen posible este evento.
            </p>

            {/* Grid Layout for Sponsor Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-5xl w-full">
                {sponsors.map((sponsor, index) => (
                    <div
                        key={index}
                        className="bg-gray-300 shadow-md p-6 rounded-lg flex flex-col items-center justify-center text-gray-700 w-full h-40"
                    >
                        <img src={`/images/${sponsor.image}`} alt={sponsor.name} className="w-24 h-16 object-contain mb-2" />
                        <p className="text-lg font-semibold">{sponsor.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
