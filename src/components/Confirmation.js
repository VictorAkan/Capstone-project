import { Link } from 'react-router-dom';

export const Confirmation = ({ name }) => {
    return (
        <div>
            <div className="flex justify-center mt-5">
                <div className="drop-shadow-md bg-white mt-5 p-4">
                    <h1 className="font-bold text-red-600 text-3xl">Hello {name}!</h1>
                    <h2>Account created successfully</h2>
                    <div className="wrapper">
                        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                    </div>
                    <div className="flex items-center">
                        <p>Proceed to</p>
                        <Link className="ml-2 p-2 bg-red-600 text-white hover:bg-red-500" to="/login">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}