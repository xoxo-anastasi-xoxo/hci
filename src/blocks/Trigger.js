import React, {useCallback, useState} from "react";
import Switch from "react-switch";

export const Trigger = ({setKeyboardMode}) => {
    const [checked, setChecked] = useState(false);
    const onChange = useCallback(() => {
        setChecked(!checked);
        setKeyboardMode(!checked);
    });


    return (
        <div className='trigger-container'>
            <Switch onChange={onChange} checked={checked} uncheckedIcon={false} checkedIcon={false} offColor={'#59c9fb'}/>
            <div className='trigger-hint'>
                {
                    checked ?
                        'В данный момент вы находитесь в тачпадном режиме. Для ввода буквы кликнете на нее!'
                        : 'В данный момент вы находитесь в режиме leap motion. Для ввода буквы задержите на ней курсор!'
                }
            </div>
        </div>
    );
};