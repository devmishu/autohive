"use client";

import { signOut, useSession } from "@/lib/auth-client";
import { ThemeSwitch } from "@/theme/ThemeSwitch";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Button, Dropdown, Header, Label } from "@heroui/react";
import { redirect } from 'next/navigation';
import { Avatar } from "@heroui/react";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();


    const pathname = usePathname();
    const session = useSession();
    const user = session?.data?.user;

    const navLinks = [
        { id: 1, name: 'Home', href: '/' },
        { id: 2, name: 'Explore Cars', href: '/explorecars' },
        { id: 3, name: 'Add Car', href: '/manage-cars/addcar' },
        { id: 4, name: 'My Bookings', href: '/manage-cars/mybookings' },
    ];

    const handleCloseMenu = () => {
        setOpen(false);
    };

    const handleSingout = () => {
        signOut();
        router.refresh();
        redirect("/");


    }

    return (
        <nav className="sticky  top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md  dark:bg-zinc-950/70  text-primary">

            <div className="flex items-center justify-between px-6 lg:px-10 py-4">

                {/* Logo */}
                <div className="flex items-center space-x-2 text-2xl font-bold tracking-wide">
                    <span className="text-red-500 border-2 border-red-500 px-1 rounded font-black">C</span>
                    <span className="text-red-500">Carlist</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-6 text-sm font-medium">
                    <div className="flex items-center space-x-8">
                        {navLinks.map(link => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors ${isActive
                                        ? "text-red-500 font-bold"
                                        : "text-zinc-600 dark:text-zinc-300 hover:text-red-500 dark:hover:text-red-500"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="flex items-center space-x-4">

                    {/* Desktop Buttons & User Profile Dropdown */}
                    <div className="hidden lg:flex items-center space-x-4 text-sm">
                        {user ? (
                            /* IF LOGGED IN */
                            <Dropdown>
                                {/* Button কালার ফিক্সড: লাইট মোডে বর্ডার ও ডার্ক টেক্সট, ডার্ক মোডে ডার্ক বর্ডার ও হোয়াইট টেক্সট */}
                                <Button
                                    aria-label="User Profile Menu"
                                    variant="bordered"
                                    className="py-6 flex items-center gap-2 border-zinc-200 dark:border-zinc-800 bg-zinc-900 text-zinc-800 dark:text-white font-medium shadow-sm"
                                >

                                    <Avatar>
                                        <Avatar.Image alt={user?.name} src={user.image} />
                                        <Avatar.Fallback className="text-2xl font-bold">
                                            {user?.name[0]}
                                        </Avatar.Fallback>
                                    </Avatar>
                                    <span className="text-primary">

                                        {user?.name || "My Account"}</span>
                                    <span className="text-[10px] text-white">▼</span>
                                </Button>
                                {/* Popover এর ব্যাকগ্রাউন্ড থিম অনুযায়ী ফিক্সড */}
                                <Dropdown.Popover className="min-w-[200px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl rounded-xl">
                                    <Dropdown.Menu className="text-zinc-800 dark:text-zinc-200">
                                        <Dropdown.Section>
                                            <Header className="text-zinc-400 dark:text-zinc-500 font-bold text-xs px-2 py-1 uppercase tracking-wider">User Dashboard</Header>

                                            <Dropdown.Item id="add-car" textValue="Add Car" className="hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg">
                                                <Link href="/manage-cars/addcar" className="w-full block py-1">
                                                    <Label className="cursor-pointer text-zinc-700 dark:text-zinc-300">Add Car</Label>
                                                </Link>
                                            </Dropdown.Item>

                                            <Dropdown.Item id="my-bookings" textValue="My Bookings" className="hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg">
                                                <Link href="/manage-cars/mybookings" className="w-full block py-1">
                                                    <Label className="cursor-pointer text-zinc-700 dark:text-zinc-300">My Bookings</Label>
                                                </Link>
                                            </Dropdown.Item>

                                            <Dropdown.Item id="my-added-cars" textValue="My Added Cars" className="hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg">
                                                <Link href="/manage-cars/myaddedcars" className="w-full block py-1">
                                                    <Label className="cursor-pointer text-zinc-700 dark:text-zinc-300">My Added Cars</Label>
                                                </Link>
                                            </Dropdown.Item>
                                        </Dropdown.Section>

                                        <Dropdown.Item
                                            id="logout"
                                            textValue="Log Out"
                                            className="text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg"
                                        >
                                            <div onClick={handleSingout} className="w-full h-full py-1">
                                                <Label className="cursor-pointer font-semibold">Log Out</Label>
                                            </div>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Popover>
                            </Dropdown>
                        ) : (
                            /* IF NOT LOGGED IN */
                            <>
                                {/* Sign Up Button: গ্লোবাল ক্লাস বাদ দিয়ে সরাসরি টেইলউইন্ড দিয়ে লাইট/ডার্ক ফিক্সড করা হয়েছে */}
                                <Link href={'/signup'}>
                                    <button className="px-5 py-2 rounded-xl font-medium text-sm border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 bg-white/80 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300 shadow-sm">
                                        Sign Up
                                    </button>
                                </Link>
                                <Link href={'/login'}>
                                    <button className="px-5 py-2 rounded-xl font-medium text-sm bg-red-500 hover:bg-red-600 text-white transition-all duration-300 shadow-sm">
                                        Log In
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Theme Switcher */}
                    <div className="relative z-50 flex items-center">
                        <ThemeSwitch />
                    </div>

                    {/* Mobile Menu Icon */}
                    <button
                        className="lg:hidden text-2xl cursor-pointer text-zinc-800 dark:text-white z-50 relative flex items-center"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle Menu"
                    >
                        {open ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <div
                className={`lg:hidden fixed top-0 right-0 h-screen w-72 max-w-[80vw] z-40 p-6 pt-24 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-in-out backdrop-blur-xl bg-white/95 dark:bg-zinc-950/95 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div>
                    <div className="flex flex-col space-y-5">
                        {navLinks.map(link => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    onClick={handleCloseMenu}
                                    className={`text-base font-medium transition-colors ${isActive
                                        ? "text-red-500 font-bold border-l-2 border-red-500 pl-2"
                                        : "text-zinc-700 dark:text-zinc-300 hover:text-red-500"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}

                        {user && (
                            <Link
                                href="/manage-cars/myaddedcars"
                                onClick={handleCloseMenu}
                                className={`text-base font-medium transition-colors ${pathname === "/manage-cars/myaddedcars"
                                    ? "text-red-500 font-bold border-l-2 border-red-500 pl-2"
                                    : "text-zinc-700 dark:text-zinc-300 hover:text-red-500"
                                    }`}
                            >
                                My Added Cars
                            </Link>
                        )}
                    </div>
                </div>

                {/* Mobile Bottom Actions */}
                <div className="flex flex-col space-y-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                    {user ? (
                        <button
                            onClick={() => {
                                handleSingout();
                                handleCloseMenu();
                            }}
                            className="w-full py-2.5 rounded-xl font-medium text-sm bg-red-500 hover:bg-red-600 text-white transition-all duration-300"
                        >
                            Log Out
                        </button>
                    ) : (
                        <>
                            <Link href={'/signup'} onClick={handleCloseMenu} className="w-full">
                                <button className="w-full py-2.5 rounded-xl font-medium text-sm border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300">
                                    Sign Up
                                </button>
                            </Link>
                            <Link href={'/login'} onClick={handleCloseMenu} className="w-full">
                                <button className="w-full py-2.5 rounded-xl font-medium text-sm bg-red-500 hover:bg-red-600 text-white transition-all duration-300">
                                    Log In
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {/* Overlay */}
            {open && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/20 dark:bg-black/50 z-30 transition-opacity duration-300"
                    onClick={handleCloseMenu}
                />
            )}

        </nav>
    );
};

export default Navbar;