"use client"

import "./globals.css";
import '../assets/fonts/fonts.css';
import { LanguageSelect } from "../components";
import { useTranslation } from "react-i18next";

export default function
    RootLayout({ children, }: { children: React.ReactNode }) {
    const { i18n } = useTranslation();

    return (
        <html lang={i18n.language}>
            <body className="min-h-screen bg-custom-bg bg-cover bg-center p-4 sm:px-8  max-h-[100vh] overflow-hidden scroll-none"
            >
                <div className=" flex justify-end w-full mb-[40px]">
                    <LanguageSelect />
                </div>
                {children}
            </body >
        </html >
    )
}
