import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import Post from './Post';

const MyPosts = () => {
    const [user, loading] = useAuthState(auth);
    const [posts, setPosts] = useState([])
    const id = user.uid;
    const url = `http://localhost:5000/${id}`
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then(data => setPosts(data))
    }, [])

    if (loading) {
        return (
            <div className='text-center text-black'>
                <p>Initialising...</p>
            </div>
        );
    }

    return (
        <div className='w-4/5 mx-auto'>
            <h2 className='text-center text-5xl font-mono font-semibold text-blue-600 my-8'>Your Posts</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
                {
                    posts.map(post => <Post key={post._id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default MyPosts;