import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}


// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,onKeyHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? s.someInput : s.input // need to fix with (?:)

    return (
        <div>
            <div>
                <input value={name}
                       onChange={setNameCallback}
                       onKeyDown={onKeyHandler}
                       className={s.inputClass}/>
                <button className={s.button} onClick={addUser}>add</button>
                <span>{totalUsers}</span>
                <div className={s.error}>{error}</div>
            </div>

        </div>
    )
}

export default Greeting
