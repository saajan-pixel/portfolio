import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

const Intro = () => {
  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer"],
    });
  }, [])
  
  return (
    <div className='intro' id='intro'>
      <div className="intro-left">
        <div className="imgContainer">
          <img src="https://cdni.iconscout.com/illustration/free/thumb/doctor-1668030-1415699.png" alt="intro-img" />
        </div>
      </div>

      <div className="intro-right">
        <div className="right-wrapper">
          <h2>Hi!, I'm</h2>
          <h1>Saajan Shrestha</h1>
          <ul className='dyna-txt'>
            <li><span>Developer</span></li>
            <li><span>Designer</span></li>
            <li><span>Content Creator</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Intro