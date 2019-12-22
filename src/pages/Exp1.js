import React, {useRef, useState} from "react";
import {MyKeyboard} from "../blocks/Keyboard";
import {useDispatch} from "react-redux";
import {ADD_EXP1_INFO} from "../actions/actions";
import {Done} from "../blocks/Done";
import {Forget} from "../blocks/Forget";
import {Trigger} from "../blocks/Trigger";

const COLORS = ['red', '#BFFF00', 'black', 'blue', 'green', 'grey', 'pink', 'yellow', 'white', '#9966CC', 'orange', 'azure', 'violet', 'brown', 'blue', 'pink', 'black', 'yellow',];
let CURRENT_COLOR = 0;

export const Exp1 = () => {
    const [expMode, setExpMode] = useState(0);
    const [divColor, setDivColor] = useState(COLORS[CURRENT_COLOR]);
    const [keyboardMode, setKeyboardMode] = useState(false);
    const dispatch = useDispatch();
    const inputRef = useRef({});
    const clearRef = useRef(() => {
    });

    const onClickDone = () => {
        dispatch({
            type: ADD_EXP1_INFO,
            payload: {
                ...inputRef.current,
                currentGroup: keyboardMode ? 'touch pad' : 'leap motion'
            }
        });

        clearRef.current();

        setExpMode(0);
    };
    const onClickForget = () => {
        clearRef.current();
        setExpMode(0);
    };

    return (
        <>
            {
                (function () {
                    switch (expMode) {
                        case 0: {
                            return <>
                                <div
                                    className='triangle'
                                    style={{
                                        backgroundColor: divColor
                                    }
                                    }/>
                                <div
                                    className='start-button'
                                    onClick={() => {
                                        CURRENT_COLOR = (CURRENT_COLOR + 1) % COLORS.length;
                                        setDivColor(COLORS[CURRENT_COLOR]);

                                        const interv = setInterval(() => {
                                            CURRENT_COLOR = (CURRENT_COLOR + 1) % COLORS.length;
                                            setDivColor(COLORS[CURRENT_COLOR]);
                                        }, 1200);
                                        setTimeout(() => {
                                            clearInterval(interv);
                                            setExpMode(1);
                                        }, 8000)
                                    }}
                                >Начать!
                                </div>
                            </>

                        }
                        case 1: {
                            return <>
                                <MyKeyboard keyboardMode={keyboardMode} inputRef={inputRef} clearRef={clearRef}/>
                                <Done onClick={onClickDone}/>
                                <Forget onClick={onClickForget}/>
                            </>;
                        }
                    }
                })()
            }
            <Trigger setKeyboardMode={setKeyboardMode}/>
        </>
    );
};