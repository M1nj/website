
import './css/contact.css';
import { db } from "../firebase";
import { useState } from 'react';
import { doc, getDoc } from "firebase/firestore";



const Read = () => {
  

    const docRef = doc(db, "about");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  const [info , setInfo] = useState([]);

  // Start the fetch operation as soon as
  // the page loads
  window.addEventListener('load', () => {
      Fetchdata();
    });

  // Fetch the required data using the get() method
  const Fetchdata = ()=>{
      db.collection("about").get().then((querySnapshot) => {
           
          // Loop through the data and store
          // it in array to display
          querySnapshot.forEach(element => {
              var data = element.data();
              setInfo(arr => [...arr , data]);
                
          });
      })
  }
    
  // Display the result on the page
  return (
      <div>
          <center>
          <h2>Student Details</h2>
          </center>
        
      {
          info.map((data) => (
          <Frame course={data.CourseEnrolled} 
                 name={data.Name} 
                 age={data.Age}/>
          ))
      }
      </div>

  );
}

// Define how each display entry will be structured
const Frame = ({course , name , age}) => {
  console.log(course + " " + name + " " + age);
  return (
      <center>
          <div className="div">
                
<p>NAME : {name}</p>
 
                
<p>Age : {age}</p>

                
<p>Course : {course}</p>
 
          </div>
      </center>
  );
}

export default Read;

// export default function About() {
//     return (
//         <div className="App">
//             <div className='mainTitle contact'>
//             <h1 >About 👤</h1>
//             <div className='pageItem'>
//               <img src="https://dummyimage.com/1000x400/000/fff"></img>
//             </div>
//             <div className='pageItem'>
//               <h2>About me</h2>
//               <p>I am currently working for XXX, a design agency in Nantes as a UI / UX designer. 
//                 I work for a multitude of clients in very different industries such as real estate, media, energy, transport, and many more. 
//                 Previously, I worked as an ergonomist and I worked on the design and update of business interfaces based on user interviews. 
//                 I also helped one of France's biggest banks to structure and deploy a new culture based on their users.
//                 I will graduate from ECV Digital Nantes in June 2021 with a degree in UX/UI design. 
//                 This moment in school allowed me to create and test methods and concepts that made me grow as a designer. 
//                 I am eager to use these methods in the project I will work on, as well as keeping that "test and learn" state of mind, who knows where this can take a project.</p>
//             </div>
//             <div className='pageItem'>
//               <h2>Expertise</h2>
//               <ul>
//                 <li>Product design</li>
//                 <li>UI Design</li>
//                 <li>UX Design</li>
//                 <li>Prototyping</li>
//                 <li>Figma</li>
//                 <li>ProtoPie</li>
//                 <li>HTML, CSS & JavaScript</li>
//               </ul>
//             </div>
//             <div className='pageItem'>
//               <h2>More info</h2>
//               <p>If you want to know more about me and my work, you can take a look at my resume here.</p>
//             </div>
//         </div>
//         <Outlet/>
//       </div>
//     );
  
//   }