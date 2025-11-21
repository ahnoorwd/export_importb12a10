import React from "react";
import export1 from '../assets/export1.jpg'
import export2 from '../assets/export2.jpg'
import export3 from '../assets/export3.jpg'
import export4 from '../assets/export4.jpg'
import GameHubMarquee from "./GameHubMarquee";

const Banner = () => {
  return (
    <div className="mt-8">
      
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src={export1}
            className="w-full h-[400px]"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src={export2}
            className="w-full h-[400px]"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src={export3}
            className="w-full h-[400px]"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src={export4}
            className="w-full h-[400px]"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2 ">
        <a href="#item1" className="btn btn-xs bg-amber-500 text-shadow-white">
          1
        </a>
        <a href="#item2" className="btn btn-xs bg-green-500 text-white">
          2
        </a>
        <a href="#item3" className="btn btn-xs bg-blue-500 text-white">
          3
        </a>
        <a href="#item4" className="btn btn-xs bg-red-500 text-white">
          4
        </a>
      </div>

    <div>
    <GameHubMarquee></GameHubMarquee>
    </div>

    </div>

  );
};

export default Banner;
