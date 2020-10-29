import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={path}> {props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.massage}>{props.message}</div>
    )
}



const Dialogs = (props) => {

    let dialogsDate = [
        {id: 1, name: 'bot 1'},
        {id: 2, name: 'bot 2'},
        {id: 3, name: 'bot 3'},
        {id: 4, name: 'bot 4'},
        {id: 5, name: 'bot 5'}
    ]
    let messageDate = [
        {id: 1, message: 'text 1'},
        {id: 2, message: 'text 2'},
        {id: 3, message: 'text 3'},
        {id: 4, message: 'text 4'},
        {id: 5, message: 'text 5'}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsDate[0].name} id={dialogsDate[0].id}/>
                <DialogItem name={dialogsDate[1].name} id={dialogsDate[1].id}/>
                <DialogItem name={dialogsDate[2].name} id={dialogsDate[2].id}/>
                <DialogItem name={dialogsDate[3].name} id={dialogsDate[3].id}/>
                <DialogItem name={dialogsDate[4].name} id={dialogsDate[4].id}/>



            </div>
            <div className={s.massages}>
                <Message message={messageDate[0].message} />
                <Message message={messageDate[1].message} />
                <Message message={messageDate[2].message} />
                <Message message={messageDate[3].message} />
                <Message message={messageDate[4].message} />


            </div>
        </div>
    )
}

export default Dialogs;