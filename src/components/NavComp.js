import { React } from 'react'
import 'react-dropdown/style.css';
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { IoStorefrontOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./Header.css"
import { FaBoxArchive } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { TbGiftCardFilled } from "react-icons/tb";
import { TbPremiumRights } from "react-icons/tb";

function NavComp() {


  
  const menuToggle = ()=>{
    const toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
    }



  return (
    <>
      <div className='h-[4.5rem] flex align-middle bg-white'>

        <div className="self-center w-1/3">
          <a href="/">
            <img className='h-12 left-40 relative' src={require("../assets/logom.png")} alt="Logo" />
          </a>
          
        </div>
    

        <div className="relative self-center w-1/3">
          <div className='relative z-10 pl-1'>
            <CiSearch size="1.5rem" color='gray' />

          </div>
            <input className='absolute -top-2 outline-none text-gray-500 bg-[#F0F5FF] rounded h-[2.5rem] w-[30rem] pl-8' type="text" placeholder='Search...'/>
        </div>


        <div className="self-center w-1/3">
          <div className="flex justify-center  items-center relative font-medium  w-48 m-auto text-[#3e3e3e]">

          
            <div className='self-center relative z-10 top-6'>
              <div className='relative top-6 block'>
                <CgProfile size="1.5rem"/>
              </div>
              {/* <a className='relative m-4 mr-6 -top-6 pl-4' href="/">Login</a> */}

              <div className="relative m-4 mr-6 pl-2 inline-block hover:block -top-4 z-10"  >
              <div className="mx-2 flex h-11 w-11 rounded-md action z-10">
                <div className='cursor-pointer relative block' >
                  <button className='relative h-full -top-2 z-0' onClick={menuToggle} >Login</button>
                </div>

                    <div className="menu">
                      <ul>
                        <li>
                        <CgProfile/><a className='ml-2' href="#">My Profile</a>
                        </li>
                        <li>
                          <TbPremiumRights /><a  className='ml-2' href="#">Flipkart Plus</a>
                        </li>
                        <li>
                          <FaBoxArchive /><a className='ml-2' href="#">Orders</a>
                        </li>
                        <li>
                          <FaHeart /><a className='ml-2' href="#">Wishlist</a>
                        </li>
                        <li>
                          <FaGift /><a className='ml-2' href="#">Reward</a>
                        </li>
                        <li>
                          <TbGiftCardFilled /><a className='ml-2' href="#">Giftcard</a>
                        </li>
                      </ul>
                    </div>
                </div>
              </div>
              
              <div className='pl-20 -top-[4.75rem] relative z-10 right-2 block'>
                <RiArrowDropDownLine size="1.5rem"/>
              </div>
            </div>
            <div className='pl-4 self-center relative z-10 top-3'>
              <IoCartOutline size="1.5rem"/>
              <a className='relative m-4 mr-6 -top-6 pl-4' href="/">Cart</a>
            </div>
            <div className='pl-4 self-center relative z-10 top-3'>
              <IoStorefrontOutline size="1.5rem"/>
              <a className='relative m-4 mr-6 -top-6 pl-4' href="/">Seller</a>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default NavComp