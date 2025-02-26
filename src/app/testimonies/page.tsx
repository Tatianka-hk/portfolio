 "use client"
 import React, { useState } from 'react';
 import { GitBranch, Calendar, CloudSun, FileText } from 'lucide-react';
 
 const DetectiveBoard = () => {
   const [name] = useState('Ваше ім\'я');
   
   const projects = [
     {
       id: 1,
       name: 'Календар',
       tools: ['Angular', 'Node.js', 'TypeScript'],
       github: 'https://github.com/username/calendar-project',
       description: 'Веб-додаток календаря з можливістю планування подій та нагадувань.'
     },
     {
       id: 2,
       name: 'Weather App',
       tools: ['Vue', 'Node.js', 'TypeScript'],
       github: 'https://github.com/username/weather-app',
       description: 'Додаток для перегляду погоди з прогнозом на кілька днів вперед.'
     },
     {
       id: 3,
       name: 'Note Manager',
       tools: ['Vue', 'Node.js', 'TypeScript'],
       github: 'https://github.com/username/note-manager',
       description: 'Додаток для створення, редагування та організації нотаток.'
     }
   ];
 
   const getProjectIcon = (name) => {
     if (name === 'Календар') return <Calendar className="text-red-500" />;
     if (name === 'Weather App') return <CloudSun className="text-blue-500" />;
     if (name === 'Note Manager') return <FileText className="text-green-500" />;
     return null;
   };
 
   const randomRotation = () => Math.random() * 14 - 7;
   const randomOffset = () => Math.random() * 30 - 15;
 
   return (
     <div className="relative w-full h-screen overflow-hidden">
       {/* Фон коркової дошки */}
       <div className="absolute inset-0 bg-amber-700 bg-opacity-80">
         <div className="absolute inset-0" style={{ background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h1v1H0z\' fill=\'rgba(0,0,0,0.05)\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }}></div>
       </div>
       
       {/* Рамка дошки */}
       <div className="absolute inset-4 border-8 border-amber-900 rounded-sm shadow-2xl"></div>
       
       {/* Центральний елемент - фото з іменем */}
       <div 
         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-white p-1 shadow-lg z-10"
         style={{ transform: `translate(-50%, -50%) rotate(${randomRotation()}deg)` }}
       >
         <div className="border border-gray-400 p-3">
           <div className="bg-yellow-100 p-2">
             <div className="text-xl font-bold text-center text-gray-800">{name}</div>
             <div className="text-xs text-center mt-1 border-t border-gray-400 pt-1">
               РОЗРОБНИК
             </div>
           </div>
         </div>
         <div className="absolute -top-3 -left-3">
           <div className="w-6 h-6 bg-red-500 rounded-full shadow"></div>
         </div>
       </div>
 
       {/* Проекти */}
       {projects.map((project, index) => {
         const angle = (index * (360 / projects.length) + 30) * (Math.PI / 180);
         const radius = 200;
         const x = Math.cos(angle) * radius;
         const y = Math.sin(angle) * radius;
 
         return (
           <React.Fragment key={project.id}>
             {/* Листочок з проектом (стилізований як фотографія) */}
             <div 
               className="absolute bg-white p-1 shadow-lg z-20"
               style={{ 
                 top: `calc(50% + ${y + randomOffset()}px)`, 
                 left: `calc(50% + ${x + randomOffset()}px)`,
                 transform: `rotate(${randomRotation()}deg)`,
                 width: '160px'
               }}
             >
               <div className="border border-gray-300 p-2">
                 <div className="flex items-center justify-center mb-2 bg-gray-200 p-4">
                   {getProjectIcon(project.name)}
                 </div>
                 <div className="font-bold text-center text-base pb-1 border-b border-gray-300">{project.name}</div>
                 <div className="text-xs text-center mt-1">ПРОЕКТ #{project.id}</div>
               </div>
               <div className="absolute -top-3 -left-3">
                 <div className="w-6 h-6 bg-blue-500 rounded-full shadow"></div>
               </div>
             </div>
 
             {/* Нитка до проекту */}
             <svg className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
               <line 
                 x1="50%" 
                 y1="50%" 
                 x2={`calc(50% + ${x + randomOffset()}px)`} 
                 y2={`calc(50% + ${y + randomOffset()}px)`} 
                 stroke="#DC2626" 
                 strokeWidth="2" 
               />
             </svg>
 
             {/* Інструменти (стилізовані як стікер) */}
             <div 
               className="absolute bg-green-300 p-3 shadow-md z-20"
               style={{ 
                 top: `calc(50% + ${y + 90 + randomOffset()}px)`, 
                 left: `calc(50% + ${x - 40 + randomOffset()}px)`,
                 transform: `rotate(${randomRotation()}deg)`,
                 width: '150px'
               }}
             >
               <div className="text-sm font-semibold mb-1">ІНСТРУМЕНТИ:</div>
               <div className="text-sm">{project.tools.join(', ')}</div>
               <div className="absolute -top-3 -left-3">
                 <div className="w-6 h-6 bg-blue-500 rounded-full shadow"></div>
               </div>
             </div>
 
             {/* Нитка до інструментів */}
             <svg className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
               <line 
                 x1={`calc(50% + ${x + randomOffset()}px)`} 
                 y1={`calc(50% + ${y + randomOffset()}px)`} 
                 x2={`calc(50% + ${x - 40 + randomOffset()}px)`} 
                 y2={`calc(50% + ${y + 90 + randomOffset()}px)`} 
                 stroke="#DC2626" 
                 strokeWidth="2" 
               />
             </svg>
 
             {/* GitHub (стилізований як стікер) */}
             <div 
               className="absolute bg-yellow-200 p-3 shadow-md z-20"
               style={{ 
                 top: `calc(50% + ${y - 90 + randomOffset()}px)`, 
                 left: `calc(50% + ${x + 60 + randomOffset()}px)`,
                 transform: `rotate(${randomRotation()}deg)`,
                 width: '150px'
               }}
             >
               <div className="flex items-center">
                 <GitBranch className="text-gray-800 w-4 h-4" />
                 <div className="text-sm font-semibold ml-1">GitHub?</div>
               </div>
               <div className="text-xs mt-1">{project.github}</div>
               <div className="absolute -top-3 -left-3">
                 <div className="w-6 h-6 bg-red-500 rounded-full shadow"></div>
               </div>
             </div>
 
             {/* Нитка до GitHub */}
             <svg className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
               <line 
                 x1={`calc(50% + ${x + randomOffset()}px)`} 
                 y1={`calc(50% + ${y + randomOffset()}px)`} 
                 x2={`calc(50% + ${x + 60 + randomOffset()}px)`} 
                 y2={`calc(50% + ${y - 90 + randomOffset()}px)`} 
                 stroke="#DC2626" 
                 strokeWidth="2" 
               />
             </svg>
 
             {/* Опис (стилізований як вирізка з газети) */}
             <div 
               className="absolute bg-white p-2 shadow-md z-20"
               style={{ 
                 top: `calc(50% + ${y + 30 + randomOffset()}px)`, 
                 left: `calc(50% + ${x + 100 + randomOffset()}px)`,
                 transform: `rotate(${randomRotation()}deg)`,
                 width: '180px'
               }}
             >
               <div className="border-b-2 border-gray-900 mb-1 pb-1">
                 <div className="text-lg font-bold text-center uppercase">ОПИС</div>
               </div>
               <div className="text-xs leading-tight">{project.description}</div>
               <div className="absolute -top-3 -left-3">
                 <div className="w-6 h-6 bg-red-500 rounded-full shadow"></div>
               </div>
             </div>
 
             {/* Нитка до опису */}
             <svg className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
               <line 
                 x1={`calc(50% + ${x + randomOffset()}px)`} 
                 y1={`calc(50% + ${y + randomOffset()}px)`} 
                 x2={`calc(50% + ${x + 100 + randomOffset()}px)`} 
                 y2={`calc(50% + ${y + 30 + randomOffset()}px)`} 
                 stroke="#DC2626" 
                 strokeWidth="2" 
               />
             </svg>
           </React.Fragment>
         );
       })}
 
       {/* Додаткові елементи для детективного вигляду */}
       <div 
         className="absolute bg-green-300 p-2 shadow-md z-10"
         style={{ 
           top: '20%', 
           left: '20%',
           transform: `rotate(${randomRotation()}deg)`,
           width: '120px'
         }}
       >
         <div className="text-lg font-bold text-center">ДОКАЗИ?</div>
         <div className="absolute -top-3 -left-3">
           <div className="w-6 h-6 bg-blue-500 rounded-full shadow"></div>
         </div>
       </div>
 
       <div 
         className="absolute bg-yellow-200 p-2 shadow-md z-10"
         style={{ 
           top: '25%', 
           right: '15%',
           transform: `rotate(${randomRotation()}deg)`,
           width: '120px'
         }}
       >
         <div className="text-sm font-bold">ПОЄДНАТИ?</div>
         <div className="absolute -top-3 -left-3">
           <div className="w-6 h-6 bg-red-500 rounded-full shadow"></div>
         </div>
       </div>
 
       {/* Штамп "TOP SECRET" */}
       <div 
         className="absolute z-10"
         style={{ 
           top: '70%', 
           right: '10%',
           transform: `rotate(-20deg)`,
         }}
       >
         <div className="text-5xl font-bold text-red-600 opacity-60 border-8 border-red-600 rounded-md p-2">
           TOP SECRET
         </div>
       </div>
 
       {/* Додаткові кнопки на дошці для детального оформлення */}
       {[...Array(20)].map((_, i) => (
         <div 
           key={i}
           className={`absolute ${i % 2 === 0 ? 'bg-red-500' : 'bg-blue-500'} w-6 h-6 rounded-full shadow`}
           style={{ 
             top: `${10 + Math.random() * 80}%`, 
             left: `${10 + Math.random() * 80}%`,
             zIndex: 5
           }}
         />
       ))}
     </div>
   );
 };
 
 export default DetectiveBoard;