import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const photos = [
  { src: '/images/image1.png', alt: 'Work Photo 1' },
  { src: '/images/image2.png', alt: 'Work Photo 2' },
  { src: '/images/image3.png', alt: 'Work Photo 3' },
  { src: '/images/image4.png', alt: 'Work Photo 4' },
  { src: '/images/image5.png', alt: 'Work Photo 5' }, // Added more photos
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevPhotoIndex = (currentIndex - 1 + photos.length) % photos.length;
  const nextPhotoIndex = (currentIndex + 1) % photos.length;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const goToPhoto = (index) => {
    setCurrentIndex(index);
  };

  // Swipe handling for mobile
  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <section
      className="py-12 text-center border-t-4"
      style={{
        backgroundImage: `url('/images/grassBackground.png')`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
        backgroundPosition: 'center',
      }}
    >
      <h2 className="text-6xl font-header text-Bright-White mb-8">Take a look at some of our work!</h2>

      {/* Rotisserie Container */}
      <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center" {...handlers}>
        {/* Previous Image */}
        <div
          className="absolute left-0 w-1/3 h-auto transform translate-x-1/4 cursor-pointer opacity-50 hover:opacity-80 transition-all duration-500 hover:scale-105 blur-sm hover:blur-none"
          onClick={goToPrevious}
        >
          <img
            src={photos[prevPhotoIndex].src}
            alt={photos[prevPhotoIndex].alt}
            className="w-full h-full object-cover rounded-lg border-2 shadow-lg"
          />
          {/* Left Arrow */}
          <button className="absolute inset-y-0 left-2 bg-black bg-opacity-50 text-4xl text-white font-bold p-2 rounded-full transform transition-transform hover:scale-125">
            &#9664;
          </button>
        </div>

        {/* Current Image */}
        <div
          className="relative w-2/3 h-auto z-10 cursor-pointer transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          onClick={() => openModal(photos[currentIndex])}
        >
          <img
            src={photos[currentIndex].src}
            alt={photos[currentIndex].alt}
            className="w-full h-full object-cover rounded-lg shadow-2xl border-4"
          />
        </div>

        {/* Next Image */}
        <div
          className="absolute right-0 w-1/3 h-auto transform -translate-x-1/4 cursor-pointer opacity-50 hover:opacity-80 transition-all duration-500 hover:scale-105 blur-sm hover:blur-none"
          onClick={goToNext}
        >
          <img
            src={photos[nextPhotoIndex].src}
            alt={photos[nextPhotoIndex].alt}
            className="w-full h-full object-cover rounded-lg border-2 shadow-lg"
          />
          {/* Right Arrow */}
          <button className="absolute inset-y-0 right-2 bg-black bg-opacity-50 text-4xl text-white font-bold p-2 rounded-full transform transition-transform hover:scale-125">
            &#9654;
          </button>
        </div>
      </div>

      {/* Thumbnail view */}
      <div className="flex justify-center mt-8 space-x-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`w-20 h-20 rounded-lg cursor-pointer border-4 transition-all duration-300 ${
              index === currentIndex ? 'border-sage-green' : 'border-transparent'
            }`}
            onClick={() => goToPhoto(index)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Modal for viewing photos */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-3xl mx-auto">
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="w-full h-auto rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
