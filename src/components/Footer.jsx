import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <div className='bg-[#f9ab6c] p-4 px-16'>
        <footer className='flex justify-between text-orange-700'>
            <p className='text-lg'>Developed in India 🇮🇳</p>
            <div className="links">
                <ul className='flex'>
                    <li><a href="https://github.com/mrravipandee/Time-Tally"><FaGithub size={25} className='mr-2' /></a></li>
                    <li><a target='_blank' href="https://imravidev.vercel.app/"><IoIosContact size={28} className='mr-2' /></a></li>
                    <li><a href=""></a></li>
                </ul>
            </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
