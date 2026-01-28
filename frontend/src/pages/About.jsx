import AboutPage from "../components/about/AboutPage";
import ConservationBanner from "../components/about/ConservationBanner"
import CoreValues from "../components/about/CoreValues"
import MeetOurAnimals from "../components/about/MeetOurAnimals"
import MissionVision from "../components/about/MissionVision"
import OurStory from "../components/about/OurStory"
const About = () => {
  return (
    <div>
    <AboutPage/> 
    <MissionVision/>
    <CoreValues/>
    <ConservationBanner/>
    <OurStory/>
    <MeetOurAnimals/>
    
    
    </div>
  )
}

export default About

