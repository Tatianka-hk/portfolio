"use client"
import '../i18n';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import { SelectInput } from '../ui';
import { languagesi18 } from '../static';


export default function LanguageSelect() {
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(languagesi18[0]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') || languagesi18[0].value;
            const foundLang =
                languagesi18.find((language) => language.value === storedLang) || languagesi18[0];
            i18n.changeLanguage(storedLang);
            setCurrentLanguage(foundLang);
        }
    }, [i18n]);


    const onChangeLanguage = (lang: string) => {
        if (typeof window !== 'undefined') localStorage.setItem('lang', lang);
        i18n.changeLanguage(lang);
    }

    return (
        <SelectInput
            options={languagesi18}
            defaultOption={currentLanguage.label}
            onChange={onChangeLanguage}
        />
    )

}