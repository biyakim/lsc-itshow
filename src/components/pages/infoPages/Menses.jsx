import React from 'react';
import Post from '../../ui/Post';

function Menses(props) {
    const posts = ["정보1", "정보2"];

    return (
        <>
            <Post where="허리" posts={posts}></Post>
        </>
    )
}

export default Menses;