import logo from './logo.svg';
import './App.css';
import { Button } from './stories/Button';
import { Card } from './stories/Card';
import { Firebase } from '../src/firebase';
import { db, auth } from './firebase';

function App() {
  return (

    <div className="App">
      <div className='mainTitle'>
        <h1 >Bonjour, <br/> I'm Ben 👋🏻</h1>
        <p>A multidisciplinary Product Designer with a focus on usability and accessibility for people. I have a big interest in Design Systems and how they help teams work together on a shared vision.</p>
      </div>
      <div className='projectList'>
      <Card size={'Large'} title={'Naturewise'} description={'NatureWise allows citizens to learn about pollution and its numerous effects on human health. They can use what they know to report local pollution triggers and build a map of local pollutions used by cities to have a better outlook on the situation of their area and compare themselves to other places in the world.'} color={'grey-100'} whiteText={false} url={"./routes/project/naturewise"}/>
      <Card size={'Small'} title={'Mailbox Finder'} description={'Mailbox Finder is the easiest way to find the PO boxes around you when you need them.'} color={'grey-100'} url={"./routes/project/mailbox"}/>
      <Card size={'Small'} title={'Awesome Project'} description={'Description of this project'} color={'grey-100'} whiteText={false}/>
      </div>
    </div>
  );
}

export default App;
