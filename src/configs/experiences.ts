export interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Next.js Developer',
    company: "Stackbuzzz Pvt Ltd.",
    duration: "(Oct 2025 - Present)"
  },
  {
    id: 2,
    title: "React.js Developer",
    company: "TJ Cloud Globe Pvt. Ltd.",
    duration: "(Jun 2022 - Aug 2025)"
  },
  {
    id: 3,
    title: "Web Developer",
    company: "Ranpariya Development Lab LLP",
    duration: "(May 2021 - April 2022)"
  }
];