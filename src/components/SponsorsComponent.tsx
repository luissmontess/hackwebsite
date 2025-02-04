
export default function SponsorsComponent() {
    return (
        <section
            id="sponsors"
            className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 py-16"
        >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Patrocinadores</h2>
            <p className="text-lg max-w-2xl text-gray-600 mb-8">
            Gracias a nuestros patrocinadores que hacen posible este evento.
            </p>

            {/* Ejemplo de logos (se pueden reemplazar con imágenes reales) */}
            <div className="flex flex-wrap gap-8 justify-center items-center">
            <div className="w-32 h-16 bg-gray-300 flex items-center justify-center text-gray-700">
                Logo 1
            </div>
            <div className="w-32 h-16 bg-gray-300 flex items-center justify-center text-gray-700">
                Logo 2
            </div>
            <div className="w-32 h-16 bg-gray-300 flex items-center justify-center text-gray-700">
                Logo 3
            </div>
            <div className="w-32 h-16 bg-gray-300 flex items-center justify-center text-gray-700">
                Logo 4
            </div>
            </div>
        </section>
    )
}
