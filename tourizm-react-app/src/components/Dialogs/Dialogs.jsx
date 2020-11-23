import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialog-reducer';

const Dialogs = (props) =>{

    let state = props.store.getState().dialogPage;

    let messageElements = state.messagesData.map(
        m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return(
        <div className={s.dialogs}>
            <div className={s.messages}>
                <div>{messageElements}</div>
             </div>
             <div>
                <div><textarea value={newMessageBody}
                 onChange={onNewMessageChange}
                 placeholder="Enter mesaage"></textarea></div>
                <div><button onClick={ onSendMessageClick } >Send</button></div>
             </div>
         </div>
    )
}

export default Dialogs;