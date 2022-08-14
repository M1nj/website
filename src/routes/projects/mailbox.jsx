import '../css/project.css';
import { Tag } from "../../stories/Tag";

export default function Mailbox() {
    return (
        <div className="App">
          
            <div className='mainTitle'>
            <img className='previewImg' src={require("../../stories/assets/projects/naturewise.png")}></img>
            <h1 >Mailbox Finder 📬</h1>
            <div className="pageItem">
              <p className="description">
              Mailbox Finder is the easiest way to find the PO boxes around you when you need them. The service also includes a way to calculate the price of sending a mail or a package.
              </p>
            </div>
            <div className="pageItem">
              <h2>
                The problem
              </h2>
              <p>
              The idea for the project came to me a little before the spring lockdown. I had to post letters and I was not sure where to find a mailbox. I didn't want to go on a box hunt to avoid wasting my time and found an app, but it didn't quite fit. I found the answer to my question on the web, but suddenly there was no up-to-date app to meet my needs. I also searched on La Poste's website (the French National Post) but found nothing. However, I found their API that provides this data. It was at this moment that I came up with the idea of creating a medium that connects this information.
              </p>
            </div>
            <div className="pageItem">
              <h2>
                UX Research
              </h2>
              <div>
              <p>
              For this project, the main goal was to create an app that would display the PO boxes' data. I did very little user research as my main focus was to learn how to code. Nonetheless, I asked my friends about their app usage and needs regarding posting letters. From those quick and informal interviews, I made two hypotheses:
              </p>
              <ul>
                <li>People don't pay attention to their surroundings, they need a way to find the closest PO box around them.</li>
                <li>It's hard to get the postal tariffs for the shipment being prepared.</li>
              </ul>
              </div>
            </div>
            <div className="pageItem">
              <h2>
                Role
              </h2>
                <div className='roleTags'>
                  <Tag role={'Design'} />
                  <Tag role={'Product Management'} />
                  <Tag role={'Code'}/>
                  <Tag role={'Research'} />
                  <Tag role={'Branding'}/>
                </div>
              
            </div>
            <div className="pageItem">
              <h2>
                Journey
              </h2>
              <p>
              To identify if every feature was correctly implemented in the global journey, I sketched the user journey alongside the wireframes as an MVP that I could test before designing it. Considering the context we were in at that time (March 2020, beginning of the Coronavirus Outbreak in Europe), the tests only consists of showing the MVP online to 1 family member and 2 friends.
              </p>
            </div>
            <div className="pageItem">
              <h2>
              Outcome & Next steps
              </h2>
              <div>
              <p>
              The goal of this project was never to be the most downloaded app on the App Store, but it was to prove to myself I can learn how to code an app and deliver a working product. However, I still have ideas for this app, and here are some of the next steps I am thinking about :
              </p>
              <ul>
                <li>Do a complete makeover and find new use cases to solve with this product.</li>
                <li>Take a step back and think of the bigger picture, how can this product be a part of a broader app that would help people find what they are looking for around them.</li>
                <li>Do a code review to create a lighter and faster app that can run on older devices.</li>
              </ul>
              </div>
            </div>
        </div>
      </div>
    );
}