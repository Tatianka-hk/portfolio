import { useTranslation } from "react-i18next";

export default function SecretComponent() {
    const { t } = useTranslation();
    return (
        <div
            className="absolute top-0 right-0 -rotate-12 text-accent text-6xl font-bold border-8 border-accent p-2 opacity-80"
        >
            {t('secret')}
        </div>
    )
}
