import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Assuming you use react-scroll for smooth scrolling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute left-0 w-full text-Bright-White border-white border-t-4 border-b-4 py-4 shadow-lg z-50" style={{ top: '60px', backgroundImage: `url('/images/Leather.jpg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>

      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <div className="absolute left-4 -top-18 flex items-center">
          <div className="h-24 w-24 sm:h-48 sm:w-48 rounded-full bg-rustic-brown border-4 border-white flex items-center justify-center shadow-md">
            <img src="/LoganLogo.png" alt="Logo" className="h-22 w-22 sm:h-46 sm:w-46 rounded-full" />
          </div>
        </div>

       {/* Desktop Menu Items */}
       <div className="hidden md:flex flex-1 justify-end space-x-28 px-10 items-center text-5xl font-header">
         
       <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-sage-green">
            Contact
          </Link>
       <Link to="services" smooth={true} duration={500} className="cursor-pointer hover:text-sage-green">
            Services
          </Link>
          <Link to="gallery" smooth={true} duration={500} className="cursor-pointer hover:text-sage-green">
            Gallery
          </Link>
          
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-sage-green">
            About Us
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
        <div className="md:hidden text-Bright-White px-6 text-center pt-4 pb-6 text-4xl font-header space-y-4" style={{ backgroundImage: `url('/images/Leather.jpg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
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
