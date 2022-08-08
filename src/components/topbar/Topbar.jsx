import './topbar.scss'

const Topbar = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href='#intro' className='logo'>portfolio.</a>
          <div className="icon-item">
            <em class="fa-solid fa-person icon"></em>
            <span>+977 9827023304</span>
          </div>

          <div className="icon-item">
            <em class="fa-solid fa-envelope"></em>
            <span>rcccstha@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar