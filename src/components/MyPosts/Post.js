import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const navigate = useNavigate()
    const { _id, author, title, img, details } = post;

    const handleDelete = (id) => {
        fetch(`https://limitless-earth-66395.herokuapp.com/${id}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(data => {
            if(data.deletedCount === 1){
                toast.success('you have successfully deleted')
                Location.reload(); 
            }
        })
    }
    return (
        <div className="text-center border mb-5 pb-5 rounded-b-xl">
            <img src={img} alt="" />
            <h2 className="mt-4  text-2xl capitalize font-semibold text-blue-700">{title}</h2>
            <h4 className="text-blue-400 mb-4">Author: {author}</h4>
            <p className="text-gray-500 capitalize">{details}</p>
            <div className=" mt-4">
            <button onClick = {() =>handleDelete(_id)}  className="px-5 py-1 bg-rose-600 text-white duration-300 hover:bg-rose-800 ">Delete</button>
            <button onClick={()=>{navigate(`/updatepost/${_id}`)}} className="px-5 py-1 bg-blue-600 text-white duration-300 hover:bg-blue-800 ">Edit</button>
        
            </div>
            </div>
    );
};

export default Post;