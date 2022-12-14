import React from 'react';
import s from './Navigation.module.css'

const Navigation = () => {
    return (
        <div className={s.nav}>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Portfolio</a>
            <a href="">News</a>
            <a href="">Contact</a>
        </div>
    );
};


export default Navigation;
