import { useEffect, useState } from "react";
import { FaGlobeAsia, FaUsers, FaTruck, FaAward } from "react-icons/fa";

const RewardsSection = () => {
  // Counter animation logic
  const [count, setCount] = useState({
    clients: 0,
    shipments: 0,
    countries: 0,
    awards: 0,
  });

  useEffect(() => {
    let start = 0;
    const endValues = { clients: 500, shipments: 1200, countries: 40, awards: 15 };
    const duration = 2000;

    const timer = setInterval(() => {
      start += 20;

      setCount({
        clients: Math.min(start, endValues.clients),
        shipments: Math.min(start * 2, endValues.shipments),
        countries: Math.min(Math.floor(start / 10), endValues.countries),
        awards: Math.min(Math.floor(start / 30), endValues.awards),
      });

      if (start >= duration) clearInterval(timer);
    }, 30);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-r from-indigo-50 via-white to-blue-50 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 blur-[120px] opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 blur-[120px] opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-8 z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 drop-shadow">
          Our Global Achievements
        </h2>

        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12 text-lg">
          Trusted worldwide for excellence in import & export logistics.
          Here are the milestones we’ve proudly achieved over the years.
        </p>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Each Card */}
          <div className="backdrop-blur-lg bg-white/40 border border-white/50 rounded-2xl p-8 text-center
                          shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <FaUsers className="text-5xl text-blue-700 mx-auto mb-4 drop-shadow" />
            <h3 className="text-4xl font-extrabold text-gray-900">{count.clients}+</h3>
            <p className="text-gray-700 mt-1 font-medium">Happy Clients</p>
          </div>

          <div className="backdrop-blur-lg bg-white/40 border border-white/50 rounded-2xl p-8 text-center
                          shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <FaTruck className="text-5xl text-indigo-700 mx-auto mb-4 drop-shadow" />
            <h3 className="text-4xl font-extrabold text-gray-900">{count.shipments}+</h3>
            <p className="text-gray-700 mt-1 font-medium">Successful Shipments</p>
          </div>

          <div className="backdrop-blur-lg bg-white/40 border border-white/50 rounded-2xl p-8 text-center
                          shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <FaGlobeAsia className="text-5xl text-green-700 mx-auto mb-4 drop-shadow" />
            <h3 className="text-4xl font-extrabold text-gray-900">{count.countries}+</h3>
            <p className="text-gray-700 mt-1 font-medium">Countries Reached</p>
          </div>

          <div className="backdrop-blur-lg bg-white/40 border border-white/50 rounded-2xl p-8 text-center
                          shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <FaAward className="text-5xl text-yellow-600 mx-auto mb-4 drop-shadow" />
            <h3 className="text-4xl font-extrabold text-gray-900">{count.awards}+</h3>
            <p className="text-gray-700 mt-1 font-medium">Awards Won</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
