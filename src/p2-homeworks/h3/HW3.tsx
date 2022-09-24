import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import s from './Greeting.module.css'
// import {v1} from 'uuid';

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any
    const addUserCallback = (newName: string) => { // need to fix any
        let newUser = {_id: '', name: newName}
        setUsers([newUser,...users]) // need to fix
    }

    return (
        <div className={s.myBackground}>
            <hr/>
            homeworks 3
            <hr/>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
