import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
            {id: 1, message: "HI! it is my post", likesCount: 12},
            {id: 2, message: "Hey!! my friend", likesCount: 6},
            {id: 3, message: "Wow! you are supercool!!", likesCount: 666},
        ]
   let postsElements = postsData.map(
            p => <Post message={p.message} likesCount={p.likesCount}/>);

    return(
            <div className={s.postsBlock}>
                <h2>My posts</h2>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                  { postsElements }
               </div>
             </div>

    );
}

export default MyPosts;