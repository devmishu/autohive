import Link from 'next/link';
import { FaFacebook, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoIosCall, IoIosMail } from 'react-icons/io';


export default function Footer() {
    return (
        <footer className="card-primary border-none  mt-20 ">
            <div className="app-container py-10">


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

                    {/* Brand & About Section */}
                    <div className="flex flex-col space-y-3">
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl font-black text-red-600">C</span>
                            <span className="text-xl font-bold text-primary tracking-tight">CarList</span>
                        </div>
                        <p className="text-secondary text-sm leading-relaxed max-w-sm">
                            Find and book the perfect car for your next journey. Luxury, comfort, and affordable pricing all in one place.
                        </p>
                    </div>


                    <div className="flex flex-col space-y-3">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-primary">
                            Useful Links
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-secondary hover:text-red-600 dark:hover:text-red-500 transition-colors duration-200">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/explorecars" className="text-secondary hover:text-red-600 dark:hover:text-red-500 transition-colors duration-200">
                                    Explore Cars
                                </Link>
                            </li>
                            <li>
                                <Link href="/manage-cars/addcar" className="text-secondary hover:text-red-600 dark:hover:text-red-500 transition-colors duration-200">
                                    Add Car
                                </Link>
                            </li>
                            <li>
                                <Link href="/manage-cars/mybookings" className="text-secondary hover:text-red-600 dark:hover:text-red-500 transition-colors duration-200">
                                    My Bookings
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div className="flex flex-col space-y-3">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-primary">
                            Contact Information
                        </h3>
                        <ul className="space-y-2.5 text-sm">
                            <li className="flex items-center space-x-2.5 text-secondary">
                                <FaMapMarkerAlt />
                                <span>Dhaka, Bangladesh</span>
                            </li>
                            <li className="flex items-center space-x-2.5 text-secondary">
                               <IoIosCall />
                                <a href="tel:+880123456789" className="hover:text-red-600 dark:hover:text-red-500 transition-colors">
                                    +880 1234-567890
                                </a>
                            </li>
                            <li className="flex items-center space-x-2.5 text-secondary">
                                <IoIosMail />
                                <a href="mailto:support@carlist.com" className="hover:text-red-600 dark:hover:text-red-500 transition-colors">
                                    support@carlist.com
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-zinc-200 dark:border-zinc-700 my-6" />


                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">


                    <p className="text-secondary text-xs font-medium text-center sm:text-left order-2 sm:order-1">
                        &copy; {new Date().getFullYear()} CarList. All rights reserved.
                    </p>


                    <div className="flex items-center space-x-4 order-1 sm:order-2">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-zinc-200/50 dark:bg-zinc-700/50 flex items-center justify-center text-primary hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-all duration-300 text-sm">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-zinc-200/50 dark:bg-zinc-700/50 flex items-center justify-center text-primary hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-all duration-300 text-sm">
                            <FaXTwitter />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-zinc-200/50 dark:bg-zinc-700/50 flex items-center justify-center text-primary hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-all duration-300 text-sm">
                            <FaLinkedinIn />
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    );
}