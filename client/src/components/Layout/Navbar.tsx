import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";


const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className=" mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <a href="/"><div className="text-2xl font-bold text-gray-800">Linkদে.com</div></a>

                    {/* Search Bar */}
                    <div className="flex-grow mx-16">
                        <form className="mx-auto">
                            <label className="mb-2 text-sm font-medium  sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    className="
                                    block w-full p-4 ps-10 text-sm border border-gray-300 
                                    rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search Mockups, Logos..." required
                                />
                                <button
                                    type="submit"
                                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
                                rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                            </div>
                        </form>
                    </div>

                    {/* Menu Items */}
                    <div className="hidden md:flex space-x-8 ">
                        <a href="/create" className="text-gray-600 hover:text-blue-600 text-lg">Create</a>
                        <a href="/drive/home" className="text-gray-600 hover:text-blue-600 text-lg">Drive</a>
                        {/* <a href="#" classNameName="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#" classNameName="text-gray-600 hover:text-blue-600">Contact</a> */}
                        <SignedOut>
                            <SignInButton/>
                            {/* <SignUpButton/> */}
                        </SignedOut>
                        <SignedIn>
                            <UserButton/>
                        </SignedIn>

                    </div>



                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button type="button" className="text-gray-800 hover:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
