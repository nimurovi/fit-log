import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.png';
const Navbar = () => {
    return (
        <div className=" border-b border-gray-600" >
            <div className="container mx-auto navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>

                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src={logo} alt="Logo" width={32} height={32} />
                        <Link href="/" className="btn btn-ghost text-xl">FITLOG</Link>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>

                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">plan</a>
                    <a className="btn">saved</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;  