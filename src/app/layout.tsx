import "./globals.css";
import '../assets/fonts/fonts.css';
import { LanguageSelect } from "../components";
import type { Metadata } from 'next';
import I18Provider from "../libs/i18Provider";


export const metadata: Metadata = {
    title: 'Tetiana Gurkivska | Full Stack Developer Portfolio',
    description:
        'Full Stack Developer with experience in Vue, Node.js, Python, PostgreSQL, Mapbox, and Electron. Projects include web, desktop, and data visualization apps. Open to new opportunities.',
    keywords: [
        'Tetiana Gurkivska',
        'Full Stack Developer',
        'Vue.js',
        'Node.js',
        'Python',
        'PostgreSQL',
        'Electron',
        'Fastify',
        'Mapbox',
        'Tailwind CSS',
        'ECharts',
        'Web Development',
        'Frontend',
        'Backend',
        'Portfolio',
    ],
};


export default function
    RootLayout({ children, }: { children: React.ReactNode }) {

    return (
        <html lang="uk">
            <head>
                <meta name="x-country" content="unknown" />
                <meta name="x-lang" content="uk" />
            </head>
            <body className="min-h-screen bg-custom-bg bg-cover bg-center p-4 sm:px-8  max-h-[100vh] overflow-y-auto overflow-x-hidden scroll-none"
            >
                <I18Provider>
                    <div className=" flex justify-end w-full mb-[40px]">
                        <LanguageSelect />
                    </div>
                    {children}
                </I18Provider>
            </body >
        </html >
    )
}
