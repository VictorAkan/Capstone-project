import { Link } from 'react-router-dom';
import logo from '../../assets/images/clogo.png';
import { FaUser } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase-config';

export const AdminNavbar = () => {
    const logout = async () => {
        try {
            await signOut(auth)
            console.log('you are logged out')
        } catch(error) {
            console.log(error.message)
        }
    }

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
                                <Link className="hover:text-red-200" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="end flex items-center space-x-4 ml-auto">
                        <Link className="text-white">
                            <FaUser />
                        </Link>
                        <Link onClick={logout} to="/">Logout</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}