import React from 'react'
import { about2 } from '../assets'

const Bug = () => {
    const Data = [
  {
    id: 1,
    title: "Bug free code",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Premier support",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Regular updates",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
  return (
    <div className='bg-[#18132b]'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20'>
            <div>
                <img src={about2} alt='' className='h-auto max-w-full' />
            </div>
            <div className='flex flex-col items-center' >
                {Data.map((item)=>(
                    <div key={item.id}>
                        <h1 className='text-3xl font-bold my-6'>{item.title}</h1>
                        <p className='text-gray-400 text-sm max-w-[400]'>{item.desc}</p>
                    </div>
                ))}
            </div>


        </div>

    </div>
  )
}

export default Bug