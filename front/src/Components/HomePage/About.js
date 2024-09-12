import React from 'react';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section id="about" className="bg-deep-forest-green text-white py-12 font-body border-t-4 px-2">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
        {/* Left Side: Image or Illustration */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/image1.png" // Replace with an actual image path in your public folder
            alt="About Us"
            className=" w-96 rounded-lg shadow-lg border-4"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-6xl font-header mb-4 ">About Our Company</h2>
          <p className="text-lg mb-6 text-muted-clay">
            At <span className="text-sage-green font-semibold">Central Hills Lawn Service</span>, we are passionate about delivering top-tier lawn care and landscaping services. With years of experience in the industry, our expert team ensures that every project, whether it's landscaping, tree services, or lawn maintenance, is done with precision and care.
          </p>
          <p className="text-lg mb-6 text-muted-clay">
            We pride ourselves on providing personalized services, ensuring that each client receives the best care and attention to detail. Our mission is to make your outdoor space look its absolute best, all year round.
          </p>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-rustic-brown text-white font-semibold py-3 px-6 rounded-lg hover:bg-sage-green transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
