export const Contact = () => {
    return (
        <div className="px-20">
            <div>
                <div className="flex justify-center">
                    <h2 className="capitalize font-bold mt-10 text-3xl text-red-500">Contact Us For any related issues</h2>
                </div>
                <div className="contact-form border border-4 border-red-600 mt-7">
                    <form className="p-4" action="">
                        <div className="flex items-center px-32">
                            <div>
                                <label className="capitalize text-xl text-red-900" htmlFor="first-name">First name</label>
                                <div>
                                    <input type="text" 
                                        className="w-full p-2 mt-3 bg-slate-100 focus:outline-none focus:ring focus:ring-red-600"
                                    />
                                </div>
                            </div>
                            <div className="ml-auto">
                                <label className="capitalize text-xl text-red-900" htmlFor="last-name">Last name</label>
                                <div>
                                    <input type="text" 
                                        className="w-full p-2 mt-3 bg-slate-100 focus:outline-none focus:ring focus:ring-red-600"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center px-32 mt-5">
                            <div>
                                <label className="capitalize text-xl text-red-900" htmlFor="phone">Phone</label>
                                <div>
                                    <input type="tel" 
                                        className="w-full p-2 mt-3 bg-slate-100 focus:outline-none focus:ring focus:ring-red-600"
                                    />
                                </div>
                            </div>
                            <div className="ml-auto">
                                <label className="capitalize text-xl text-red-900" htmlFor="first-name">Email</label>
                                <div>
                                    <input type="email" 
                                        className="w-full p-2 mt-3 bg-slate-100 focus:outline-none focus:ring focus:ring-red-600"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="px-32 mt-5">
                            <label className="capitalize text-xl text-red-900" htmlFor="details">Details</label>
                            <div>
                                <textarea name="details" id=""
                                    className="w-full p-2 mt-3 bg-slate-100 focus:outline-none focus:ring focus:ring-red-600"
                                ></textarea>
                            </div>
                        </div>
                        <div className="px-32 mt-5">
                            <button className="w-full bg-red-600 text-white hover:bg-red-500 p-3 text-xl">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}