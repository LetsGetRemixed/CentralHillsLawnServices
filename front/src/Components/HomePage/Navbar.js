import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Assuming you use react-scroll for smooth scrolling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute left-0 w-full text-Bright-White border-white border-t-4 border-b-4 py-4 shadow-lg z-50" style={{ top: '80px', backgroundImage: `url('/images/Leather.jpg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>

      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <div className="absolute left-4 -top-18 flex items-center">
          <div className="h-48 w-48 rounded-full bg-rustic-brown border-4 border-white flex items-center justify-center shadow-md">
            <img src="/LoganLogo.png" alt="Logo" className="h-46 w-46 rounded-full" />
          </div>
        </div>

       {/* Desktop Menu Items */}
       <div className="hidden md:flex flex-1 justify-center space-x-20 text-5xl font-header">
          <Link to="gallery" smooth={true} duration={500} className="cursor-pointer hover:text-sage-green">
            Gallery
          </Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-sage-green">
            Contact
          </Link>
          <Link to="images" smooth={true} duration={500} className="cursor-pointer hover:text-sage-green">
            Images
          </Link>
        </div>

       {/* Mobile menu button */}
       <div className="md:hidden flex items-center ml-auto"> {/* Added ml-auto to push it to the right */}
         
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-sage-green focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-rustic-brown text-Bright-White px-6 text-center pt-4 pb-6 text-2xl font-header space-y-4">
          <Link
            to="gallery"
            smooth={true}
            duration={500}
            className="block cursor-pointer hover:text-muted-clay"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="block cursor-pointer hover:text-muted-clay"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="images"
            smooth={true}
            duration={500}
            className="block cursor-pointer hover:text-muted-clay"
            onClick={() => setIsOpen(false)}
          >
            Images
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
