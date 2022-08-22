import React from 'react';
import {FaVideo} from 'react-icons/fa';
import {MdPhotoLibrary} from 'react-icons/md';
import {BsFillEmojiSmileFill} from 'react-icons/bs'

const PostEditor = () => {
    return (
        <div className='py-2 bg-white border rounded-xl'>
            <div className="flex flex-col justify-start gap-2">
                <div className='flex items-center gap-1 hover:bg-gray-100 px-2 py-2 w-full mb-2'>
                    <a href='#'>
                        <img src="https://placeimg.com/80/80/people" className="w-10 h-10 rounded-full"/>
                    </a>
                    <div className="flex w-full px-2">
                        <input type="text" placeholder="What's your mind Md.Hasan?" className="py-4 input bg-gray-100 input-bordered w-full" />
                    </div>
                </div>
                
                <div className="flex justify-between items-center gap-2 px-8">
                    <button className='py-2 px-4 flex items-center gap-2 hover:bg-gray-200 hover:rounded-md'><FaVideo className='lg:text-3xl text-red-500'/><span className='lg:text-md font-semibold'>Live video</span></button>
                    <button className='py-2 px-4 flex items-center gap-2 hover:bg-gray-200 hover:rounded-md'><MdPhotoLibrary className='lg:text-3xl text-green-300'/><span className='lg:text-md font-semibold'>Photo/video</span></button>
                    <button className='py-2 px-4 flex items-center gap-2 hover:bg-gray-200 hover:rounded-md'><BsFillEmojiSmileFill className='lg:text-3xl text-yellow-300'/><span className='lg:text-md font-semibold'>Felling/activity</span></button>
                </div>
            </div>
        </div>
    );
};

export default PostEditor;