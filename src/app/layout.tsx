"use client"

import "./globals.css";
import '../assets/fonts/fonts.css';
import { LanguageSelect } from "../components";


export default function
    RootLayout({ children, }: { children: React.ReactNode }) {

    return (
        <html lang="en">
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
