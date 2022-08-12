import React from 'react'
import tem from '../public/theme.png';
import Image from 'next/image';

const Main = () => {
    return (
        <div>
            <div className="main flex justify-center h-[100vh]">
                <div className="left text-center md:mt-44 mt-56">
                    <h1 className='font-Ubuntu lg:text-9xl md:text-7xl text-5xl'>Web<span className='text-pink-600'>Tem</span></h1>
                    <p className='md:text-xl m-5'>Here, You can find best responsive templates for free! All of our templates are responsive and free to use.</p>
                    <div className="btn m-10">
                        <a className='bg-pink-600 p-4 px-6 text-xl text-white font-bold rounded-md' href="/">Browse Now</a>
                    </div>
                </div>
                <div className="right m-2 mt-16 absolute md:static top-20 w-48 md:w-auto">
                    <Image src={tem} />
                </div>
            </div>
        </div>
    )
}

export default Main
