import React from "react"
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import './Projects.css'
import projectsBg from '../../assets/Projects/bg2.jpg'
import profileShape from "../../../src/assets/Home/shape-bg.png"

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  // eslint-disable-next-line
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    //* Owl-Carousel Properties
    const options = {
        loop: true,
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        autoplay: true,
        dots: true,
        smartSpeed: 1000,
        // lazyLoad: true,
        responsive: {
            0:{
               items: 1, // projects show in 1 column
            },
            768:{
                items: 1, // projects show in 1 column
             },
             800:{
                items: 2, // projects show in 1 column
             },
             1000:{
                items: 3, // projects show in 3 columns
             },
        }

    }

  return (
    <div>
      <ScreenHeading
        title={"Projects"}
        subHeading={"Created with Front & Back-end Technologies"}
      />
      <section className='projects-section' id={props.id || ""}>
      <img
        src={projectsBg} alt=''/>
        <div className='container'>
          <div className='row'>
            <OwlCarousel className='owl-carousel owl-theme' id='projects-carousel' {...options}>
                    <div className='col-lg-12'  >
                        <a class="top" href='http://paravoscafe.com'
                        ><img src='Projects/Paravos-Cafe-img.png' alt='Paravos Cafe'></img>
                        </a>
                    </div>
                    <div className='col-lg-12'>
                        <a href='http://paravoscafe.com' ><img src='Projects/Paravos-Cafe-img.png' alt='Paravos Cafe'></img>
                        </a>
                    </div>
                    <div className='col-lg-12'>
                        <a href='http://paravoscafe.com'><img src='Projects/Paravos-Cafe-img.png' alt='Paravos Cafe'></img>
                        </a>
                    </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={profileShape} alt="not responding" />
      </div>
    </div>
  );
}
