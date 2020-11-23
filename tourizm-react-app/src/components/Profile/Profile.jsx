import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {

    return(
    <div>
            <MyPosts postsData={props.profilePage.postsData}
                      dispatch={props.dispatch}
                      newPostText={props.profilePage.newPostText}
                      />
    </div>
    );
}

export default Profile;