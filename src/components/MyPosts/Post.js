import React from 'react';

const Post = ({ post }) => {
    const { _id, author, title, img, details } = post;
    return (
        <div className="text-center border mb-5 pb-5 rounded-b-xl">
            <img src={img} alt="" />
            <h2 className="mt-4  text-2xl capitalize font-semibold text-blue-700">{title}</h2>
            <h4 className="text-blue-400 mb-4">Author: {author}</h4>
            <p className="text-gray-500 capitalize">{details}</p>
            <div className=" mt-4">
            <button className="px-5 py-1 bg-rose-600 text-white duration-300 hover:bg-rose-800 ">Delete</button>
            <button className="px-5 py-1 bg-blue-600 text-white duration-300 hover:bg-blue-800 ">Edit</button>
        
            </div>
            </div>
    );
};

export default Post;