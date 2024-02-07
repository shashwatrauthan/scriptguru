import React from 'react'

function HomebodyComp() {
  return (
    <>
    <div className='bg-white h-[8.5rem] mt-4 w-[98%] m-auto flex flex-wrap flex-grow justify-center'>

        <div className=' justify-center m-4 w-[6rem]'>
            <img className='m-auto' src={require("../assets/grocery.webp")} alt="" />
            <div className='flex w-full'>
                <a className='m-auto mt-1  text-sm self-center font-semibold text-[#333333]' href="/">Grocery</a>
            </div>
        </div>

        <div className=' justify-center m-4 w-[6rem]'>
            <img className='m-auto' src={require("../assets/mobiles.webp")} alt="" />
            <div className='flex w-full'>
                <a className='m-auto mt-1  text-sm self-center font-semibold text-[#333333]' href="/">Mobile</a>
            </div>
        </div>

        <div className=' justify-center m-4 w-[6rem]'>
            <img className='m-auto' src={require("../assets/fashion.webp")} alt="" />
            <div className='flex w-full'>
                <a className='m-auto mt-1  text-sm self-center font-semibold text-[#333333]' href="/">Fashion</a>
            </div>
        </div>

        <div className=' justify-center m-4 w-[6rem]'>
            <img className='m-auto' src={require("../assets/electronics.webp")} alt="" />
            <div className='flex w-full'>
                <a className='m-auto mt-1  text-sm self-center font-semibold text-[#333333]' href="/">Electronics</a>
            </div>
        </div>


        <div className=' justify-center m-4 w-[6rem]'>
            <img className='m-auto' src={require("../assets/home.webp")} alt="" />
            <div className='flex w-full'>
                <a className='m-auto mt-1  text-sm self-center font-semibold text-[#333333]' href="/">Furniture</a>
            </div>
        </div>

        <div className=' justify-center m-4 w-[6rem]'>
            <img className='m-auto' src={require("../assets/appliances.webp")} alt="" />
            <div className='flex w-full'>
                <a className='m-auto mt-1  text-sm self-center font-semibold text-[#333333]' href="/">Appliances</a>
            </div>
        </div>

        <div className=' justify-center m-4 w-[6rem]'>
            <img className='m-auto' src={require("../assets/travel.webp")} alt="" />
            <div className='flex w-full'>
                <a className='m-auto mt-1  text-sm self-center font-semibold text-[#333333]' href="/">Travel</a>
            </div>
        </div>

        <div className=' justify-center m-4 w-[6rem]'>
            <img className='m-auto' src={require("../assets/beauty.webp")} alt="" />
            <div className='flex w-full'>
                <a className='m-auto mt-1  text-sm self-center font-semibold text-[#333333]' href="/">Toys</a>
            </div>
        </div>

        <div className=' justify-center m-4 w-[6rem]'>
            <img className='m-auto' src={require("../assets/wheeler.webp")} alt="" />
            <div className='flex w-full'>
                <a className='m-auto mt-1  text-sm self-center font-semibold text-[#333333]' href="/">Bikes</a>
            </div>
        </div>

    </div>



    </>
  )
}

export default HomebodyComp