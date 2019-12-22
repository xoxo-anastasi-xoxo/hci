import React, {useRef, memo} from "react";

export const KeyboardButton = memo(({
                                        letter,
                                        onKeyPress,
                                        isClickable = true
                                    }) => {
    const timer = useRef(0);
    const className = letter === '' ? 'keyboard-button hg-button hg-standardBtn hg-red hg-red2' : 'keyboard-button hg-button hg-standardBtn';
    return (
        <div
            className={className}
            onMouseEnter={() => {
                if (!isClickable) {
                    timer.current = setTimeout(() => {
                        onKeyPress(letter);
                    }, 600);
                }
            }}
            onMouseLeave={() => {
                if (!isClickable && timer && timer.current) {
                    clearTimeout(timer.current);
                    timer.current = 0;
                }
            }}
            onClick={() => {
                if (isClickable) {
                    onKeyPress(letter);
                }
            }}
        >
            {letter.length === 6 ? 'backspace' : letter.length === 7 ? '' : letter}
        </div>
    );
});