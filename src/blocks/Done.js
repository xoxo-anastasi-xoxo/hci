import React from "react";

export const Done = ({onClick}) => {
    return (
        <div className='trigger-container'>
            <div className='done' onClick={onClick}>Предложение введено</div>
        </div>
    );
};