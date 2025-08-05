"use client"
import React from 'react';
import { useTranslation } from 'react-i18next';
import { contacts } from '../../static/skillStatic';
import { Selectable } from '../../types';


const Badge = ({ label }: { label: string }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#e4dcc2] p-2 text-sm w-28 text-center border border-[#b8a16f]">
      {t(label)}
    </div>
  )
}

const ContactItem = (
  { label, value }: Selectable
) => {
  const { t } = useTranslation();
  const [isShow, setShow] = React.useState<boolean>(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="flex flex-col items-center group cursor-pointer" onClick={copyToClipboard}>
      {isShow &&
        <Badge label={t('contacts.copied')} />
      }
      <div className="bg-[#e4dcc2] p-2 text-sm w-28 text-center border border-[#b8a16f] group-hover:bg-[#d7c59a] transition">
        {label}
      </div>
      <div className="text-xs mt-1 text-gray-600 group-hover:underline truncate max-w-[100px] w-fit">
        {value}
      </div>
    </div>
  )
}

const DetectiveContacts = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-paper-bg p-8 rounded-lg shadow-md max-w-lg mx-auto relative  font-mono text-[#2e1e1e]">
      <h2 className="text-2xl font-bold text-center mb-6 uppercase tracking-widest">
        🔴 {t('contacts.title')}
      </h2>
      <p className="mb-4 text-center italic">
        {t('contacts.description')}
      </p>

      <div className="border-t-2 border-dashed border-[#3b2f2f] my-6"></div>

      <div className="flex justify-between">
        {contacts?.map((contact: Selectable) => (
          <ContactItem
            key={contact.label}
            label={contact.label}
            value={contact.value}
          />
        ))}
      </div>

      <p className="mt-6 text-center text-xs italic opacity-60">
        🔐 {t('contacts.atention')}
      </p>
    </div>

  );
};

export default DetectiveContacts;