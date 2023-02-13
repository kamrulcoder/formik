import React from "react";

// first import useFormik
import { useFormik } from "formik";
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


  // second declaire formik
  const formik = useFormik({
    // initial value
    initialValues,  
    // onsubmit value  reuturn
    onSubmit,
    // validate
    validationSchema 
  });

  console.log(formik.values);
  console.log(formik.errors);
  return (
    <div className="w-[600px]   mx-auto    shadow-lg p-10">
      <div>
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="">Name : </label>
            <input
              className="w-full px-3 py-2  font-bold  bg-gray-300"
              name="name"
              type="text"
              placeholder="name"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.name}
              {...formik.getFieldProps("name")}
            />

            {formik.errors.name  && formik.touched.name && (
              <span className="text-red-900  font-bold">
                {formik.errors.name}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="">Email : </label>
            <input
              className="w-full px-3 py-2  font-bold  bg-gray-300"
              name="email"
              type="text"
              placeholder="email"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.email}
              {...formik.getFieldProps("email")}
            />

            {formik.errors.email  && formik.touched.email && (
              <span className="text-red-900  font-bold">
                {formik.errors.email}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="">Channel : </label>
            <input
              className="w-full px-3 py-2  font-bold  bg-gray-300"
              name="channel"
              type="text"
              placeholder="name"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.channel}
              {...formik.getFieldProps("channel")}
            />
            {formik.errors.channel  && formik.touched.channel && (
              <span className="text-red-900  font-bold">
                {formik.errors.channel}
              </span>
            )}
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-200  rounded-lg px-3 py-2 font-bold"
            >
              Submti
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormikForm;
