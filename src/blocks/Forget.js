import React from "react";

export const Forget = ({onClick}) => {
    return (
        <div className='trigger-container'>
            <div className='forget' onClick={onClick}>Забыл:(</div>
        </div>
    );
};