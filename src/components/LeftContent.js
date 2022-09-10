import React from 'react';
import {BsClockFill, BsMessenger} from 'react-icons/bs';
import {AiOutlineNotification} from 'react-icons/ai';
import {GoGraph} from 'react-icons/go';
import {MdOndemandVideo} from 'react-icons/md';
import {SiFacebookgaming, SiFacebooklive} from 'react-icons/si';
import {HiOutlineUserGroup} from 'react-icons/hi';
import {ImUsers} from 'react-icons/im';
import {FaPager} from 'react-icons/fa';
import userImag from '../../src/assets/userImg.png';

const LeftContent = () => {
    return (
        <div className='left-sidebar w-full max-h-screen'>
          <ul className="menu overflow-y-auto bg-gray-50 lg:bg-transparent">
              {/* <!-- Sidebar content here --> */}
              <li><a className='hover:bg-gray-100'>
                    <img src={userImag} className="w-8 rounded-full"/>
                    <span>Emah John</span>
                  </a>
              </li>
              <li><a className='hover:bg-gray-100'>
                    <ImUsers className='text-3xl text-blue-600'/>
                    <span>Friends</span>
                  </a>
              </li>
              <li><a className='hover:bg-gray-100'>
                    <HiOutlineUserGroup className='text-3xl text-blue-600'/>
                    <span>Groups</span>
                  </a>
              </li>

              <li><a className='hover:bg-gray-100'>
                    <MdOndemandVideo className='text-3xl text-blue-600'/>
                    <span>Watch</span>
                  </a>
              </li>

              <li><a className='hover:bg-gray-100'>
                    <BsClockFill className='text-3xl text-blue-600'/>
                    <span>Memory</span>
                  </a>
              </li>

              <li><a className='hover:bg-gray-100'>
                    <AiOutlineNotification className='text-3xl text-blue-600'/>
                    <span>Ads Center</span>
                  </a>
              </li>
              
              <li><a className='hover:bg-gray-100'>
                    <GoGraph className='text-3xl text-blue-600'/>
                    <span>Ads Manager</span>
                  </a>
              </li>

              <li><a className='hover:bg-gray-100'>
                    <BsMessenger className='text-3xl text-blue-600'/>
                    <span>Messenger</span>
                  </a>
              </li>
              <li><a className='hover:bg-gray-100'>
                    <SiFacebookgaming className='text-3xl text-blue-600'/>
                    <span>Gaming video</span>
                  </a>
              </li>
              <li><a className='hover:bg-gray-100'>
                    <SiFacebooklive className='text-3xl text-blue-600'/>
                    <span>Live Video</span>
                  </a>
              </li>
              <li><a className='hover:bg-gray-100'>
                    <FaPager className='text-3xl text-blue-600'/>
                    <span>Pages</span>
                  </a>
              </li>
            </ul>  
        </div>
    );
};

export default LeftContent;