import React from 'react';
import Affair from './Affair';
import {AffairPriorityType, AffairType, filterAffairs, FilterType} from './HW2';
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairPriorityType
    setFilter:  React.Dispatch<React.SetStateAction<FilterType>>
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => props.setFilter('all');
    const setHigh = () => props.setFilter('high');
    const setMiddle = () => props.setFilter('middle');
    const setLow = () => props.setFilter('low');


    const btAll = s.button + ' ' + (props.filter === 'all' ? s.active : '');
    const btHigh = s.button + ' ' + (props.filter === 'high' ? s.active : '');
    const btMiddle = s.button + ' ' + (props.filter === 'middle' ? s.active : '');
    const btLow = s.button + ' ' + (props.filter === 'low' ? s.active : '');


    return (
        <div>

            {mappedAffairs}

            <button className={btAll} onClick={setAll}>All</button>
            <button className={btHigh} onClick={setHigh}>High</button>
            <button className={btMiddle} onClick={setMiddle}>Middle</button>
            <button className={btLow} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
