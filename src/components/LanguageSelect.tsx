"use client"
import '../i18n';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import { SelectInput } from '../ui';
import { languagesi18 } from '../static';


export default function LanguageSelect() {
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState<string>('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') || "en";
            const found = languagesi18.find(l => l.value === storedLang)!;
            setCurrentLanguage(found.label);
        }
    }, []);


    const onChangeLanguage = (lang: string) => {
        if (typeof window !== 'undefined') localStorage.setItem('lang', lang);
        i18n.changeLanguage(lang);
    }

    return (
        <SelectInput
            options={languagesi18}
            defaultOption={currentLanguage}
            onChange={onChangeLanguage}
        />
    )

}