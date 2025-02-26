import React from 'react'
import { AiOutlineDownload, AiOutlinePhone } from 'react-icons/ai'
import ProfilePic from '../../assets/profile/developer-pic.png'
import { Link } from 'react-router-dom'
import Transitions from '../../components/Transition'

const HomeComponent = () => {
    return (
        <Transitions>
            <>
                <div className='flex flex-row justify-between items-center w-full'>
                    <div className='w-1/2'>
                        <img src={ProfilePic} alt='Jackson Kweyung' className='w-full h-auto' />
                    </div>
                    <div className='w-1/2'>
                        <h1 className='text-4xl leading-tight text-left p-5 inline-block font-bold'>Cristian Kinneth Dagoc</h1>
                        <p className='text-xl text-left px-5 font-bold text-gray-400'>
                           A Computer Science Student
                        </p>
                        <div className='flex p-10 space-x-5 w-full justify-center items-center'>
                            <Link
                                to='/'
                                className='flex text-md font-bold text-white bg-gray-700 py-1 border px-3 hover:scale-105 transition-[scale] duration-75 ease rounded-md justify-center items-center'
                            >
                                Download CV
                                <AiOutlineDownload fontSize={30} className='ml-2' />
                            </Link>

                            <Link
                                to='/contact'
                                className='flex text-md font-bold text-gray-500  justify-center hover:scale-105 transition-[scale] duration-75 ease items-center'
                            >
                                Contact Me
                                <AiOutlinePhone fontSize={30} className='ml-2' />
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        </Transitions>
    )
}

export default HomeComponent