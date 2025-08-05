"use client"
import '../i18n';
import { useTranslation } from 'react-i18next';

import { SelectInput } from '../ui';
import { languagesi18 } from '../static';


export default function LanguageSelect() {
    const { i18n } = useTranslation();

    const onChangeLanguage = (lang: string) => {
        if (typeof window !== 'undefined') localStorage.setItem('lang', lang);
        i18n.changeLanguage(lang);
    }

    const findDefaultLanguage = () => {
        let defaultLang = 'uk'
        if (typeof window !== 'undefined') {
            defaultLang = localStorage.getItem('lang') || 'uk';
            i18n.changeLanguage(defaultLang);
        }
        return languagesi18.find((language) => language.value === defaultLang)?.label;
    }
    return (
        <SelectInput
            options={languagesi18}
            defaultOption={findDefaultLanguage()}
            onChange={onChangeLanguage}
        />
    )

}