import React from 'react';
import { Camera, Package, Home } from 'lucide-react';
import img from '/user.png'


const About = () => {
  return (
    <section className=" text-gray-800 px-4 py-10 md:px-20">
      {/* Intro Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
        {/* Image Placeholder */}
        <div className="w-full lg:w-1/2">
          <div className="w-full h-80 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 text-xl">
            <img
  src={img}
  alt="Photographer"
  className="w-full h-80 object-cover rounded-2xl"
/>
          </div>
        </div>

        {/* Intro Text */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <h3 className="text-xl text-blue-gray font-semibold mb-4">Passion in Every Frame</h3>
          <p className="text-gray-700 leading-relaxed">
            Hi, I'm Voke Macha—a storyteller with a camera. I believe photography is more than just taking pictures;
            it's about capturing emotions, preserving memories, and telling unique stories. Whether it's a wedding,
            a personal shoot, or a scenic landscape, I aim to deliver images that speak for themselves.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
        <div>
          <h4 className="text-3xl font-bold text-grey">10+</h4>
          <p className="text-gray-600">Awarded Projects</p>
        </div>
        <div>
          <h4 className="text-3xl font-bold text-grey">90+</h4>
          <p className="text-gray-600">Weddings Captured</p>
        </div>
        <div>
          <h4 className="text-3xl font-bold text-grey">70+</h4>
          <p className="text-gray-600">Personal Shoots</p>
        </div>
        <div>
          <h4 className="text-3xl font-bold text-grey">12+</h4>
          <p className="text-gray-600">Years in Business</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 text-center">Services I Offer</h3>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <Camera className="text-4xl text-gray mb-4" />
            <h4 className="text-lg font-semibold mb-2">Wedding Photography</h4>
            <p className="text-gray-600">
              Timeless captures of your special day, crafted with emotion and elegance.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <Package className="text-4xl text-grey mb-4" />
            <h4 className="text-lg font-semibold mb-2">Product Photography</h4>
            <p className="text-gray-600">
              Showcase your products with vibrant, detail-rich imagery tailored for impact.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <Home className="text-4xl text-grey mb-4" />
            <h4 className="text-lg font-semibold mb-2">Real Estate Photography</h4>
            <p className="text-gray-600">
              Make your listings stand out with professional real estate visuals.
            </p>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-center">Experience Timeline</h3>
        <ul className="space-y-4">
          {[
            { role: "Freelance Photographer", years: "2015 - Present" },
            { role: "Photography Intern, Urban Lens Magazine", years: "2014 - 2015" },
            { role: "Assistant Photographer, FlashPoint Studio", years: "2013 - 2014" },
            { role: "Studio Manager, FocusHub Photography", years: "2012 - 2013" },
            { role: "Lead Photographer, Dream Events", years: "2011 - 2012" },
            { role: "Photo Editor, National Chronicle", years: "2010 - 2011" },
            { role: "Head Photographer, High School Yearbook", years: "2009 - 2010" },
          ].map((item, idx) => (
            <li key={idx} className="border-l-4 border-blue-gray pl-4">
              <h4 className="text-lg font-semibold">{item.role}</h4>
              <p className="text-sm text-gray-600">{item.years}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;


{/* <img
  src="/path/to/your/image.jpg"
  alt="Photographer"
  className="w-full h-80 object-cover rounded-2xl"
/> */}
