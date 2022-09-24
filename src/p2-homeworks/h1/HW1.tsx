import React from 'react'
import Message from './Message'
import s from './Message.module.css'


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Diana Malevich',
    message: 'Hello, how are you?',
    time: '23:32',
}

function HW1() {
    return (
        <div className={s.background}>
            <hr/>
            homeworks 1
            <hr/>

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
