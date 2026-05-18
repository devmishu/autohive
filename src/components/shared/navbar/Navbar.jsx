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
        { id: 2, name: 'Explore Cars', href: '/explorecars' },
        { id: 3, name: 'Add Car', href: '/manage-cars/add' },
        { id: 4, name: 'My Bookings', href: '/bookings' }, 
    ];

    return (
        <nav className="absolute top-0 left-0 w-full z-50 text-white bg-transparent">

            {/* Main Navbar */}
            <div className="flex items-center justify-between px-6 lg:px-10 py-5">

                {/* Logo */}
                <div className="flex items-center space-x-2 text-2xl font-bold tracking-wide">
                    <span className="text-red-500 border-2 border-red-500 px-1 rounded">C</span>
                    <span className="text-primary">Carlist</span>
                    {/* <Image className="border-2"
                        src="/assets/logo/logo.png"
                        alt="logo"
                        width={100}
                        height={10}
                    /> */}
                    {/* <img src="/assets/logo/logo.png" alt="" className="border-3"/> */}

                </div>

                {/* Desktop Menu (LG ONLY) */}
                <div className="hidden lg:flex space-x-6 text-sm font-medium text-primary">
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

                    <Link href={'/signup'}>
                        <button className="button-outline">
                            Sing Up
                        </button>
                    </Link>

                    <Link href={'/login'}>
                        <button className="button-primary">
                            Log In
                        </button>
                    </Link>
                    <ThemeSwitch />

                </div>

                {/* Mobile Menu Icon (BELOW LG) */}
                <button
                    className="lg:hidden text-3xl cursor-pointer text-primary"
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

                        <button className="button-outline text-white">
                            Sing Up
                        </button>
                        <button className="button-primary">
                            Log In
                        </button>
                    </div>

                </div>
            )}

        </nav>
    );
};

export default Navbar;