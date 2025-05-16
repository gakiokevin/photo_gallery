import React from "react";


function HeroSection() {
  const announcementText = "Moments Captured * ";
  const repeatedAnnouncementText = announcementText.repeat(50);
  const captureTheMomentText = "Memories Preserved * ";
  const repeatedCaptureTheMomentText = captureTheMomentText.repeat(30);

  return (
    <div className="relative bg-[url(/bg.jpg)] bg-cover bg-center h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Animated Announcement Bar (Top) */}
      <div className="absolute top-0 left-0 w-full bg-gray-800/30 py-2 overflow-hidden">
        <p className=" text-sm whitespace-nowrap">{repeatedAnnouncementText}</p>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center flex flex-col items-start w-full px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white bg-gray-800/30 inline-block px-4 py-2 rounded">
          VOKE MACHA
        </h1>
        <p className="text-lg md:text-xl mb-8 w-full md:w-2/3 text-left text-white bg-gray-800/30 px-4 py-3 rounded">
          I am a professional photographer and whether it's a wedding, event, or personal photo
          shoot, I have the skills and experience to capture your unique story through my lens.
        </p>
        <button className="bg-gray-800/30 hover:bg-yellow-600 font-semibold py-3 px-6 rounded-full">
          SAY HELLO!
        </button>
      </div>

      {/* Animated Capture Bar (Bottom) */}
      <div className="absolute bottom-0 left-0 w-full bg-gray-800/30 py-2 overflow-hidden">
        <p className=" text-sm whitespace-nowrap">{repeatedCaptureTheMomentText}</p>
      </div>
    </div>
  );
}

export default HeroSection;
