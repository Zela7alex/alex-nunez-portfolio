// eslint-disable-next-line
import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  // eslint-disable-next-line
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description: "Web Developer with knowledge of MEVN and MERN stacks",
    highlights: {
      bullets: [
        "Full Stack Web Development",
        "Front-End UI design",
        "Vuex and Redux for State Management",
        "Database Management",
        "Integration of Restful API's",
      ],
      heading: "Here are a few highlights :",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className='highlight' key={i}>
        <div className='highlight-blob'></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className='about-me-container screen-container' id={props.id || ""}>
      <div className='about-me-parent'>
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className='about-me-card'>
          <div className='about-me-profile'></div>
          <div className='about-me-details'>
            <span className='about-me-description'>
              {SCREEN_CONSTANTS.description}
            </span>
            <div className='about-me-highlights'>
              <div className='highlights-heading'>
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className='about-me-options'>
              <button className='btn primary-btn'> Hire Me </button>
              <a
                href='Nunez_Alexandra_Resume.pdf'
                download='Alexandra Nunez Nunez_Alexandra_Resume.pdf'
              >
                <button className='btn highlighted-btn'>Get Resume </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
