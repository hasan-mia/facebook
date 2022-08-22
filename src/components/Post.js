import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import {BiWorld} from 'react-icons/bi';
import domingo from '../assets/domingo.jpg'

const Post = () => {
    return (
        <div className='py-2 my-4 bg-white border rounded-xl'>
            <h2 className='border-b pb-1 px-2'>Suggested for you</h2>
            <div className="flex flex-col flex-start gap-2">
               
                <div className='flex justify-between items-center gap-1 px-2 py-2 w-full mb-2'>
                    {/* ==Profile== */}
                    <div className='flex justify-center gap-x-2'>
                        <a href='#'>
                            <img src="https://placeimg.com/80/80/people" className="w-10 h-10 rounded-full"/>
                        </a>
                        <div className='flex flex-col'>
                            <p>Hasan Rafi</p>
                            <p className='flex items-center gap-2 text-gray-700 text-sm'><span>6hr</span> <span><BiWorld/></span></p> 
                        </div>
                    </div>

                    <div className="dropdown dropdown-end px-2">
                        <label tabindex="0" className="rounded-full">
                        <div className='text-md lg:text-2xl cursor-pointer p-2'>
                        <BsThreeDots/>
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
                </div>
                <div className='px-4 py-0'>
                    <h1>টি-টোয়েন্টি থেকে দেয়া হয়েছে বিশ্রাম; দায়িত্ব পালন করবেন ওয়ানডে এবং টেস্টে, চোখ রাখবেন ঘরোয়া ক্রিকেটে....</h1>
                </div>
                <div className='w-full'>
                    <img src={domingo} alt="domingo" className='w-full full' />
                </div>
            </div>
        </div>
    );
};

export default Post;