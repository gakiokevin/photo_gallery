import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AlignRight, X } from 'lucide-react';

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const containerClass = "w-full max-w-[1440px] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-28 mx-auto";

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800 bg-white">
      {/* Header */}
      <header className="shadow-md py-4">
        <div className={`flex justify-between items-center ${containerClass}`}>
          <Link to="/" className="text-2xl font-bold text-gray-900">
        Framee
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex gap-8 text-sm font-medium">
            <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </Link>
            {['Projects', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Hamburger (mobile only) */}
          <button className="lg:hidden text-black" onClick={() => setMenuOpen(true)}>
            <AlignRight size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 bg-white shadow-md transform transition-transform duration-300 ease-in-out
        ${menuOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-black">Menu</h2>
          <button onClick={() => setMenuOpen(false)} className="text-black">
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col gap-6 p-6 text-base font-medium">
            <Link to='/' className="text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setMenuOpen(false)}
            >Home</Link>
          {['Projects', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <main className="flex-1  py-8">
        <div className={containerClass}>
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-700 py-12">
        <div className={containerClass}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-semibold mb-4">Capture the Moment</h2>
              <p>
                My attention to detail and passion for photography ensures that every image I capture is not only stunning but also authentic. Let’s create timeless memories together.
              </p>
              <div className="flex gap-4 mt-6 text-sm">
                {['Facebook', 'Instagram', 'TikTok', 'X'].map((platform) => (
                  <Link
                    key={platform}
                    to="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    {platform}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
              <nav className="flex flex-col gap-3 text-sm">
                <Link to="/" className="text-gray-800 visited:text-gray-800 hover:text-gray-900 ">
                  Home
                </Link>
                {['Projects', 'About', 'Contact'].map((item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    className="hover:text-gray-900 transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="text-center text-gray-500 mt-12 text-xs">
            &copy; {new Date().getFullYear()} Framee. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
