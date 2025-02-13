import { AcademicProgram, Ethnicity, ExperienceLevel, Gender, GraduationYear, Participant } from "../../schemas/registration_schemas"
import { 
    genderOptions, 
    academicPrograms, 
    ethnicityOptions,  
    graduationYears, 
    hackathonExperienceLevels
} from "../../state/registration_info"

export default function ParticipantForm({
    participant, 
    updateParticipant
} : {
    participant: Participant, 
    updateParticipant: (data: Partial<Participant>) => void
}) {
    return (
        <div className="space-y-4 shadow-2xl">
        <input
            type="text"
            placeholder="First Name"
            className="w-full p-2 border rounded"
            value={participant.firstName}
            onChange={(e) => updateParticipant({ firstName: e.target.value })}
        />
        <input
            type="text"
            placeholder="Middle Name"
            className="w-full p-2 border rounded"
            value={participant.middleName}
            onChange={(e) => updateParticipant({ middleName: e.target.value })}
        />
        <input
            type="text"
            placeholder="Last Name"
            className="w-full p-2 border rounded"
            value={participant.lastName}
            onChange={(e) => updateParticipant({ lastName: e.target.value })}
        />

        {/* Gender Select */}
        <select
            className="w-full p-2 border rounded"
            value={participant.gender}
            onChange={(e) => updateParticipant({ gender: e.target.value as Gender })}
        >
            {genderOptions.map((gender) => (
            <option key={gender} value={gender}>
                {gender}
            </option>
            ))}
        </select>

        {/* Ethnicity Select */}
        <select
            className="w-full p-2 border rounded"
            value={participant.ethnicity}
            onChange={(e) => updateParticipant({ ethnicity: e.target.value as Ethnicity })}
        >
            {ethnicityOptions.map((ethnicity) => (
            <option key={ethnicity} value={ethnicity}>
                {ethnicity}
            </option>
            ))}
        </select>

        <input
            type="number"
            placeholder="Age"
            className="w-full p-2 border rounded"
            value={participant.age}
            onChange={(e) => updateParticipant({ age: Number(e.target.value) })}
        />
        <input
            type="text"
            placeholder="City"
            className="w-full p-2 border rounded"
            value={participant.city}
            onChange={(e) => updateParticipant({ city: e.target.value })}
        />
        <input
            type="text"
            placeholder="Country"
            className="w-full p-2 border rounded"
            value={participant.country}
            onChange={(e) => updateParticipant({ country: e.target.value })}
        />
        <input
            type="text"
            placeholder="School"
            className="w-full p-2 border rounded"
            value={participant.school}
            onChange={(e) => updateParticipant({ school: e.target.value })}
        />

        {/* Academic Program Select */}
        <select
            className="w-full p-2 border rounded"
            value={participant.academicProgram}
            onChange={(e) => updateParticipant({ academicProgram: e.target.value as AcademicProgram })}
        >
            {academicPrograms.map((program) => (
            <option key={program} value={program}>
                {program}
            </option>
            ))}
        </select>

        {/* Graduation Year Select */}
        <select
            className="w-full p-2 border rounded"
            value={participant.graduationYear}
            onChange={(e) => updateParticipant({ graduationYear: Number(e.target.value) as GraduationYear})}
        >
            {graduationYears.map((year) => (
            <option key={year} value={year}>
                {year}
            </option>
            ))}
        </select>

        <input
            type="text"
            placeholder="Major"
            className="w-full p-2 border rounded"
            value={participant.major}
            onChange={(e) => updateParticipant({ major: e.target.value })}
        />

        {/* Hackathon Experience Select */}
        <select
            className="w-full p-2 border rounded"
            value={participant.hackathonExperience}
            onChange={(e) => updateParticipant({ hackathonExperience: e.target.value as ExperienceLevel})}
        >
            {hackathonExperienceLevels.map((level) => (
            <option key={level} value={level}>
                {level}
            </option>
            ))}
        </select>
        </div>
    )
}
