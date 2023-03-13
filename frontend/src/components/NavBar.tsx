import React from 'react';
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

export default function NavBar() {
  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href='/'>
          <h1>r/ELI5</h1>
        </Link>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/'>Custom</Link>
          </li>
          <li>
            <Link href='/#about'>About</Link>
          </li>
        </ul>

        {/*  Mobile Button  */}
        <div>
          <AiOutlineMenu size={20}/>
        </div>
        {/* Mobile Menu */}
        <div>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>Custom</Link>
            </li>
            <li>
              <Link href='/#about'>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}