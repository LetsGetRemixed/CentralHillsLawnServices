import React from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling to the Contact section

const Header = () => {
  return (
    <header className="relative h-screen w-full">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/images/lawn.mp4"
        autoPlay
        loop
        muted
      />

      {/* Overlay for content */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
        {/* Main Title */}
        <h1 className="text-5xl md:text-8xl font-header  mb-4">
          Central Hills Highest Rated Lawn Care
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl font-body mb-6 max-w-3xl">
          We offer a range of services including landscaping, tree services, lawn maintenance, and more. Let us help keep your lawn and garden in top shape all year round.
        </p>

        {/* Contact Button */}
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="bg-rustic-brown text-2xl text-Bright-White font-semibold font-body py-3 px-6 rounded-2xl hover:bg-sage-green transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Header;
