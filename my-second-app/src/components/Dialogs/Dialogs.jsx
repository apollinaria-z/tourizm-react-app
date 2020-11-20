import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) =>{

    let dialogsElements = props.state.dialogsData.map(
        d => <DialogItem name={d.name} id={d.id} /> );
    let messageElements = props.state.messagesData.map(
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