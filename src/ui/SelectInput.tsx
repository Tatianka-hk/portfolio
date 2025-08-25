"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Selectable } from '../types';

interface DropdownProps {
    options: Selectable[];
    defaultOption?: string;
    onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, defaultOption, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultOption || options[0].label);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };


    const selectOption = (option) => {
        setSelectedOption(option.label);
        setIsOpen(false);
        onChange(option.value);
    };


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        setSelectedOption(defaultOption || options[0].label);
    }, [defaultOption])


    return (
        <div className="relative inline-block w-[100px]" ref={dropdownRef}>
            <div
                className="bg-paper-bg border border-gray-300 rounded-md p-2 cursor-pointer"
                onClick={toggleDropdown}
            >
                {selectedOption}
            </div >
            {isOpen && (
                <ul className="absolute mt-1 w-full bg-paper-bg border border-gray-300 rounded-md shadow-lg z-10 hover:bg-gray-100/20">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className="p-2 cursor-pointer border border-[#b19776] hover:bg-[rgba(139,110,78,0.2)] hover:border-[#8b6e4e] "
                            onClick={() => selectOption(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div >
    );
};

export default Dropdown;
