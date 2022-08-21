import '../css/project.css';
import { Tag } from "../../stories/Tag";
import Img from '../../stories/Img';
import { Helmet } from 'react-helmet';


export default function Naturewise() {
    return (
        <div className="App">
            <Helmet>
              <title>NatureWise - Benjamin Caillet</title>
            </Helmet>
            <div className='mainTitle'>
            <Img url={require("../../stories/assets/projects/naturewise.png")}/>
            <h1 >NatureWise 🌱</h1>
            <div className="pageItem">
              <p className="description">
              NatureWise allows citizens to learn about pollution and its numerous effects on human health. They can use what they know to report local pollution triggers and build a map of local pollutions. Cities can use this map to have a better outlook about their area and compare themselves to other places in the world. Cities can ask for more data with the built-in survey feature to ask a qualified audience about their local environment. Finally, making simulations to predict different outcomes or to yield city-wide actions can be done directly from the platform.
              </p>
            </div>
            <div className="pageItem">
              <h2>
                The problem
              </h2>
              <p>
              I always wanted to work on a subject related to cities. No matter in what field that would be, as long as I get to work on large issues cities would have, I would be happy. For my thesis, I knew I wanted to design a product that would help cities. The research I did gave me a more precise idea of what was important to citizens. I will detail the outcomes further down.
              </p>
            </div>
            <div className="pageItem">
              <h2>
                UX Research
              </h2>
              <div>
              <p>
              I posted an online survey on LinkedIn, Twitter, and groups on Facebook and Reddit dedicated to students sharing their surveys. I thought it would be a great way to get feedback from people that are not in my circles or country. I got 100 responses spread across 13 countries and 4 continents (with a large predominance of Europe). The main insights I got from this survey are the following:
              </p>
              <ul>
                <li>Environmental issues (and environment-related topics such as nature, pollution, cleanliness) represent 33% of responses.</li>
                <li>71% of respondants want to help their city in any way possible...</li>
                <li>... but only 20% of them are helping their city by taking part in associations or volunteer work.</li>
              </ul>
              <p>
              I also got some verbatims to help me design the 2 strategies I would follow to design my product. These are the backbone of the product I am trying to build. They drive the purpose of the service, the features, and even the brand identity of the product.
              </p>
              <ol>
                <li>Enable residents to learn about pollution and its effects on health and the environment and create synergies between citizens and metropolitan governments</li>
                <li>Make the fight against pollution and its effects on populations a tool for piloting the city's environmental actions</li>
              </ol>
              </div>
            </div>
            <div className="pageItem">
              <h2>
                Role
              </h2>
                <div className='roleTags'>
                  <Tag role={'Design'} />
                  <Tag role={'Product Management'} />
                  <Tag role={'Research'} />
                  <Tag role={'Branding'}/>
                </div>
              
            </div>
            <div className="pageItem">
              <h2>
                Journey
              </h2>
              <p>
              NatureWise speaks to citizens and institutions (such as cities, NGOs, or companies) and I made 4 personas to represent these potential targets.
              I also mapped out their ideal journey across the app, from the login process to the change of their profile picture and the app settings.
              </p>
            </div>
            <div className="pageItem">
              <h2>
                User Interface Design
              </h2>
              <p>
              I chose a mobile-first approach knowing NatureWise would be primarily used by citizens on phones. I sketched out all the screens I needed on one specific journey (from the sign-up process to the profile page). Each time, I identified what design components I would need (like a form, a button...) to have a global idea of the component library I would have to create. Additionally, I spotted some core actions that a user could perform on a smartwatch (report something on the map or check their surrounding's pollution levels for instance). I also worked on the tablet version for my "Institution Personas" on one journey, you can have a sneak peek of it in the video below.
              </p>
            </div>
            <iframe width="100%" height="535px" src="https://www.youtube.com/embed/OoE-D2Ie_eo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    );
  }