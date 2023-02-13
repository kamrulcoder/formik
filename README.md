## Formik React project Install

### Step:

setup react command line:

    npx create-react-app project-name

setup react command line:

    npm install formik --save
    npm install yup

Tailwind css install for React vite project

    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

#### Field Level Validation

```javascript
const onSubmit = (values, submitProps) => {
  console.log("Form data", values);
  console.log("submitProps", submitProps);
};

<Field
  as="textarea"
  // component="textarea"
  className="w-full px-3 py-2  font-bold  bg-gray-300"
  name="comments"
  type="text"
  placeholder="name"
  validate={validateComments}
/>;
```

#### Manually trigering validation

```javascript
<Formik
  initialValues={initialValues}
  validationSchema={validationSchema}
  onSubmit={onSubmit}
>
  {(formik) => {
    console.log(formik);

    return (
      <Form>
        <div className="flex items-center justify-center gap-10">
          <button
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
          </button>

        </div>
      </Form>
    );
  }}
</Formik>
```
