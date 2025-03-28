import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png'
import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png'
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png'
import Image from 'next/image'
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import { SectionHeader } from '@/components/SectionHeader'
import { Card } from '@/components/Card'

const portfolioProjects = [
  {
    // company: 'Acme Corp',
    // year: '2022',
    title: 'Amazon Ecommerce',
    results: [
      { title: 'Enhanced user experience by 40%' },
      { title: 'Improved site speed by 50%' },
      { title: 'Increased mobile traffic by 35%' },
    ],
    link: 'https://amazon-clone-frontend-ten.vercel.app/',
    image: darkSaasLandingPage,
  },
  {
    // company: 'Innovative Co',
    // year: '2021',
    title: 'Airbnb Landing Page',
    results: [
      { title: 'Boosted sales by 20%' },
      { title: 'Expanded customer reach by 35%' },
      { title: 'Increased brand awareness by 15%' },
    ],
    link: 'https://airbnb-mini-clone.web.app/',
    image: lightSaasLandingPage,
  },
  {
    // company: 'Quantum Dynamics',
    // year: '2023',
    title: 'Movie Web App',
    results: [
      { title: 'Enhanced user experience by 40%' },
      { title: 'Improved site speed by 50%' },
      { title: 'Increased mobile traffic by 35%' },
    ],
    link: 'https://movix-main-eight.vercel.app/',
    image: aiStartupLandingPage,
  },
]

export const ProjectsSection = () => {
  return (
    <section className='pb-16 lg:py-24' id='projects-section'>
      <div className='container'>
        <SectionHeader
          eyebrow='Real-world Results'
          title='Featured Projects'
          description='See how I transformed concepts into engaging digital experiences.'
        />
        <div className='mt-10 md:mt-20 flex flex-col mt-10 gap-20'>
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className=' px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky'
              style={{
                top: `calc(64px + ${index * 110}px)`,
              }}
            >
              <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                <div className='lg:pb-16'>
                  <div className='bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text'></div>
                  {/* <span>{project.company}</span> */}
                  {/* <span>&bull;</span> */}
                  {/* <span>{project.year}</span> */}

                  <h3 className='font-serif text-2xl mt-2 md:text-4xl md:mt-5'>
                    {project.title}
                  </h3>
                  <hr className='border-t-2 border-white/5 mt-4 md:mt-5' />
                  <ul className='flex flex-col gap-4 mt-4 md:mt-5'>
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className='flex gap-2 text-white-50 text-sm md:text-base'
                      >
                        <CheckCircleIcon className='size-5 md:size-6' />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button className='bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2 mt-8'>
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className='size-4' />
                    </button>
                  </a>
                </div>
                <div className='relative'>
                  <Image
                    className='mt-8 -mb-4 mg:-mb-0 lg:mt-0 lg:absolute lg:h-full lg-w-auto lg:max-w-none'
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
