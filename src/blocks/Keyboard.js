import React, {Component} from "react";
import "react-simple-keyboard/build/css/index.css";
import {KeyboardButton} from './KeyboardButton';

export class MyKeyboard extends Component {
    state = {
        input: "",
        last: '',
        correctionsNumber: 0,
        startTime: undefined,
        time: undefined,
        mistakes: []
    };

    onChange = (input, button, prevInput) => {
        if (button === "{bksp}") {
            this.state.mistakes.push({
                inputBefore: prevInput,
                time: (Date.now() - (this.state.startTime || Date.now())) / 1000,
            });
        }
        const newState = {
            input: input,
            last: button,
            correctionsNumber: this.state.correctionsNumber + (button === "{bksp}" ? 1 : 0),
            startTime: this.state.startTime || Date.now(),
            time: Date.now() - (this.state.startTime || Date.now()),
            mistakes: this.state.mistakes,
        };
        this.props.inputRef.current = newState;
        this.setState(newState);
    };

    onKeyPress = button => {
        if (button === "" || (button === "{bksp}" && this.state.last === "{bksp}")) return;
        if (button === "{bksp}") {
            this.onChange(this.state.input.slice(0, this.state.input.length - 1), button, this.state.input);
            return;
        }
        if (button === "{space}") {
            this.onChange(this.state.input + ' ', button);
            return;
        }

        this.onChange(this.state.input + button, button);
    };

    onClear = () => {
        const newState = {
            input: '',
            last: '',
            correctionsNumber: 0,
            startTime: undefined,
            time: undefined,
        };
        this.setState(newState);
        this.props.inputRef.current = newState;
    };

    componentDidMount() {
        this.props.clearRef.current = this.onClear;
    }

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
                    placeholder={this.props.keyboardMode ? "Кликните по букве" : 'Задержите курсор на букве'}
                />
                <div className='simple-keyboard hg-theme-default hg-layout-default myTheme hg-layout-default'>
                    {
                        this.props.withBackspace ? [
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
                                            isClickable={this.props.keyboardMode}
                                        />
                                    ))}
                                </div>
                            )
                            )
                            : [
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
                                            isClickable={this.props.keyboardMode}
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
