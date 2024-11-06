import React from 'react'

function About() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Geekyness - Your Partner in Innovative Web Solutions</title>
  <section className="bg-gray-100">
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n          .animate-text {\n            white-space: nowrap;\n            overflow: hidden;\n            width: 0;\n            animation: animate-text 5s forwards;\n          }\n\n          @keyframes animate-text {\n            0% {\n              width: 0;\n            }\n\n            100% {\n              width: 100%;\n            }\n          }\n        "
      }}
    />
    {/* Main Content */}
    <div className=" max-w-7xl mx-auto py-16 px-6">
      <h1 className="animate-text text-6xl font-light mb-8">Our Story</h1>
      <p className=" animate-text text-xl mb-16 max-w-3xl">
        Geekyness was born from a <br className="block sm:hidden" /> shared love
        for technology and <br className="block sm:hidden" /> an insatiable
        curiosity to <br />
        explore the boundaries of what's
        <br className="block sm:hidden" /> possible in the digital realm. To us,
        <br className="block sm:hidden" /> the ever-evolving <br />
        web landscape is not just a canvas
        <br className="block sm:hidden" /> for innovation; it's our playground,
        <br className="block sm:hidden" /> where we <br />
        unleash our creativity and <br className="block sm:hidden" />
        technical prowess to craft
        <br className="block sm:hidden" /> remarkable digital experiences.
      </p>
      <h2 className=" animate-text text-4xl font-light">Our Team</h2>
    </div>
  </section>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        .animate-down-to-up {\n          animation: down-to-up 2s ease-out;\n        }\n\n        @keyframes down-to-up {\n          0% {\n            transform: translateY(100px);\n          }\n\n          100% {\n            transform: translateY(0);\n          }\n        }\n      "
    }}
  />
  <div className="max-w-6xl mx-auto py-12">
    <div className="flex animate-down-to-up flex-wrap justify-between">
      <div className="bg-black text-white p-6 rounded-lg w-full md:w-1/4">
        <img
          alt="Portrait of Shivam Khandelwal"
          className="w-full h-48 object-cover rounded-t-lg"
          height={300}
          src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-xrlG8m5HVIX3VC9H1r0kjpBD.png?st=2024-10-01T08%3A08%3A57Z&se=2024-10-01T10%3A08%3A57Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-01T01%3A06%3A33Z&ske=2024-10-02T01%3A06%3A33Z&sks=b&skv=2024-08-04&sig=VZWLl5eeKct6ewNj7lfuNcuHqnfYyJkTrc2l6/QvLe0%3D"
          width={300}
        />
        <h2 className="text-xl font-bold mt-4">Shivam Khandelwal.</h2>
        <p className="text-sm font-semibold">Founder</p>
        <p className="mt-2 text-sm">
          Drives strategic direction and oversees operations, ensuring Geekyness
          stays ahead with innovative web and app development solutions.
        </p>
      </div>
      <div className="bg-black text-white p-6 rounded-lg w-full md:w-1/4">
        <img
          alt="Portrait of Vaibhav Goud"
          className="w-full h-48 object-cover rounded-t-lg"
          height={300}
          src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-XVib0ZW8sFbsBdA14dLz8ppR.png?st=2024-10-01T08%3A08%3A58Z&se=2024-10-01T10%3A08%3A58Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-30T18%3A22%3A51Z&ske=2024-10-01T18%3A22%3A51Z&sks=b&skv=2024-08-04&sig=lbimqUpuNau/WKDioP3M3p9es/swUZwz0o8L2PjDcMo%3D"
          width={300}
        />
        <h2 className="text-xl font-bold mt-4">Vaibhav Goud.</h2>
        <p className="text-sm font-semibold">Co-Founder</p>
        <p className="mt-2 text-sm">
          Focuses on business growth and service expansion, leveraging his
          expertise in business management and digital marketing.
        </p>
      </div>
      <div className="bg-black text-white p-6 rounded-lg w-full md:w-1/4">
        <img
          alt="Portrait of Shadia Khan"
          className="w-full h-48 object-cover rounded-t-lg"
          height={300}
          src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-CmyNVOGg66HBaIKesFcg5fnf.png?st=2024-10-01T08%3A08%3A56Z&se=2024-10-01T10%3A08%3A56Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-01T01%3A50%3A25Z&ske=2024-10-02T01%3A50%3A25Z&sks=b&skv=2024-08-04&sig=HIwMa5vcpHg9p%2Bnio6GkiNcaY%2BU48MSPH2WMu1pkViU%3D"
          width={300}
        />
        <h2 className="text-xl font-bold mt-4">Shadia Khan.</h2>
        <p className="text-sm font-semibold">Talent Acquisition Specialist</p>
        <p className="mt-2 text-sm">
          Identifies and recruits top talent, ensuring Geekyness attracts
          skilled and passionate individuals to drive company success.
        </p>
      </div>
      <div className="bg-black text-white p-6 rounded-lg w-full md:w-1/4">
        <img
          alt="Portrait Amelia"
          className="w-full h-48 object-cover rounded-t-lg"
          height={300}
          src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-qzquv30wuo904eotkOyoPxCm.png?st=2024-10-01T08%3A08%3A55Z&se=2024-10-01T10%3A08%3A55Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-01T01%3A12%3A59Z&ske=2024-10-02T01%3A12%3A59Z&sks=b&skv=2024-08-04&sig=pBLlmuZKBvn5i3a26xSzamkln0eSq%2BLj2M1%2BJb%2BoupU%3D"
          width={300}
        />
        <h2 className="text-xl font-bold mt-4">Amelia.</h2>
        <p className="text-sm font-semibold">Social Media Specialist</p>
        <p className="mt-2 text-sm">
          Manages Geekyness's social media presence, creating engaging content
          and fostering community interaction to enhance brand awareness.
        </p>
      </div>
    </div>
  </div>
  <div>
    <section className="font-sans">
      <div className="bg-orange-400 p-6 md:p-28 rounded-t-lg">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Our Approach</h2>
        <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
          {/* Hidden logo for mobile, visible on medium screens and above */}
          <div className="hidden md:block w-1/4">
            <svg
              viewBox="0 0 24 24"
              className="w-16 md:w-24 h-16 md:h-24 text-black"
            >
              <circle
                cx={12}
                cy={12}
                r={10}
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
              />
              <path
                d="M12 2 L12 22 M2 12 L22 12"
                stroke="currentColor"
                strokeWidth={2}
              />
            </svg>
          </div>
          <p className="animate-down-to-up text-base md:text-2xl w-full md:w-3/4">
            At Geekyness, our approach is rooted in understanding your unique
            needs and delivering customized digital solutions. We combine
            innovation with industry best practices to create scalable, secure,
            and impactful outcomes for your business. Our team collaborates
            closely with you, ensuring transparency and alignment with your
            goals at every step. From initial consultation to project
            completion, we focus on building lasting partnerships that drive
            continuous growth and success.
          </p>
        </div>
      </div>
      <div className="bg-gray-200 p-8 rounded-b-lg">
        <h2 className=" animate-down-to-up text-2xl font-bold mb-6">
          Us in Numbers
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="text-4xl font-bold">500+</p>
            <p className="text-sm text-gray-600">Completed Projects</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-4xl font-bold">10</p>
            <p className="text-sm text-gray-600">Team Members</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-4xl font-bold">20+</p>
            <p className="text-sm text-gray-600">
              Business Partners in over 5 Countries
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-4xl font-bold">5</p>
            <p className="text-sm text-gray-600">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n        .animate-hide-to-show {\n          animation: hide-to-show 5s ease-out;\n        }\n\n        @keyframes hide-to-show {\n          0% {\n            opacity: 0;\n          }\n\n          100% {\n            opacity: 1;\n          }\n        }\n      "
      }}
    />
    <section className="max-w-4xl mx-auto py-12 md:py-16 px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12">
        We've Been Covered
      </h2>
      <div className="bg-orange-400 rounded-full py-4 md:py-6 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-lg md:text-xl font-semibold border border-black rounded px-2">
          mtvs.news
        </div>
        <div className="text-2xl md:text-3xl font-bold">gazelt</div>
        <div className="text-lg md:text-xl font-semibold">
          prom
          <span className="relative">
            o<span className="absolute -top-1 right-0 text-xs">☀</span>
          </span>
          rning
        </div>
      </div>
    </section>
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-5xl font-light mb-6 md:mb-0 leading-tight">
            FOMO got
            <br />
            you puzzled?
          </h2>
          <div className="w-full md:w-1/2">
            <p className="text-gray-600 mb-4">
              Subscribe to our weekly newsletter.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required=""
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Email *"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="subscribe"
                  name="subscribe"
                  className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                />
                <label
                  htmlFor="subscribe"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Yes, subscribe me to your newsletter.
                </label>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="bg-orange-400 rounded-lg overflow-hidden h-52">
          <div className="flex justify-center items-center py-12">
            <img
              className="size-1/3"
              src="https://static.wixstatic.com/media/fe4a13_736aa623bfaf42aea1a898bebb96a689~mv2.png/v1/fill/w_602,h_228,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fe4a13_736aa623bfaf42aea1a898bebb96a689~mv2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-2">
            <a
              href="home.html"
              className="block text-green-600 hover:underline"
            >
              Home
            </a>
            <a
              href="about.html"
              className="block text-gray-600 hover:underline"
            >
              About
            </a>
            <div className="relative">
              <a
                href="servicies.html"
                className="block text-gray-600 hover:underline"
              >
                Services
              </a>
              <svg
                className="w-4 h-4 absolute right-0 top-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="relative">
              <a
                href="solutions.html"
                className="block text-gray-600 hover:underline"
              >
                Solutions
              </a>
              <svg
                className="w-4 h-4 absolute right-0 top-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <a
              href="contact.html"
              className="block text-gray-600 hover:underline"
            >
              Contact
            </a>
          </div>
          <div className="space-y-2 text-gray-600">
            <p>Bhopal Road,</p>
            <p>Nasrullaganj, Sehore 466331</p>
            <p>info@geekyness.com</p>
            <p>+91 9755-36755</p>
          </div>
          <div className="space-y-2">
            <a
              href="https://www.linkedin.com/company/geekyness/"
              className="block text-gray-600 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/geekyness?igsh=bmMyYTZqN2oyUno2"
              className="block text-gray-600 hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/geekyness?_rdr"
              className="block text-gray-600 hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://x.com/Geekyness_x"
              className="block text-gray-600 hover:underline"
            >
              X
            </a>
          </div>
          <div>
            <a href="#" className="block text-gray-600 hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-right text-gray-500">
          © 2024 by GEEKYNESS
        </div>
      </div>
    </section>
  </div>
</>

  )
}

export default About

