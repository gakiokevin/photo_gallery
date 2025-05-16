import { ArrowRight } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
const Lightbox = ({ image, images, currentIndex, onClose, onPrev, onNext, onThumbnailClick }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-6xl max-h-screen"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white text-4xl z-50 hover:text-gray-300 transition-colors"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Main image with navigation */}
        <div className="relative h-full flex items-center justify-center mb-4">
          {/* Previous button */}
          <button
            className="absolute left-4 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all z-10"
            onClick={onPrev}
          >
           <ArrowLeft/>
          </button>

          {/* Main image */}
          <div className="max-w-full max-h-[80vh] flex items-center justify-center">
            <img
              src={image.src}
              alt={image.alt}
              className="max-h-[80vh] max-w-full object-contain"
            />
          </div>

          {/* Next button */}
          <button
            className="absolute right-4 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all z-10"
            onClick={onNext}
          >
            <ArrowRight/>
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="flex overflow-x-auto py-2 space-x-2 justify-center">
          {images.map((img, index) => (
            <div
              key={img.id}
              className={`flex-shrink-0 w-16 h-16 cursor-pointer border-2 transition-all ${currentIndex === index ? 'border-white' : 'border-transparent'}`}
              onClick={(e) => {
                e.stopPropagation();
                onThumbnailClick(img, index);
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;