import React from "react";

const GameHubMarquee = () => {
  const games = [
     "📦 Electronics",
  "🥭 Fresh Mangoes",
  "🚗 Automobile Parts",
  "🧵 Textiles & Fabrics",
  "🛢️ Petroleum Products",
  "💎 Precious Minerals",
  "🧴 Cosmetics & Beauty Items",
  "🍚 Rice & Agricultural Goods",
  "🛋️ Furniture & Home Decor",
  "⚙️ Industrial Machinery",
  ];

  return (
    <div className="group w-full overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900 py-4 border-y border-gray-700 shadow-md cursor-pointer mb-8 mt-8">
     
      <div className="flex whitespace-nowrap animate-marquee text-gray-200 font-semibold text-lg tracking-wide ">
        {games.map((game, index) => (
          <span
            key={index}
            className="mx-8 hover:text-indigo-400 transition-colors duration-300"
          >
            {game}
          </span>
        ))}
        {/* Duplicate for seamless infinite scroll */}
        {games.map((game, index) => (
          <span
            key={`dup-${index}`}
            className="mx-8 hover:text-indigo-400 transition-colors duration-300"
          >
            {game}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GameHubMarquee;
