"use client"
import React from 'react';

import { SecretComponent, Button } from '../../ui'; import { softSkills, technicalSkills, education, languages } from '../../static';
import { useTranslation } from 'react-i18next';
import { LanguageLevels, SkillCategory } from '../../components';


export default function Suspect() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-cover bg-center bg-custom-bg p-8 ">
            <div className="max-w-4xl mx-auto bg-paper-bg p-8 shadow-lg rounded-lg">
                <div className="relative mb-8 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-primary font-top-secret">
                        {t('suspect.suspect_profile')}
                    </h1>
                    <SecretComponent />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6 mb-8">
                        <h2 className="text-2xl font-bold text-primary mb-4 font-top-secret">
                            {t('suspect.hardskills')}
                        </h2>
                        {Object.entries(technicalSkills)?.map(([category, skills]) => (
                            <SkillCategory
                                key={category}
                                title={category}
                                skills={skills}
                            />
                        ))}
                    </div>

                    <div className="space-y-6">
                        <div className="mb-8">
                            <h2
                                className="text-2xl font-bold text-primary mb-4 font-top-secret"
                            >
                                {t('suspect.softskills')}
                            </h2>
                            <ul className="space-y-2">
                                {softSkills?.map((skill: string, index: number) => (
                                    <li
                                        key={index}
                                        className="font-top-secret"
                                    >➤ {t(`${skill}`)}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h2
                                className="text-2xl font-bold text-primary mb-4 font-top-secret"
                            >
                                {t('suspect.languages')}
                            </h2>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                {languages?.map((language: { language: string; level: string; }, index: number) => (
                                    <LanguageLevels
                                        key={index}
                                        language={language.language}
                                        level={language.level}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="mb-8">
                            <h2
                                className="text-2xl font-bold text-primary mb-4 font-top-secret"
                            >
                                {t('suspect.education')}
                            </h2>
                            <div className="flex flex-col gap-2">
                                {education?.map((step, index: number) => (
                                    <div
                                        key={index}
                                        className="bg-gray-100 p-4 rounded-lg"
                                    >
                                        <p className="font-top-secret">
                                            ➤ {t(step.specialization)}
                                        </p>
                                        <p className="font-top-secret text-sm">
                                            {t(step.university)} ({step.years})
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end mt-8">
                    <Button destination="archive" label={t('suspect.nextButton')} />
                </div>
            </div>
        </div>
    );
}
