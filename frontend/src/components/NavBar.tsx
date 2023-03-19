import React, {useState} from 'react';
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

export default function NavBar() {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#FF701D]'>r/ELI5</h1>
      <ul className='hidden md:flex mr-[100px]'>
        <li className='p-4 m-2'>Home</li>
        <li className='p-4 m-2'><Link href='/custom'>Custom</Link></li>
        <li className='p-4 m-2'>About</li>
      </ul>
      <div onClick={handleNav} className ='block md:hidden cursor-pointer'>
        {!nav ? <AiOutlineMenu size={35}/> : <AiOutlineClose size={30}/>}
      </div>
      <div className={!nav ? 'fixed left-[-100%] md:hidden' : 'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500 md:hidden'}>
        <h1 className='w-full text-3xl font-bold text-[#FF701D] m-4 pt-4'>r/ELI5</h1>
        <ul className='p-4 uppercase'>
          <li className='p-4'>Home</li>
          <li className='p-4'><Link href='/custom'>Custom</Link></li>
          <li className='p-4'>About</li>
        </ul>
      </div>
    </div>
  )
}