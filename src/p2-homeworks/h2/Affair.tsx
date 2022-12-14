import React from 'react'
import { AffairType } from './HW2';
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType;
    deleteAffairCallback:  (_id: number) => void;
}

function Affair(props: AffairPropsType) {
    const deleteCallback: () => void = () => props.deleteAffairCallback((props.affair._id));

    const priorityClass = s.item + ' ' + s[props.affair.priority];

    return (
        <div className={s.affair}>
            <div className={s.item}>{props.affair.name}</div>
            <div className={priorityClass}>[{props.affair.priority}]</div>

            <button className={s.item + ' ' + s.button} onClick={deleteCallback}>X</button>

        </div>
    )
}

export default Affair
