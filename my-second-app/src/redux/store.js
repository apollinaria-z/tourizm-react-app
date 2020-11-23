import dialogReducer from './dialog-reducer';
import profileReducer from './profile-reducer';

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
        this._callSubscriber(this._state);

    }

}

  export default store;
  window.store = store;