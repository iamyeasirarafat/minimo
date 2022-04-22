import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useSignInWithGoogle, useSignInWithFacebook, useSignInWithGithub} from 'react-firebase-hooks/auth';
import { faFacebookF, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'
import auth from '../../../firebase/firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Social = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth)
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    if(googleUser || githubUser || facebookUser){
        toast.success('Logged In successful', {id:'SocialCreated'})
        navigate(from, { replace: true });
    }
    if(googleError || githubError || facebookError){
       toast.error(`${googleError? googleError.message.slice(22,) : ''} ${githubError? githubError.message.slice(22) : ''} ${facebookError? facebookError.message.slice(22) : ''} `, {id:'loginError'})
    } 
    
    return (
       <>
       <h2 className='text-center mb-3 text-gray-400'>Or sign in with <span className='font-bold'>Social Media</span></h2>
        <div className='w-[40%] justify-evenly flex mx-auto '>
            <button onClick={()=>signInWithGoogle()} className=' py-2 px-3 duration-500 border-2 text-2xl rounded-md hover:text-white hover:bg-slate-500'><FontAwesomeIcon icon={faGoogle} /></button>
            <button onClick={()=>signInWithFacebook()} className=' py-2 px-3 duration-500 border-2 text-2xl rounded-md hover:text-white hover:bg-slate-500'><FontAwesomeIcon icon={faFacebookF} /></button>
            <button onClick={()=>signInWithGithub()} className=' py-2 px-3 duration-500 border-2 text-2xl rounded-md hover:text-white hover:bg-slate-500'><FontAwesomeIcon icon={faGithub} /></button>
        </div>
       </>
    );
};

export default Social;