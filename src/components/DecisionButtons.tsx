import React, { FC, useState } from 'react';

interface Props {
    onYesClick?: () => void;
    onNoClick?: () => void;
}

const phrases = [
    "No",
    "Initi iyo? 😅",
    "Faa??",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "Okay yawe 😭",
    "Give it another thought!",
    "Are you absolutely sure?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
];

export const DecisionButtons: FC<Props> = ({ onYesClick, onNoClick }) => {
    const [buttonSize, setButtonSize] = useState(16); // Initial font size in px
    const [noCount, setNoCount] = useState(0);

    const handleNoClick = () => {
        setNoCount(prev => prev + 1);
        setButtonSize(prev => prev + 20); // Scale font size instead of width/height for better look
        onNoClick?.();
    };

    const handleYesClick = () => {
        onYesClick?.();
    }

    return (
        <div className="flex flex-row items-center justify-center gap-5 my-5">
            <button
                className="bg-red-500 text-white px-4 py-2 rounded shadow"
                onClick={handleNoClick}
            >
                {phrases[Math.min(noCount, phrases.length - 1)]}
            </button>
            <button 
                className="bg-green-500 text-white px-4 py-2 rounded shadow transition-all"
                onClick={handleYesClick} 
                style={{ fontSize: `${buttonSize}px` }}
            >
                Yes
            </button>
        </div>
    );
};