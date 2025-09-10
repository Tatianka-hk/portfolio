'use client';
import { SecretComponent, Button } from '../ui'
import { useTranslation } from 'react-i18next';


export default function HomePage() {
    const { t } = useTranslation();
    return (
        <main className="max-w-4xl mx-auto bg-paper-bg p-8 shadow-lg rounded-lg min-w-[55%]">
            <header className="relative mb-6 flex justify-center">
                <h1 className="text-3xl font-bold text-primary  font-top-secret mb-2">{t('home.pib')}</h1>
                <SecretComponent />
            </header>

            <section className="flex items-start space-x-6 mb-6 flex flex-col items-center">
                <div className="w-2/3">
                    <p className="text-2xl text-primary mt-5 font-top-secret mb-2">

                        {t('home.description')}
                    </p>
                    <p className="text-2xl text-primary mb-4 font-top-secret"> {t('home.continue')}</p>
                </div>
                <div className='flex w-full justify-end mt-[20%]'>
                    <Button destination={'suspect'} label={t('home.start')} />
                </div>
            </section >
        </main>
    )
}