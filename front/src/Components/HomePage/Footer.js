import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-rustic-brown text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Central Hills Lawn Service</h2>
          <p className="text-sm">
            We offer professional services to keep your property looking its best all year round. Contact us for any inquiries or further information.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#gallery" className="hover:underline">Gallery</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info or Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm mb-2">Phone: (830) 220-3313</p>
          <p className="text-sm mb-2">Email: potterl2727@gmail.com</p>

          <div className="flex space-x-4 mt-4">
            {/* Add social media icons if needed */}
            <a href="https://facebook.com" className="hover:text-sage-green">
            <img src="/icons8-facebook.svg" alt="Facebook" className="w-8 h-8" />
                </a>
            <a href="https://instagram.com" className="hover:text-sage-green">
            <img src="/icons8-instagram.svg" alt="Instagram" className="w-8 h-8" />
                {/* Instagram Icon */}
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-white text-center pt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Central Hills Lawn Service. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
