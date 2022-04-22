import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";

const CreatePost = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return (
            <div className='text-center text-black'>
                <p>Initialising...</p>
            </div>
        );
    }
    const handlePostSubmit = event => {
        event.preventDefault();
        const title = event.target.title.value;
        const details = event.target.details.value;
        const img = event.target.img.value;
        const authorId = user.uid;
        const post = { authorId: authorId, title: title, details: details, img: img };
        console.log(post);
        fetch('http://localhost:5000/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(post)
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }
    return (
        <>
            <div className="w-4/5 mx-auto mt-10">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Create A new post</h3>
                            <p className="mt-1 text-sm text-gray-600">
                                Give a Blog Title and Description with a photo URL
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={handlePostSubmit}>
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                Post Title
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="title"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                            Post Details
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                required
                                                id="about"
                                                name="details"
                                                rows={3}
                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                placeholder="Your post details will be here"
                                                defaultValue={''}
                                            />
                                        </div>

                                    </div>
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-3 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                Cover Img URL
                                            </label>
                                            <input
                                                type="text"
                                                name="img"
                                                id="first-name"
                                                autoComplete="url"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>




                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}
export default CreatePost;