import React from 'react'
import ecommerce from "./images/Frame 33707.png"
import ecommerceLogo from "./images/Frame 30964.png"
import femmima from "./images/Frame 33709.png"
import femmimaLogo from "./images/Group 30964.png"
import liquidityPool from "./images/Frame 33710.png"
import liquidityPoolLogo from "./images/Left Content.png"
const Portfolio = () => {
  return (
    <section
      className="bg-darkShade py-20 gap-12 items-center px-6 flex flex-col text-lightShade lg:flex-row"
    >
      <h3 className="font-semibold text-center text-3xl">Flo's Portfolio</h3>
      <div className="bg-darkshade gap-5 mb-10 flex items-center flex-col">
        <div className="w-[300px]">
          <img className="" src={ecommerce} alt="ecommerce" />
        </div>
        <div className="w-[80px]">
          <img src={ecommerceLogo} alt="ecommerce logo" />
        </div>
        <div>
          <figcaption className="font-semibold text-[18px]">An E-Commerce website</figcaption>
        </div>
      </div>
      <div className="bg-darkshade gap-5 mb-10 flex items-center flex-col">
        <div className="w-[300px]">
          <img className="" src={liquidityPool} alt="liquidity Pool" />
        </div>
        <div className="w-[140px] ">
          <img src={liquidityPoolLogo} alt="" />
        </div>
        <div className=' -mt-2' >
          <figcaption className="font-semibold text-[18px] ">A Liquidity Pool design</figcaption>
        </div>
      </div>
      <div className="bg-darkshade gap-5 mb-10 flex  items-center flex-col">
        <div className="w-[300px]">
          <img className="" src={femmima} alt="" />
        </div>
        <div className="-mb-2 mr-5">

          <img className="w-[150px] " src={femmimaLogo} alt="" />

        </div>
        <div>
          <figcaption className="font-semibold text-[18px]">A Femtech app</figcaption>
        </div>
      </div>
      <button
        className="border-[1px] h-14 w-56 -mt-6 font-semibold  border-lightShade py-3 px-12 rounded-[8px]"
      >
        Explore More
      </button>
    </section>
  )
}

export default Portfolio
