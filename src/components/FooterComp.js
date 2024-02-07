import React from 'react'

const FooterComp = () => {
  return (
    <div className='h-72 shadow-custom flex flex-wrap pt-12 mt-28 bg-[#212121]'>

    <div className='w-1/2 '>
        <div className='w-1/2 mx-auto'>
            <a href="/"><img className='w-48' src={require("../assets/logom.png")} alt="" /></a>

            <p className=' mt-4 m-1 font-medium text-white text-sm w-72 leading-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet cras habitant magna urna, eget ut .
            </p>
        </div>

    </div>

    <div className='w-1/2 pt-5 flex flex-wrap'>
        <div className='pr-32'>
            <h2 className=' mb-5 font-medium text-[#FFCA20] text-md'><a href="/">Learn</a></h2>

            <ul className=' font-medium text-white text-sm my-3'>
                <li className='my-3'><a href="/">FAQ</a></li>
                <li className='my-3'><a href="/">Community</a></li>
                <li className='my-3'><a href="/">Contact Us</a></li>
                <li className='my-3'><a href="/">Resources</a></li>
            </ul>
        </div>

        <div className='pr-32'>
            <h2 className=' mb-5 font-medium text-[#FFCA20] text-md'><a href="/">Company</a></h2>

            <ul className=' font-medium text-white text-sm my-3'>
                <li className='my-3'><a href="/">About Us</a></li>
                <li className='my-3'><a href="/">Careers</a></li>
                <li className='my-3'><a href="/">Terms &amp; Conditions</a></li>
                <li className='my-3'><a href="/">Privacy Policy</a></li>
            </ul>
        </div>

        <div className=''>
            <h2 className=' mb-5 font-medium text-[#FFCA20] text-md'><a href="/">Social</a></h2>

            <ul className=' font-medium text-white text-sm my-3'>
                <li className='my-3'><a href="/">Facebook</a></li>
                <li className='my-3'><a href="/">Twitter</a></li>
                <li className='my-3'><a href="/">Instagram</a></li>
            </ul>
        </div>

    </div>
    
</div>
  )
}

export default FooterComp