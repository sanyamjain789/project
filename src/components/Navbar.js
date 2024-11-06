import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const smoothScroll = (target) => {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.classList.toggle('no-scroll');
  };

  const toggleDropdown = (dropdownId) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  return (
    <div>
      <header className="bg-orange-400 text-white p-4 h-20">
        <nav className="flex justify-between items-center">
          {/* Navigation Links */}
          <div className="flex space-x-4 text-black hidden md:flex">
            <Link to="/" className="pl-12 hover:text-white">Home</Link>
            <Link to="/about" className="pl-4 hover:text-white">About</Link>
            <div className="relative group">
              <Link to ="services">
                <button className="pl-4 hover:text-white rounded-md focus:outline-none" aria-haspopup="true" aria-expanded="false">
                  Services
                </button>
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-black rounded-md shadow-lg hidden group-hover:block pointer-events-none group-hover:pointer-events-auto z-10">
                <Link to="#section1" className="block px-4 py-2 text-white hover:bg-white hover:text-black" onClick={() => smoothScroll('#section1')}>Web Development</Link>
                <Link to="#section2" className="block px-4 py-2 text-white hover:bg-white hover:text-black" onClick={() => smoothScroll('#section2')}>Mobile App Development</Link>
                <Link to="#section3" className="block px-4 py-2 text-white hover:bg-white hover:text-black" onClick={() => smoothScroll('#section3')}>Desktop App Development</Link>
                <Link to="#section4" className="block px-4 py-2 text-white hover:bg-white hover:text-black" onClick={() => smoothScroll('#section4')}>AI Solution</Link>
                <Link to="#section5" className="block px-4 py-2 text-white hover:bg-white hover:text-black" onClick={() => smoothScroll('#section5')}>Digital Marketing</Link>
              </div>
            </div>
            <div className="relative group">
              <Link to="Solutions">
              <button className="pl-4 hover:text-white rounded-md focus:outline-none" aria-haspopup="true" aria-expanded="false">
                Solutions
              </button></Link>
              <div className="absolute left-0 mt-2 w-48 bg-black rounded-md shadow-lg hidden group-hover:block pointer-events-none group-hover:pointer-events-auto z-10">
                <Link to="#section6" className="block px-4 py-2 text-white hover:bg-white hover:text-black" onClick={() => smoothScroll('#section6')}>Web Development</Link>
                <Link to="#section7" className="block px-4 py-2 text-white hover:bg-white hover:text-black" onClick={() => smoothScroll('#section7')}>Mobile App Development</Link>
                <Link to="#section8" className="block px-4 py-2 text-white hover:bg-white hover:text-black" onClick={() => smoothScroll('#section8')}>Desktop App Development</Link>
                <Link to="#section9" className="block px-4 py-2 text-white hover:bg-white hover:text-black" onClick={() => smoothScroll('#section9')}>AI Solution</Link>
                <Link to="#section10" className="block px-4 py-2 text-white hover:bg-white hover:text-black" onClick={() => smoothScroll('#section10')}>Digital Marketing</Link>
              </div>
            </div>
            <Link to="contact" className="pl-4 hover:text-white">Contact</Link>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center pr-28">
            <img src="https://static.wixstatic.com/media/fe4a13_736aa623bfaf42aea1a898bebb96a689~mv2.png/v1/fill/w_135,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/geekyness%20(10).png" alt="Geekyness Logo" className="h-auto" />
          </div>

          {/* Social Media Links */}
          <div className="pr-4 hidden md:flex space-x-4 text-black underline">
            <Link to="https://www.linkedin.com/company/geekyness/" className="pr-2 hover:text-white">LinkedIn</Link>
            <Link to="https://www.instagram.com/geekyness?igsh=bmMyYTZqN2oyUno2" className="pr-2 hover:text-white">Instagram</Link>
            <Link to="https://www.facebook.com/geekyness?_rdr" className="pr-2 hover:text-white">Facebook</Link>
            <Link to="https://x.com/Geekyness_x" className="pr-2 hover:text-white">X</Link>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button id="menu-toggle" className="text-black focus:outline-none" onClick={toggleMobileMenu}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden bg-orange-400 shadow-lg absolute top-20 left-0 w-full h-full pt-24 text-center z-50">
            <div className="flex flex-col space-y-2 p-4">
              <a href="/" className="block px-4 py-2 text-left text-black text-bold text-2xl hover:bg-orange-300">Home</a>
              <a href="about" className="block px-4 py-2 text-left text-black text-bold text-2xl hover:bg-orange-300">About</a>

              {/* Services Dropdown */}
              <div className="relative">
                <a href='service'>
                <button onClick={() => toggleDropdown('services-dropdown')} className="text-left text-black text-bold text-2xl block w-full px-4 py-2 hover:bg-orange-300">
                  Services
                </button></a>
                {activeDropdown === 'services-dropdown' && (
                  <div id="services-dropdown" className="dropdown-content bg-orange-400 rounded-md shadow-lg">
                    <Link to="#section1" className="block px-4 py-2 text-black hover:bg-orange-300">Web Development</Link>
                    <Link to="#section2" className="block px-4 py-2 text-black hover:bg-orange-300">Mobile App Development</Link>
                    <Link to="#section3" className="block px-4 py-2 text-black hover:bg-orange-300">Desktop App Development</Link>
                    <Link to="#section4" className="block px-4 py-2 text-black hover:bg-orange-300">AI Solution</Link>
                    <Link to="#section5" className="block px-4 py-2 text-black hover:bg-orange-300">Digital Marketing</Link>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div className="relative">
                <Link to="Service">
                <button onClick={() => toggleDropdown('solutions-dropdown')} className="text-left text-black text-bold text-2xl block w-full px-4 py-2 hover:bg-orange-300">
                  Solutions
                </button>
                {activeDropdown === 'solutions-dropdown' && (
                  <div id="solutions-dropdown" className="dropdown-content bg-orange-400 rounded-md shadow-lg">
                    <Link to="#section6" className="block px-4 py-2 text-black hover:bg-orange-300">Web Development</Link>
                    <Link to="#section7" className="block px-4 py-2 text-black hover:bg-orange-300">Mobile App Development</Link>
                    <Link to="#section8" className="block px-4 py-2 text-black hover:bg-orange-300">Desktop App Development</Link>
                    <Link to="#section9" className="block px-4 py-2 text-black hover:bg-orange-300">AI Solution</Link>
                    <Link to="#section10" className="block px-4 py-2 text-black hover:bg-orange-300">Digital Marketing</Link>
                  </div>
                )}</Link>
              </div>

              <Link to="contact" className="block px-4 py-2 text-left text-black text-bold text-2xl hover:bg-orange-300">Contact</Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
