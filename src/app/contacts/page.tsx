import React from 'react';
import { Mail, Phone, MapPin,  Linkedin, Globe } from 'lucide-react';

const DetectiveContacts = () => {
  // Тут вставте свої справжні контактні дані
  const contacts = {
    name: "Ваше Ім'я",
    email: "example@email.com",
    phone: "+380 00 000 0000",
    location: "Київ, Україна",
    github: "github.com/username",
    linkedin: "linkedin.com/in/username",
    website: "yourwebsite.com"
  };

  const randomRotation = () => Math.random() * 6 - 3;
  
  return (
    <div className="relative w-full h-screen overflow-hidden bg-amber-800 p-8">
      {/* Текстура коркової дошки */}
      <div className="absolute inset-0" style={{ 
        background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h1v1H0z\' fill=\'rgba(0,0,0,0.05)\'/%3E%3C/svg%3E")', 
        backgroundRepeat: 'repeat' 
      }}></div>
      
      {/* Рамка дошки */}
      <div className="absolute inset-4 border-8 border-amber-900 rounded-sm shadow-2xl"></div>
      
      {/* Заголовок файлу - як напис маркером */}
      <div 
        className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30"
        style={{ transform: 'translateX(-50%) rotate(-2deg)' }}
      >
        <div className="bg-white p-3 shadow-lg border-2 border-gray-300 rounded-sm">
          <h1 className="text-3xl font-bold text-red-600" 
              style={{ fontFamily: 'cursive' }}>
            ДОСЬЄ: КОНТАКТИ
          </h1>
        </div>
        <div className="absolute -top-4 -left-4">
          <div className="w-8 h-8 bg-red-500 rounded-full shadow"></div>
        </div>
      </div>
      
      {/* Фото підозрюваного */}
      <div 
        className="absolute top-32 left-1/2 transform -translate-x-1/2 bg-white p-2 shadow-lg z-20"
        style={{ transform: 'translateX(-50%) rotate(1deg)' }}
      >
        <div className="border border-gray-400 p-1">
          <div className="bg-gray-200 w-40 h-40 flex items-center justify-center">
            <div className="text-6xl text-gray-400">?</div>
          </div>
          <div className="bg-white p-2 border-t border-gray-400">
            <div className="text-xl font-bold text-center text-gray-800">{contacts.name}</div>
            <div className="text-xs text-center border-t border-gray-300 mt-1 pt-1">ОБ'ЄКТ СПОСТЕРЕЖЕННЯ</div>
          </div>
        </div>
        <div className="absolute -top-4 -left-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full shadow"></div>
        </div>
      </div>
      
      {/* Штамп "СОВЕРШЕННО СЕКРЕТНО" */}
      <div 
        className="absolute top-44 right-20 z-40"
        style={{ transform: 'rotate(-25deg)' }}
      >
        <div className="text-4xl font-bold text-red-600 opacity-60 border-4 border-red-600 rounded p-1">
          ЦІЛКОМ ТАЄМНО
        </div>
      </div>
      
      {/* Email - як телеграма */}
      <div 
        className="absolute left-1/4 top-64 bg-yellow-100 p-3 shadow-lg z-20 max-w-xs"
        style={{ transform: `rotate(${randomRotation()}deg)` }}
      >
        <div className="border-2 border-yellow-600 p-2">
          <div className="border-b-2 border-yellow-600 mb-2 pb-1">
            <div className="text-center text-lg font-bold">ЕЛЕКТРОННА ПОШТА</div>
          </div>
          <div className="flex items-center">
            <Mail className="text-yellow-700 w-5 h-5" />
            <div className="ml-2 text-lg font-mono">{contacts.email}</div>
          </div>
        </div>
        <div className="absolute -top-4 -left-4">
          <div className="w-8 h-8 bg-red-500 rounded-full shadow"></div>
        </div>
      </div>
      
      {/* Телефон - як поліцейський звіт */}
      <div 
        className="absolute right-1/4 top-64 bg-white p-3 shadow-lg z-20 max-w-xs"
        style={{ transform: `rotate(${randomRotation()}deg)` }}
      >
        <div className="border border-gray-400 p-2">
          <div className="border-b-2 border-gray-800 mb-2 pb-1">
            <div className="text-center font-serif font-bold">ТЕЛЕФОННИЙ КОНТАКТ</div>
          </div>
          <div className="flex items-center">
            <Phone className="text-gray-800 w-5 h-5" />
            <div className="ml-2 font-mono">{contacts.phone}</div>
          </div>
          <div className="mt-2 text-xs">
            Перехоплення дозволено. Використовувати з обережністю.
          </div>
        </div>
        <div className="absolute -top-4 -left-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full shadow"></div>
        </div>
      </div>
      
      {/* Локація - як карта */}
      <div 
        className="absolute left-20 top-96 bg-white p-2 shadow-lg z-20"
        style={{ transform: `rotate(${randomRotation()}deg)` }}
      >
        <div className="border border-gray-400 p-1">
          <div className="bg-green-100 p-3">
            <div className="flex items-center mb-2">
              <MapPin className="text-red-600 w-5 h-5" />
              <div className="ml-2 font-bold">ОСТАННЯ ВІДОМА ЛОКАЦІЯ:</div>
            </div>
            <div className="font-mono">{contacts.location}</div>
          </div>
        </div>
        <div className="absolute -top-4 -left-4">
          <div className="w-8 h-8 bg-red-500 rounded-full shadow"></div>
        </div>
      </div>
      
      {/* GitHub - як секретний документ */}
      <div 
        className="absolute left-1/3 bottom-20 bg-gray-100 p-3 shadow-lg z-20 max-w-xs"
        style={{ transform: `rotate(${randomRotation()}deg)` }}
      >
        <div className="border-2 border-gray-600 p-2">
          <div className="border-b border-gray-600 pb-1 mb-2">
            <div className="text-center font-bold">ЦИФРОВИЙ СЛІД #1</div>
          </div>
          <div className="flex items-center">
            {/* <GitHub className="text-gray-800 w-5 h-5" /> */}
            <div className="ml-2 font-mono text-sm">{contacts.github}</div>
          </div>
        </div>
        <div className="absolute -top-4 -left-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full shadow"></div>
        </div>
      </div>
      
      {/* LinkedIn - як секретний документ */}
      <div 
        className="absolute right-1/3 bottom-28 bg-blue-50 p-3 shadow-lg z-20 max-w-xs"
        style={{ transform: `rotate(${randomRotation()}deg)` }}
      >
        <div className="border-2 border-blue-600 p-2">
          <div className="border-b border-blue-600 pb-1 mb-2">
            <div className="text-center font-bold">ПРОФЕСІЙНІ ЗВ'ЯЗКИ</div>
          </div>
          <div className="flex items-center">
            <Linkedin className="text-blue-800 w-5 h-5" />
            <div className="ml-2 font-mono text-sm">{contacts.linkedin}</div>
          </div>
        </div>
        <div className="absolute -top-4 -left-4">
          <div className="w-8 h-8 bg-red-500 rounded-full shadow"></div>
        </div>
      </div>
      
      {/* Веб-сайт - як вирізка з газети */}
      <div 
        className="absolute right-20 bottom-44 bg-white p-2 shadow-lg z-20 max-w-xs"
        style={{ transform: `rotate(${randomRotation()}deg)` }}
      >
        <div className="p-3">
          <div className="border-b-2 border-black pb-1 mb-2">
            <div className="text-center text-xl font-serif font-bold">ПУБЛІЧНА ПРИСУТНІСТЬ</div>
          </div>
          <div className="flex items-center justify-center">
            <Globe className="text-gray-800 w-5 h-5" />
            <div className="ml-2 font-mono">{contacts.website}</div>
          </div>
        </div>
        <div className="absolute -top-4 -left-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full shadow"></div>
        </div>
      </div>
      
      {/* Нитки, що з'єднують всі докази */}
      <svg className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
        <line x1="50%" y1="150px" x2="25%" y2="320px" stroke="#DC2626" strokeWidth="2" />
        <line x1="50%" y1="150px" x2="75%" y2="320px" stroke="#DC2626" strokeWidth="2" />
        <line x1="50%" y1="150px" x2="120px" y2="450px" stroke="#DC2626" strokeWidth="2" />
        <line x1="50%" y1="150px" x2="33%" y2="80%" stroke="#DC2626" strokeWidth="2" />
        <line x1="50%" y1="150px" x2="66%" y2="78%" stroke="#DC2626" strokeWidth="2" />
        <line x1="50%" y1="150px" x2="80%" y2="65%" stroke="#DC2626" strokeWidth="2" />
      </svg>
      
      {/* Додаткові кнопки на дошці */}
      {[...Array(15)].map((_, i) => (
        <div 
          key={i}
          className={`absolute ${i % 2 === 0 ? 'bg-red-500' : 'bg-blue-500'} w-6 h-6 rounded-full shadow`}
          style={{ 
            top: `${15 + Math.random() * 70}%`, 
            left: `${15 + Math.random() * 70}%`,
            zIndex: 5
          }}
        />
      ))}
      
      {/* Рукописна нотатка */}
      <div 
        className="absolute left-20 top-20 bg-yellow-100 p-3 shadow-md z-20 max-w-xs"
        style={{ transform: 'rotate(-5deg)' }}
      >
        <div className="text-blue-900" style={{ fontFamily: 'cursive' }}>
          Перевірити всі контакти! Можливо є додаткові канали зв'язку?
        </div>
      </div>
      
      {/* Печатка "Перевірено" */}
      <div 
        className="absolute bottom-20 right-20 z-40"
        style={{ transform: 'rotate(15deg)' }}
      >
        <div className="text-3xl font-bold text-green-700 opacity-70 border-4 border-green-700 rounded-full p-4">
          ПЕРЕВІРЕНО
        </div>
      </div>
    </div>
  );
};

export default DetectiveContacts;