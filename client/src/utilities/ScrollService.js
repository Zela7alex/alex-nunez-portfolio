import { TOTAL_SCREENS } from "./commonUtils";
import {Subject} from 'rxjs'


// Subject is a special type of observable

export default class ScrollService {
    static scrollHandler = new ScrollService()

     //^ Subject broadcasters being set
    static currentScreenBroadCaster = new Subject()
    static currentScreenFadeIn = new Subject()

     //^ Constructor and scroll event for the window
    constructor() {
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport)
    }

   //^ Scroll to hire me / contact me screen
    scrollToHireMe = () => {
        let contactMeScreen = document.getElementById("Contact Me")
        if(!contactMeScreen) return;
        contactMeScreen.scrollIntoView({behavior: "smooth"})
    }
    scrollToHome = () => {
        let homeScreen = document.getElementById("Home")
        if(!homeScreen) return;
        homeScreen.scrollIntoView({behavior: "smooth"})
    }

    //^ Checking if the element is in view -- if document is fully on the screen or not
    isElementInView = (elem, type) => {
        let rec = elem.getBoundingClientRect() //This Method returns DOM rect object providing info about the size of an element and it's position relative to the viewport
        let elementTop = rec.top
        let elementBottom = rec.bottom
        
        let partiallyVisible = elementTop < window.innerHeight && elementBottom >= 0 //When the element is partially visible

        let completelyVisible = elementTop >= 0 && elementBottom <= window.innerHeight //When the element is completely visible

        switch(type) {
            case "partial":
                return partiallyVisible

            case "complete":
                return completelyVisible
                default:
                    return false

        }
    }

    //^ Checking the screen that's currently under the viewport -- the screen that is displayed fully 
    checkCurrentScreenUnderViewport = (event) => {
        if(!event || Object.keys(event).length < 1)
        return;

        for( let screen of TOTAL_SCREENS) {
            let screenFromDOM = document.getElementById(screen.screen_name)
            if(!screenFromDOM)
            continue

            let fullyVisible = this.isElementInView(screenFromDOM, "complete")
            let partiallyVisible = this.isElementInView(screenFromDOM, "partial")

            if(fullyVisible || partiallyVisible){
                //Broadcasting Fade In Effect
                if(partiallyVisible && !screen.alreadyRendered){
                   ScrollService.currentScreenFadeIn.next({ fadeInScreen: screen.screen_name})
                   screen['alreadyRendered'] = true
                   break;
                }
                // Broadcasting Screen name
                if (fullyVisible){
                    ScrollService.currentScreenBroadCaster.next({
                        screenInView: screen.screen_name
                    })
                    break
                }
            }
        }
    }

}