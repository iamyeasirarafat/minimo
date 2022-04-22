
import { FingerPrintIcon } from '@heroicons/react/solid';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import auth from '../../../firebase/firebase.init';
import Social from '../Social/Social';




const Register = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";
  const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const handleRegister = (e) => {
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    e.preventDefault()
    createUserWithEmailAndPassword(email, password,)
    handleUpdateName(name)
  }
  const handleUpdateName = async (name) => {
    await updateProfile({ displayName: name })
  }
  if (user) {
    toast.success('Account Successfully Created!', { id: 'registerCreated' })
    toast.success('Email varification link has been sent to your email, please varify your email', { id: 'registerEmailVarification' })
    navigate(from, { replace: true });
    

  }
  if (loading || updating) {
    toast.success('Creating Account', { id: 'registerLoading' })
  }
  if (error || updateProfileError) {
    if (error?.message.includes('email-already-in-use')) {
      toast.error('Email already in use', { id: 'registerError' })
    }
    if (error?.message.includes('6 character')) {
      toast.error('Password Should be longer than 6 character', { id: 'registerError' })
    }
    else {
      toast.error(error?.message.slice(22), { id: 'registerError' })
    }
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
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register With your Email</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{'  '}
              <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                start your 14-day free trial
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleRegister}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Your Full Name
                </label>
                <input

                  id="email-address"
                  name="name"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
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
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input

                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="terms-and-condition"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Agree with <span className='text-orange-400'>terms and conditions</span>
                </label>
              </div>


            </div>

            <div>

              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <FingerPrintIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Register
              </button>
              <p className='text-sm text text-gray-900 mt-2 ' >Already Have an Account? <Link to={'/login'} className='text-orange-400'>Sign In here</Link></p>
            </div>
          </form>
        </div>
      </div>
      <Social></Social>
    </>
  )
}
export default Register;
