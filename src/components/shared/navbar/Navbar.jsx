"use client"
import { ThemeSwitch } from "@/theme/ThemeSwitch";
import Link from "next/link";
// import Image from "next/image";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { id: 1, name: 'Home', href: '/' },
        { id: 2, name: 'Cars', href: '/destinations' },
        // { id: 3, name: 'My Bookings', href: '/bookings' },
        // { id: 4, name: 'Add Destinations', href: '/manage-tours/add' },
    ];

    return (
        <nav className="absolute top-0 left-0 w-full z-50 text-white bg-transparent">

            {/* Main Navbar */}
            <div className="flex items-center justify-between px-6 lg:px-10 py-5">

                {/* Logo */}
                <div className="flex items-center space-x-2 text-2xl font-bold tracking-wide">
                    <span className="text-red-500 border-2 border-red-500 px-1 rounded">C</span>
                    <span className="text-red-500 dark:text-white">Carlist</span>
                    {/* <Image className="border-2"
                        src="/assets/logo/logo.png"
                        alt="logo"
                        width={100}
                        height={10}
                    /> */}
                    {/* <img src="/assets/logo/logo.png" alt="" className="border-3"/> */}

                </div>

                {/* Desktop Menu (LG ONLY) */}
                <div className="hidden lg:flex space-x-6 text-sm font-medium text-red-500 dark:text-gray-300">
                    {/* Links */}
                    <div className="flex items-center space-x-8">
                        {navLinks.map(link =>
                            <Link
                                key={link.id}
                                href={link.href}
                                className={`text-sm font-medium transition-colors `}
                            >
                                {link.name}
                            </Link>)}
                    </div>
                </div>


                {/* Desktop Buttons (LG ONLY) */}
                <div className="hidden lg:flex items-center space-x-4 text-sm">
                    <button className="hover:text-gray-300">🌐 English</button>
                    <Link href={'/signup'}>
                        <button className="border border-gray-600 px-4 py-2 rounded hover:bg-gray-800 transition text-red-500 dark:text-gray-300">
                            Sing Up
                        </button>
                    </Link>

                    <Link href={'/singup'}>
                        <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded  font-semibold transition">
                            Log In
                        </button>
                    </Link>
                    <ThemeSwitch />

                </div>

                {/* Mobile Menu Icon (BELOW LG) */}
                <button
                    className="lg:hidden text-3xl cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="lg:hidden bg-black/95 backdrop-blur-lg px-6 py-6 space-y-5">

                    {/* Links */}
                    <div className="flex flex-col space-y-4 text-gray-300">
                        {navLinks.map(link =>
                            <Link
                                key={link.id}
                                href={link.href}
                                className={`text-sm font-medium transition-colors `}
                            >
                                {link.name}
                            </Link>)}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col space-y-3 pt-4">
                        <button className="border border-gray-600 px-4 py-2 rounded hover:bg-gray-800">
                            🌐 English
                        </button>
                        <button className="border border-gray-600 px-4 py-2 rounded hover:bg-gray-800">
                            Sing Up
                        </button>
                        <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white font-semibold">
                            Sing IN
                        </button>
                    </div>

                </div>
            )}

        </nav>
    );
};

export default Navbar;