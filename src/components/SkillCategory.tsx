import React from 'react';
import { useTranslation } from 'react-i18next';


const SkillCategory = ({ title, skills }:
    {
        title: string;
        skills: string[];
    }
) => {
    const { t } = useTranslation();
    return (
        <div className="mb-6" >
            <h3 className="text-xl font-bold text-primary mb-2 font-top-secret">{t(`${title}`)}</h3>
            <div className="flex flex-wrap gap-2">
                {skills?.map((skill: string, index: number) => (
                    <span
                        key={index}
                        className="bg-gray-200 px-3 py-1 rounded-full text-sm font-mono"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div >
    )
}


export default SkillCategory;
