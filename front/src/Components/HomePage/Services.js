import React from 'react';

const services = [
  {
    title: 'Landscaping',
    description: 'Transform your outdoor space with our expert landscaping services. From lush gardens to stunning walkways, we bring your vision to life.',
    image: '/images/image2.png', // Add relevant images in the public folder
  },
  {
    title: 'Tree Service',
    description: 'Ensure the health and beauty of your trees with our professional tree trimming, removal, and maintenance services. Safety and care come first.',
    image: '/images/image1.png',
  },
  {
    title: 'Lawn Maintenance',
    description: 'Keep your lawn pristine and well-manicured all year round. Our lawn maintenance services include mowing, edging, and more for a perfect lawn.',
    image: '/images/image3.png',
  },
  {
    title: 'Additional Services',
    description: 'We offer a wide range of additional services, including irrigation, hardscaping, and seasonal cleanups to ensure your property stays beautiful and functional.',
    image: '/images/additional-services.jpg',
  },
];

const Services = () => {
  return (
    <section
  className="font-body text-white py-12 border-t-4"
  style={{
    backgroundImage: `url('/images/grassBackground.png')`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'auto',
    backgroundPosition: 'center',
  }}
>
      <div className="container mx-auto text-center">
        <h2 className="text-8xl mb-8 text-Bright-White font-header">
          Our Services
        </h2>
        <p className="mb-12 text-2xl max-w-2xl mx-auto font-body text-Bright-White px-2">
          We offer a variety of services to keep your property looking its best all year round. From tree trimming to lawn care, we’ve got you covered.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-rustic-brown rounded-lg shadow-lg overflow-hidden border-4 border-white">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover border-2"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-Bright-White">{service.title}</h3>
                <p className="text-Bright-White">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
