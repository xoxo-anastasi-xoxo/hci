import React, {useCallback, useRef, useState} from "react";
import FileSaver from 'file-saver';
import {useSelector} from "react-redux";

export const Auth = () => {
    const inputRef = useRef();
    const state = useSelector(state => state);
    const onSave = useCallback(() => {
        const text = inputRef.current && inputRef.current.value;
        console.log(state, text);
        // const file = new File([text, "Hello, world!"], "hello world.txt", {type: "text/plain;charset=utf-8"});
        // FileSaver.saveAs(file);
    });

    return <div className='auth'>
        <label>Имя</label>
        <input ref={inputRef}/>
        <button onClick={onSave}>Сохранить данные эксперимента</button>
    </div>;
};