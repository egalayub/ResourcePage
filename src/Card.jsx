import Slider1, {Timer,Measurment,Practises,Essentials} from "./Slider1";

import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
import React, {useState} from "react";

function Card() {

const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 100;
}
const scrollRight = () => {
    document.getElementById("content").scrollLeft += 100;
}


  return (
    <div className="relative">
      <div className="text-center py-4  text-xl font-bold">Resources</div>
      <div className="absolute right-0 top-5 ">
        <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
          <BsChevronCompactLeft />
        </button>
        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
          <BsChevronCompactRight />
        </button>
      </div>
      <div id="content" className="p-4 flex items-center justify-center overflow-x-auto scroll-smooth  scrollbar-hide">
        <div>
          <Timer/>
        </div>
        <div>
          <Measurment/>
        </div>
        <div>
          <Practises />
        </div>
        <div>
          <Essentials />
        </div>
       </div>
    </div>
  );
}

export default Card;