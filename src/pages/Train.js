import React, {useState} from "react";
import {MyKeyboard} from "../blocks/Keyboard";
import {Trigger} from "../blocks/Trigger";

export const Train = () => {
    const [keyboardMode, setKeyboardMode] = useState(false);

    return <>
        <MyKeyboard withBackspace={true} keyboardMode={keyboardMode}/>
        <Trigger setKeyboardMode={setKeyboardMode}/>
    </>;
};