import React from 'react';
import logo from '../Images/Logo.png'

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 flex items-center justify-center shadow-lg">
            {/* Logo and App Name Section */}
            <div className="flex items-center space-x-4">
                {/* Logo */}
                <img
                    src={logo} // Replace with your logo path
                    alt="logo"
                    className="h-10 w-10"  // Adjusted size for the logo
                />
                {/* App Name */}
                <span className="text-white text-2xl font-semibold">MediWise</span>
            </div>
        </nav>
    );
};

export default Navbar;
