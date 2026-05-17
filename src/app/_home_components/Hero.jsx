

export default function Hero() {
    return (
        <div className="min-h-screen flex flex-col justify-center px-6 md:px-16 bg-cover bg-center bg-[linear-gradient(to_right,rgba(0,0,0,0.95)_30%,rgba(0,0,0,0.3)_100%),url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?')]">
            {/* Top Navbar */}
           

            {/* Main Content Content Wrapper */}
            <div className="relative z-10 max-w-4xl text-left mt-20">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                    Are You Looking For A Car?
                </h1>
                <p className="text-gray-400 text-sm font-medium mb-6 md:text-3xl">I'm Looking for</p>

                {/* Search Box */}
            </div>
        </div>
    );
}