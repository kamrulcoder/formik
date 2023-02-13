import React from "react";

// first import useFormik
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as  Yup from "yup"

function FormikForm() {


  // intitial values declaire 
  const initialValues =  {
    name: "",
    email: "",
    channel: "",
  }


  // validation scheema of yup 
  const validationSchema = Yup.object({
    name:Yup.string().required("Name field is required "),
    email:Yup.string().required("email required").email("invalid email"),
    channel:Yup.string().required("Channek  field is required "),
  })

  // validation form 
  const  validate =  (values) => {
    let errors = {};

    // name validate input
    if (!values.name) {
      errors.name = "Required Name ";
    }

    // email validate input
    if (!values.email) {
      errors.email = "Required Name ";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email format";
    }

    // channel   input validate
    if (!values.channel) {
      errors.channel = "Required Channel ";
    }

    return errors;
  }

  // onsubmit 
  const onSubmit = values => {
    console.log(values);
  }


  // // second declaire formik
  // const formik = useFormik({
  //   // initial value
  //   initialValues,  
  //   // onsubmit value  reuturn
  //   onSubmit,
  //   // validate
  //   validationSchema 
  // });

  return (
    <div className="w-[600px]   mx-auto    shadow-lg p-10">
      <Formik 
      
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      >
        <Form className="flex flex-col gap-5">
          <div>
            <label htmlFor="">Name : </label>
            <Field
              className="w-full px-3 py-2  font-bold  bg-gray-300"
              name="name"
              type="text"
              placeholder="name"  />

              <ErrorMessage  name="name"/>
            
          </div>
          <div>
            <label htmlFor="">Email : </label>
            <Field
              className="w-full px-3 py-2  font-bold  bg-gray-300"
              name="email"
              type="text"
              placeholder="email"
             
            />
              <ErrorMessage  name="email"/>

          </div>
          <div>
            <label htmlFor="">Channel : </label>
            <Field
              className="w-full px-3 py-2  font-bold  bg-gray-300"
              name="channel"
              type="text"
              placeholder="name"
              
            />
            <ErrorMessage  name="channel"/>

          </div>
          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-200  rounded-lg px-3 py-2 font-bold"
            >
              Submti
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
