import logo from './logo.svg';
import './App.css';
import { Button } from './stories/Button';
import { Header } from './stories/Header';
import { Card } from './stories/Card';
import { Firebase } from '../src/firebase'

function App() {
  return (

    <div className="App">
      <Header user={"Benjamin Caillet"}></Header>
      <div className='mainTitle'>
        <h1 >Bonjour, <br></br> I'm Benjamin 👋🏻</h1>
        <p>I use data to create delightful, human-centered experiences.</p>
      </div>
      <div className='projectList'>
      <Card size={'Large'} title={'Naturewise'} description={'NatureWise allows citizens to learn about pollution and its numerous effects on human health. They can use what they know to report local pollution triggers and build a map of local pollutions used by cities to have a better outlook on the situation of their area and compare themselves to other places in the world.'} color={'grey-100'} whiteText={false} url={"./routes/project/naturewise"}></Card>
      <Card size={'Small'} title={'Mailbox Finder'} description={'Mailbox Finder is the easiest way to find the PO boxes around you when you need them.'} color={'grey-100'}></Card>
      <Card size={'Small'} title={'Awesome Project'} description={'Description of this project'} color={'grey-100'} whiteText={false}></Card>
      </div>
    </div>
  );
}

export default App;
