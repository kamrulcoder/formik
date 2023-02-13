import React from "react";

// first import useFormik
import { ErrorMessage, Field, Form, Formik, FieldArray } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

function FormikForm() {
  // intitial values declaire
  const initialValues = {
    name: "",
    email: "",
    channel: "",
    comments: "",
    address: "",
    social: {
      fb: "",
      ln: "",
    },
    phoneNumber: ["", ""],
    phNumbers: [""],
  };

  // validation scheema of yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name field is required "),
    email: Yup.string().required("email required").email("invalid email"),
    channel: Yup.string().required("Channek  field is required "),
    address: Yup.string().required("Required"),
  });

  // comment validate
  const validateComments = (value) => {
    let error;
    if (!value) {
      error = "Command Field Required! ";
    }
    return error;
  };

  const onSubmit = (values, submitProps) => {
    console.log("Form data", values);
    console.log("submitProps", submitProps);
  };

  return (
    <div className="w-[600px]   mx-auto    shadow-lg p-10">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnMount
      >
        {(formik) => {
          console.log(formik);

          return (
            <Form className="flex flex-col gap-5">
              <div>
                <label htmlFor="">Name : </label>
                <Field
                  className="w-full px-3 py-2  font-bold  bg-gray-300"
                  name="name"
                  type="text"
                  placeholder="name"
                />
                <ErrorMessage name="name" component={TextError} />
              </div>
              <div>
                <label htmlFor="">Email : </label>
                <Field
                  className="w-full px-3 py-2  font-bold  bg-gray-300"
                  name="email"
                  type="text"
                  placeholder="email"
                />
                <ErrorMessage name="email">
                  {(errMsg) => <div className="text-red-900"> {errMsg}</div>}
                </ErrorMessage>
              </div>
              <div>
                <label htmlFor="">Channel : </label>
                <Field
                  className="w-full px-3 py-2  font-bold  bg-gray-300"
                  name="channel"
                  type="text"
                  placeholder="channel"
                />
                <ErrorMessage name="channel" />
              </div>
              <div>
                <label htmlFor="">Comments : </label>
                <Field
                  as="textarea"
                  // component="textarea"
                  className="w-full px-3 py-2  font-bold  bg-gray-300"
                  name="comments"
                  type="text"
                  placeholder="name"
                  validate={validateComments}
                />
                <ErrorMessage name="comments" />
              </div>

              <div>
                <label htmlFor="address">Address</label>
                <Field name="address">
                  {({ field, form, meta }) => {
                    // console.log('Field render')
                    return (
                      <div>
                        <input
                          type="text"
                          className="w-full bg-gray-200 px-3 py-2"
                          {...field}
                        />
                        {meta.touched && meta.error ? (
                          <div>{meta.error}</div>
                        ) : null}
                      </div>
                    );
                  }}
                </Field>
              </div>
              <div>
                <label htmlFor="">FaceBook : </label>
                <Field
                  className="w-full px-3 py-2  font-bold  bg-gray-300"
                  name="social.fb"
                  type="text"
                  placeholder="social.fb"
                />
                {/* <ErrorMessage  name="social.ln"/> */}
              </div>
              <div>
                <label htmlFor="">Phone Number: </label>
                <div className="flex items-center  gap-4 ">
                  <Field
                    className="w-1/2 px-3 py-2  font-bold  bg-gray-300"
                    name="phoneNumber[0]"
                    type="text"
                    placeholder="Linkedin"
                  />
                  <Field
                    className="w-1/2 px-3 py-2  font-bold  bg-gray-300"
                    name="phoneNumber[1]"
                    type="text"
                    placeholder="Linkedin"
                  />
                </div>

                {/* <ErrorMessage  name="social.ln"/> */}
              </div>

              <div>
                <label htmlFor="address">Phone Numbers </label>
                <FieldArray name="phNumbers">
                  {(fieldArrayProps) => {
                    const { push, remove, form } = fieldArrayProps;
                    const { values } = form;
                    const { phNumbers } = values;
                    return (
                      <div>
                        {phNumbers.map((number, ind) => (
                          <div key={ind}>
                            <Field
                              type="text"
                              className="bg-gray-100 px-3 py-2 my-2"
                              name={`phNumbers[${ind}]`}
                            />
                            {ind > 0 && (
                              <button
                                onClick={() => remove(ind)}
                                className="mx-2"
                              >
                                Remove
                              </button>
                            )}

                            <button type="button" onClick={() => push("")}>
                              Add
                            </button>
                          </div>
                        ))}
                      </div>
                    );
                  }}
                </FieldArray>
              </div>

              <div className="flex items-center justify-center gap-10">
                {/* <button
                  type="button"
                  onClick={() => formik.validateField("comments")}
                >
                  Validate comments
                </button>
                <button
                  type="button"
                  onClick={() => formik.setFieldTouched("comments")}
                >
                  Visit comments
                </button>
                <button type="button" onClick={() => formik.validateForm()}>
                  Validate all
                </button>
                <button
                  type="button"
                  onClick={() =>
                    formik.setTouched({
                      name: true,
                      email: true,
                      channel: true,
                      comments: true,
                    })
                  }
                >
                  Visit all
                </button> */}

                <button type="submit"   disabled={!formik.isValid}> Submit</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default FormikForm;
