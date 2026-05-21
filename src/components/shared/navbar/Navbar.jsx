"use client";

import { signOut, useSession } from "@/lib/auth-client";
import { ThemeSwitch } from "@/theme/ThemeSwitch";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Button, Dropdown, Header, Label } from "@heroui/react";

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
        signOut().then(() => {
            router.push('/');
            router.refresh();
        }).catch((err) => {
            console.error("Signout error:", err);
            router.push('/');
        });
    };

    return (
        <nav className="absolute top-0 left-0 w-full z-50 text-white bg-transparent">

            <div className="flex items-center justify-between px-6 lg:px-10 py-5">

                {/* Logo */}
                <div className="flex items-center space-x-2 text-2xl font-bold tracking-wide">
                    <span className="text-red-500 border-2 border-red-500 px-1 rounded font-black">C</span>
                    <span className="text-primary">Carlist</span>
                </div>

                
                <div className="hidden lg:flex space-x-6 text-sm font-medium text-primary">
                    <div className="flex items-center space-x-8">
                        {navLinks.map(link => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors ${isActive ? "text-red-500 font-bold" : "hover:text-red-500"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>

               
                <div className="flex items-center space-x-4">

                    
                    <div className="hidden lg:flex items-center space-x-4 text-sm">
                        {user ? (
                          
                            <Dropdown>
                                <Button aria-label="User Profile Menu" variant="secondary" className="flex items-center gap-2">
                                    <span>👤 {user?.name || "My Account"}</span>
                                    <span className="text-[10px]">▼</span>
                                </Button>
                                <Dropdown.Popover className="min-w-[200px]">
                                    <Dropdown.Menu>
                                        <Dropdown.Section>
                                            <Header>User Dashboard</Header>

                                            <Dropdown.Item id="add-car" textValue="Add Car">
                                                <Link href="/manage-cars/addcar" className="w-full block">
                                                    <Label className="cursor-pointer">Add Car</Label>
                                                </Link>
                                            </Dropdown.Item>

                                            <Dropdown.Item id="my-bookings" textValue="My Bookings">
                                                <Link href="/manage-cars/mybookings" className="w-full block">
                                                    <Label className="cursor-pointer">My Bookings</Label>
                                                </Link>
                                            </Dropdown.Item>

                                            <Dropdown.Item id="my-added-cars" textValue="My Added Cars">
                                                <Link href="/manage-cars/myaddedcars" className="w-full block">
                                                    <Label className="cursor-pointer">My Added Cars</Label>
                                                </Link>
                                            </Dropdown.Item>
                                        </Dropdown.Section>

                                        <Dropdown.Item
                                            id="logout"
                                            textValue="Log Out"
                                            className="text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30"
                                        >
                                            <div onClick={handleSingout} className="w-full h-full">
                                                <Label className="cursor-pointer font-semibold">Log Out</Label>
                                            </div>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Popover>
                            </Dropdown>
                        ) : (
                        
                            <>
                                <Link href={'/signup'}>
                                    <button className="button-outline">Sign Up</button>
                                </Link>
                                <Link href={'/login'}>
                                    <button className="button-primary">Log In</button>
                                </Link>
                            </>
                        )}
                    </div>

                    
                    <div className="relative z-50 flex items-center">
                        <ThemeSwitch />
                    </div>

                   
                    <button
                        className="lg:hidden text-3xl cursor-pointer text-primary z-50 relative flex items-center"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle Menu"
                    >
                        {open ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </div>

            
            <div
                className={`lg:hidden fixed top-0 right-0 h-screen w-72 max-w-[80vw] z-40 p-6 pt-24 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-in-out backdrop-blur-xl bg-white/90 dark:bg-zinc-950/90 ${open ? "translate-x-0" : "translate-x-full"
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
                                    className={`text-base font-medium transition-colors ${isActive ? "text-red-500 font-bold border-l-2 border-red-500 pl-2" : "text-primary hover:text-red-500"
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
                                className={`text-base font-medium transition-colors ${pathname === "/manage-cars/myaddedcars" ? "text-red-500 font-bold border-l-2 border-red-500 pl-2" : "text-primary hover:text-red-500"
                                    }`}
                            >
                                My Added Cars
                            </Link>
                        )}
                    </div>
                </div>

                
                <div className="flex flex-col space-y-4 pt-6 border-t border-zinc-200/50 dark:border-zinc-700/50">
                    {user ? (
                        <button
                            onClick={() => {
                                handleSingout();
                                handleCloseMenu();
                            }}
                            className="button-primary w-full"
                        >
                            Log Out
                        </button>
                    ) : (
                        <>
                            <Link href={'/signup'} onClick={handleCloseMenu} className="w-full">
                                <button className="button-outline w-full">Sign Up</button>
                            </Link>
                            <Link href={'/login'} onClick={handleCloseMenu} className="w-full">
                                <button className="button-primary w-full">Log In</button>
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