import React from 'react'

function NavComp() {
  return (
    <>
      <div className='h-16 shadow-md flex align-middle'>

        <div className="self-center w-1/3">
          <a href="/">
            <img className='h-12 left-40 relative' src={require("../assets/logo.png")} alt="Logo" />
          </a>
          
        </div>
    
        <div className="self-center w-1/3">
          <div className=" font-semibold w-80 m-auto text-theme-black">
            <a className=" p-4 " href="/">Publish</a>
            <a className=" p-4 " href="/">Services</a>
            <a className=" p-4 " href="/">Read</a>
            <a className=" p-4 " href="/">Shop</a>
          </div>
        </div>

        <div className="self-center w-1/3">
          <div className=" relative w-48 m-auto">
            <button className=' bg-theme-light w-20 h-9 rounded text-sm text-theme-dark m-2'>Login</button>
            <button className=' bg-theme-dark w-20 h-9 rounded text-sm text-theme-white m-2'>Sign up</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default NavComp