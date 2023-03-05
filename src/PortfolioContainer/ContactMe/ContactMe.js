import React, { useState }from 'react'
import emailVideo from '../../assets/ContactMe/7 x 5 in.mp4'
import load1 from '../../assets/ContactMe/load2.gif'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './ContactMe.css'

export default function ContactMe(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
    //* Scrolling into screen clicked from header
      // eslint-disable-next-line
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

        const [name, setName] = useState("")
        const [email, setEmail] = useState("")
        const [message, setMessage] = useState("")
        const [banner, setBanner] = useState("")
        const [bolean, setBoolean] = useState(false)

        const handleName = (e) => {
            setName(e.target.value)
        }
        const handleEmail = (e) => {
            setEmail(e.target.value)
        }
        const handleMessage = (e) => {
            setMessage(e.target.value)
        }

        //* Preventing screen reload when submit button clicked

        
    
  return (
    <div className='main-container' id={props.id || ""}>
      <ScreenHeading subHeading={"Let's Keep In Touch"} title={"Contact Me"} />
      <div className='central-form'>
        <div className='col'>
        <h2>Get in touch! 📨</h2>
          <a href='https://github.com/'>
            <i className='fa fa-github-square'></i>
          </a>
          <a href='https://www.linkedin.com/in/alexmn/'>
            <i className='fa fa-linkedin-square'></i>
          </a>
          <a href='https://www.facebook.com/alex.marie.16547/'>
            <i className='fa fa-facebook-square'></i>
          </a>
        </div>
        <div className='back-form'>
          <div className='vid-back'>
            <video src={emailVideo} autoPlay loop muted />
          </div>
          <form>
            <p>{banner}</p>
            <label htmlFor='name'>Name</label>
            <input type='text' 
                onChange={handleName} value={name}
            />

            <label htmlFor='email'>Email</label>
            <input type='text' 
                onChange={handleEmail} value={email}
            />

            <label htmlFor='message'>Message</label>
            <textarea type='text' 
                onChange={handleMessage} value={message}
            />

            <div className='send-btn'>
                <button type='submit'>
                send <i className='fa fa-paper-plane' />
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
