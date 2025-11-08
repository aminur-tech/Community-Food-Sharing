
import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Providers/AuthContext';


const Navbar = () => {
    const { user } = useContext(AuthContext)
    const link = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `px-4 py-2  rounded transition ${isActive ? 'text-[#9F62F2]  underline' : ''
                    }`
                }
            >
                Home
            </NavLink>

            <NavLink
                to="/apps"
                className={({ isActive }) =>
                    `px-4 py-2  rounded transition ${isActive ? 'text-[#9F62F2]  underline' : ''
                    }`
                }
            >
                Available Foods
            </NavLink>



        </>
    )

    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <NavLink to="/" className="btn btn-ghost text-xl text-[#9F62F2] ">
                        <span className='w-10'><img src="" alt="" /> </span> PlateShare
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-8">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    {
                        user ? <button>Logout</button> : <Link to='/auth/login' className='bth'>Login</Link>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;