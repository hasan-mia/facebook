import React from 'react';
import {BsSearch, BsThreeDots} from 'react-icons/bs';
import FriendRequest from './FriendRequest';
import userImag from '../../src/assets/userImg.png';
import ActiveUser from './ActiveUser';

const RightContent = () => {
    return (
        <div className='right-sidebar w-full max-h-screen'>
          <ul className="menu overflow-y-auto bg-gray-50 lg:bg-transparent mt-16 lg:mt-0">
              {/* <!-- Sidebar content here --> */}
              {/*======== Pages and Groups=========*/}
              <li>
                <div className='flex justify-between items-center gap-1 px-2 py-2 w-full mb-2 hover:bg-transparent'>
                    {/* ==Profile== */}
                    <h3 className='text-md text-gray-600 font-semibold'>Your Pages and profiles</h3>
                    <div className="dropdown dropdown-end">
                        <label tabindex="0" className="rounded">
                          <div className='text-md lg:text-2xl cursor-pointer p-2'>
                            <BsThreeDots/>
                          </div>
                        </label>
                        <ul tabindex="0" className="p-2 shadow menu menu-compact dropdown-content bg-base-100 w-80 -z-0">
                          <li>
                            <a className='hover:bg-gray-100'>
                              <img src="https://placeimg.com/80/80/people" className="w-8 rounded-full"/>
                              <span>Amar Market</span>
                            </a>
                          </li>
                          <li>
                          <a className='hover:bg-gray-100'>
                            <img src="https://placeimg.com/80/80/people" className="w-8 rounded-full"/>
                            <span>Amar Market</span>
                          </a>
                          </li>
                        </ul>
                    </div>
                </div>

                  <a className='hover:bg-gray-100'>
                    <img src="https://placeimg.com/80/80/people" className="w-8 rounded-full"/>
                    <span>Amar Market</span>
                  </a>
                  <a className='hover:bg-gray-100'>
                    <img src="https://placeimg.com/80/80/people" className="w-8 rounded-full"/>
                    <span>World Tribune</span>
                  </a>
                  <hr className='border-gray-300'/>
              </li>

              {/*======== Friend Request=========*/}
              <li>
                <div className='flex justify-between items-center gap-1 px-2 w-full mb-2 hover:bg-transparent'>
                    {/* ==Profile== */}
                    <h3 className='text-md text-gray-600 font-semibold'>Friend requests</h3>
                    <div className="dropdown dropdown-end">
                        <label tabindex="0" className="rounded">
                          <div className='cursor-pointer p-2'>
                            <a href="#"className='text-blue-800'>See all</a>
                          </div>
                        </label>
                        <ul tabindex="0" className="p-2 shadow menu menu-compact dropdown-content bg-base-100 w-80 -z-0">
                          <li>
                            <FriendRequest></FriendRequest>
                          </li>
                          <li>
                          <FriendRequest></FriendRequest>
                          </li>
                        </ul>
                    </div>
                </div>

                  {/* ==Friend Request== */}
                  <FriendRequest></FriendRequest>
                  <FriendRequest></FriendRequest>
                  <hr className='border-gray-300'/>
              </li>
              {/*======== Contact & Messege=========*/}
              <li>
                <div className='flex justify-between items-center gap-1 px-2 py-2 w-full mb-2 hover:bg-transparent'>
                    {/* ==Profile== */}
                    <h3 className='text-md text-gray-600 font-semibold'>Contacts</h3>
                    <div className="dropdown dropdown-end">
                        <label tabindex="0" className="rounded">
                          <div className='flex gap-2 text-sm lg:text-xl cursor-pointer p-2'>
                            <BsSearch/>
                            <BsThreeDots/>
                          </div>
                        </label>
                        <ul tabindex="0" className="p-2 shadow menu menu-compact dropdown-content bg-base-100 w-80 -z-0">
                          <li>
                            <a className='hover:bg-gray-100 relative'>
                              <img src={userImag} className="w-8 rounded-full"/>
                              <span className='w-3 h-3 bg-green-500 border-2 rounded-full absolute left-10 top-1/2'></span>
                              <span>Anish Ekfa</span>
                            </a>
                          </li>
                          <li>
                          <a className='hover:bg-gray-100 relative'>
                            <img src={userImag} className="w-8 rounded-full"/>
                            <span className='w-3 h-3 bg-green-500 border-2 rounded-full absolute left-10 top-1/2'></span>
                            <span>Prithila Hossain</span>
                          </a>
                          </li>
                        </ul>
                    </div>
                </div>

                  {/* =====Active user====== */}
                  <ActiveUser/>

                  <a className='hover:bg-gray-100 relative'>
                    <img src={userImag} className="w-8 rounded-full"/>
                    <span className='w-3 h-3 bg-green-500 border-2 rounded-full absolute left-10 top-1/2'></span>
                    <span>Janntul Jarin</span>
                  </a>

                  <a className='hover:bg-gray-100 relative'>
                    <img src={userImag} className="w-8 rounded-full"/>
                    <span className='w-3 h-3 bg-green-500 border-2 rounded-full absolute left-10 top-1/2'></span>
                    <span>Janntaul Adhon</span>
                  </a>

                  <a className='hover:bg-gray-100 relative'>
                    <img src={userImag} className="w-8 rounded-full"/>
                    <span className='w-3 h-3 bg-green-500 border-2 rounded-full absolute left-10 top-1/2'></span>
                    <span>Somaiya Shimu</span>
                  </a>
                  <a className='hover:bg-gray-100 relative'>
                    <img src={userImag} className="w-8 rounded-full"/>
                    <span className='w-3 h-3 bg-green-500 border-2 rounded-full absolute left-10 top-1/2'></span>
                    <span>Barsha Khan</span>
                  </a>
              </li>
            
            </ul>  
        </div>
    );
};

export default RightContent;