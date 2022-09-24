import React, {useState} from 'react';
import s from './HW5.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";


function Header() {
    let[value,setValue] = useState(false);

    const onClickHandler = () => {
        setValue(!value)
    }

    return (
        <div className={s.container}>
        <div onClick={onClickHandler} className={value ? s.header + ' '+ s.open : s.header}>
           <div className={s.title}> NAVIGATION </div>
            <ul className={s.dropdown}>
                <li><NavLink to={PATH.PRE_JUNIOR}> PreJunior </NavLink></li>
                <hr/>
                <li><NavLink to={PATH.JUNIOR}> Junior </NavLink></li>
                <hr/>
                <li><NavLink to={PATH.JUNIOR_PLUS}> JuniorPlus </NavLink></li>
            </ul>
        </div>
        </div>
    )
}

export default Header
