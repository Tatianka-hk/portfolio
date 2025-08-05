"use client"
import React, { useState } from 'react';

const Dropdown = ({ options, defaultOption, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultOption || options[0].label);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };


    const selectOption = (option) => {
        setSelectedOption(option.label);
        setIsOpen(false);
        onChange(option.value);
    };

    return (
        <div className="relative inline-block w-[100px]">
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
