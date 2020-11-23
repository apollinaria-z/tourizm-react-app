const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {postsData: [
                                                   {id: 1, message: "HI! it is my post", likesCount: 12},
                                                   {id: 2, message: "Hey!! my friend", likesCount: 6},
                                                   {id: 3, message: "Wow! you are supercool!!", likesCount: 666},
                                                  ],
                    newPostText: 'place for your text'};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
                let newPost = {
                    id:5,
                    message: state.newPostText,
                    likesCount: 0,
                 };
                state.postsData.push(newPost);
                state.newPostText = '';
                return state;
        case UPDATE_NEW_POST_TEXT:
                state.newPostText = action.newText;
                return state;
        default:
                return state;
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
     ({type: UPDATE_NEW_POST_TEXT, newText:text})

export default profileReducer;