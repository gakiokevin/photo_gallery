const ImageGrid = ({ images, onImageClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`relative overflow-hidden rounded-md shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 ${image.aspect}`}
          onClick={() => onImageClick(image, index)}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300"></div> */}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;