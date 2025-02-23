'use client'
import React from 'react';
import { Calendar } from 'lucide-react';
import HTMLFlipBook from 'react-pageflip';

const CaseEntry = ({ date, content }) => (
  <div className="mb-6">
    <div className="flex items-center gap-2 text-amber-900 mb-2">
      <Calendar size={16} />
      <span className="font-bold font-handwritten">{date}</span>
    </div>
    <p className="font-handwritten leading-relaxed">{content}</p>
  </div>
);

export default function DetectiveJournal() {
  const journalEntries = [
    {
      title: "Case File: Developer Activities",
      content: (
        <div className="p-6">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center font-handwritten">
            Detective's Journal
          </h2>
          <p className="font-handwritten text-sm mb-6 italic">
            "The following pages contain my investigation into the suspicious activities
            of one Tetiana Gurkivska, a suspected mastermind of digital innovations..."
          </p>
        </div>
      )
    },
    {
      title: "Basetis Investigation",
      content: (
        <div className="p-6">
          <CaseEntry
            date="October 2023"
            content={`Initial investigation at Basetis headquarters revealed suspicious activity. 
            Subject was found manipulating Vue.js and Python code with concerning expertise. 
            Two full-stack applications were compromised. JWT tokens and OAuth2 implementations 
            suggest high-level security knowledge.`}
          />
        </div>
      )
    },
    {
      title: "Scientific Community Operation",
      content: (
        <>
          <CaseEntry
            date="February 2024"
            content={`New development in the Ukrainian Scientific Community Project. 
            Subject has expanded operations to desktop territory using Electron. 
            Implementation of sophisticated Git integration suggests version control expertise. 
            Firestore traces found. Authorization systems show patterns similar to previous cases. 
            Search engine functionality indicates advanced data manipulation capabilities.`}
          />
          <div className="border-l-2 border-amber-900 pl-4 my-4 font-mono text-sm">
            <h3 className="font-bold">Key findings:</h3>
            <ul className="list-disc ml-4 space-y-1">
              <li>Electron desktop application</li>
              <li>Node.js backend infrastructure</li>
              <li>Git integration mechanisms</li>
              <li>Complex recommendation system</li>
            </ul>
          </div>
        </>
      )
    },
    {
      title: "Softpro Incident",
      content: (
        <>
          <CaseEntry
            date="June 2024"
            content={`Latest intelligence from Softpro reveals concerning developments. 
            Subject has been observed creating internal libraries with remarkable efficiency. 
            Mapbox integration suggests global reach capabilities. ECharts data visualization 
            patterns indicate advanced analytical skills. Vue.js and Fastify combination 
            demonstrates full-stack expertise. Geodata manipulation requires further investigation.`}
          />
          <div className="border-l-2 border-amber-900 pl-4 my-4 font-mono text-sm">
            <h3 className="font-bold">Technical evidence:</h3>
            <ul className="list-disc ml-4 space-y-1">
              <li>Custom UI component library</li>
              <li>Advanced mapping systems</li>
              <li>Data visualization tools</li>
              <li>Geodata processing capabilities</li>
            </ul>
          </div>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-custom-bg bg-cover bg-center p-4 sm:p-8 flex items-center justify-center">
      <HTMLFlipBook
        width={400}
        height={600}
        // size="stretch"
        // minWidth={315}
        // maxWidth={400}
        // // minHeight={400}
        // maxHeight={600}
        maxShadowOpacity={0.8}
        showCover={true}
        mobileScrollSupport={true}
        className="detective-journal"
      >
        {/* Обкладинка */}
        <div className="cover flex justify-center w-full  h-full">
  <svg viewBox="0 0 600 900" className="w-full h-full">
    {/* Фон старовинного паперу */}
    <rect width="100%" height="100%" fill="#2c1e0f" />

    {/* Текстура паперу */}
    <pattern id="paperTexture" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
      <rect width="100" height="100" fill="#3e2c1c" />
      <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="rgba(0, 0, 0, 0.1)" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#paperTexture)" opacity="0.3" />

    {/* Тіньова рамка */}
    <rect x="20" y="20" width="560" height="760" rx="20" ry="20" fill="none" stroke="#1a1209" strokeWidth="10" />

    {/* Великий круг для акценту */}
    <circle cx="300" cy="400" r="250" fill="none" stroke="#4a3625" strokeWidth="5" strokeDasharray="10,5" />

    {/* Лупа (символ детектива) */}
    <g transform="translate(300, 400)">
      <circle cx="0" cy="0" r="80" fill="none" stroke="#6b4f32" strokeWidth="5" />
      <line x1="-80" y1="0" x2="80" y2="0" stroke="#6b4f32" strokeWidth="5" />
      <line x1="0" y1="-80" x2="0" y2="80" stroke="#6b4f32" strokeWidth="5" />
      <path d="M-60 -60 L-100 -100 M60 -60 L100 -100" stroke="#6b4f32" strokeWidth="5" strokeLinecap="round" />
    </g>

    {/* Текст заголовка */}
    <text x="50%" y="35%" textAnchor="middle" fontSize="50" fontFamily="Georgia, serif" fontWeight="bold" fill="#d4af37">
      Detective's Journal
    </text>

    {/* Текст підзаголовка */}
    <text x="50%" y="45%" textAnchor="middle" fontSize="30" fontFamily="Georgia, serif" fill="#d4af37">
      Case Files & Investigations
    </text>

    {/* Символічні деталі */}
    <g transform="translate(300, 600)">
      {/* Слід */}
      <path d="M-100 0 Q-50 -50 0 0 T100 0" fill="none" stroke="#6b4f32" strokeWidth="5" />
      {/* Відбиток пальця */}
      <circle cx="-50" cy="0" r="10" fill="#6b4f32" />
      <circle cx="50" cy="0" r="10" fill="#6b4f32" />
      <path d="M-50 0 Q-25 -20 0 0 T50 0" fill="none" stroke="#6b4f32" strokeWidth="5" />
    </g>

    {/* Підпис */}
    <text x="50%" y="90%" textAnchor="middle" fontSize="20" fontFamily="Georgia, serif" fill="#d4af37">
      "Secrets Unveiled"
    </text>
  </svg>
</div>

        {/* Пуста сторінка (задня частина обкладинки) */}
        <div className="bg-gray-100"></div>

        {/* Сторінки журналу */}
        {journalEntries.map((entry, index) => (
          <div key={index} className="page bg-white p-6">
            {entry.content}
          </div>
        ))}

        {/* Задня обкладинка */}
        <div className="cover flex justify-center items-center bg-black">
          <svg viewBox="0 0 600 500" className="w-full h-full">
            <rect width="100%" height="100%" fill="#1c1c1c" />
            <text x="50%" y="50%" textAnchor="middle" fontSize="30" fontFamily="sans-serif" fill="white">
              Confidential
            </text>
            <text x="50%" y="60%" textAnchor="middle" fontSize="18" fontFamily="sans-serif" fill="white">
              Do not distribute
            </text>
          </svg>
        </div>
      </HTMLFlipBook>
    </div>
  );
}