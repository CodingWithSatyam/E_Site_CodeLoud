import Head from 'next/head'
import Main from '../components/Main'
import Tem from '../components/Tem'
import { BiCodeAlt } from 'react-icons/bi';
import { MdOutlinePersonalVideo } from 'react-icons/md';
import { DiResponsive } from 'react-icons/di';

export default function Home() {
  return (
    <div>
      <Head>
        <title>WebTem</title>
        <meta name="description" content="Get Web Templates For Free" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Tem />
      <div className='Services flex flex-wrap justify-center'>
        <div className="code w-full xl:w-1/3 md:w-1/2 p-4">
          <div className='border-gray-300 shadow-md h-20 flex w-full text-center items-center text-pink-600'>
            <BiCodeAlt className='text-5xl text-center justify-center relative m-5' />
            <p className='text-lg'>You can use our templates for programming</p>
          </div>
        </div>
        <div className="bussiness w-full xl:w-1/3 md:w-1/2 p-4">
          <div className='border-gray-300 shadow-md h-20 flex w-full text-center items-center text-pink-600'>
            <MdOutlinePersonalVideo className='text-5xl text-center justify-center relative m-5' />
            <p className='text-lg'>You can use our templates for bussiness or personal.</p>
          </div>
        </div>
        <div className="responsive w-full xl:w-1/3 md:w-1/2 p-4">
          <div className='border-gray-300 shadow-md h-20 flex w-full text-center items-center text-pink-600'>
            <DiResponsive className='text-5xl text-center justify-center relative m-5' />
            <p className='text-lg'>All of your templates are responsive.</p>
          </div>
        </div>
      </div>
    </div>
  )
}