import React from 'react';

const HomePost = ({post}) => {
    const {author, title, img, details } = post;
    return (
        <div>
           <div className="text-center border mb-5 pb-5 rounded-b-xl">
            <img src={img} alt="" />
            <h2 className="mt-4  text-2xl capitalize font-semibold text-blue-700">{title}</h2>
            <h4 className="text-blue-400 mb-4">Author: {author}</h4>
            <p className="text-gray-500 capitalize">{details}</p>
            </div> 
        </div>
    );
};

export default HomePost;