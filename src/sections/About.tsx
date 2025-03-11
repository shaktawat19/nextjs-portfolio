'use client'

import { Card } from '@/components/Card'
import { SectionHeader } from '@/components/SectionHeader'
import bookImage from '@/assets/images/book-cover.png'
import Image from 'next/image'
import JavascriptIcon from '@/assets/icons/square-js.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'
import ChromeIcon from '@/assets/icons/chrome.svg'
import GithubIcon from '@/assets/icons/github.svg'
import mapImage from '@/assets/images/map.png'
import smileMemoji from '@/assets/images/memoji-smile.png'
import mongodb from '@/assets/icons/mongodb.svg'
import nextjs_icon_dark from '@/assets/icons/nextjs_icon_dark.svg'
import shadcn_ui from '@/assets/icons/shadcn_ui.svg'
import typescript from '@/assets/icons/typescript.svg'
import { CardHeader } from '@/components/CardHeader'
import { ToolboxItems } from '@/components/ToolboxItems'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const toolboxItems = [
  {
    title: 'NextJS',
    iconType: nextjs_icon_dark,
  },
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'TypeScript',
    iconType: typescript,
  },
  {
    title: 'MongoDB',
    iconType: mongodb,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'Shadcn UI',
    iconType: shadcn_ui,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
]

const hobbies = [
  {
    title: 'Traveling',
    emoji: '🌍',
    top: '5%',
    left: '5%',
  },
  {
    title: 'Driving',
    emoji: '🚗',
    top: '85%',
    left: '20%',
  },
  {
    title: 'Painting',
    emoji: '🎨',
    top: '40%',
    left: '35%',
  },
  {
    title: 'Cooking',
    emoji: '🍳',
    top: '35%',
    left: '10%',
  },
  {
    title: 'Reading',
    emoji: '📚',
    top: '45%',
    left: '70%',
  },
  {
    title: 'Weightlifting',
    emoji: '🏋️',
    top: '65%',
    left: '5%',
  },
  {
    title: 'Hiking',
    emoji: '🥾',
    top: '70%',
    left: '45%',
  },
]

export const AboutSection = () => {
  const constraintRef = useRef(null)
  return (
    <div className='py-20 lg-py-28' id='about-section'>
      <div className='container'>
        <SectionHeader
          eyebrow='About Me'
          title='A Glipmse Into My World'
          description='Learn more about me and what I do.'
        />
        <div className='mt-20 flex flex-col gap-8'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3'>
            <Card className='h-[320px] md:col-span-2 lg:col-span-1'>
              <CardHeader
                title='My Reads'
                description='Explore the books shaping my perspective'
              />
              <div className='w-40 mx-auto mt-2 md:mt-0'>
                <Image src={bookImage} alt='Book Cover' />
              </div>
            </Card>
            <Card className='h-[320px] md:col-span-3 lg:col-span-2'>
              <CardHeader
                className=''
                title='My Toolbox'
                description='Explore the technologies and tools I use to create digital experiences.'
              />
              <ToolboxItems
                items={toolboxItems}
                className=''
                itemsWrapperClassName='
                animate-move-left [animation-duration:30s]
              '
              />
              <ToolboxItems
                items={toolboxItems}
                className='mt-6'
                itemsWrapperClassName='animate-move-right [animation-duration:15s]'
              />
            </Card>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8'>
            <Card className='h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2'>
              <CardHeader
                title='Beyond the code'
                description='Explore my interests and hobbies beyond the digital realm'
                className='px-6 py-6'
              />
              <div className='relative flex-1' ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className='inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute'
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className='font-medium text-gray-950'>
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className='h-[320px] p-0 relative md:col-span-2 lg:col-span-1'>
              <Image
                className='h-full w-full object-cover object-left-top'
                src={mapImage}
                alt='Map'
              />
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[""] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:outline-gray-950/30 after:rounded-full'>
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]'></div>
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10'></div>
                <Image
                  src={smileMemoji}
                  alt='smiling Memoji'
                  className='size-20'
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
