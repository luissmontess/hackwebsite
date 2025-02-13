import { useState } from "react"
import { Participant } from "../../schemas/registration_schemas";
import ParticipantForm from "../../components/registration_components/ParticipantForm";

export default function Registration() {
    const defaultParticipant: Participant = {
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "Prefer to not say",
        ethnicity: "Prefer to not say",
        age: 0,
        city: "",
        country: "",
        school: "",
        academicProgram: "Undergraduate",
        graduationYear: 2025,
        major: "",
        hackathonExperience: "0",
    };

    const [participant1, setParticipant1] = useState<Participant>(defaultParticipant);
    const [participant2, setParticipant2] = useState<Participant>(defaultParticipant);
    const [participant3, setParticipant3] = useState<Participant>(defaultParticipant);
    const [participant4, setParticipant4] = useState<Participant>(defaultParticipant);
    const [currentStep, setCurrentStep] = useState(0);

    const participantStates = [participant1, participant2, participant3, participant4];
    const participantSetters = [setParticipant1, setParticipant2, setParticipant3, setParticipant4];

    const updateParticipant = (updatedData: Partial<Participant>) => {
        switch (currentStep) {
          case 0:
            participantSetters[0]((prev) => ({ ...prev, ...updatedData }));
            break;
          case 1:
            participantSetters[1]((prev) => ({ ...prev, ...updatedData }));
            break;
          case 2:
            participantSetters[2]((prev) => ({ ...prev, ...updatedData }));
            break;
          case 3:
            participantSetters[3]((prev) => ({ ...prev, ...updatedData }));
            break;
        }
    };

    const nextStep = () => {
        if (currentStep < 3) setCurrentStep((prev) => prev + 1);
    };
    
    const prevStep = () => {
        if (currentStep > 0) setCurrentStep((prev) => prev - 1);
    };

    const handleSubmit = () => {
        console.log("Final Team Data:", [participant1, participant2, participant3, participant4]);
    };

    return (
        <div className="max-w-2xl mx-auto bg-white text-black p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Participant {currentStep + 1}</h2>

        {/* 🔥 Modular Form */}
        <ParticipantForm participant={participantStates[currentStep]} updateParticipant={updateParticipant} />

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
            <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`px-4 py-2 rounded ${currentStep === 0 ? "bg-gray-300" : "bg-blue-500 text-white"}`}
            >
            Previous
            </button>

            {currentStep < 3 ? (
            <button onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white rounded">
                Next
            </button>
            ) : (
            <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded">
                Submit
            </button>
            )}
        </div>
        </div>
    )
}
