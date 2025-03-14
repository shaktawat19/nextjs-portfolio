export const Header = () => {
  return (
    <div className='flex justify-center items-center fixed top-3 w-full z-10'>
      <nav className='bg-white/10 backdrop-blur flex gap-1 p-0.5 border border-white/15 rounded-full'>
        <a href='#' className='nav-item'>
          Home
        </a>
        <a href='#projects-section' className='nav-item'>
          Projects
        </a>
        <a href='#about-section' className='nav-item'>
          About
        </a>
        <a
          href='https://drive.google.com/file/d/18wxc5VHxtL9Va4w-Hh1oz3tuSHT1gvbv/view?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
          className='nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'
        >
          Resume
        </a>
      </nav>
    </div>
  )
}
