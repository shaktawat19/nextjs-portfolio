'use client'

import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import { useCallback } from 'react'

export const ContactSection = () => {
  const handleContactClick = useCallback(() => {
    const email = 'harshshaktawat.tech@gmail.com'
    const subject = 'Subject Text'
    const body = 'Body content of the email'
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }, [])

  return (
    <div className='py-16 pt-12 lg:py-24 lg:pt-20' id={'contect-section'}>
      <div className='container'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0 py-8'>
          <div
            className='absolute inset-0 opacity-5 -z-10'
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'>
            <div>
              <h2 className='font-serif text-2xl md:text-3xl'>
                Let us create something amazing together
              </h2>
              <p className='text-sm mt-2 md:text-base'>
                Ready to bring your next project to life? Let us chat about how
                we can bring your vision to life.
              </p>
            </div>
            <div>
              <button
                onClick={handleContactClick}
                className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-950'
              >
                <span className='font-semibold'>Contact Me</span>
                <ArrowUpRightIcon className='h-4 w-4' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
