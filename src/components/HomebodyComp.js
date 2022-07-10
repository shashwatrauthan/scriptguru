import React from 'react'

function HomebodyComp() {
  return (
    <>
        <div className=' h-96 flex'>
            <div className=' top-28 relative'>
                <img className=' w-28' src={require("../assets/elp_l.png")} alt="" />
            </div>

            <div className='self-center w-2/3 m-auto'>
                <div className=' font-bold text-5xl text-theme-black text-center pb-12'>
                    <p>Want to publish your book?</p>
                    <p className=' pt-4'>Write on the go with <b className='text-theme-dark'>WRITRO</b>,</p>
                </div> 
                <div className=" relative w-80 m-auto top-6">
                    <button className=' bg-theme-coffee w-36 h-10 rounded text-sm text-theme-white m-2'>Start Publishing</button>
                    <button className=' bg-theme-coffee w-36 h-10 rounded text-sm text-theme-white m-2'>Start Reading</button>
                </div>
            </div>

            <div className=' top-28 relative'>
                <img className=' w-32' src={require("../assets/elp_r.png")} alt="" />
            </div>
        </div>

        <div className=' h-128 flex'>
            <div className='self-center w-2/3 m-auto'>
                <img className=' w-64 m-auto' src={require("../assets/asset2.png")} alt="" />
            </div>
        </div>

        <div  className=' h-112 flex'>
            <div className='self-center w-1/4 m-auto'>
                <h4 className=' font-bold text-4xl text-theme-dark'>Writro Writer</h4>
                <p className=' font-regular text-theme-gray text-lg my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum porttitor duis nec leo ac. Natoque et sapien quisque mauris tempor, sapien accumsan. Nibh metus scelerisque dolor rhoncus est amet auctor. </p>
                <button className='m-0 bg-theme-button w-56 h-12 rounded-xl text-md font-bold text-theme-white '>Let’s Write &nbsp;<b>&rarr;</b></button>
            </div>

            <div className='self-center w-96 m-auto'>
                <img className='h-auto m-auto' src={require("../assets/asset3.png")} alt="" />
            </div>
        </div>

        <div  className=' h-128 flex mt-16'>
            <div className='self-center w-96 m-auto'>
                <img className='' src={require("../assets/asset4.png")} alt="" />
            </div>

            <div className='self-center w-1/4 m-auto text-right'>
                <h4 className=' font-bold text-4xl text-theme-dark'>Writro Reader</h4>
                <p className=' font-regular text-theme-gray text-lg my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum porttitor duis nec leo ac. Natoque et sapien quisque mauris tempor, sapien accumsan. Nibh metus scelerisque dolor rhoncus est amet auctor. Tincidunt libero aliquam sapien</p>
                <button className='m-0 bg-theme-button w-56 h-12 rounded-xl text-md font-bold text-theme-white '>Let’s Read &nbsp;<b>&rarr;</b></button>
            </div>
        </div>


        <div  className=' h-128 mt-16 relative flex'>
            <div className=' z-0 h-48 self-center w-3/4 m-auto bg-theme-button-opacity rounded-3xl flex'>
                <div className='w-1/2 self-center'>
                    <h4 className=' text-theme-dark self-center font-extrabold text-5xl text-center z-20'>Writro</h4>
                </div>

                <div className='w-72 self-center m-auto'>
                    <div className=' z-10 relative -top-32'>
                        <img className=' m-auto' src={require("../assets/Device.png")} alt="" />    
                    </div>
                </div>

                <div className='w-1/2 self-center'>
                    <div className='w-60 self-center m-auto font-semibold'>
                        <button className='m-2 cursor-pointer bg-theme-white w-48 h-14 rounded-xl text-xl text-theme-black '>
                            <div className='flex'>
                                <img className='h-7 m-2 ml-5 item-center content-center' src={require("../assets/google.png")} alt="" />
                                <p className='h-7 m-2 item-center content-center'>Play Store</p>
                            </div>
                        </button>

                        <button className='m-2 bg-theme-white w-48 h-14 rounded-xl text-xl text-theme-black '>
                            <div className='flex'>
                                <img className='h-7 m-2 ml-5 item-center content-center' src={require("../assets/apple.png")} alt="" />
                                <p className='h-7 m-2 item-center content-center'>App Store</p>
                            </div>
                        </button>

                    </div>
                </div>
            </div>

        </div>


        <div className='h-72 shadow-custom flex  pt-12 mt-28'>

            <div className='w-1/2 '>
                <div className='w-1/2 mx-auto'>
                    <a href="/"><img className='w-48' src={require("../assets/logo.png")} alt="" /></a>

                    <p className=' pl-16 m-1 font-medium text-theme-footer-text text-sm w-72 leading-6'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet cras habitant magna urna, eget ut .
                    </p>
                </div>

            </div>

            <div className='w-1/2 pt-5 flex'>
                <div className='pr-32'>
                    <h2 className=' mb-5 font-medium text-theme-footer-text text-md'><a href="/">Learn</a></h2>

                    <ul className=' font-medium text-theme-footer-gray text-md my-3'>
                        <li className='my-3'><a href="/">FAQ</a></li>
                        <li className='my-3'><a href="/">Community</a></li>
                        <li className='my-3'><a href="/">Contact Us</a></li>
                        <li className='my-3'><a href="/">Resources</a></li>
                    </ul>
                </div>

                <div className='pr-32'>
                    <h2 className=' mb-5 font-medium text-theme-footer-text text-md'><a href="/">Company</a></h2>

                    <ul className=' font-medium text-theme-footer-gray text-md my-3'>
                        <li className='my-3'><a href="/">About Us</a></li>
                        <li className='my-3'><a href="/">Careers</a></li>
                        <li className='my-3'><a href="/">Terms &amp; Conditions</a></li>
                        <li className='my-3'><a href="/">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className=''>
                    <h2 className=' mb-5 font-medium text-theme-footer-text text-md'><a href="/">Social</a></h2>

                    <ul className=' font-medium text-theme-footer-gray text-md my-3'>
                        <li className='my-3'><a href="/">Facebook</a></li>
                        <li className='my-3'><a href="/">Twitter</a></li>
                        <li className='my-3'><a href="/">Instagram</a></li>
                    </ul>
                </div>

            </div>
            
        </div>


    </>
  )
}

export default HomebodyComp