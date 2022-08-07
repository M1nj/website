import { Outlet } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './css/contact.css';
import { Button } from '../stories/Button';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../firebase";

const addContact = async (values) => {
  try {
    const docRef = await addDoc(collection(db, "contact"), {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const SignupForm = () => {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Please provide an email address'),
    }),

    onSubmit: (values,{resetForm}) => {
      addContact(values);
      resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='name'>
        <div className='inputDiv'>
          <div className='inputElement'>
            <label htmlFor="firstName" className='required'>First Name</label>
            <input
              id="firstName"
              type="text"
              className='inputArea'
              {...formik.getFieldProps('firstName')}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className='inputError'>{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div className='inputElement'>
            <label htmlFor="lastName" className='required'>Last Name</label>
            <input id="lastName" className='inputArea' type="text" {...formik.getFieldProps('lastName')} />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className='inputError'>{formik.errors.lastName}</div>
            ) : null}
          </div>
        </div> 
      </div> 

      <div className='inputDiv'>
      <label htmlFor="email" className='required'>Email Address</label>
      <input id="email" className='inputArea' type="email" {...formik.getFieldProps('email')} />
      {formik.touched.email && formik.errors.email ? (
        <div className='inputError'>{formik.errors.email}</div>
      ) : null}
      </div>
      <div className='formFooter'>
        <span className='reminder'>These fields are required</span>
        <Button type={'submit'} label={'Submit'} style={'primary'}/>
      </div>
    </form>
  );
};

export default function Contact() {
    return (
        <div className="App">
            <div className='mainTitle contact'>
            <h1 >Contact 💬</h1>
            <div className='pageItem'>
              <h2>Work with me</h2>
              <p>I always love working on new challenging problems and meet new people. 
                I'm currently available for new projects, so if you'd like to discuss how we might be able to work together, let’s have a chat over zoom or Google Meet. 
                You can also user the contact form below and I'll revert to you as soon as possible.</p>
            </div>
            <div className='pageItem'>
              <h2>Chat with me</h2>
              <p>Feel free to send me a message for a new project idea or just say hi at benjamin.caillet.ux@icloud.com.</p>
            </div>
        </div>
        <SignupForm/>
        <Outlet/>
      </div>
    );
  }
