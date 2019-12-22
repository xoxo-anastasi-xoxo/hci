import React, {useCallback, useState} from "react";
import {Link} from 'react-router-dom';

export const Header = () => {
    const [location, setLocation] = useState(window.location.pathname);
    const onClick = useCallback((name) => {
        setLocation(name);
    });

    return <div
        className='header'
        style={{
            color: '#757575',
            display: 'flex'
        }}>
        <Link to='/hci' onClick={() => onClick('/hci')}  className='header__title' style={{color: location === '/hci' ? 'black' : '#757575'}}>HCI</Link>
        <Link to='/hci/train' onClick={() => onClick('/hci/train')} className='header__menu-element'
              style={{color: location === '.hci/train' ? 'black' : '#757575'}}>Тренировка</Link>
        <Link to='/hci/exp1' onClick={() => onClick('/hci/exp1')} className='header__menu-element'
              style={{color: location === '/hci/exp1' ? 'black' : '#757575'}}>Эксперимент
            1</Link>
        <Link to='/hci/exp2' onClick={() => onClick('/hci/exp2')} className='header__menu-element'
              style={{color: location === '/hci/exp2' ? 'black' : '#757575'}}>Эксперимент
            2</Link>
    </div>
};