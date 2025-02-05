
export default function SponsorsComponent() {
    const sponsors = [
        { name: "Logo 2", image: "ellucian_logo.png" },
        { name: "Logo 3", image: "ellucian_logo.png" },
        { name: "Logo 1", image: "ellucian_logo.png" },
        { name: "Logo 4", image: "ellucian_logo.png" },
        { name: "Logo 5", image: "ellucian_logo.png" },
        { name: "Logo 6", image: "ellucian_logo.png" }
    ];

    return (
        <section
            id="sponsors"
            className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 py-16 bg-gray-50"
        >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Patrocinadores</h2>
            <p className="text-lg max-w-2xl text-gray-600 mb-8">
                Gracias a nuestros patrocinadores que hacen posible este evento.
            </p>

            {/* Grid Layout for Sponsor Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl w-full">
                {sponsors.map((sponsor, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-xl p-6 rounded-lg flex items-center justify-center w-full h-40"
                    >
                        <img
                            src={sponsor.image}
                            alt="Sponsor logo"
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
