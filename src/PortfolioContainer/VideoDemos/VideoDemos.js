import React from 'react'
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import './VideoDemos.css'
import YouTube from 'react-youtube'

export default function VideoDemos(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
    
      // eslint-disable-next-line
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

        const opts = {
            height: '100%',
            width: '100%',
            className: 'ytVideo'
        }
    
  return (
    <div>
      <ScreenHeading
        title={"Video Demos"}
        subHeading={"Created with Front & Back-end Technologies"}
      />
      <section className='demos-section' id={props.id || ""}>
        <div className='video-container'>
          <div className='video-box'>

          <YouTube videoId='QVGwC-tywO4' opts={opts} className={opts.className} />
          </div>
          <div className='description'>
            <p>This video is about how I coded the website for Paravos Cafe, a
            small coffee shop that will be opening next year. I used Vue, Bootsrap, Node, MongoDB and Vue to create a beautiful and
            functional website that showcases the cafe's products and services.
            I also used some npm librabries to make the website more interactive
            and user-friendly. From the main page, customers can access the
            menu, marketing events, view the cafe's location, and link to other
            pages. I also used a few animation effects to bring the website to
            life. I am currently still working on this project but in the end,
            I've been able to deliver a MVP that the owners of Paravos Cafe are
            very happy with.</p>
          </div>
        </div>
        <div className='video-container'>
          <div className='video-box'><YouTube videoId='dPNCygH18X8' opts={opts} className={opts.className}/></div>
          <div className='description'>
            <p>This video will show you how I coded a table seating app for a
            restaurant called Sushi Sake. The app helps hostesses and servers
            manage the seating for their restaurant. With the app, hostesses can
            easily assign seating arrangements and quickly change them as
            needed. Servers can quickly locate and assign themselves to tables,
            as well as view their assigned tables for the day. The app also
            includes features such as a seating chart which allows hostesses to
            track their progress and make sure their seating is consistently
            accurate. By coding this app, I was able to provide a powerful yet
            simple solution for Sushi Sake's restaurant staff.</p>
          </div>
        </div>
        <div className='video-container'>
          <div className='video-box'><YouTube videoId='CLeZyIID9Bo' opts={opts} className={opts.className} /></div>
          <div className='description'>
            <p>This video shows how I used coding to help me organize my wedding last year. After months of planning, I wanted to make sure that
            everything was accounted for and that all of the tasks were
            organized and completed on time. So I decided to code my own wedding
            app! First, I researched the different types of wedding planning
            apps available online and the features they offered. I then took all of my wedding tasks and organized them into categories. I wrote out the code for my app with these tasks in mind. I created a user interface and added elements such as task lists for my wedding party, a countdown, materials tracker, and to-do lists. I invited my bridesmaids to use the
            app and collaborate on tasks with me. This way, we could all keep
            track of who was responsible for what, and it made it easier to stay
            on top of the wedding planning process. This being my first application made with a framework, I was so relieved and proud of myself for taking the
            initiative to code my own wedding planning app.</p>
          </div>   
        </div>
        <div className='video-container'>
          <div className='video-box'><YouTube videoId='m25CtNObi7Y' opts={opts} className={opts.className}/></div>
          <div className='description'>
            <p> Here I show how I am using Front and Back-end skills to create a website for a massage therapist's massage business. I started by understanding the massage therapist's business needs and goals. I'm using React to build a modern and responsive website that showcases her services, pricing, and contact information. I'm also integrating a booking system and payment gateway to make it easy for customers to book appointments and make payments. Finally, I am optimizing the website for search engines so that potential customers can easily find the business online. I am proud of the work I am doing for this customer and so far she is very thrilled with how it's looking.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
