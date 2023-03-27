import React, { useState }from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


import emailVideo from '../../assets/ContactMe/7 x 5 in.mp4'
import load1 from '../../assets/ContactMe/load2.gif'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './ContactMe.css'

export default function ContactMe(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
    //* Scrolling into screen clicked from header
      // eslint-disable-next-line
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

        const [subject, setSubject] = useState("")
        const [email, setEmail] = useState("")
        const [message, setMessage] = useState("")
        const [banner, setBanner] = useState("")
        const [bool, setBool] = useState(false)

        const handleSubject = (e) => {
            setSubject(e.target.value)
        }
        const handleEmail = (e) => {
            setEmail(e.target.value)
        }
        const handleMessage = (e) => {
            setMessage(e.target.value)
        }

        //* Preventing screen reload when submit button clicked

        const submitForm = async(e) => {
            e.preventDefault()

            try {
                let data = {
                    email,
                    subject,
                    message
                }
                setBool(true)
                const res = await axios.post(`/contact`, data)
                if(subject.length === 0 || email.length === 0 || message.length === 0){
                    setBanner(res.data.msg) // toast error banner will show
                    toast.error(res.data.msg)
                    setBool(false)
                } else if (
                    res.status === 200
                ) {
                    setBanner(res.data.msg) // toast success banner will show
                    toast.success(res.data.msg)
                    setBool(false)

                    setSubject("");
                    setEmail("");
                  setMessage("");
                }

            } catch (error) {
                console.log(error)
            }
    
    
        }


    
  return (
    <div className='main-container fade-in' id={props.id || ""}>
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
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor='subject'>Subject</label>
            <input type='text' 
                onChange={handleSubject} value={subject}
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
                {bool?(<b className='load'>
                <img src={load1} alt='loading' />
                </b>): ('')}
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
