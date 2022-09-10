import React from 'react';

const FriendRequest = () => {
    return (
        <div className='flex flex-col bg-transparent'>
                <div className='flex justify-between items-start gap-1 w-full'>
                    {/* ==Profile== */}
                    <div className='flex justify-center gap-x-2'>
                        <a href='#'>
                            <img src="https://placeimg.com/80/80/people" className="w-10 h-10 rounded-full"/>
                        </a>
                        <div className='flex flex-col'>
                            <p className='font-semibold'>Emah John</p>
                            <p className='flex items-center gap-2 text-gray-700 text-sm'><span>24 metual friends</span></p> 
                        </div>
                    </div>
                    <div> 5d</div>
                </div>
                <div className="flex items-center gap-2">
                    <button className='py-2 px-4 bg-blue-700 text-white rounded-md'>Confirm</button>
                    <button className='py-2 px-4 bg-gray-200 text-gray-900 rounded-md'>Delete</button>
                </div>  
        </div>
    );
};

export default FriendRequest;