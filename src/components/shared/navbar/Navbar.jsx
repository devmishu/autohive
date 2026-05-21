"use client"

import { signOut, useSession } from "@/lib/auth-client";
import { ThemeSwitch } from "@/theme/ThemeSwitch";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const session = useSession();
    const user = session?.data?.user;

    const navLinks = [
        { id: 1, name: 'Home', href: '/' },
        { id: 2, name: 'Explore Cars', href: '/explorecars' },
        { id: 3, name: 'Add Car', href: '/manage-cars/addcar' },
        { id: 4, name: 'My Added Cars', href: '/manage-cars/myaddedcars' },
        { id: 5, name: 'My Bookings', href: '/manage-cars/mybookings' },
    ];


    const handleCloseMenu = () => {
        setOpen(false);
    };

    return (
        <nav className="absolute top-0 left-0 w-full z-50 text-white bg-transparent">


            <div className="flex items-center justify-between px-6 lg:px-10 py-5">

                {/* Logo */}
                <div className="flex items-center space-x-2 text-2xl font-bold tracking-wide">
                    <span className="text-red-500 border-2 border-red-500 px-1 rounded">C</span>
                    <span className="text-primary">Carlist</span>
                </div>

                {/* Desktop Menu (LG ONLY) */}
                <div className="hidden lg:flex space-x-6 text-sm font-medium text-primary">
                    <div className="flex items-center space-x-8">
                        {navLinks.map(link => (
                            <Link
                                key={link.id}
                                href={link.href}
                                className="text-sm font-medium transition-colors hover:text-red-500"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Desktop Buttons (LG ONLY) */}
                <div className="hidden lg:flex items-center space-x-4 text-sm">
                    {user ? (
                        <button
                            onClick={() => signOut()}
                            className="button-primary">
                            Log Out
                        </button>
                    ) : (
                        <>
                            <Link href={'/signup'}>
                                <button className="button-outline">
                                    Sign Up
                                </button>
                            </Link>

                            <Link href={'/login'}>
                                <button className="button-primary">
                                    Log In
                                </button>
                            </Link>
                        </>
                    )}

                    <ThemeSwitch />
                </div>

                {/* Mobile Menu Icon (BELOW LG) */}
                <button
                    className="lg:hidden text-3xl cursor-pointer text-primary z-50 relative"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <HiX /> : <HiMenu />}
                </button>
            </div>


            <div
                className={`lg:hidden fixed top-0 right-0 h-screen w-72 max-w-[80vw] z-40 p-6 pt-24 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-in-out backdrop-blur-xl   bg-white/90 dark:bg-zinc-950/90 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div>

                    <div className="flex flex-col space-y-5">
                        {navLinks.map(link => (
                            <Link
                                key={link.id}
                                href={link.href}
                                onClick={handleCloseMenu}
                                className="text-base font-medium text-primary hover:text-red-500 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>


                <div className="flex flex-col space-y-4 pt-6 border-t border-zinc-200/50 dark:border-zinc-700/50">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-secondary">Theme</span>
                        <ThemeSwitch />
                    </div>

                    {user ? (
                        <button
                            onClick={() => {
                                signOut();
                                handleCloseMenu();
                            }}
                            className="button-primary w-full">
                            Log Out
                        </button>
                    ) : (
                        <>
                            <Link href={'/signup'} onClick={handleCloseMenu} className="w-full">
                                <button className="button-outline w-full">
                                    Sign Up
                                </button>
                            </Link>
                            <Link href={'/login'} onClick={handleCloseMenu} className="w-full">
                                <button className="button-primary w-full">
                                    Log In
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>


            {open && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/40 dark:bg-black/60 z-30 transition-opacity duration-300"
                    onClick={handleCloseMenu}
                />
            )}

        </nav>
    );
};

export default Navbar;