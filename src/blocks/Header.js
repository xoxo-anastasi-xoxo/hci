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
        <Link to='/' onClick={() => onClick('/')}  className='header__title' style={{color: location === '/' ? 'black' : '#757575'}}>HCI</Link>
        <Link to='/train' onClick={() => onClick('/train')} className='header__menu-element'
              style={{color: location === '/train' ? 'black' : '#757575'}}>Тренировка</Link>
        <Link to='/exp1' onClick={() => onClick('/exp1')} className='header__menu-element'
              style={{color: location === '/exp1' ? 'black' : '#757575'}}>Эксперимент
            1</Link>
        <Link to='/exp2' onClick={() => onClick('/exp2')} className='header__menu-element'
              style={{color: location === '/exp2' ? 'black' : '#757575'}}>Эксперимент
            2</Link>
    </div>
};