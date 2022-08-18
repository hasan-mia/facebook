import React from 'react';
import {BsFacebook, BsSearch, BsMessenger} from 'react-icons/bs';
import {AiFillHome, AiOutlineMenu} from 'react-icons/ai';
import {MdOndemandVideo} from 'react-icons/md'
import {HiOutlineUserGroup} from 'react-icons/hi';
import {SiFacebookgaming} from 'react-icons/si';
import {CgMenuGridR} from 'react-icons/cg';
import {IoMdNotifications} from 'react-icons/io'

const Navbar = () => {
    return (
      <header className='bg-base-100'>
        <div class="navbar">
          {/* Mobile Main Menu */}
          <div class="navbar-start">
            <div class="dropdown">
              <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li tabindex="0">
                  <a class="justify-between">
                    Parent
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                  </a>
                  <ul class="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </li>
                <li><a>Item 3</a></li>
              </ul>
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <AiOutlineMenu className='text-3xl'/>
                <a class="text-4xl cursor-pointer"><BsFacebook className='text-md lg:text-4xl text-blue-600'/></a>
              </label>
              
            </div>
            <a class="text-4xl cursor-pointer lg:visible"><BsFacebook className='text-md lg:text-4xl text-blue-600'/></a>
            <div class="form-control px-0 lg:px-2">
            <BsSearch className='text-md lg:text-4xl bg-gray-200 rounded-full p-2 active:text-blue-600'/>
              {/* <button class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button> */}
              {/* <input type="text" placeholder="search facebook" class="relative py-2 px-8 border border-gray-200 rounded-xl"/> */}
            </div>
          </div>

          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
              <li><a className='hover:bg-transparent'><AiFillHome className='text-md lg:text-3xl active:text-blue-600'/></a></li>
              <li><a className='hover:bg-transparent'><MdOndemandVideo className='text-md lg:text-3xl active:text-blue-600'/></a></li>
              <li><a className='hover:bg-transparent'><HiOutlineUserGroup className='text-md lg:text-3xl active:text-blue-600 border border-gray-300 rounded-full p-1'/></a></li>
              <li><a className='hover:bg-transparent'><SiFacebookgaming className='text-md lg:text-3xl text-gray-400 active:text-blue-600'/></a></li>
            </ul>
          </div>
          <div class="navbar-end">
            <ul class="menu menu-horizontal p-0">
            <li><div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div>
                <CgMenuGridR className='text-md lg:text-4xl bg-gray-200 rounded-full p-2 active:text-blue-600'/>
                </div>
              </label>
              <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a class="justify-between">
                    Profile
                    <span class="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div></li>
              {/* <li><a className='hover:bg-transparent'><CgMenuGridO className='text-md lg:text-4xl bg-gray-200 rounded-full p-2 active:text-blue-600'/></a></li> */}
              <li><a className='hover:bg-transparent'><BsMessenger className='text-md lg:text-4xl bg-gray-200 rounded-full p-2 active:text-blue-600'/></a></li>
              <li><a className='hover:bg-transparent'><IoMdNotifications className='text-md lg:text-4xl bg-gray-200 p-2 active:text-blue-600 border border-gray-300 rounded-full p-1'/></a></li>
              <li><a className='hover:bg-transparent'>
                <img src="https://placeimg.com/80/80/people" class="w-10 rounded-full"/>
              </a></li>
            </ul>
          </div>
        </div>
      </header>
    );
};

export default Navbar;