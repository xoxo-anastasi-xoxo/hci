import React, {useCallback, useRef, useState} from "react";
import {MyKeyboard} from "../blocks/Keyboard";
import {Trigger} from "../blocks/Trigger";
import {Done} from "../blocks/Done";
import {useDispatch} from "react-redux";
import {ADD_EXP2_INFO} from "../actions/actions";

export const Exp2 = () => {
    const [keyboardMode, setKeyboardMode] = useState(false);
    const dispatch = useDispatch();
    const inputRef = useRef('');

    const onClick = useCallback(() => {
        dispatch({
            type: ADD_EXP2_INFO,
            payload: inputRef.current
        })
    });

    return <>
        <MyKeyboard withBackspace={true} keyboardMode={keyboardMode} inputRef={inputRef}/>
        <Done onClick={onClick}/>
        <Trigger setKeyboardMode={setKeyboardMode}/>
    </>;
};