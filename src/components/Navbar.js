import React from 'react';
import {BsFacebook, BsSearch, BsMessenger} from 'react-icons/bs';
import {AiOutlineMenu} from 'react-icons/ai';
import {VscHome} from 'react-icons/vsc';
import {FaUsers} from 'react-icons/fa'
import {MdOndemandVideo} from 'react-icons/md';
import {HiOutlineUserGroup} from 'react-icons/hi';
import {SiFacebookgaming} from 'react-icons/si';
import {CgMenuGridR} from 'react-icons/cg';
import {IoMdNotifications} from 'react-icons/io';
import Home from '../pages/Home';
import LeftContent from './LeftContent';
import userImag from '../../src/assets/userImg.png';


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
                <div className='bg-main py-2 px-4 relative rounded sm-none'>
                    <input type="text" placeholder="Search Profile" className="p-2 border bg-gray-200 border-gray-200 rounded-3xl w-full px-2 lg:px-8" />
                    <p><BsSearch className='text-color z-10 text-xl absolute top-5 mx-2'/></p>
                </div>
                <BsSearch className='text-3xl lg:text-4xl bg-gray-200 rounded-full p-2 active:text-blue-600 lg:hidden'/>
                <label for="my-drawer" className='lg:hidden'>
                  <AiOutlineMenu className='text-3xl cursor-pointer'/>
                </label>
              </div>
              
              <div className="navbar-center w-2/12 sm-none">
                <ul className="menu menu-horizontal gap-1 lg:gap-8">
                  <li className='text-md lg:text-3xl active:bg-blue-600 hover:bg-gray-200 rounded-lg'><a className='hover:bg-transparent'><VscHome/></a></li>
                  <li className='text-md lg:text-3xl active:bg-blue-600 hover:bg-gray-200 rounded-lg'><a className='hover:bg-transparent'><MdOndemandVideo/></a></li>
                  <li className='text-md lg:text-3xl active:bg-blue-600 hover:bg-gray-200 text-gray-500'><a className='hover:bg-transparent'><FaUsers className='border border-gray-400 p-1 rounded-full'/></a></li>
                  <li className='text-md lg:text-3xl active:bg-blue-600 hover:bg-gray-200 rounded-lg p-1 text-gray-50'><a className='hover:bg-transparent'><SiFacebookgaming className='bg-gray-400 border border-gray-400' /></a></li>
                </ul>
              </div>
              <div className="navbar-end">
                <div className="dropdown dropdown-end px-2">
                    <label tabindex="0" className="rounded-full">
                      <div className='text-md lg:text-2xl cursor-pointer bg-gray-200 rounded-full p-2 active:text-blue-600'>
                      <CgMenuGridR/>
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
                  <ul className="flex justify-center items-center gap-2">
                    <li className='text-md lg:text-2xl p-2 bg-gray-200 rounded-full active:text-blue-600 cursor-pointer'><a ><BsMessenger/></a></li>
                    <li className='text-md lg:text-2xl p-2 bg-gray-200 rounded-full active:text-blue-600 cursor-pointer'><a ><IoMdNotifications /></a></li>
                    <li><a className='hover:bg-transparent cursor-pointer'>
                      <img src={userImag} className="w-10 rounded-full"/>
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