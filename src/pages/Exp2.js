import React, {useRef, useState} from "react";
import {MyKeyboard} from "../blocks/Keyboard";
import {Trigger} from "../blocks/Trigger";
import {Done} from "../blocks/Done";
import {Forget} from "../blocks/Forget";
import {useDispatch} from "react-redux";
import {ADD_EXP2_INFO} from "../actions/actions";

export const Exp2 = () => {
    const [keyboardMode, setKeyboardMode] = useState(false);
    const dispatch = useDispatch();
    const inputRef = useRef({});
    const clearRef = useRef(() => {});

    const onClickDone = () => {
        dispatch({
            type: ADD_EXP2_INFO,
            payload: {
                ...inputRef.current,
                currentGroup: keyboardMode ? 'touch pad' : 'leap motion'
            }
        });

        clearRef.current();
    };
    const onClickForget = () => {
        clearRef.current();
    };

    return <>
        <MyKeyboard withBackspace={true} keyboardMode={keyboardMode} inputRef={inputRef} clearRef={clearRef}/>
        <Done onClick={onClickDone}/>
        <Forget onClick={onClickForget}/>
        <Trigger setKeyboardMode={setKeyboardMode}/>
    </>;
};