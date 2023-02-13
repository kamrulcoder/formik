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

> ### Formik all Component List -

    - Formik
    - Form
    - Field
    - as="textarea' or component="any html element"

#### Field Revisited

```javascript
<Field name="address">
  {(props) => {
    console.log(props);
    return (
      <input
        type="text"
        className="block  w-full bg-gray-200 px-3 py-2"
        placeholder="address"
      />
    );
  }}
</Field>
```

```javascript
Object { field: {…}, form: {…}, meta: {…} }
​
field: Object { name: "address", value: "", onChange: useEventCallback()
, … }
​
form: Object { isSubmitting: false, isValidating: false, submitCount: 0, … }
​
meta: Object { value: "", touched: false, initialTouched: false, … }
```

### ErrorMessage Revisited

```javascript
<ErrorMessage name="name" component="div" />

 <ErrorMessage  name="email">
     {errMsg =>  <div  className="text-red-900"> {errMsg}</div>}
  </ErrorMessage>
  <ErrorMessage  name="name"  component={TextError}/>  // TextError Component
```

TextError.jsx

```javascript
import React from "react";

function TextError({ children }) {
  return <div className="text-red-900">{children}</div>;
}

export default TextError;
```

### Nested Objects

```javascript
  // intitial values declaire
  const initialValues =  {
    name: "",
    email: "",
    channel: "",
    comments:"",
    address:"",
    social:{
      fb:"",
      ln:""
    }
  }


    <div>
      <label htmlFor="">FaceBook  : </label>
        <Field
          className="w-full px-3 py-2  font-bold  bg-gray-300"
          name="social.fb"
          type="text"
          placeholder="social.fb" />
        {/* <ErrorMessage  name="social.ln"/> */}
      </div>
      <div>
        <label htmlFor="">Linkedin   : </label>
        <Field
          className="w-full px-3 py-2  font-bold  bg-gray-300"
          name="social.ln"
          type="text"
          placeholder="Linkedin" />
        {/* <ErrorMessage  name="social.ln"/> */}
      </div>

```

### - Arrays

```javascript
  const initialValues = {
    phoneNumber:['','']
  };

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

```

### FieldArray

```javascript
  const initialValues = {
    phNumbers:['']
  };


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
              <button onClick={() => remove(ind)} className="mx-2">
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
```




#### Diffrent Field and FirstField 
একটি ফর্ম এ  একাধিক ইনপুট  ফর্ম থাকে ।  যদি Field  ব্যবহার করা হয় তাহলে অন্য ইনপুট এ Event  ঘটলেও সকল ইনপুট এ   Render  হয় ।  যা Big Problem 
কিন্তু  FirsField  এ অন্য ইনপুট এ Event  ঘটলে তা  Render   হয় না । 