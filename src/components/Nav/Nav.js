/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { signOut } from 'firebase/auth'
import { Fragment, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import userImg from '../../assets/images/user.png'
import auth from '../../firebase/firebase.init'



const Nav = () => {
    const [user, loading] = useAuthState(auth);
    const [loggedIn, setLoggedIn] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            setLoggedIn(user)
        }
    }, [user]);
    const { photoURL } = loggedIn;
    if (loading) {
        return (
            <div className='text-center text-black text-sm'>
                <p>Initialising Navbar...</p>
            </div>
        );
    };



    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div onClick={() => navigate('/')} className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block lg:hidden h-8 w-auto"
                                        src={logo}
                                        alt="logo"
                                    />
                                    <img
                                        className="hidden lg:block h-8 w-auto"
                                        src={logo}
                                        alt="logo"
                                    />
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex text-gray-300 font-medium items-baseline space-x-4">
                                        <NavLink to='/' className={({ isActive }) =>
                                            isActive ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm hover:bg-gray-700 hover:text-white duration-300 ease-in' : 'px-3 py-2 rounded-md text-sm hover:bg-gray-700 hover:text-white duration-300 ease-in'}>Home</NavLink>
                                        {/* <NavLink to='/#services' className={({ isActive }) =>
                                            isActive ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm hover:bg-gray-700 hover:text-white duration-300 ease-in' : 'px-3 py-2 rounded-md text-sm hover:bg-gray-700 hover:text-white duration-300 ease-in'}>Services</NavLink> */}
                                        <NavLink to='/blogs' className={({ isActive }) =>
                                            isActive ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm hover:bg-gray-700 hover:text-white duration-300 ease-in' : 'px-3 py-2 rounded-md text-sm hover:bg-gray-700 hover:text-white duration-300 ease-in'}>Blog</NavLink>
                                        <NavLink to='/about' className={({ isActive }) =>
                                            isActive ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm hover:bg-gray-700 hover:text-white duration-300 ease-in' : 'px-3 py-2 rounded-md text-sm hover:bg-gray-700 hover:text-white duration-300 ease-in'}>About</NavLink>

                                    </div>
                                </div>
                            </div>
                            {
                                user ? <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <button
                                        type="button"
                                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    >
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-3 z-10 relative">
                                        <div>
                                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src={photoURL ? photoURL : userImg}
                                                    alt="profile pic"
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">

                                                <Menu.Item>
                                                    <NavLink to='/userdetails' className={({ isActive }) =>
                                                        isActive ? 'bg-gray-100  block px-4 py-2 text-sm text-gray-700' : 'hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700'}>Your Profile</NavLink>
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <NavLink to='/usersetting' className={({ isActive }) =>
                                                        isActive ? 'bg-gray-100 block px-4 py-2 text-sm text-gray-700' : 'hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700'}>Settings</NavLink>
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <NavLink to='' onClick={() => signOut(auth)} className={({ isActive }) =>
                                                        isActive ? 'bg-gray-100 block px-4 py-2 text-sm text-gray-700' : 'hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700'}>Sign out</NavLink>
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div> : <Link className='text-white hover:bg-gray-100 hover:text-gray-700 font-bold px-5 py-2 bg-gray-700 rounded-lg' to={'/login'}>Login</Link>
                            }
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <NavLink to='/' className={({ isActive }) =>
                                isActive ? 'bg-gray-900  px-3 py-2 text-white block rounded-md text-sm hover:bg-gray-700 hover:text-white duration-300 ease-in' : 'px-3 text-white block py-2 rounded-md text-sm hover:bg-gray-700 hover:text-white duration-300 ease-in'}>Home</NavLink>
                            {/* <NavLink to='/#services' className={({ isActive }) =>
                                isActive ? 'bg-gray-900  px-3 py-2 text-white block  rounded-md text-sm hover:bg-gray-700 hover:text-white duration-300 ease-in' : 'px-3 text-white block  py-2 rounded-md text-sm hover:bg-gray-700 hover:text-white duration-300 ease-in'}>Services</NavLink> */}
                            <NavLink to='/blogs' className={({ isActive }) =>
                                isActive ? 'bg-gray-900  px-3 py-2 text-white  block rounded-md text-sm hover:bg-gray-700 hover:text-white duration-300 ease-in' : 'px-3 text-white  block py-2 rounded-md text-sm hover:bg-gray-700 hover:text-white duration-300 ease-in'}>Blog</NavLink>
                            <NavLink to='/about' className={({ isActive }) =>
                                isActive ? 'bg-gray-900  px-3 py-2 text-white  block rounded-md text-sm hover:bg-gray-700 hover:text-white duration-300 ease-in' : 'px-3 text-white block  py-2 rounded-md text-sm hover:bg-gray-700 hover:text-white duration-300 ease-in'}>About</NavLink>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Nav;