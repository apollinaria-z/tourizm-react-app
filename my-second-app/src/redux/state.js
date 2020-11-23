const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {

    _state: {
        profilePage: {postsData: [
                                {id: 1, message: "HI! it is my post", likesCount: 12},
                                {id: 2, message: "Hey!! my friend", likesCount: 6},
                                {id: 3, message: "Wow! you are supercool!!", likesCount: 666},
                               ],
                     newPostText: 'place for your text'},
        dialogPage: {messagesData: [
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
                  newMessageBody: "" }
      },
    _callSubscriber() {
        console.log('state was changed');
    },
    getState() {
        return this._state;},
    subscribe(observer) {
         this._callSubscriber = observer;},

    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                 id:5,
                 message: this._state.profilePage.newPostText,
                  likesCount: 0,
                        };
                  this._state.profilePage.postsData.push(newPost);
                  this._state.profilePage.newPostText = '';
                  this._callSubscriber(this._state);
        } else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if(action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if(action.type === SEND_MESSAGE){
           let body = this._state.dialogPage.newMessageBody;
           this._state.dialogPage.newMessageBody = '';
           this._state.dialogPage.messagesData.push({id: 6, message: body});
           this._callSubscriber(this._state);
         }

    }

}

export const addPostActionCreator = () => ({ type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
     ({type: UPDATE_NEW_POST_TEXT, newText:text})

export const sendMessageCreator = () => ({ type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
     ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


  export default store;
  window.store = store;