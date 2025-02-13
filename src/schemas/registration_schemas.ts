export type Gender = 
  |"Male" 
  | "Female" 
  | "Prefer to not say" 
  // | { other: string }

export type Ethnicity = 
  | "Native American"
  | "Asian"
  | "Black"
  | "Pacific Islander"
  | "White"
  | "Hispanic"
  | "Prefer to not say"
  // | { other: string }

export type AcademicProgram = 
  |"Undergraduate" 
  | "Masters" 
  | "Doctorate" 
  // | { other: string };

export type ExperienceLevel = "0" | "1 - 3" | "4+";

export type GraduationYear = 2025 | 2026 | 2027 | 2028 | 2029;

export interface Participant {
  firstName: string;
  middleName?: string;
  lastName: string;
  gender: Gender;
  ethnicity: Ethnicity;
  age: number;
  city: string;
  country: string; // Can be linked to a country API
  school: string; // Can be linked to a school API
  academicProgram: AcademicProgram;
  graduationYear: GraduationYear;
  major: string;
  hackathonExperience: ExperienceLevel;
}

export type Team = {
  participants: (Participant | null)[];
};