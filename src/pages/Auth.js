import React, {useCallback, useRef} from "react";
import FileSaver from 'file-saver';
import {useDispatch, useSelector} from "react-redux";
import {CLEAR_ALL} from "../actions/actions";

export const Auth = () => {
    const inputRef = useRef();
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const onSave = useCallback(() => {
        const text = inputRef.current && inputRef.current.value;
        const file = new File(
            [JSON.stringify({userName: text, ...state}, null, '\t')],
            `hci_exp_with_${text.toLowerCase().replace(' ', '_')}.txt`,
            {type: "text/plain;charset=utf-8"}
            );
        FileSaver.saveAs(file);
    }, [inputRef, state]);

    return <div className='auth'>
        <label>Имя респондента</label>
        <input ref={inputRef}/>
        <button onClick={onSave}>Сохранить данные эксперимента</button>
        <button onClick={() => {dispatch({type: CLEAR_ALL})}}>Очистить данные эксперимента</button>
    </div>;
};