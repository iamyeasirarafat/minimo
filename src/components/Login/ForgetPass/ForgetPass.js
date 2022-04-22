
import { ExternalLinkIcon, } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import logo from '../../../assests/images/small-logo.png'

import auth from '../../../firebase/firebase.init'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth'
import toast from 'react-hot-toast'

const ForgetPass = () => {


  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
  const handlePassReset = (e) => {
    const email = e.target.email.value;
    e.preventDefault()
    sendPasswordResetEmail(email)
  }
  if (sending) {
    toast.success('Email is being Sent', {id:'forgetPassSending'})
  }
  if (error) {
    toast.error(error.message.slice(22), {id:'forgetPassError'})
  }
  

  return (
    <>
      <div className="min-h-full  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={logo}
              alt="logo"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Enter Your Email Address</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handlePassReset}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input

                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>

            </div>
              <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <ExternalLinkIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sent Password Reset Link
              </button>
              <p className='text-sm text text-gray-900 mt-2 ' >Back to  <Link to={'/login'} className='text-orange-400'>Sign in page</Link></p>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}
export default ForgetPass;