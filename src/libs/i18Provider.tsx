'use client';

import { PropsWithChildren, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
// import { useTracking } from './useTracking';

export default function I18Provider({ children }: PropsWithChildren) {
    // const { trackLanguage } = useTracking(() => i18n.language);

    useEffect(() => {
        const saved = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
        if (saved && i18n.language !== saved) i18n.changeLanguage(saved);
    }, []);

    useEffect(() => {
        document.documentElement.lang = i18n.language || 'uk';
    }, [i18n.language]);

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}