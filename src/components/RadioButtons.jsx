import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

function RadioButtons(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => (
           
              <div  key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value == option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            
          ));
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />

    </div>
  );
}

export default RadioButtons;
