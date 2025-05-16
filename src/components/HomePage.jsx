import HeroSection from "./HeroSection";
import Gallery from "./Gallery";
import { ArrowBigRight } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <HeroSection />

      <div className="flex flex-col md:flex-row gap-8 p-6">
        <h2 className="text-3xl font-bold text-gray-900 md:flex-1">Welcome</h2>
        <div className="md:flex-1 text-left text-gray-700">
          <p>
            Welcome to my photography portfolio! I'm thrilled to share my passion for photography
            with you and showcase my work. As a photographer, my goal is to capture moments that
            will be cherished for a lifetime. I specialize in a range of photography styles,
            including weddings, events, portraits, and nature. With each project, I strive to
            deliver exceptional visual experiences that exceed my clients' expectations.
          </p>
        </div>
      </div>

      <Gallery />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Wedding Photography</h2>
          <p className="text-left text-gray-700">
            Capturing every moment of your special day, from the first kiss to the last dance, with
            a focus on creating stunning images that will be cherished for a lifetime.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Photo Editing</h2>
          <p className="text-left text-gray-700">
            In addition to my photography services, I also offer professional photo editing and
            retouching services to enhance and improve your existing images.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Product Photography</h2>
          <p className="text-left text-gray-700">
            Whether it's a corporate event, birthday party, or family gathering, I will capture
            every moment and create images that tell the story of your event.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Real Estate Photography</h2>
          <p className="text-left text-gray-700">
            I create stunning images to showcase your property and attract potential buyers. Contact
            me for high-quality photos that help you sell your property faster.
          </p>
        </div>

        <div className="col-span-1 md:col-span-2 flex justify-end pr-4">
          <Link to="/about" className="flex items-center gap-2 text-gray-700 hover:underline">
            <span>About</span>
            <ArrowBigRight />
          </Link>
        </div>
      </div>

     <div className="relative flex flex-col md:flex-row items-center justify-between p-6 rounded-lg bg-cover bg-center" 
     style={{
       backgroundImage: "url('/camera.avif')",
       maxHeight: '300px', // limits how tall the div grows on big screens
       minHeight: '180px', // keeps it nice on small screens
     }}>
  
  {/* Overlay for better text visibility */}
  {/* <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div> */}
  
  {/* Content container with z-index so it's above the overlay */}
  <div className="relative flex flex-col mb-4 md:mb-0 md:w-3/4 py-10 text-white ">
    <h2 className="text-2xl font-semibold mb-2">
      Let's start planning your photoshoot.
    </h2>
    <p>
      Time flies, but photos last forever. Contact me to schedule your session and preserve your memories.
    </p>
  </div>

  {/* Styled Button */}
  <button className="relative bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300 ease-in-out ">
    Call
  </button>
</div>

    </>
  );
};

export default HomePage;
