import {rerenderEntireTree} from '../render';

let state = {
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
                             ],}

  }

 export let addPost = () =>{

    let newPost = {
        id:5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
  }

  export let updateNewPostText = (newText) =>{

      state.profilePage.newPostText = newText;
      rerenderEntireTree(state);
    }

  export default state;