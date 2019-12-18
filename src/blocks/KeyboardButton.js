import React from "react";

export const KeyboardButton = ({
                                   letter,
                                   onKeyPress
                               }) => {
    const className = letter === '' ? 'keyboard-button hg-button hg-standardBtn hg-red hg-red2' : 'keyboard-button hg-button hg-standardBtn';
    return (
        <div
            className={className}
            onClick={() => onKeyPress(letter)}
        >
            {letter.length === 6 ? 'backspace' : letter.length === 7 ? '' : letter}
        </div>
    );
};