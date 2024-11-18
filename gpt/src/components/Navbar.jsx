import { useState } from "react"

import {FaTimes} from 'react-icons/fa'
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-router-dom";



const Navbar = () => {
  const [click, Setclick] = useState(false)
  const handleClick = () =>{
    Setclick(!click)
  }
  const content = <>
  <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-green-500 transition">
    <ul className=" text-center text-xl p-20"> 
      <Link spy={true} smooth={true} to="Home"  > <li className="my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded">Home</li></Link>
      <Link spy={true} smooth={true} to="About" > <li className="my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded">About</li></Link>
      <Link spy={true} smooth={true} to="Products" > <li className="my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded">Products</li></Link>
      <Link spy={true} smooth={true} to="Contact" > <li className="my-4 py-4 border-slate-800 hover:bg-slate-800  hover:rounded">Contact Us</li></Link>
    </ul>
  </div> 
  </> 
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20  py-4 flex-1">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">GPT</span>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10 "> 
            <ul className="flex gap-6 mr-16 text-[18px]"> 
              <Link spy={true} smooth={true}  to="Home" > <li  className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Home</li></Link>
              <Link spy={true} smooth={true} to="About"> <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">About</li></Link>
              <Link spy={true} smooth={true} to="Products"> <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Products</li></Link>
              <Link spy={true} smooth={true} to="Contact"> <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Contact Us</li></Link>
              <Link to="/login" className=" bg-white text-black border-r-amber-100 px-2 rounded-full hover:bg-red-400">Login / SignUp</Link>
            </ul>
          </div>
          
        </div>
        <div >
            {click && content}
        </div>
        
        <button className="block sm:hidden transition" onClick={handleClick}>
          { click ? <FaTimes/> : <RiMenu2Line /> }
        </button>
      </div>
    </nav>
  )
}

export default Navbar
