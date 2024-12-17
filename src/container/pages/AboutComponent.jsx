import React, { useEffect, useRef } from 'react'
import ProfilePic from '../../assets/profile/developer-pic.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Experience from '../../components/min-components/Experience'
import Bio from '../../components/min-components/Bio'
import Education from '../../components/min-components/Education'
import { motion } from 'framer-motion'
import Transitions from '../../components/Transition'

const AnimatedValue = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 30000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value])

  return (
    <span ref={ref}> {value} </span>
  )


}

const AboutComponent = () => {
  return (
    <Transitions>
      <>
        <div className='flex justify-center items-center w-full p-5'>
          <h1
            className='text-4xl leading-tight text-center p-5 inline-block font-bold'
          >
            About Me
          </h1>
        </div>

        <div className='flex flex-row justify-between items-center w-full pb-16'>
          <div className='w-1/2'>
            <img src={ProfilePic} alt='Jackson Kweyunga' className='w-full h-auto' />
          </div>

          <div className='h-full'>
            <Bio bio={`
          I am Christian Kinneth Dagoc a 24-year-old, passionate about leaving a positive mark in everything I do. Focused on personal growth and achieving new milestones, I embrace life's opportunities with an open mind and a determined spirit. My single status gives me the freedom to explore new experiences, build connections, and pursue both personal and professional aspirations.
          Whether through work, hobbies, or relationships, I strive for excellence and continue to shape a life that reflects my values and ambitions.
          `} />
          </div>
        </div>

        <div className='flex flex-row justify-between items-center px-32 py-5 mb-16 border border-l-0 border-r-0'>
          <div className='text-center flex flex-col space-y-5'>
            <span className='text-7xl font-bold text-red-900'>
              <AnimatedValue value={50} />+
            </span>
            <h1 className='font-medium text-xl text-gray-500/75'>Satisfied Clients</h1>
          </div>

          <div className='text-center flex flex-col space-y-5'>
            <span className='text-7xl font-bold text-blue-900'>
              <AnimatedValue value={40} />+
            </span>
            <h1 className='font-medium text-xl text-gray-500/75'>Completed Projects</h1>
          </div>

          <div className='text-center flex flex-col space-y-5'>
            <span className='text-7xl font-bold text-green-900'>
              <AnimatedValue value={4} />+
            </span>
            <h1 className='font-medium text-xl text-gray-500/75'>Years of Experience</h1>
          </div>
        </div>

        <div className='flex flex-col'>
          <Experience />
          <Education />
        </div>

        <div>

        </div>

      </>
    </Transitions>
  )
}

export default AboutComponent