import { useState } from "react";

const faqs = [
    {
        "question": "How can I register for the hackathon?",
        "answer": "You can register by visiting our registration page and filling out the form with your information."
    },
    {
        "question": "How much does it cost to participate?",
        "answer": "The hackathon is completely free for all participants."
    },
    {
        "question": "Do I need programming experience?",
        "answer": "You don't need prior experience, but knowing the basics of programming will be helpful."
    },
    {
        "question": "What should I bring to the event?",
        "answer": "You should bring your laptop, charger, and any other equipment you need to develop your project."
    }
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            id="faq"
            className="pt-8 pb-32 flex flex-col items-center text-center px-4 sm:px-8 bg-gray-50"
        >
            <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">FAQ</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
                {faqs.map((faq, index) => (
                    <div key={index} className="w-full">
                        <button
                            onClick={() => toggleFaq(index)}
                            className="w-full bg-gray-100 text-left p-4 rounded-lg shadow-xl flex justify-between items-center transition-all duration-300 hover:bg-gray-200"
                        >
                            <span className="font-semibold text-gray-800">{faq.question}</span>
                            <span
                                className="text-gray-500 transform transition-transform duration-300"
                                style={{ transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)" }}
                            >
                                ▼
                            </span>
                        </button>

                        <div
                            className={`transition-all duration-500 overflow-hidden ${openIndex === index
                                    ? "max-h-40 opacity-100 p-4 bg-white rounded-lg shadow-xl mt-2"
                                    : "max-h-0 opacity-0"
                                }`}
                        >
                            <p className="text-gray-700">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
