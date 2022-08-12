import React, { useRef } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const handleClick = () => {
        if (ref.current.classList.contains('-left-full')) {
            ref.current.classList.remove("-left-full");
        }
    }
    const handleClose = () =>{
        ref.current.classList.add('-left-full')
    }

    const ref = useRef();
    return (
        <>
            <div className="nav bg-white shadow-lg md:h-20 h-16 md:flex justify-between sticky top-0 z-50 w-[100%]">
                <div className="logo ml-10 z-10 md:m-5">
                    <div className="text text-4xl font-Ubuntu justify-center text-center text-pink-600 mt-1 md:m-auto">
                        <h1>WebTech</h1>
                    </div>
                </div>
                <div className="items md:flex m-5 mr-10">
                    <ul ref={ref} className='md:flex md:-mt-4 md:static md:bg-transparent absolute top-0 -left-full bg-white w-[100vw] h-[100vh] md:w-auto md:h-auto z-30 '>
                        <div className='flex'>
                            <h1 className='md:hidden block m-10 text-xl w-full'>Menu</h1>
                            <AiOutlineClose className='md:hidden block m-7 text-5xl cursor-pointer' onClick={handleClose} />
                        </div>
                        <li className='md:m-5 m-10 text-xl font-Ubuntu text-pink-600'><a >About</a></li>
                        <li className='md:m-5 m-10 text-xl font-Ubuntu text-pink-600'><a >Templates</a></li>
                        <li className='md:m-5 m-10 text-xl font-Ubuntu text-pink-600'><a >Contact</a></li>
                        <li className='md:m-5 m-10 text-xl font-Ubuntu text-pink-600'><a >Services</a></li>
                    </ul>
                    <div className="login mr-10 md:block hidden">
                        <button className='text-xl bg-pink-600 px-4 py-1 text-white rounded-md'>Login</button>
                    </div>
                </div>
                <div className="menu md:hidden absolute top-2 left-5 text-3xl cursor-pointer">
                    <AiOutlineMenu onClick={handleClick} />
                </div>
            </div>
        </>
    )
}

export default Navbar
