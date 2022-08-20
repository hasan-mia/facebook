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
        <div className="drawer fixed">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" /> 
          <div className="drawer-content flex flex-col">
            {/* =========Main Navbar ============ */}
            <div className="w-full navbar justify-between bg-base-100 border border-b-2 border-gray-100">

              <div className="navbar-start flex-1 gap-2">
                <BsFacebook className='text-3xl lg:text-4xl text-blue-600'/>
                <BsSearch className='text-3xl lg:text-4xl bg-gray-200 rounded-full p-2 active:text-blue-600'/>
                <label for="my-drawer" className='lg:hidden'>
                  <AiOutlineMenu className='text-3xl cursor-pointer'/>
                </label>
              </div>
              
              <div className="navbar-center w-2/12">
                <ul className="menu menu-horizontal gap-1 lg:gap-8">
                  <li><a className='hover:bg-transparent'><VscHome className='text-xl lg:text-3xl active:text-blue-600'/></a></li>
                  <li><a className='hover:bg-transparent'><MdOndemandVideo className='text-xl lg:text-3xl active:text-blue-600'/></a></li>
                  <li><a className='hover:bg-transparent'><HiOutlineUserGroup className='text-xl lg:text-3xl active:text-blue-600 border border-gray-300 rounded-full p-1'/></a></li>
                  <li><a className='hover:bg-transparent'><SiFacebookgaming className='text-xl lg:text-3xl text-gray-400 active:text-blue-600'/></a></li>
                </ul>
              </div>
              <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                      <div>
                      <CgMenuGridR className='text-md lg:text-4xl bg-gray-200 rounded-full p-2 active:text-blue-600'/>
                      </div>
                    </label>
                    <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                      <li>
                        <a className="justify-between">
                          Profile
                          <span className="badge">New</span>
                        </a>
                      </li>
                      <li><a>Settings</a></li>
                      <li><a>Logout</a></li>
                    </ul>
                </div>
                  <ul className="menu menu-horizontal p-0">
                    <li><a className='hover:bg-transparent'><BsMessenger className='text-md lg:text-4xl bg-gray-200 rounded-full p-2 active:text-blue-600'/></a></li>
                    <li><a className='hover:bg-transparent'><IoMdNotifications className='text-md lg:text-4xl bg-gray-200 p-2 active:text-blue-600 border border-gray-300 rounded-full p-1'/></a></li>
                    <li><a className='hover:bg-transparent'>
                      <img src="https://placeimg.com/80/80/people" className="w-10 rounded-full"/>
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
          <div className="drawer-side">
            <label for="my-drawer" className="drawer-overlay"></label> 
            <LeftContent></LeftContent>
          </div>
        </div>
      </header>
    );
};

export default Navbar;