import React from 'react';

const ContactAndFooter = () => {
  return (
    <>
      {/* Contact Form Section */}
      <section className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <div className="flex-1 bg-orange-400 rounded-lg p-6">
            <form>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block mb-2">First name *</label>
                  <input type="text" id="firstName" className="w-full p-2 rounded" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2">Last name *</label>
                  <input type="text" id="lastName" className="w-full p-2 rounded" required />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block mb-2">Email *</label>
                  <input type="email" id="email" className="w-full p-2 rounded" required />
                </div>
                <div>
                  <label htmlFor="industry" className="block mb-2">Industry</label>
                  <input type="text" id="industry" className="w-full p-2 rounded" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="company" className="block mb-2">Company / Organization</label>
                <input type="text" id="company" className="w-full p-2 rounded" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full p-2 rounded"></textarea>
              </div>
              <button type="submit" className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-black transition">
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex-1 bg-gray-200 rounded-lg p-6">
            <address className="not-italic mb-4">
              <p>Bhopal Road,</p>
              <p>Nasrullaganj, Sehore 466331</p>
              <p>Madhya Pradesh</p>
            </address>
            <p className="mb-2">
              <a href="mailto:info@geekyness.com" className="text-blue-600 hover:underline">info@geekyness.com</a>
            </p>
            <p className="mb-4">
              <a href="tel:+91975536755" className="text-blue-600 hover:underline">+91 9755-36755</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Navigation Links */}
            <div className="space-y-2">
              <a href="/home" className="block text-green-600 hover:underline">Home</a>
              <a href="/about" className="block text-gray-600 hover:underline">About</a>
              <a href="/services" className="block text-gray-600 hover:underline">Services</a>
              <a href="/solutions" className="block text-gray-600 hover:underline">Solutions</a>
              <a href="/contact" className="block text-gray-600 hover:underline">Contact</a>
            </div>

            {/* Address Information */}
            <div className="space-y-2 text-gray-600">
              <p>Bhopal Road,</p>
              <p>Nasrullaganj, Sehore 466331</p>
              <p>Madhya Pradesh</p>
              <p>
                <a href="mailto:info@geekyness.com" className="text-blue-600 hover:underline">info@geekyness.com</a>
              </p>
              <p>
                <a href="tel:+91975536755" className="text-blue-600 hover:underline">+91 9755-36755</a>
              </p>
            </div>

            {/* Social Media Links */}
            <div className="space-y-2">
              <a href="https://www.linkedin.com/company/geekyness/" className="block text-gray-600 hover:underline">LinkedIn</a>
              <a href="https://www.instagram.com/geekyness?igsh=bmMyYTZqN2oyUno2" className="block text-gray-600 hover:underline">Instagram</a>
              <a href="https://www.facebook.com/geekyness?_rdr" className="block text-gray-600 hover:underline">Facebook</a>
              <a href="https://x.com/Geekyness_x" className="block text-gray-600 hover:underline">X</a>
            </div>

            {/* Privacy Policy */}
            <div>
              <a href="/privacy-policy" className="block text-gray-600 hover:underline">Privacy Policy</a>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 pt-8 border-t border-gray-200 text-right text-gray-500">
            © 2024 by GEEKYNESS
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactAndFooter;
