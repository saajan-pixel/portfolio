import { useState } from 'react'
import './contact.scss'

const Contact = () => {
  const [sendMsg, setSendMsg] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSendMsg(true)


  }
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpointspanda.com%2Fwp-content%2Fuploads%2F2020%2F03%2Fcontact.png&f=1&nofb=1" alt='cnt-img' />
      </div>

      <div className="right">
        <div className="right-wrapper">
          <h1>Contact.</h1>
          <form>
            <input type="email" placeholder="Email.." />
            <textarea rows='20' placeholder="Message"></textarea>
            <div className="btn">
              <button type="submit" onClick={handleSubmit}>Send</button>
              {sendMsg && <p>Thanks, I'll reply ASAP!</p>}
          
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact