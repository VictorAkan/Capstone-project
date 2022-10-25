import { Link } from 'react-router-dom';
import logo from '../assets/images/clogo.png';

export const Navbar = () => {
    return (
        <header className="navbar--head">
            <div className="p-3 bg-red-700">
                <nav className="flex items-center text-white">
                    <div className="logo flex items-center">
                        <img className="w-16" src={logo} alt="logo" />
                        <h2 className="text-4xl font-bold">Capstone</h2>
                    </div>
                    <div className="ml-80">
                        <ul className="flex space-x-5">
                            <li>
                                <Link className="hover:text-red-200" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="hover:text-red-200" to="/about">About</Link>
                            </li>
                            <li>
                                <Link className="hover:text-red-200" to="/dealership">Dealership</Link>
                            </li>
                            <li>
                                <Link className="hover:text-red-200" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="end flex items-center space-x-4 ml-auto">
                        <Link to="/login" className="">Login</Link>
                        <Link to="/signup" className="bg-white hover:bg-red-100 text-red-700 p-2">Signup</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}