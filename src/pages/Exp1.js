import React, {useRef, useState} from "react";
import {MyKeyboard} from "../blocks/Keyboard";
import {useDispatch} from "react-redux";
import {ADD_EXP1_INFO} from "../actions/actions";
import {Done} from "../blocks/Done";
import {Forget} from "../blocks/Forget";
import {Trigger} from "../blocks/Trigger";

const COLORS = ['red', '#BFFF00', 'black', 'blue', 'green', 'grey', 'pink', 'yellow', 'white', '#9966CC', 'orange', 'azure', 'violet', 'brown', 'blue', 'pink', 'black', 'yellow',];
const TIME = [500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000];
let CURRENT_COLOR = 0;

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

export const Exp1 = () => {
    const [expMode, setExpMode] = useState(0);
    const [divColor, setDivColor] = useState(COLORS[CURRENT_COLOR]);
    const [keyboardMode, setKeyboardMode] = useState(false);
    const dispatch = useDispatch();
    const inputRef = useRef({});
    const clearRef = useRef(() => {
    });

    const onClickDone = () => {
        const {
            startTime,
            input,
            correctionsNumber,
            time,
            mistakes
        } = inputRef.current;
        dispatch({
            type: ADD_EXP1_INFO,
            payload: {
                startTime: startTime.toString(),
                input,
                correctionsNumber,
                time: time / 1000,
                currentGroup: keyboardMode ? 'touch pad' : 'leap motion',
                mistakes
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
                                        let curST = undefined;
                                        const fn = function intervFn() {
                                            CURRENT_COLOR = (CURRENT_COLOR + 1) % COLORS.length;
                                            setDivColor(COLORS[CURRENT_COLOR]);
                                            const time = TIME[randomInteger(0, TIME.length - 1)];
                                            curST = setTimeout(intervFn, time)
                                        };

                                        fn();
                                        setTimeout(() => {
                                            clearInterval(curST);
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