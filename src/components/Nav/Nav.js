import { signOut } from 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { Link,  } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

import auth from '../../firebase/firebase.init'



const Nav = () => {
    const [user, loading] = useAuthState(auth);



    if (loading) {
        return (
            <div className='text-center text-black text-sm'>
                <p>Initialising Navbar...</p>
            </div>
        );
    };



    return (

        <nav className='w-11/12 mx-auto flex justify-between pt-5'>
            <div className="">
                <Link to="/"><img className="w-36" src={logo} alt="" /></Link>
            </div>
            <div className="">
                {
                    user ? <ul className="flex gap-x-4 items-center">
                        <li className='text-blue-500 hover:text-blue-700 duration-300'><Link to='/createpost'>Create post</Link></li>
                        <li className='text-blue-500 hover:text-blue-700 duration-300'><Link to='/myposts'>Manage Post</Link></li>
                        <li className=''><button onClick={() => signOut(auth)} className='px-4 py-2 text-white bg-blue-500 rounded-xl hover:bg-blue-600 duration-300'>Sign Out</button></li>
                    </ul> : <Link to='/login' className='px-4 py-2 text-white bg-blue-500 rounded-xl hover:bg-blue-600 duration-300'>Log in / Register</Link>
                }
            </div>
        </nav>


    )
}

export default Nav;