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
    return(
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                        <DialogItem name='Irina' id='1'/>
                        <DialogItem name='Pavel' id='2'/>
                        <DialogItem name='Olga' id='3'/>
                        <DialogItem name='Anton' id='4'/>
            </div>

            <div className={s.messages}>
             <Message message='Hi' />
             <Message message='How are you?' />
             <Message message='hey' />
             <Message message='ho' />
            </div>
         </div>
    )
}

export default Dialogs;