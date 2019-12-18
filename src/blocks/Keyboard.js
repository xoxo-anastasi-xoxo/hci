import React, {Component} from "react";
import Keyboard from "./lib";
import "react-simple-keyboard/build/css/index.css";
import {KeyboardButton} from './KeyboardButton';

export class MyKeyboard extends Component {
    state = {
        input: ""
    };

    onChange = input => {
        this.setState({
            input: input
        });
        console.log("Input changed", input);
    };

    onKeyPress = button => {
        if (button === "") return;
        console.log("Button pressed", button);

        this.onChange(this.state.input + button);
    };

    onChangeInput = event => {
        let input = event.target.value;
        this.setState(
            {
                input: input
            },
            () => {
                this.keyboard.setInput(input);
            }
        );
    };

    render() {
        return (
            <div>
                <input
                    style={
                        {
                            margin: '40px auto'
                        }
                    }
                    value={this.state.input}
                    placeholder={"Tap on the virtual keyboard to start"}
                    onChange={e => this.onChangeInput(e)}
                />
                <div className='simple-keyboard hg-theme-default hg-layout-default myTheme hg-layout-default'>
                    {
                        [
                            "           {bksp}",
                            "й ц у к е н г ш щ з х ъ",
                            " ф ы в а п р о л д ж э ё ",
                            "  я ч с м и т ь б ю  ",
                            " {space} "
                        ].map((row, index) => (
                                <div className='hg-row' key={index}>
                                    {row.split(' ').map((letter, i) => (
                                        <KeyboardButton
                                            key={letter + index + i} letter={letter}
                                            onKeyPress={button => this.onKeyPress(button)}
                                        />
                                    ))}
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        );
    }
}
