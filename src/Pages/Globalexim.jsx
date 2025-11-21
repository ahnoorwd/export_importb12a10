import React from 'react';
import importexportservices from '../assets/importservices.avif'
import importexportservices2 from '../assets/services2.avif'


const Globalexim = () => {
    return (
        <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">

  {/* Floating Blurred Background Circles */}
  <div className="absolute top-10 left-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
  <div className="absolute bottom-10 right-10 w-56 h-56 bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>

  <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 drop-shadow">
      Global Import & Export Services
    </h2>

    <p className="text-center text-gray-700 max-w-3xl mx-auto mb-14 text-lg">
      World-class logistics, import solutions, and export management connecting your business with global markets smoothly and efficiently.
    </p>

    {/* Cards Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      
      {/* Card 1 */}
      <div className="backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl rounded-2xl p-8
                      hover:scale-105 hover:shadow-2xl hover:bg-white/40 transition-all duration-500 
                      animate-[fadeInUp_0.8s_ease]">
        <img
          src={importexportservices}
          className="rounded-xl mb-6 w-full h-48 object-cover shadow-md"
          alt="Cargo Shipping"
        />

        <h3 className="text-2xl font-semibold mb-2">International Shipping</h3>
        <p className="text-gray-700">
          Fast and secure cargo movement across continents with real-time tracking and global coverage.
        </p>
      </div>

      {/* Card 2 */}
      <div className="backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl rounded-2xl p-8
                      hover:scale-105 hover:shadow-2xl hover:bg-white/40 transition-all duration-500 
                      animate-[fadeInUp_1s_ease]">
        <img
          src={importexportservices2}
          className="rounded-xl mb-6 w-full h-48 object-cover shadow-md"
          alt="Customs Clearance"
        />

        <h3 className="text-2xl font-semibold mb-2">Customs Clearance</h3>
        <p className="text-gray-700">
          Hassle-free customs processing with complete documentation support and quick approvals.
        </p>
      </div>

      {/* Card 3 */}
      <div className="backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl rounded-2xl p-8
                      hover:scale-105 hover:shadow-2xl hover:bg-white/40 transition-all duration-500 
                      animate-[fadeInUp_1.2s_ease]">
        <img
          src={importexportservices2}
          className="rounded-xl mb-6 w-full h-48 object-cover shadow-md"
          alt="Warehousing"
        />

        <h3 className="text-2xl font-semibold mb-2">Secure Warehousing</h3>
        <p className="text-gray-700">
          Modern storage with temperature control, real-time monitoring, and high-security protocols.
        </p>
      </div>

    </div>
  </div>
        </section>

    );
};

export default Globalexim;