import React, { useState, useEffect } from 'react';

export const Posts = props => {
    const [posts, setPosts] = useState([]);
    //ajax calls -comonentDidMount
    useEffect(() => {
        const init = async () => {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(url);
            const posts = await response.json();
            setPosts(posts);
        }
        init();

    })

    return <div><h1>Posts</h1>
        {
            posts.map(post => {
                return <div key={post.id}>
                    <h2>User Id :{post.userId} </h2>
                    <h3>{post.title} </h3>
                    <p>{post.body}</p>
                </div>
            })
        }
    </div>
}