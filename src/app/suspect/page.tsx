import React from 'react';
import { SecretComponent, Button } from '../../ui';

const SkillCategory = ({ title, skills }) => (
  <div className="mb-6">
    <h3 className="text-xl font-bold text-primary mb-2 font-top-secret">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm font-mono">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const LanguageLevel = ({ language, level }) => (
  <div className="flex justify-between items-center mb-2">
    <span className="font-top-secret">{language}</span>
    <span className="font-mono text-sm">{level}</span>
  </div>
);

export default function Suspect() {
  const technicalSkills = {
    "Core Technologies": [
      "JavaScript", "TypeScript", "Node.js", "Vue", "React", "Express", "Fastify"
    ],
    "Development Tools": [
      "Git", "Prettier", "Stylelint", "ESLint", "Husky", "npm"
    ],
    "Authentication & Security": [
      "JWT", "OAuth"
    ],
    "Databases": [
      "MySQL", "MongoDB", "PostgreSQL", "Firestore"
    ],
    "Frontend": [
      "HTML", "CSS", "Tailwind", "SCSS", "Electron", "ECharts", "Mapbox"
    ],
    "Other": [
      "Docker", "Python", "C++"
    ]
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-custom-bg p-8">
      <div className="max-w-4xl mx-auto bg-paper-bg p-8 shadow-lg rounded-lg">
        <div className="relative mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary font-top-secret">Suspect Profile: Tetiana Gurkivska</h1>
          <SecretComponent />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 font-top-secret">Technical Evidence</h2>
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <SkillCategory key={category} title={category} skills={skills} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 font-top-secret">Behavioral Analysis</h2>
              <ul className="space-y-2">
                <li className="font-top-secret">➤ Strong analytical and problem-solving abilities</li>
                <li className="font-top-secret">➤ Excellent adaptability to changing requirements</li>
                <li className="font-top-secret">➤ Effective communication and team collaboration</li>
                <li className="font-top-secret">➤ Quick learner with strong technical aptitude</li>
                <li className="font-top-secret">➤ Stress-resistant and detail-oriented</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 font-top-secret">Communications Proficiency</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                <LanguageLevel language="Ukrainian" level="Native Speaker" />
                <LanguageLevel language="Russian" level="Native Speaker" />
                <LanguageLevel language="English" level="B2" />
                <LanguageLevel language="Spanish" level="B2" />
                <LanguageLevel language="Catalan" level="A2" />
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 font-top-secret">Background Check</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-top-secret">
                  ➤ Bachelor of Informatics and Computer Technology
                </p>
                <p className="font-top-secret text-sm">
                  Polytechnic Institute (2020-2024)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <Button destination="archive" label='Справи' />
        </div>
      </div>
    </div>
  );
}