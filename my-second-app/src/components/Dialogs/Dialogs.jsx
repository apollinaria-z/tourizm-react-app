import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return(
    <div className={s.dialog + ' '+ s.active}>
         <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) =>{

    let dialogsData = [
        {id: 1, name: "Irina"},
        {id: 2, name: "Pavel"},
        {id: 3, name: "Olga"},
        {id: 4, name: "Petya"}
    ]

    let messagesData = [
        {id: 1, message: "Hello"},
        {id: 2, message: "my friend"},
        {id: 3, message: "How do you feel"},
        {id: 4, message: "OK perfect"}
    ]

    let dialogsElements = dialogsData.map(
        d => <DialogItem name={d.name} id={d.id} /> );
    let messageElements = messagesData.map(
        m => <Message message={m.message} />);

    return(
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messageElements}
             </div>
         </div>
    )
}

export default Dialogs;