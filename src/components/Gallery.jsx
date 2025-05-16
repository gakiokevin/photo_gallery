import { useState } from 'react';
import ImageGrid from './ImageGrid';
import Lightbox from './Lightbox';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample images with different aspect ratios
  const images = [
    { id: 3, src: '/graduation.jpg', alt: 'Project 3', aspect: 'aspect-video' },
    { id: 2, src: '/c.avif', alt: 'Project 2', aspect: 'aspect-square' },
    { id: 7, src: '/c.avif', alt: 'Project 2', aspect: 'aspect-square' },
    { id: 4, src: '/birthday.webp', alt: 'Project 4', aspect: 'aspect-square' },
    { id: 5, src: '/street.avif', alt: 'Project 5', aspect: 'aspect-video' },
    { id: 1, src: '/wedding.webp', alt: 'Project 1', aspect: 'aspect-video' },
    { id: 6, src: '/c.avif', alt: 'Project 6', aspect: 'aspect-square' },
    { id: 8, src: '/c.avif', alt: 'Project 2', aspect: 'aspect-square' },
  ];

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrev = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Recent Work</h2>
      <ImageGrid images={images} onImageClick={openLightbox} />
      
      {selectedImage && (
        <Lightbox
          image={selectedImage}
          images={images}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
          onThumbnailClick={openLightbox}
        />
      )}
    </div>
  );
};

export default Gallery;