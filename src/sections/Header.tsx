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
          href='https://docs.google.com/document/d/1MLhR3rPmc2zz_v3C7jnZyow2xu5f5VaHqlV-t9CXr60/edit?usp=sharing'
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
