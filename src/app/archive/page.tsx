'use client'
import React, { useEffect } from 'react';
import { Calendar } from 'lucide-react';
import HTMLFlipBook from 'react-pageflip';

import { Button } from '../../ui';
import { experience } from '../../static'
import { BookBackCover, BookCover } from '../../assets/customs';
import { useTranslation } from 'react-i18next'
import { ExperienceItem } from '../../types';

const CaseEntry = ({ date, description, title }:
  ExperienceItem
) => {
  const { t } = useTranslation()
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 text-amber-900 mb-2" >
        <Calendar size={16} />
        <span className="font-bold font-handwritten">{t(date)}</span>
      </div>
      <div className="flex items-center gap-2 text-amber-900 mb-2 " >
        <span className="font-bold font-handwritten">{t(title)}</span>
      </div>
      <p className="font-handwritten leading-relaxed">{t(description)}</p>
    </div>
  )
};


const experiencePages = experience?.map((item: ExperienceItem) => {
  const page = {
    title: item.title,
    content: (
      <>
        <CaseEntry
          date={item.date}
          description={item?.description}
          title={item?.title}
        />
        {item.listInstruments?.length && (
          <div className="border-l-2 border-amber-900 pl-4 my-4 font-mono text-sm">
            <ul className="list-disc ml-4 space-y-1"
            >
              {item?.listInstruments.map((tool, index) => (
                <li key={index}> {tool} </li>
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
  return page
})

export default function DetectiveJournal() {
  const { t } = useTranslation();
  const journalEntries = [
    {
      title: "Case File: Developer Activities",
      content: (
        <div className="p-6">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center font-handwritten">
            {t('archive.title')}
          </h2>
          <p className="font-handwritten text-sm mb-6 italic">
            {t('archive.description')}
          </p>
        </div>
      )
    },
    ...experiencePages
  ];

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div className='flex flex-col justify-center items-center  '
      onWheel={(e) => e.preventDefault()}
    >
      <HTMLFlipBook
        width={330}
        height={500}
        maxWidth={400}
        maxHeight={600}
        maxShadowOpacity={0.8}
        showCover={true}
        mobileScrollSupport={true}
        className="detective-journal !p-0  w-2/3"
        useMouseEvents={true}
        flippingTime={1000}
      >
        <div className="cover flex justify-center w-full  h-full">
          <BookCover />
        </div>

        {/* Пуста сторінка (задня частина обкладинки) */}
        <div className="bg-gray-100"></div>

        {journalEntries.map((entry, index) => (
          <div
            key={index}
            className={`page p-6 ${index % 2 !== 0 ? 'bg-gray-100' : 'bg-white'}`}>
            {entry.content}
          </div>
        ))}

        <div className="cover flex justify-center items-center bg-black">
          <BookBackCover />
        </div>
      </HTMLFlipBook>
      <div className='flex w-full justify-between'>
        <Button destination='suspect' label={t('back')} />
        <Button destination='contacts' label={t('archive.button')} />
      </div>
    </div>
  );
}