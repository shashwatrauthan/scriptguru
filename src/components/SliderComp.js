import React from 'react'
import Carousel from "./CrouslerComp";
import w1 from "../assets/1w.webp"
import w2 from "../assets/2w.webp"
import w3 from "../assets/3w.webp"
import w4 from "../assets/4w.webp"

const SliderComp = () => {


    let slides = [
        w1,
        w2,
        w3,
        w4
      ];


  return (
    <div className="w-[98%] m-auto pt-11">
      <Carousel slides={slides} />
    </div>
  )
}

export default SliderComp