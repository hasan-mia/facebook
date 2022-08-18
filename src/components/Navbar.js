import React from 'react';
import {BsFacebook, BsSearch, BsMessenger} from 'react-icons/bs';
import {AiOutlineMenu} from 'react-icons/ai';
import {VscHome} from 'react-icons/vsc'
import {MdOndemandVideo} from 'react-icons/md'
import {HiOutlineUserGroup} from 'react-icons/hi';
import {SiFacebookgaming} from 'react-icons/si';
import {CgMenuGridR} from 'react-icons/cg';
import {IoMdNotifications} from 'react-icons/io';
import Home from '../pages/Home';
import LeftContent from './LeftContent';

const Navbar = () => {
    return (
      <header className='pb-2'>
        <div class="drawer fixed">
          <input id="my-drawer" type="checkbox" class="drawer-toggle" /> 
          <div class="drawer-content flex flex-col">
            {/* =========Main Navbar ============ */}
            <div class="w-full navbar justify-between bg-base-100 border border-b-2 border-gray-100">

              <div class="navbar-start flex-1 gap-2">
                <BsFacebook className='text-3xl lg:text-4xl text-blue-600'/>
                <BsSearch className='text-3xl lg:text-4xl bg-gray-200 rounded-full p-2 active:text-blue-600'/>
                <label for="my-drawer" className='lg:hidden'>
                  <AiOutlineMenu className='text-3xl cursor-pointer'/>
                </label>
              </div>
              
              <div class="navbar-center w-2/12">
                <ul class="menu menu-horizontal gap-1 lg:gap-8">
                  <li><a className='hover:bg-transparent'><VscHome className='text-xl lg:text-3xl active:text-blue-600'/></a></li>
                  <li><a className='hover:bg-transparent'><MdOndemandVideo className='text-xl lg:text-3xl active:text-blue-600'/></a></li>
                  <li><a className='hover:bg-transparent'><HiOutlineUserGroup className='text-xl lg:text-3xl active:text-blue-600 border border-gray-300 rounded-full p-1'/></a></li>
                  <li><a className='hover:bg-transparent'><SiFacebookgaming className='text-xl lg:text-3xl text-gray-400 active:text-blue-600'/></a></li>
                </ul>
              </div>
              <div class="navbar-end">
                <div class="dropdown dropdown-end">
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
                </div>
                  <ul class="menu menu-horizontal p-0">
                    <li><a className='hover:bg-transparent'><BsMessenger className='text-md lg:text-4xl bg-gray-200 rounded-full p-2 active:text-blue-600'/></a></li>
                    <li><a className='hover:bg-transparent'><IoMdNotifications className='text-md lg:text-4xl bg-gray-200 p-2 active:text-blue-600 border border-gray-300 rounded-full p-1'/></a></li>
                    <li><a className='hover:bg-transparent'>
                      <img src="https://placeimg.com/80/80/people" class="w-10 rounded-full"/>
                    </a></li>
                  </ul>
                </div>
            </div>
            {/* =========Main Body Content======= */}
            <main>
              <Home></Home>
            </main>
          </div> 
          {/* =======Left Sidebar Content====== */}
          <div class="drawer-side">
            <label for="my-drawer" class="drawer-overlay"></label> 
            <LeftContent></LeftContent>
          </div>
        </div>
      </header>
    );
};

export default Navbar;