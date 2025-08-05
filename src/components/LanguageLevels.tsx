import React from "react";
import { useTranslation } from "react-i18next";

const LanguageLevels = ({ language, level }:
    {
        language: string;
        level: string;
    }
) => {
    const { t } = useTranslation();

    return (
        <div className="flex justify-between items-center mb-2">
            <span className="font-top-secret">{t(language)}</span>
            <span className="font-mono text-sm">{t(level)}</span>
        </div>
    );
}

export default LanguageLevels;