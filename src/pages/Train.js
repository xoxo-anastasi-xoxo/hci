import React, {useRef, useState} from "react";
import {MyKeyboard} from "../blocks/Keyboard";
import {Trigger} from "../blocks/Trigger";
import {useDispatch} from "react-redux";
import {ADD_EXP2_INFO} from "../actions/actions";
import {Done} from "../blocks/Done";
import {Forget} from "../blocks/Forget";

export const Train = () => {
    const [keyboardMode, setKeyboardMode] = useState(false);
    const inputRef = useRef({});
    const clearRef = useRef(() => {});

    const onClickDone = () => {
        clearRef.current();
    };

    return <>
        <MyKeyboard withBackspace={true} keyboardMode={keyboardMode} inputRef={inputRef} clearRef={clearRef}/>
        <Done onClick={onClickDone}/>
        <Trigger setKeyboardMode={setKeyboardMode}/>
    </>;
};