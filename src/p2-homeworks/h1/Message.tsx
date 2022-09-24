import React from 'react'
import s from './Message.module.css'

export type MessageDataType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessageDataType) {
    return (
        <div className={s.background}>
        <div className={s.message}>
            <img src={props.avatar} className={s.avatar}/>

            <div className={s.angle}/>

            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.message}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
        </div>
    )
}

export default Message
