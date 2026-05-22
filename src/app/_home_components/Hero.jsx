import { montserrat } from '@/app/layout.js';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className="min-h-screen flex flex-col justify-center px-6 md:px-16 bg-cover bg-center bg-[linear-gradient(to_right,rgba(0,0,0,0.95)_30%,rgba(0,0,0,0.3)_100%),url('/assets/images/herobg.jpg')]">


            <div className="relative z-10 max-w-2xl text-left mt-20 ">
                <h1 className={`${montserrat.className} uppercase text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4`}>
                    Are You Looking For A Car?
                </h1>
                <p className="text-secondary  font-medium mb-6 md:text-3xl">Explore a wide range of cars for every occasion — from daily drives to luxury experiences, all in one place.</p>

                <Link href="/explorecars" className="button-primary w-full sm:w-auto inline-flex items-center justify-center space-x-2 font-medium">
                    {/* <span>🚗</span> */}
                    <span>Explore Cars</span>
                </Link>
            </div>
        </div>
    );
}