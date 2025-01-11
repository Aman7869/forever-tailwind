import React from 'react'
import Logo from "../../../assets/images/forever-logo.png";
import CopyRight from './CopyRight';

const Footer = () => {
  return (
    <div className='container mx-auto pt-20'>
      <div className='flex gap-20 justify-between pb-8'>
        <div className='flex-[3]'>
          <img src={Logo} alt="logo" className='w-[134px]' />
          <p className='text-gray-600 pt-3 w-[64%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className='flex-[0.5]'>
          <h2 className='text-xl font-semibold'>COMPANY</h2>
          <ul className='flex flex-col gap-2 pt-3 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className='flex-[1]'>
          <h2 className='text-xl font-semibold'>GET IN TOUCH</h2>
          <ul className='flex flex-col gap-2 pt-3 text-gray-600'>
            <li>+1-000-000-0000</li>
            <li>demo@gmail.com</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <CopyRight />
    </div>
  )
}

export default Footer