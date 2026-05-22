import Link from 'next/link';
import { montserrat } from '@/app/layout.js';

export default function NotFound() {
    return (
        <div className=" main-bg min-h-screen flex items-center justify-center p-5">
            <div className="card-primary max-w-md w-full text-center  p-8 md:p-10 shadow-xl transition-all duration-300">


                <div className="mb-6 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-red-50 dark:bg-red-950/30 flex items-center justify-center text-red-600 dark:text-red-500 animate-pulse">
                        <span className="text-5xl font-extrabold">404</span>
                    </div>
                </div>


                <h1 className={`${montserrat.className} text-2xl md:text-3xl font-black text-primary mb-3 `}>
                    Page Not Found
                </h1>


                <p className="text-secondary text-sm md:text-base mb-8 leading-relaxed">
                    Oops! The page you are looking for doesn't exist or has been moved. Let's get you back on track.
                </p>

                
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <Link href="/" className="button-primary w-full sm:w-auto inline-flex items-center justify-center space-x-2 font-medium">
                        {/* <span>🚗</span> */}
                        <span>Back to Home</span>
                    </Link>

                    <Link href="/explorecars" className="button-outline w-full sm:w-auto inline-flex items-center justify-center font-medium">
                        Explore Cars
                    </Link>
                </div>

            </div>
        </div>
    );
}