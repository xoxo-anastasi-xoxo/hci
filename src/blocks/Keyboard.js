import React, {Component} from "react";
import "react-simple-keyboard/build/css/index.css";
import {KeyboardButton} from './KeyboardButton';

export class MyKeyboard extends Component {
    state = {
        input: ""
    };

    onChange = input => {
        this.props.inputRef.current = input;
        this.setState({
            input: input
        });
    };

    onKeyPress = button => {
        if (button === "") return;
        if (button === "{bksp}") {
            this.onChange(this.state.input.slice(0, this.state.input.length - 1));
            return;
        }
        if (button === "{space}") {
            this.onChange(this.state.input + ' ');
            return;
        }

        this.onChange(this.state.input + button);
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
