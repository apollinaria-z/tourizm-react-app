const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {messagesData: [
                         {id: 1, message: "Hello"},
                         {id: 2, message: "my friend"},
                         {id: 3, message: "How do you feel"},
                         {id: 4, message: "OK perfect"}
                             ],
                      dialogsData: [
                          {id: 1, name: "Irina"},
                          {id: 2, name: "Pavel"},
                           {id: 3, name: "Olga"},
                           {id: 4, name: "Petya"}
                          ],
                      newMessageBody: "" };

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
             state.messagesData.push({id: 6, message: body});
             return state;
        default:
             return state;
    }

}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
     ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogReducer;