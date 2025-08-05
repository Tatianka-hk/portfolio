import { ExperienceItem, Selectable } from "../types"

export const technicalSkills = {
    "technicalSkills.coreTechnologies": [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Vue",
        "React",
        "Express",
        "Fastify",
    ],
    "technicalSkills.developmentTools": [
        "Git",
        "Prettier",
        "Stylelint",
        "ESLint",
        "Husky",
        "npm",
    ],
    "technicalSkills.authAndSecurity": ["JWT", "OAuth"],
    "technicalSkills.databases": ["MySQL", "MongoDB", "PostgreSQL", "Firestore"],
    "technicalSkills.frontend": [
        "HTML",
        "CSS",
        "Tailwind",
        "SCSS",
        "Electron",
        "ECharts",
        "Mapbox",
    ],
    "technicalSkills.other": ["Docker", "Python", "C++"],
}

export const softSkills = [
    "softSkills.0",
    "softSkills.1",
    "softSkills.2",
    "softSkills.3",
    "softSkills.4",
]

export const languages = [
    { language: "languages.ukrainian", level: "languages.native" },
    { language: "languages.english", level: "B2" },
    { language: "languages.spanish", level: "B2" },
    { language: "languages.catalan", level: "A2" },
    { language: "languages.russian", level: "languages.native" },
]

export const education = [
    {
        specialization: "education.specialization",
        university: "education.university",
        years: "2020–2024",
    },
]

export const experience: ExperienceItem[] = [
    {
        title: "archive.baseExperience.basetis.title",
        date: "October 2023 - February 2024",
        description: "archive.baseExperience.basetis.description",
        listInstruments: [
            "Vue",
            "Python",
            "Vitest",
            "PostgreSQL",
            "JWT",
            "OAuth2",
            "CRM module",
            "Vitest tests",
            "Data visualization",
        ],
    },
    {
        title: "archive.baseExperience.softpro.title",
        date: "June 2024 - November 2024",
        description: "archive.baseExperience.softpro.description",
        listInstruments: [
            "Custom UI component library",
            "Advanced mapping systems",
            "Data visualization tools",
            "Geodata processing capabilities",
        ],
    },
    {
        title: "archive.baseExperience.docsSpace.title",
        date: "February 2024 – Present",
        description: "archive.baseExperience.docsSpace.description",
        listInstruments: [
            "Python",
            "Vue",
            "PostgreSQL",
            "Electron",
            "Telegram bot",
            "Payment processing",
            "Data prediction tools",
        ],
    },
]

export const projects = [
    {
        id: 1,
        name: "Calendar",
        tools: ["Vue", "Node.js", "TypeScript", "mongoDB"],
        github: "https://github.com/username/calendar-project",
        description: "projects.calendar",
        x: -18,
        y: -18,
    },
    {
        id: 2,
        name: "WeatherApp",
        tools: ["Vue", "Node.js", "TypeScript"],
        github: "https://github.com/Tatianka-hk/app-weather",
        description: "projects.weather",
        x: 20,
        y: -20,
    },
    {
        id: 3,
        name: "Flashcards",
        tools: ["Vue", "Node.js", "TypeScript"],
        github: "https://github.com/Tatianka-hk/flashcards",
        description: "projects.flashcards",
        x: -10,
        y: 20,
    },
]

export const contacts: Selectable[] = [
    {
        label: "contacts.email",
        value: "t0681689150@gmail.com",
    },
    {
        label: "Telegram",
        value: "@M_Tenebris",
    },
    {
        label: "Linkedin",
        value: "https://www.linkedin.com/in/tetiana-gurkivska-8b9145256/",
    },
]
