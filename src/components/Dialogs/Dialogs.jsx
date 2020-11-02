import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'bot 1'},
        {id: 2, name: 'bot 2'},
        {id: 3, name: 'bot 3'},
        {id: 4, name: 'bot 4'},
        {id: 5, name: 'bot 5'}
    ]


    let messages = [
        {id: 1, message: 'text 1'},
        {id: 2, message: 'text 2'},
        {id: 3, message: 'text 3'},
        {id: 4, message: 'text 4'},
        {id: 5, message: 'text 5'}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = messages.map(m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.massages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;