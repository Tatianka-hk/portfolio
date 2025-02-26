'use client'
import React from 'react';
import { Calendar } from 'lucide-react';
import HTMLFlipBook from 'react-pageflip';
import { Button } from '../../ui';
import {experience} from '../../static'
import { BookBackCover, BookCover } from '../../assets/customs';
const CaseEntry = ({ date, content }) => (
  <div className="mb-6">
    <div className="flex items-center gap-2 text-amber-900 mb-2" >
      <Calendar size={16} />
      <span className="font-bold font-handwritten">{date}</span>
    </div>
    <p className="font-handwritten leading-relaxed">{content}</p>
  </div>
);

const experiencePages = experience?.map((item)=>{
  const page = {
    title: item.title,
    content: (
      <>
        <CaseEntry
          date= {item.date}
          content={item?.description}
        />
        { item.listInstruments?.length && (
        <div className="border-l-2 border-amber-900 pl-4 my-4 font-mono text-sm">
          <h3 className="font-bold"> {item.nameList} :</h3>
          <ul className="list-disc ml-4 space-y-1">
            { item?.listInstruments.map( tool =>(
              <li> {tool} </li>
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
    ...experiencePages
  ];

  return (
    <div className="min-h-screen bg-custom-bg bg-cover bg-center p-4 sm:p-8 flex flex-col gap-2 items-center justify-center max-h-[100vh] overflow-hidden scroll-none"
    >
      <HTMLFlipBook
        width={400}
        height={600}
        maxWidth={400}
        maxHeight={800}
        maxShadowOpacity={0.8}
        showCover={true}
        mobileScrollSupport={true}
        className="detective-journal !p-0"
        useMouseEvents={true}
        flippingTime={1000}
      >
        <div className="cover flex justify-center w-full  h-full">
          <BookCover/>
        </div>

        {/* Пуста сторінка (задня частина обкладинки) */}
        <div className="bg-gray-100"></div>

        {journalEntries.map((entry, index) => (
          <div key={index} className={`page p-6 ${index % 2 !== 0 ? 'bg-gray-100' : 'bg-white'}`}>
            {entry.content}
          </div>
        ))}

        <div className="cover flex justify-center items-center bg-black">
          <BookBackCover/>
        </div>
      </HTMLFlipBook>

      <Button destination='testimonies' label='Докази'/>
    </div>
  );
}