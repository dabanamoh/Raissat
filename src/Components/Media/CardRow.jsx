import React from 'react'
import { Link } from 'react-router';

// import { locust } from '../../assets/assets';
// import { elohozino } from '../../assets/assets';

const CardRow = ({ title, thumbnail, authorProfile, body, author, publishDate, to }) => {
  return (
    <div className='flex flex-col lg:flex-row shadow-2xl rounded-lg p-3 mb-8 relative'>
      <div className='w-full'>
        <img className='rounded-lg w-full h-full' src={thumbnail} alt="blog-image" />
      </div>
      <div className='font-inter p-4 md:p-6 w-full'>
        <div className="flex flex-col gap-6 mb-12">
          <h1 className="text-rich-black font-bold text-sm md:text-md lg:text-xl">
            {title}
          </h1>
          <p className="">
            {body}<Link className='font-semibold text-rich-black cursor-pointer' to={to}>...Read Article</Link>
          </p>
        </div>
        <div className='flex justify-end absolute bottom-4 right-4'>
          <div className='flex gap-3 items-center'>
            <img className='rounded-full size-8' src={authorProfile} alt="Publisher-profile" />
            <span>
              <h2 className='font-semibold text-xs'>{author}</h2>
              <p className='text-xs text-gray-500 mt-1'>{publishDate}</p>
            </span>
          </div>
          {/* <Link to="">...read More</Link> */}
        </div>
      </div>
    </div>
  );
}

export default CardRow