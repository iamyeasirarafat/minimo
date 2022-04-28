import React, { useEffect, useState } from 'react';
import HomePost from './HomePost';


const Home = () => {
    const [posts, setPosts] = useState([])
    const url = `https://limitless-earth-66395.herokuapp.com/`
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div className='w-4/5 mx-auto'>
            <h2 className='text-center text-5xl font-mono font-semibold text-blue-600 my-8'>Welcome</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
                {
                    posts.map(post => <HomePost key={post._id} post={post}></HomePost>)
                }
            </div>
        </div>
    );
};

export default Home;