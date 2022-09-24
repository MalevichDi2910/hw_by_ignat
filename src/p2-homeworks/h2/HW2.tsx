import React, {useState} from 'react'
import Affairs from './Affairs'
import s from './Affairs.module.css'

// types
export type AffairPriorityType = AffairType[];
export type AffairType = {_id: number; name:string; priority: PriorityType};
export type FilterType = 'all' | PriorityType;
export type PriorityType =  'high' |  'low' | 'middle';

// constants
const defaultAffairs: AffairPriorityType = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high' },
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairPriorityType, filter: FilterType): AffairPriorityType => {
    if (filter === 'all') {
        return affairs;
    } else {
        return affairs.filter((affair: AffairType) => affair.priority === filter);
    }
}
export const deleteAffair = (affairs: AffairPriorityType, _id: number): AffairPriorityType =>
    affairs.filter((affair: AffairType) => (affair._id !== _id));

function HW2() {
    const [affairs, setAffairs] = useState<AffairPriorityType>(defaultAffairs);
    const [filter, setFilter] = useState<FilterType>('all');

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

    return (
        <div className={s.mainBackground}>
            <hr/>
            homeworks 2
            <hr/>

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filter={filter}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
