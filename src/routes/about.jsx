
import './css/contact.css';
import { db } from "../firebase";
import { useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { Outlet } from 'react-router-dom';
import { getDatabase, ref, onValue } from 'firebase/database';
import { db2 } from '../firebase';
import { insert } from 'formik';
import { Helmet } from 'react-helmet';



export default function About() {

  const getData = () => {
    const data = ref(db2, 'Contact') // CHANGE 'chars' TO YOUR DATABASE NAME
    onValue(data, (snapshot) => {
      console.log([snapshot.val()])
      console.log('test2')
    })
  }
  
    getData()
    return (
        <div className="App">
            <Helmet>
              <title>About - Benjamin Caillet</title>
            </Helmet>
            <div className='mainTitle contact'>
            <h1 >About 👤</h1>
            <div className='pageItem'>
              <h2>About me</h2>
              <p>I am currently working for {getData()}, a design agency in Nantes as a UI / UX designer. 
                I work for a multitude of clients in very different industries such as real estate, media, energy, transport, and many more. 
                Previously, I worked as an ergonomist and I worked on the design and update of business interfaces based on user interviews. 
                I also helped one of France's biggest banks to structure and deploy a new culture based on their users.
                I will graduate from ECV Digital Nantes in June 2021 with a degree in UX/UI design. 
                This moment in school allowed me to create and test methods and concepts that made me grow as a designer. 
                I am eager to use these methods in the project I will work on, as well as keeping that "test and learn" state of mind, who knows where this can take a project.</p>
            </div>
            <div className='pageItem'>
              <h2>Expertise</h2>
              <ul>
                <li>Product design</li>
                <li>UI Design</li>
                <li>UX Design</li>
                <li>Prototyping</li>
                <li>Figma</li>
                <li>ProtoPie</li>
                <li>HTML, CSS & JavaScript</li>
              </ul>
            </div>
            <div className='pageItem'>
              <h2>More info</h2>
              <p>If you want to know more about me and my work, you can take a look at my resume here.</p>
            </div>
        </div>
        <Outlet/>
      </div>
    );
  
  }