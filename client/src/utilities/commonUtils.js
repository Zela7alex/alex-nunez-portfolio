import Home from '../PortfolioContainer/Home/Home'
import AboutMe from '../PortfolioContainer/AboutMe/AboutMe'
import Projects from '../PortfolioContainer/Projects/Projects'
import VideoDemos from '../PortfolioContainer/VideoDemos/VideoDemos'
import ContactMe from '../PortfolioContainer/ContactMe/ContactMe'


export const TOTAL_SCREENS = [
    {
        screen_name: "Home",
        component: Home,
    },
    {
      screen_name: "AboutMe",
      component: AboutMe,
    },
    {
      screen_name: "Projects",
      component: Projects,
    },
    {
      screen_name: "Demos",
      component: VideoDemos,
    },
    {
      screen_name: "Contact Me",
      component: ContactMe,
    },
    
]

// Exporting all views for the app ex) home, about-me etc.

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};