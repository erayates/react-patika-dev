import { useState } from 'react'
import {Formik} from 'formik'

import './App.css'

function App() {

  return (
    <div className="App" >
       <Formik 
       initialValues={{ email: '', password: '', gender: ''}}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
          <label htmlFor="gender">Erkek</label>
          <input
            type='radio'
            name='gender'
            value='male'
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.radio === 'male'}
          />
          <label htmlFor="gender">Kadın</label>
          <input
            type='radio'
            name='gender'
            value='female'
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.radio === 'female'}
          />



           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
    </div>
  )
}

export default App
