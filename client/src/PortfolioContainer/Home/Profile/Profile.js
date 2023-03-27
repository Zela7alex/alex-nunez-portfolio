import React from "react";
import Typewriter from "typewriter-effect";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

//rfc will make boiler plate for component
export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
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
          </div>

          <div className='profile-details-name'>
            <span className='primary-text'>
              {" "}
              Hello, I'M <span className='highlighted-text'>Alex</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              {" "}
              <h1>
                <Typewriter
                  options={{
                    strings: ["Web Developer", "Full Stack Dev", "Vue & React Developer", "Node Dev"],
                    autoStart: true, 
                    loop: true,
                  }}
                />

                {/* <Typical loop={Infinity}
                            steps={[
                                "Dynamic Dev ✨",
                                1200,
                                "Full Stack Developer 👩🏼‍💻",
                                1200,
                                "Vue & React Dev 💻",
                                1200,
                                "Music Producer 🎹",
                                1200,
                                "Sound Engineer 🎧",
                                1200,
                            ]}
                        /> */}
              </h1>
              <span className='profile-role-tagline'>
                Passionate about learning new technologies and building
                applications with front and back end tools.
              </span>
            </span>
          </div>
          <div className='profile-options'>
            <button
              className='btn primary-btn'
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
            <a
              href='Nunez_Alexandra_Resume.pdf'
              download='Alexandra Nunez Nunez_Alexandra_Resume.pdf'
            >
              <button className='btn highlighted-btn'>Get Resume </button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  );
}
